angular
    .module("phoneDirectoryApp")
        .component('phoneList', {
            templateUrl: "./phoneList/phonelist.template.html",
            controller: function phoneListController(){
                self = this;

                $http.get('./phoneList/phonelist.json').then(function(response) {
                    self.phoneList = response.data.List;
                });
            }
        })