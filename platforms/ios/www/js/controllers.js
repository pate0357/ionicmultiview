 angular.module('starter.controllers', [])

 .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

     // With the new view caching in Ionic, Controllers are only called
     // when they are recreated or on app start, instead of every page change.
     // To listen for when this page is active (for example, to refresh data),
     // listen for the $ionicView.enter event:
     //$scope.$on('$ionicView.enter', function(e) {
     //});

     // Form data for the login modal
     //     $scope.loginData = {};
     //
     //     // Create the login modal that we will use later
     //     $ionicModal.fromTemplateUrl('templates/login.html', {
     //         scope: $scope
     //     }).then(function (modal) {
     //         $scope.modal = modal;
     //     });
     //
     //     // Triggered in the login modal to close it
     //     $scope.closeLogin = function () {
     //         $scope.modal.hide();
     //     };
     //
     //     // Open the login modal
     //     $scope.login = function () {
     //         $scope.modal.show();
     //     };
     //
     //     // Perform the login action when the user submits the login form
     //     $scope.doLogin = function () {
     //         console.log('Doing login', $scope.loginData);
     //
     //         // Simulate a login delay. Remove this and replace with your login
     //         // code if using a login system
     //         $timeout(function () {
     //             $scope.closeLogin();
     //         }, 1000);
     //     };
 })





 .controller('PlaylistCtrl', function ($scope, $stateParams, localStorageService, utilizedata, appsetting) {

     var id = $stateParams.listId;
     if (id == 1) {
         $scope.listTitle = "List 1";
     } else if (id == 2) {
         $scope.listTitle = "List 2";
     } else if (id == 3) {
         $scope.listTitle = "List 3";
     }

     $scope.arrayList = utilizedata.getvalue(id);

     utilizedata.setarray(id);

     //$scope.arrayList = utilizedata.getItems(id);

     $scope.addThing = function (name) {
         $scope.arrayList = utilizedata.addThingfactory($scope.name, id);
         $scope.name = "";

     }
     $scope.remove = function (index) {
         utilizedata.remove(index, id);
     };

     $scope.pushNotificationChange = function () {
         console.log('Push Notification Change', $scope.pushNotification.checked);
         var item = '{"title":"' + this.name + '", "checked":' + this.pushNotification.checked + '}';
         var obj = JSON.parse(item);
         $scope.arrayList.indexOf(obj);
         localStorageService.set("todos" + id, $scope.arrayList);
         //         utilizedata.checkboxctrl(id);

         if (this.pushNotification.checked == true) {
             appsetting.vibrate();
         }


     };

     $scope.pushNotification = {
         checked: true,
     };



 })

 .controller('SettingCtrl', function ($scope, $stateParams) {

     $scope.settingsList = [
         {
             text: "Vibration",
             checked: true
         },
         {
             text: "Local Notification",
             checked: false
         }
           ];

     $scope.pushNotificationChange = function () {
         console.log('Push Notification Change', $scope.pushNotification.checked);
     };

     $scope.pushNotification = {
         checked: true
     };



 });