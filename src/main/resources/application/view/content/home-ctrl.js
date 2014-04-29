Neosavvy.Controllers.controller('view.content.HomeController',
    [
        '$scope',
        '$rootScope',
        'constants.Configuration',
        '$firebase',
        'service.FirebaseAuthenticationService',
        function (
            $scope,
            $rootScope,
            configuration,
            $firebase,
            firebaseAuthService) {

            $scope.createMode = false;
            $scope.emailAddress;
            $scope.password;

            $scope.login = function() {

                firebaseAuthService.login(
                    $scope.emailAddress,
                    $scope.password)

            }

            $scope.createUser = function() {

                firebaseAuthService.createUser(
                    $scope.emailAddress,
                    $scope.password)
            }


            $scope.forgotPassword = function() {
                firebaseAuthService.forgotPassword(
                    $scope.emailAddress
                )
            }
        }
    ]
);