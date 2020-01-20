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

    $scope.timeFormatter = function(time) {

        var ampm = new Date(time).toLocaleTimeString('en-US', {
            hour : 'numeric',
            hour12 : true,
            minute : 'numeric'
        });
        console.log(ampm);

        return ampm;
     
    }

    $scope.getTime = function(time) {
        var getDate = new Date(time);

        console.log(getDate);
        return getDate;

    }

    $scope.cutStringDate = function(time) {
        var getDate = time.substring(0, 10);
        console.log(getDate);
        console.log(typeof getDate);
        return getDate;
    }

   $scope.checkYear = function() {
       var nowDate;
       var nowDate2;

       nowDate = date.getFullYear;
       nowDate2 = date.getMonth;
       console.log(nowDate);
       console.log(nowDate2);
   }

    
});