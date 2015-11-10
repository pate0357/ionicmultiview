angular.module('starter.setting', [])
    .factory('appsetting', function ($cordovaVibration, $cordovaLocalNotification) {


        return {

            vibrate: function () {


                navigator.vibrate(200);
                alert("Ve");
                return;


            },

            schedleNotification: function (listTitle) {

                alert("pu");
                var msg = 'Your ' + listTitle + ' list marked as completed.';

                $cordovaLocalNotification.schedule({
                    id: 1,
                    title: 'To Do',
                    text: msg,
                    data: {
                        customProperty: ''
                    }
                }).then(function (result) {
                    console.log(result);
                });
                return;
            }
        }
    });