// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'LocalStorageModule', 'ionic.utils', 'setting'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('Todolist-pate0357')
            //.setStorageType('sessionStorage')
            .setNotify(true, true)
    })

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.setting', {
            url: '/setting',
            views: {
                'menuContent': {
                    templateUrl: 'templates/search.html',
                    controller: 'SettingCtrl'

                }
            }
        })

    //    .state('app.browse', {
    //            url: '/browse',
    //            views: {
    //                'menuContent': {
    //                    templateUrl: 'templates/browse.html',
    //                    controller: 'List1Ctrl'
    //                }
    //            }
    //        })
    .state('app.playlists', {
        url: '/list/:listId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'

            }
        }
    });

    //    .state('app.single', {
    //        url: '/playlists/:playlistId',
    //        views: {
    //            'menuContent': {
    //                templateUrl: 'templates/playlist.html',
    //                controller: 'PlaylistCtrl'
    //            }
    //        }
    //    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/list/1');
});