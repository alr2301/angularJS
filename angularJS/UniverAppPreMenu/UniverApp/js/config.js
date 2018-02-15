app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html'
		})
		.when('/profesores',{
			templateUrl: 'parciales/profesores.html'
		})
		.when('/alumnos',{
			templateUrl: 'parciales/alumnos.html',
			controller : 'alumnosCTRL'
		})
		.otherwise({
			redirectTo: '/'
		});


});