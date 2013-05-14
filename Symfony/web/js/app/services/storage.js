'use strict';

app.factory( 'storage', function($http) {
  var STORAGE_ID = 'storage-angularjs';

  return {
	get: function(callbacks) {
		$http({method: 'GET', url: 'http://localhost:1337/user/'})
		.success(callbacks.success())
		.error(callbacks.error())
	},

	put: function( users ) {
		localStorage.setItem(STORAGE_ID, JSON.stringify(users));
	}
  };
});
