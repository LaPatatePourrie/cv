var storage = {
	menus: {
		order: ['accueil', 'cv'],
		all: {
			accueil: {
				title: 'Accueil'
			},
			cv: {
				title: 'CV'
			}
		}
	}
}
var partialsPath = '../../js/app/partials';

var app = angular.module('app', ['ngResource'])
	.config(['$routeProvider', function($routeProvider) {
		var menus = storage.menus;
		for (var i=0; i<menus.order.length; i++ ) {
			$routeProvider.when('/'+menus.order[i], {templateUrl: partialsPath+'/page-'+menus.order[i]+'.html'})
		}
		$routeProvider.otherwise({templateUrl: partialsPath+'/page-accueil.html'});
	}]);

