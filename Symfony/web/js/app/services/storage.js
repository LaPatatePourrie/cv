'use strict';

app.factory( 'storage', function($http) {
	return {
		get: function(query, callback) {
			switch (query) {

				case 'users':
					callback([
						{name:'Alexis'}, 
						{name:'Jean'}
					]);
				break;
				
			}
		}
	};
});
