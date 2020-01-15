var test = angular.module('test', []);

test.controller('TestCtrl', function ($scope) {

    var date = new Date();

    $scope.text = 'Hello, Angular fanatic';

    var nowDate = '2020-01-02';

    $scope.dateList = [{
        type: 'Aticle',
        day: '2020-01-02',
        time: date.setHours(09, 30)
    }];
});