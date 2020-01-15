//캘린더 컨트롤러
commonCtrl.controller("CalendarCtrl", function($scope, $compile, $parse, $element, $sce, close, dateVal) {
	var date = new Date();
	$log.trace("calendarCtrl : " + dateVal);
    if(dateVal == undefined || dateVal == ""){
        dateVal = $date.getNowDate("-");
    }
	var tempDate = dateVal.split("-");
	var year = parseInt(tempDate[0]);
	var month = parseInt(tempDate[1]) - 1;

	//파라미터 날짜 저장용
	var today_year = year;
	var today_month = month;
	var today_date = parseInt(tempDate[2]);

	$(document).on("change", "#date", function() {
		var pickerDate = $(this).val().split("-")// yyyy-MM

		if (pickerDate == "") {
			date = new Date();
			year = date.getFullYear();
			month = date.getMonth();
			var day = date.getDate();
			fnCalendar("");
			$("#" + day).trigger("click");
		} else {
			year = pickerDate[0];
			month = parseInt(pickerDate[1]) - 1;
			fnCalendar("");
			$("#1").trigger("click");
		}
	});
	fnCalendar("");// 처음 화면 들어왔을때 달력 뿌려주기

	$scope.fnCalendarWrite = function(codeVal) {
		fnCalendar(codeVal);
	}

	// 달력 그리기
	function fnCalendar(codeVal) {
		if (codeVal == "yearM") {
			year--;
		} else if (codeVal == "yearP") {
			year++;
		} else if (codeVal == "monthM") {
			month--;
		} else if (codeVal == "monthP") {
			month++;
		}

		// 년월 셋팅
		date.setFullYear(year, month);
		date.setDate(1);

		var nowYear = date.getFullYear();
		var nowMonth = date.getMonth() + 1;
		var nowDay = date.getDate();

		// 이번달 마지막 날짜
		var lastDay = getLastDay(nowYear, nowMonth);

		// 이번달 시작요일(0:일요일,1:월요일,2:화요일,3:수요일,4:목요일,5:금요일,6:토요일)
		var startDay = date.getDay();

		// 총 주수 구하기
		var week = Math.ceil((startDay + lastDay) / 7);

		// 1~9월 앞에 0붙여주기
		if (nowMonth < 10) {
			nowMonth = '0' + nowMonth;
		}


		$scope.date = {
			year : nowYear,
			month : nowMonth
		}

		var calendar = '';

		var dateNum = 1 - startDay;

		for (var i = 0; i < week; i++) {
			calendar += '<tr>';
			for (var j = 0; j < 7; j++, dateNum++) {
				if (dateNum < 1 || dateNum > lastDay) {
					calendar += '<td>';
					continue;
				}

				var className = "";

				//오늘 날짜 표시
                if(year == today_year && today_month == month && dateNum == today_date){
                    className = "active ";
                }

				if (j == 0) {
					// 일요일
					className += "sun";
				} else if (j == 6) {
					// 토요일
					className += "sat";
				}

				if(className != ""){
				    calendar += "<td class='" + className + "'>";
				} else {
					calendar += "<td>";
				}
				calendar += "<a href='javascript:void(0);' id='" + dateNum + "' ";
				calendar += "ng-click='fnSelectDate(" + nowYear + "," + nowMonth + "," + dateNum + ");'>";
				calendar += dateNum + '</a></td>';
			}
			calendar += '</tr>';
		}

		$sce.trustAsHtml(calendar)

		$scope.calendarHtml = {
			calendar : calendar
		}

	}

	// 해당 달의 마지막 날짜 구하긴
	function getLastDay(nowYear, nowMonth) {
		if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11) {
			return 30;
		} else if (nowMonth == 2) {
			if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) {
				// 윤년
				return 29;
			} else {
				return 28;
			}
		} else {
			return 31;
		}
	}

	var sYear = '';
	var sMonth = '';
	var sDay = '';

	// 달력에서 날짜 선택
	$scope.fnSelectDate = function(nowYear, nowMonth, nowDate) {

		nowMonth = nowMonth > 9 ? nowMonth : '0' + nowMonth;
		nowDate = nowDate > 9 ? nowDate : '0' + nowDate;

		sYear = nowYear
		sMonth = nowMonth;
		sDay = nowDate;

    /*var selectDay = nowYear + nowMonth + nowDate;

    if(selectDay > $date.getNowDate("")){
      alert("기간은 현재날짜를 넘어갈 수 없습니다.");
      return false;
    }*/

		var nowDay = nowYear + '-' + nowMonth + '-' + nowDate
		$scope.selectDay = {
			nowDay : nowDay
		}

		//$('.modal').remove();
		//$('body').removeClass('modal-open');
		//$('.modal-backdrop').remove();
        $log.trace("Calendar Return Value : " + nowDay);

		close(nowDay,200);
	}

	$scope.close = function(){
	    close();
	}

}).directive('compile', ['$compile', function($compile) {
	return function(scope, element, attrs) {
		scope.$watch(function(scope) {
			// watch the 'compile' expression for changes
			return scope.$eval(attrs.compile);
		}, function(value) {
			// when the 'compile' expression changes
			// assign it into the current DOM
			element.html(value);

			// compile the new DOM and link it to the current
			// scope.
			// NOTE: we only compile .childNodes so that
			// we don't get into infinite loop compiling ourselves
			$compile(element.contents())(scope);
		});
	};
}]);