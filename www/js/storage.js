angular.module('ionic.utils', [])

.factory('utilizedata', function (localStorageService) {
    return {
        //set local storage for that page.
        setarray: function (id) {

            if (localStorageService.isSupported) {

                var todoList = localStorageService.get('todos' + id);
                if (!todoList) {
                    this.arrayList = [];

                    //Set local storage
                    localStorageService.set("todos" + id, this.arrayList);

                } else {

                    this.arrayList = todoList;
                }

            } else {

                alert("Local Storage is not supported batter luck next time!");
            }

        },
        //get value from local storage
        getvalue: function (id) {
            this.arrayList = localStorageService.get('todos' + id);
            return this.arrayList;

        },
        //add value from text box to local storage
        addThingfactory: function (name, id) {
            var item = '{"title":"' + name + '","checked":false}';

            var obj = JSON.parse(item);
            this.arrayList.push(obj);

            //Set local storage
            localStorageService.set("todos" + id, this.arrayList);
            return this.arrayList;

        },
        //remove item from local storage
        remove: function (index, id) {
            this.arrayList.splice(index, 1);
            localStorageService.set("todos" + id, this.arrayList);
            return this.arrayList;

        },
        //set value for checkbox if it is changed
        checkboxctl: function (pushNotification, name, id) {


            var item1 = '{"title":"' + name + '", "checked":' + pushNotification + '}';

            var obj1 = JSON.parse(item1);
            this.arrayList.indexOf(obj1);
            localStorageService.set("todos" + id, this.arrayList);
            return this.arrayList;
        },
        //set setting local storage 
        setsettngarry: function () {
            if (localStorageService.isSupported) {

                var settingList = localStorageService.get('setting');
                if (!settingList) {


                    this.settingsList = [
                        {
                            "text": "Vibration",
                            "checked": false
                                              },
                        {
                            "text": "Local Notification",
                            "checked": false
                                              }
                                                ];


                    //Set local storage
                    localStorageService.set("setting", this.settingsList);

                } else {

                    this.settingsList = settingList;
                }

            } else {

                alert("Local Storage is not supported batter luck next time!");
            }

        },
        //get value for local storage 
        getsetvalue: function () {
            this.settingsList = localStorageService.get('setting');
            return this.settingsList;

        },
        //set the value for vibration and checkbox if changed
        settingctl: function (getval, getText) {

            var setitem1 = '{"text":"' + getText + '", "checked":' + getval + '}';

            var setobj1 = JSON.parse(setitem1);
            this.settingsList.indexOf(setobj1);


            localStorageService.set("setting", this.settingsList);
            return this.settingsList;

        }
    }
});