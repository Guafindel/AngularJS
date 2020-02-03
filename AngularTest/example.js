var test = angular.module('example', []);

test.controller('TestCtrl', function ($scope) {

    $scope.checkIndex = function (data) {

        var count = 0;

        for (var i = 0; i < $scope.checkDate.length; i++) {
            if ($scope.checkDate[i].day == '20200120') {
                count++;
            }
        }

        return count;
    }

    $scope.changeForm = function (data) {

        var year = data.substring(0, 4);
        var month = data.substring(4, 6);
        var day = data.substring(6, 8);

        var getDate = year + '-' + month + '-' + day;

        console.log(getDate);

        return getDate;

    }

    $scope.checkDate = [{
            day: '20200120',
            time: '09:30'
        }, {
            day: '20200119',
            time: '10:30'
        }, {
            day: '20200120',
            time: '11:30'
        },
        {
            day: '20200109',
            time: '12:30'
        },
        {
            day: '20200125',
            time: '13:30'
        },
        {
            day: '20200120',
            time: '14:30'
        },
        {
            day: '20200120',
            time: '15:30'
        }
    ]

    $scope.changeForm = function (data) {

        var year = data.substring(0, 4);
        var month = data.substring(4, 6);
        var day = data.substring(6, 8);

        var getDate = year + '-' + month + '-' + day;

        console.log(changeType(data));


        return getDate;

    }

    $scope.checkFunction = function (data) {

        console.log(changeType(data));
    }

    function getLastDay(nowYear, nowMonth) {

        var lastDay = 0;

        if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 ||
            nowMonth == 11) {
            return lastDay = 30;
        } else if (nowMonth == 2) {
            if ((nowYear % 4 === 0 && nowYear % 100 !== 0) ||
                nowYear % 400 === 0) {
                // 윤년
                return lastDay = 29;
            } else {
                return lastDay = 28;
            }
        } else {
            return lastDay = 31;
        }
    }

    /**
     * 20200102 문자열을 년, 월, 일 로 나누고 number값으로 변환
     */
    function changeType(data) {

        var getYear = data.substring(0, 4);
        var getMonth = data.substring(4, 6);
        var getDay = data.substring(6, 8);

        var year = parseInt(getYear);
        var month = parseInt(getMonth);
        var day = parseInt(getDay);
        //year, month, day;

        return [year, month, day];
    }

    $scope.convertTime = function (data) {

        var getHour = data.substring(0, 2);
        var getMinute = data.substring(2, 4);

        var numHour = parseInt(getHour);

        if (numHour < 12) {
            var ampm = '오전';
        } else {
            var ampm = '오후';
        }

        if (numHour == 12) {
            var convertHour = numHour;
        } else {
            var convertHour = numHour % 12;
        }

        if (convertHour < 10) {
            convertHour = '0' + convertHour
        }

        var time = ampm + ' ' + convertHour + ' : ' + getMinute;

        console.log(time);

        return time;

    }

    $scope.changeForm = function (data) {

        var year = data.substring(0, 4);
        var month = data.substring(4, 6);
        var day = data.substring(6, 8);

        var getDate = year + '-' + month + '-' + day;

        console.log(getDate);
        return getDate;

    }

    $scope.restoreForm = function (data) {

        var strDate = data.split('-');

        var year = strDate[0];
        var month = strDate[1];
        var day = strDate[2];

        var result = year + month + day;

        console.log(result);
        return result;

    }

    $scope.restoreTime = function (data) {

        var strTime = data.split(' ');

        var getTime = strTime[1].split(':');

        var time;
        var hour;

        hour = parseInt(getTime[0]);

        if (strTime[0] == '오전') {
            if (hour < 10) {
                time = ('0' + getTime[0]) + getTime[1];
            } else {
                time = getTime[0] + getTime[1];
            }

        } else if (strTime[0] == '오후') {
            if ((hour + 12) == 24) {
                time = getTime[0] + getTime[1];
            } else {
                time = (parseInt(getTime[0]) + 12) + getTime[1];
            }
        }

        return time;

    }

});