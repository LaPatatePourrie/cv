'use strict';

app.controller('MainCtrl', function MainCtrl( $scope, $location, storage, filterFilter ) {
	var users = $scope.users = storage.get({
		success: function (users) {
			console.log(users);
		},
		error: function () {alert('ERROR')}
	});
});
