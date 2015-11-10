angular.module('ionic.utils', [])

.factory('utilizedata', function (localStorageService) {
    return {
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
        getvalue: function (id) {
            this.arrayList = localStorageService.get('todos' + id);
            return this.arrayList;

        },
        addThingfactory: function (name, id) {
            var item = '{"title":"' + name + '","checked":false}';

            var obj = JSON.parse(item);
            this.arrayList.push(obj);

            //Set local storage
            localStorageService.set("todos" + id, this.arrayList);
            return this.arrayList;

        },
        remove: function (index, id) {
                this.arrayList.splice(index, 1);
                localStorageService.set("todos" + id, this.arrayList);

            }
            //        checkboxctrl: function (id) {
            //            //            console.log('Push Notification Change', $scope.pushNotification.checked);
            //            var item = '{"title":"' + this.name + '", "checked":' + this.pushNotification.checked + '}';
            //            var obj = JSON.parse(item);
            //            this.arrayList.indexOf(obj);
            //            localStorageService.set("todos" + id, this.arrayList);
            //
            //}

    }
});