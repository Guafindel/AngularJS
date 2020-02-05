var test = angular.module('example', []);

test.controller('TestCtrl', function ($scope) {

    var date = new Date();

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
        console.log(strTime)

        var time;
        var hour;

        hour = parseInt(strTime[1]);

        if (strTime[0] == '오전') {
            if (hour < 10) {
                time = ('0' + strTime[1]) + strTime[3];
            } else {
                time = strTime[1] + strTime[3];
            }

        } else if (strTime[0] == '오후') {
            if ((hour + 12) == 24) {
                time = strTime[1] + strTime[3];
            } else {
                time = (parseInt(strTime[1]) + 12) + strTime[3];
            }
        }

        console.log(time);

        return time;

    }

    function convertCheck(data) {

        var hour = data.substring(0, 2); 
        var minute = data.substring(2,4);

        var result = new Date(0, 0, 0, hour, minute, 0);

        return result
    }

    $scope.getTime = convertCheck('1130');

    $scope.restoreTime = getRestoreTime($scope.getTime);

    $scope.strTime = $scope.getTime.toString();

    function getRestoreTime(data) {

        var convertString = data.toString();

        return convertString.substring(16, 18) + convertString.substring(19, 21);

    }

    /**
	 * 오전, 오후 체크하고 12H 시간 형식으로 변환
	 */
	/*function convertTime(originTime) {
		
		var getHour = originTime.substring(0, 2);
		var getMinute = originTime.substring(2, 4);
		
		var numHour = parseInt(getHour);
		
		if(numHour < 12) {
			var ampm = '오전';
		} else {
			var ampm = '오후';
		}
		
		if(numHour == 12) {
			var convertHour = numHour;
		} else {
			var convertHour = numHour%12;
		}
		
		var time = ampm + ' ' +convertHour + ' : ' + getMinute;
		
		return time;
		
	} */
	
	/**
	 * 형식 바뀐 시간을 원래 형태로 변환
	 */
	/*function restoreTime(originTime) {

        var strTime = originTime.split(' ');

        var time;
        var hour;

        hour = parseInt(strTime[1]);

        if (strTime[0] == '오전') {
            if (hour < 10) {
                time = ('0' + strTime[1]) + strTime[3];
            } else {
                time = strTime[1] + strTime[3];
            }

        } else if (strTime[0] == '오후') {
            if ((hour + 12) == 24) {
                time = strTime[1] + strTime[3];
            } else {
                time = (parseInt(strTime[1]) + 12) + strTime[3];
            }
        }

        return time;

    };*/
});