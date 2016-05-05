var myApp = angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.products = [
            {name: "asf", category: "Fruit", price: 1.20, expiry: 10},
            {name: "Aasdsf", category: "Fruit", price: 2.20, expiry: 3},
            {name: "Sfaasf", category: "Fish", price: 11.20, expiry: 11},
            {name: "assdff", category: "Fish", price: 12.20, expiry: 12},
            {name: "asasdff", category: "Fish", price: 112313.20, expiry: 21},
            {name: "aasf", category: "Drinks", price: 1.90, expiry: 22},
            {name: "asasdaf", category: "Drinks", price: 22.20, expiry: 14}

        ];
        $scope.getExpiryDate = function (days) {
            var now = new Date();
            return now.setDate(now.getDate() + days);//setDate() 方法用于设置一个月的某一天。
        }
        $scope.limitVal=5;
        $scope.limitRange=[];
        for(var i=(0-$scope.products.length);i<=$scope.products.length;i++){
            $scope.limitRange.push(i);
        }

    });