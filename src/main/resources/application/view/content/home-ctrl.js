Neosavvy.Controllers.controller('view.content.HomeController',
    [
        '$scope',
        '$rootScope',
        'constants.Configuration',
        '$firebase',
        function (
            $scope,
            $rootScope,
            configuration,
            $firebase) {

            var gear = new Firebase("https://hiker.firebaseio.com/gear");
            $scope.gear = $firebase(gear);

            $scope.newItem = {}

            $scope.addGear = function() {

                $scope.gear.$add($scope.newItem);
                $scope.newItem = {}

            }

        }
    ]
);