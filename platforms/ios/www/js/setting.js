angular.module('setting', [])
    .factory('appsetting', function () {

        //    $cordovaVibration
        //    , $cordovaLocalNotification
        return {
            vibrate: function ($cordovaVibration, $cordovaLocalNotification) {

                navigator.vibrate(200);
                alert("This device is in vibration mode");
                return;
            }
            schedleNotification: function (listTitle) {

                var msg = 'Your ' + listTitle + ' marked as completed.';
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