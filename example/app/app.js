/**
 * Created by sung.chiu on 8/6/14.
 */
'use strict';
angular.module('myApp', ['ngResource'])
  .controller('spheroCtrl', function($scope, $resource){

    var carRequest = $resource('/rccar/rccar1/:action', {action: '@action'}),
        spheroRequest = $resource('/sphero/sphero1/:action', {action: '@action'}),
        piRequest = $resource('/pi/pi1/:action', {action: '@action'}),
        stopTwink = true,
        objDiv = document.getElementById("messageBox");

    $scope.connect = 'CONNECT';
    $scope.message = [];

    $scope.connectBtn = function(){
      // Open the connection to the rccar
      carRequest.get({action:'open'}, function(msg){
        $scope.message.push(msg.message);
        objDiv.scrollTop = objDiv.scrollHeight;
      });

      // Open the connection to the sphero
      spheroRequest.get({action:'connect'}, function(msg){
        $scope.message.push(msg.message);
        objDiv.scrollTop = objDiv.scrollHeight;
      });
    };
    $scope.send = function(action){
      var promise = carRequest.get({action:action}, function(msg){
        // log the message
        $scope.message.push(msg.message);
        objDiv.scrollTop = objDiv.scrollHeight;

        // get the readings from the distance sensor on the pi
        piRequest.get({action:'rangeSensor'}, function(res) {
          $scope.distance = res.data.distanceInches;

          if (res.data.distanceInches < 6.0) {
            $scope.makeTwink();
          }
        });
      });
    };
    $scope.power = function(){
      carRequest.get({action:'power', power: 255}, function(msg){
        $scope.message.push(msg.message);
        objDiv.scrollTop = objDiv.scrollHeight;
      });
    };
    $scope.makeTwink = function(){
      var round = 0;

      if( !stopTwink ){
        return;
      }

      twink({r: 255, g:255, b:255});

      var twinkling = function() {
        if( stopTwink ){
          return;
        }

        setTimeout(function () {
          if (round == 0) {
            twink({r: 255, g:0, b:0}, twinkling);
            round = 1;
          } else {
            twink({r: 255, g:255, b:255}, twinkling);
            round = 0;
          }
        }, 300);
      };

      setTimeout(function(){
        stopTwink = true;
      }, 3000);

      stopTwink = false;
      twinkling();
    };
    function twink( color, callback ){
      spheroRequest.get({action:'color', r:color.r, g:color.g, b:color.b}, function(msg){
        $scope.message.push(msg.message);
        objDiv.scrollTop = objDiv.scrollHeight;
        if( callback ){
          callback();
        }
      });
    }

  });
