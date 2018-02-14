(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Alfredo Lopez","Elisa Merida","Juan carlos pineda","RAul cimas"];

		$scope.listadoProfesores ={
			profesores: [{
				nombre: "Fernando Herrera",
				edad:21,
				clase: "PEE"

			},{
				nombre: "Almudena Pesante",
				edad:32,
				clase: "POO"
			},{
				nombre: "Alvaro Guerrero",
				edad:29,
				clase: "BBDD"
			}]}

}]);





})();
