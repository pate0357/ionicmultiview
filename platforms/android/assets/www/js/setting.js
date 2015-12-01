angular.module('starter.setting', [])
    .factory('appsetting', function ($cordovaVibration, $cordovaLocalNotification) {


        return {

            vibrate: function () {


                navigator.vibrate(200);
                return;


            },

            schedleNotification: function (listTitle) {

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