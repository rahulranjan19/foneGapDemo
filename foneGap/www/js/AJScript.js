// Angular JS script file

var app = angular.module('myApp',[]);

app.factory('Data', ['$window', function($window) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       $window.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);

app.controller("appController",['$scope','Data',function($scope,Data){
	$scope.name = 'Rahul';
	$scope.clickButton = function(){
		Data($scope.name);
	}
	$scope.reversedMessage = function() {
    return $scope.data.split("").reverse().join("");
  };
}]);

app.controller('appContrl',['$scope','Data',function($scope,Data){
	$scope.name = 'Ranjan';
	$scope.clickButton = function(){
		Data($scope.name);
	}
}]);