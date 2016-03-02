angular.module('starter.setting', [])
    .factory('appsetting', function ($cordovaVibration, $cordovaLocalNotification) {

        //use plugins for vibrate phone once work is done. 
        return {

            vibrate: function () {
                navigator.vibrate(200);
                return;


            },
            //use the notification plugin one whole list is complete.            

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