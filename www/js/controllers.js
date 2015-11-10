 angular.module('starter.controllers', ['ionic'])


 .controller('PlaylistCtrl', function ($scope, $stateParams, localStorageService, utilizedata, appsetting) {

     //check page with its id to give title.
     var id = $stateParams.listId;
     if (id == 1) {
         $scope.listTitle = "Work";
     } else if (id == 2) {
         $scope.listTitle = "Personal";
     } else if (id == 3) {
         $scope.listTitle = "Shopping";
     }

     //get and set local storage  for that page.
     $scope.arrayList = utilizedata.getvalue(id);
     utilizedata.setarray(id);

     //move item when reoder is enable.
     $scope.moveItem = function (todo, fromIndex, toIndex) {

         $scope.arrayList.splice(fromIndex, 1);
         $scope.arrayList.splice(toIndex, 0, todo);
     };

     //add item in local storage for that page 
     $scope.addThing = function (name) {

         $scope.arrayList = utilizedata.addThingfactory($scope.name, id);
         $scope.name = "";

     }

     $scope.data = {
         showDelete: false
     };
     //delete item from local storage.
     $scope.onItemDelete = function (index) {
         $scope.arrayList = utilizedata.remove(index, id);
     };


     //when checkbox is clicked.
     $scope.pushNotificationChange = function () {



         $scope.arrayList = utilizedata.checkboxctl($scope.pushNotification.checked, $scope.name, id);

         //get the local storage array for settinf
         var selist = [];
         selist = localStorageService.get('setting');

         for (var i = 0; i < selist.length; i++) {
             if (selist[i].text == "Vibration" && selist[i].checked == true) {

                 if ($scope.pushNotification.checked == true) {

                     appsetting.vibrate();
                 }

             } else if (selist[i].text == "Local Notification" && selist[i].checked == true) {
                 var isAllDone = true;
                 for (var i = 0; i < $scope.arrayList.length; i++) {

                     if ($scope.arrayList[i].checked == false) {

                         isAllDone = false;
                         break;

                     }
                 }

                 if (isAllDone) {

                     console.log("items done");
                     appsetting.schedleNotification($scope.listTitle);
                 }



             }
         }



     };



     $scope.pushNotification = {
         checked: true,
     };



 })

 .controller('SettingCtrl', function ($scope, $stateParams, appsetting, utilizedata) {

     //get and set local storage for setting
     utilizedata.setsettngarry();
     $scope.settingsList = utilizedata.getsetvalue();



     //when value of toggle is changed
     $scope.setNotificationChange = function (getval, gettext) {
         $scope.settingsList = utilizedata.settingctl(getval, gettext);


     };





 });