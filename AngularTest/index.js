var test = angular.module('test', []);

test.controller('TestCtrl', function ($scope) {

    var date = new Date();

    $scope.text = 'Hello, Angular fanatic';

    var nowDate = '2020-01-02';

    var presentYear = date.getFullYear();
    var presentMonth = date.getMonth() + 1;

    if (presentMonth < 10) {
        presentMonth = '0' + presentMonth;
    }

    var YearMonth = presentYear.toString() + presentMonth;

    function parse(str) {
        var y = str.substr(0, 4);
        var m = str.substr(4, 2);

        return new Date(y, m);
    }

    var presentDate = new Date();

    console.log(typeof presentDate);

    var wonDate = new Date(date.getFullYear(), (date.getMonth() + 1));


    console.log('wonDate = ' + wonDate);

    console.log(typeof YearMonth);
    console.log(YearMonth);

    parse(YearMonth);

    console.log(typeof YearMonth);
    console.log(YearMonth);


    // console.log(presentYear);
    // console.log(presentMonth);
    // console.log(typeof YearMonth);
    // console.log(YearMonth);

    $scope.dateList = [{
        type: 'Aticle',
        day: '2020-01-02',
        time: date.setHours(09, 30)
    }];

    $scope.timeFormatter = function (time) {

        var ampm = new Date(time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric'
        });
        console.log(ampm);

        return ampm;

    }

    $scope.convertTime = function (data) {

        var time = data;
        var getTime = data.substring(0, 2);
        var intTime = parseInt(getTime);

        if (intTime < 12) {
            return console.log('pack blue-ty1');
        } else {
            return console.log('pack red-ty1');
        }
    }

    $scope.convertVistDt = function (date) {

        var param01 = date.substring(0, 4);
        var param02 = date.substring(4, 6);
        var param03 = date.substring(6, 8);

        var getWord = param01 + '-' + param02 + '-' + param03;

        console.log(getWord);

        return getWord;
    }

    $scope.getTime = function (time) {
        var getDate = new Date(time);

        console.log(getDate);
        return getDate;

    }

    $scope.cutStringDate = function (time) {
        var getDate = time.substring(0, 10);
        console.log(getDate);
        console.log(typeof getDate);
        return getDate;
    }

    $scope.checkYear = function () {
        var nowDate;
        var nowDate2;

        nowDate = date.getFullYear;
        nowDate2 = date.getMonth;
        console.log(nowDate);
        console.log(nowDate2);
    }

    $scope.purposes = [{
        name: '선택'
    }, {
        name: '단순 방문'
    }, {
        name: '특별 방문'
    }, {
        name: '영업 방문'
    }, {
        name: '기술 방문'
    }]

    $scope.roomColor = function (num) {
        if (num >= 0) {
            return 'txt-color1';
        } else if (num < 0) {
            return 'txt--color2';
        }
    }



});