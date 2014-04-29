Neosavvy.Services.factory('service.FirebaseAuthenticationService',
    [
        function () {

            var firebase = new Firebase('https://hiker.firebaseio.com');
            var auth = new FirebaseSimpleLogin(firebase, function(error, user) {
                if (error) {
                    // an error occurred while attempting login
                    console.log(error);
                } else if (user) {
                    // user authenticated with Firebase
                    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
                } else {
                    // user is logged out
                }
            });

            return {
                login: function ( email, pass, rememberMe ) {
                    auth.login('password', {
                        email: email,
                        password: pass,
                        rememberMe: rememberMe
                    });
                },

                createUser : function( email, pass ) {

                    auth.createUser(email, pass, function( error , user ) {
                        if(!error) {
                            console.log('User Id: ' + user.uid + ', Email: ' + user.email);
                        }
                    })

                },

                forgotPassword : function( email ) {

                    auth.sendPasswordResetEmail(email, function(error, success){
                        if(success) {
                            console.log('Email: ' + email + 'has been emailed');
                        }
                    })

                }
            };
        }
    ]
);