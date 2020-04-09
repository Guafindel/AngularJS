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

    $scope.divDate = function(data) {

        var year = data.substring(0, 4);
        var month = data.substring(4, 2);

        var result = [year, month];
        console.log(result);

        console.log(result[0]);
        console.log(result[1]);

        return [year, month];
    }

    $scope.setDate = date.setFullYear(2019, 09);
    $scope.setDate2 = date.setFullYear(2019, 09);

    $scope.check1 = date.setFullYear(2020, 02);
    $scope.check2 = date.setFullYear(2020, 2);


    $scope.getYear = function(data) {
        return parseInt(data.substring(0,4))
    }

    $scope.getMonth = function(data) {
        return parseInt(data.substring(4,6))
    }

    $scope.checkStyle = {
        isOpen : false
    }

    $scope.changeOpen = function() {
        if($scope.checkStyle.isOpen == true) {
            $scope.checkStyle.isOpen = false;
        } else {
            $scope.checkStyle.isOpen = true;
        }
    }

    $scope.checkNum = function(data) {
        var strNum = data.substring(0,4);
        var getNum = parseInt(strNum);

        console.log(typeof getNum);
        return getNum
    }

    function removeHyphen(data) {
		
		var num = 0;
		
		num = data.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");

		return num
    } 
    
    $scope.removeHyphen = function(data) {

        data = data.replace(/\-/g,''); //특정문자 제거

        return data;
    }

    $scope.compareDate = function(data1, data2) {

        if(data1 < data2) {
            return '<'
        } else if(data1 > data2) {
            return '>'
        } else if(data1 == data2) {
            return '='
        }
    }

    $scope.fn_reset = function() {
        console.log($scope.checkDate);

        $scope.checkDate = "";
        
        console.log($scope.checkDate);

        console.log($scope.checkDate);
    }

    $scope.fn_splitGbn = function(data) {

        var cd01 = "";
        var cd02 = "";
        var cd03 = "";
        var cd04 = "";
        var getCode = data.split('^');
        var checkNum = getCode.length;

        cd01 = getCode[0];
        if(checkNum > 3) {
            cd02 = getCode[1];
            cd03 = getCode[2];
            cd04 = getCode[3];
            console.log(cd01, cd02, cd03, cd04);
        } else if(checkNum >2) {
            cd02 = getCode[1];
            cd03 = getCode[2];
            console.log(cd01, cd02, cd03);
        } else if(checkNum > 1) {
            cd02 = getCode[1];
            console.log(cd01, cd02);
        } else {
            console.log(cd01);
        }
        
    }

    $scope.checkSpace = function(str) {
        if(str.search(/\s/) != -1 || str == "") {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }

    function checkSpace2(str) {
        if(str.search(/\s/) != -1 || str == "") {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }

    $scope.fn_saveData = function() {
		
		if(confirm("저장 하시겠습니까?")) {
			
			if(checkSpace2('hdf ')) {
				
				alert("표준업무를 입력 해주세요");
            
                return;
			} else {
                alert("통과");
            }
			if(checkSpace2('')) {
				
				alert("협력업체를 입력 해주세요");
                
                return false;
			} else {
                alert("");
            }
			if(checkSpace2('jong')) {
				
                alert("장소를 등록 해주세요");
                
                return false;
			}else {
                alert("통과");
            }
			
			
			alert("성공해서 넘어왔습니다.");
        } else {
            alert("완전넘어갔습니다.");
            return false;
        }
    };
    $scope.makeParams = [];
    
    $scope.fn_makeRadio = function(str) {
        var radioName = str.split('^');
        //console.log(radioName);
        for(var i = 0; i < radioName.length; i++)  {
            radioName[i] = radioName[i].split(',');
           //console.log(radioName[i].length);
            radioName[i].CD = radioName[i][0];
            radioName[i].CD_NM = radioName[i][1];
            radioName[i].shift(0);
            radioName[i].shift(1);
         
        }
        for(var i = 0; i < radioName.length; i++) {
            $scope.makeParams.push(radioName[i]);
        }
        
        
        console.log($scope.makeParams);
       return $scope.makeParams;
    }

    //$scope.fn_makeRadio('OK,양호^NG,불량^NA,해당없음');


    /**
* 문자 Split , ^
*/
function ufn_Opt(text){
	var list = [];
	
	if(text != undefined && text != ''){
        var temp1 = text.split(",");
        for(var i = 0 ; i < temp1.length ; i++){
            var temp2 = temp1[i].split("^");
            list.push({"KEY" : temp2[0], "VALUE" : temp2[1]});
        }
    }
	
	return list;
}

$scope.makeParams = ufn_Opt('OK^양호,NG^불량,NA^해당없음');

console.log(ufn_Opt('OK^양호,NG^불량,NA^해당없음'));

const ufn_Date = {
    addZero : function(i) {
        if(i < 10) {
            i = "0" + i;
        }
        return i;
    },
    getDecember : function(i) {
        if(i == "00") {
            i = "12"
        }
        return i;
    },
    getNowYearMonth : function() {
        const now = new Date();
        const yyyy = this.addZero(now.getFullYear());
        const mm = this.addZero(now.getMonth() + 1);
        return yyyy + mm;
    },
    getNowYear : function() {
        const now = new Date();
        const yyyy = this.addZero(now.getFullYear());
        return yyyy+"";
    },
    getNowMonth : function() {
        const now = new Date();
        const mm = this.addZero(now.getMonth() + 1);
        return mm+"";
    }, 
    getOneMonthAgo : function(){
        return String(new Date().getMonth())[1]?String(new Date().getMonth()):'0'+String(new Date().getMonth());
    }, 
    getOneMonthLater : function(){
        return String(new Date().getMonth() + 2)[1]?String(new Date().getMonth() + 2):'0'+String(new Date().getMonth() + 2);
    },
    getNextYearMonth : function(separator){
        if(separator == undefined) separator = "";
        var nextDate = new Date(new Date().setMonth(new Date().getMonth()+1));
        var yyyy = this.addZero(nextDate.getFullYear());
        var mm = this.addZero(nextDate.getMonth() + 1);
        return yyyy + separator + mm + separator;
    },
    getAgoYearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth()));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    },
    getAgo01YearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth() - 1));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    },
    getAgo02YearMonth : function(separator) {
        if(separator == undefined) separator = "";
        const nextDate = new Date(new Date().setMonth(new Date().getMonth() - 2));
        let yyyy = this.addZero(nextDate.getFullYear());
        let mm = this.addZero(nextDate.getMonth());
        mm = this.getDecember(mm);
        if(mm == "12") {
            yyyy--;
        }
        return yyyy + separator + mm + separator;
    }
};

