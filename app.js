(function () {
'use strict';

angular.module('lunchApp', [])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope) {
 

 $scope.lunch="";
 $scope.msg="I did not eat";
 $scope.msg2="";

  $scope.invalid= function(){

	document.getElementById("MyButton").style.borderColor="yellow";

 };

 $scope.good= function(){

	document.getElementById("MyButton").style.borderColor="green";

 };

  $scope.much= function(){
 	
	document.getElementById("MyButton").style.borderColor="red";

 };

 $scope.display=function(x){

 	if (x==""){
 		$scope.msg="Please insert valid comma separated list!";
 		$scope.invalid();
 	}else if(0<x && x<4){
 		$scope.msg="Enjoy!";
 		$scope.good();
 	}
 	else{
 		$scope.msg="Maybe a bit too much!";
 		$scope.much();
 	}



 };



 $scope.calc=function(){

 	
	 var x;
	if ($scope.lunch==""){
		x=0;
		
	}
	else{
			x=$scope.lunch.split(",");
			x=x.filter(function(x){

		  		return x !== "";

		 	})
	}
	if (x==""){
		return x;
	}
	else{
		return x.length;
	}

};

$scope.eat=function(){


  	$scope.display($scope.calc());

 };
	

  


};
})();
