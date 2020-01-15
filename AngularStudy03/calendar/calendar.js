var calendarCtrl = angular.module("calendarCtrl", []);

calendarCtrl.controller("calendarCtrl", function ($scope) {

    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    // 달력 그리기
    function fnCalendar() {

        // 년월 세팅
        date.setFullYear(year, month);
        date.setDate(1);

        var nowYear = date.getFullYear();
        var nowMonth = date.getMonth() + 1;
        var nowDay = date.getDate();

        // 이번달 마지막 날짜
        var lastDay = getLastday(nowYear, nowMonth);

        // 이번달 시작요일(0:일요일, 1:월요일, 2:화요일, 3:수요알, 4:목요일, 5:금요일, 6:토요일)
        // getDay는 숫자를 반환한다.
        var startDate = date.getDay();

        // 총 주 수 구하기
        var week = Math.ceil((startDay + lastDay) / 7);


    }

    // 마지막 날짜 구하기
    function getLastDay(nowYear, nowMonth) {
        if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11) {
            return 30;
        } else if (nowMonth ==2) {
            if(nowYear % 4 == 0 && nowYear % 100 != 0 && nowYear % 400 == 0) {
                // 윤년
                return 29;
            } else {
                return 28;
            }
        } else {
            return 31;
        }
    }

});