function getAgoYearMonth(separator, index) {
    if(separator == undefined) separator = "";
    if(index == undefined) index = 0;
    const nextDate = new Date(new Date().setMonth(new Date().getMonth() - index));
    let yyyy = ufn_Date.addZero(nextDate.getFullYear());
    let mm = ufn_Date.addZero(nextDate.getMonth());
    mm = ufn_Date.getDecember(mm);
    if(mm == "12") {
        yyyy--;
    }
    return yyyy + separator + mm + separator;
}

function getKey(strNum) {
    const a = strNum.substring(0, 4);
    const b = strNum.substring(4, 6);

    return a + '년' + b + '월';
}

$scope.yearMonth = [
    {
        KEY : getKey(ufn_Date.getNowYearMonth()),
        VAL : ufn_Date.getNowYearMonth()
    },
    {
        KEY : getKey(getAgoYearMonth()),
        VAL : getAgoYearMonth()
    },
    {
        KEY : getKey(getAgoYearMonth("", 1)),
        VAL : getAgoYearMonth("", 1)
    },
    {
        KEY : getKey(getAgoYearMonth("", 2)),
        VAL : getAgoYearMonth("", 2)
    },
    {
        KEY : getKey(getAgoYearMonth("", 3)),
        VAL : getAgoYearMonth("", 3)
    }
];

console.log($scope.yearMonth[0]);


});