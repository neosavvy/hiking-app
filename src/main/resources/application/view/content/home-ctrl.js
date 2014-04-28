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
            // Automatically syncs everywhere in realtime
            $scope.gear = $firebase(gear);

            $scope.addGear = function() {

                $scope.gear.$add({
                    name: "Pack",
                    weight: "100grams",
                    description: "Really awesome pack",
                    purchaseLink: "http://rei.com/blah",
                    imageUrl: "http://placehold.it/"
                });

            }

        }
    ]
);