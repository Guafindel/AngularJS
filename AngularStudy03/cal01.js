/**
 * Created by JinHwann Byeon on 2017-05-19.
 * 
 * fnCallMonthDate(); 오늘날짜 그리는 함수
 * fnCallMonthDate(MAIN_YYYY, MAIN_MM - 1, 0); 한달전
 * fnCallMonthDate(MAIN_YYYY, MAIN_MM, 1); 한달후
 */
var CM_YYYY = $date.getNowDate().slice(0, 4);
var CM_MM = $date.getNowDate().slice(4, 6);

/**
 * 이전, 현재, 이후등 달력 요청 함수
 * @param YYYY
 * @param MM
 * @param terms
 * @returns {*}
 */
function fnCallMonthDate(_scope, YYYY, MM, terms) {
    var DateObject = new Date(YYYY, MM, terms);
    _scope.MAIN_YYYY = Number(DateObject.getFullYear());
    _scope.MAIN_MM = Number(DateObject.getMonth()) + 1;
    CM_YYYY = _scope.MAIN_YYYY;
    CM_MM = _scope.MAIN_MM

    return makeDiary(DateObject.getFullYear(), DateObject.getMonth(), DateObject.getDate());
}

/**
 * 달력을 그려주는 함수
 * @param yyyy
 * @param mm
 * @param dd
 * @returns {Array}
 */
function makeDiary(yyyy, mm, dd) {
    var mainDate = new Date(yyyy, mm + 1, 0)
    var beforeDate = new Date(yyyy, mm, 0); //이객체는 클릭한 달의 이전달의 마지막 요일을 가져옴  | beforeDate.getDay() //4
    var lastDay = mainDate.getDate(); //현재 달의 마지막 날 예)31
    var isPass = false;

    //달력을 그릴 때 사용할 값
    var tempCalObj = {
        beforeD: beforeDate.getDay() + 1
        //,afterD:afterDate.getDay()
    };

    var mainDay = 1; // mainDay
    var calArray = [];
    var subArray = new Array();

    for (var v = 1; v <= 42; v++) { //총 42칸을 그린다. (7*6)
        var obj = {};
        var subObj = {};

        obj.main = '';
        obj.subArray = {};

        //저번달의 마지막요일을 가져와서 그 요일 만큼은 빈칸으로 달력을 채운다.
        if (tempCalObj.beforeD < 7 && v <= tempCalObj.beforeD) {
            subObj.day = ''
            //obj.array
            //저번달의 마지막요일보다 크면 달력을 그리기 시작
        } else if (v > tempCalObj.beforeD) {
            //이번달 마지막 요일보다 작거나 같을때 까지만 달력을 채운다.
            if (mainDay <= lastDay) {
                subObj.day = String(mainDay);
                subObj.YYYYMMDD = String(yyyy) + String($date.addZero(mm + 1)) + String($date.addZero(mainDay));
                mainDay++
            }
        }

        subArray.push(subObj); //이번달 일자 표시

        //주별로 그리도록 한다.
        if (v % 7 == 0) {
            obj.subArray = subArray;

            if (isPass == false) {
                calArray.push(obj);
            }
            //mainDay가 +1 이 된 상황에서 로직을 수행함으로 마지막을 체크하기위해 -1을 하고 비교한후
            //isPass falg를 변경한다.
            if (mainDay - 1 == lastDay && isPass == false) {
                isPass = true;
            }

            subArray = new Array();
        }
    }

    return calArray;

}