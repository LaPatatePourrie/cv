app.controller('MainCtrl', function MainCtrl( $scope, $location, storage, filterFilter ) {
	var users = $scope.users = storage.get('users', function (users) {
		console.log(users);
	});
});
