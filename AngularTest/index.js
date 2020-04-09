var test = angular.module('test', []);

test.controller('TestCtrl', function ($scope) {

    $scope.dateData = {};

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
    
 
    // function ResizeImage() {
    // var filesToUpload = document.getElementById('imageFile').files;
    // var file = filesToUpload[0];
    
    // // 문서내에 img 객체를 생성합니다
    // var img = document.createElement("img");
    // // 파일을 읽을 수 있는 File Reader 를 생성합니다
    // var reader = new FileReader();
    
    //     // 파일이 읽혀지면 아래 함수가 실행됩니다
    // reader.onload = function(e) {

    //     img.src = e.target.result;

    //     // HTML5 canvas 객체를 생성합니다
    //     var canvas = document.createElement("canvas");      
    //     var ctx = canvas.getContext("2d");

    //     // 캔버스에 업로드된 이미지를 그려줍니다
    //     ctx.drawImage(img, 0, 0);

    //     // 최대폭을 400 으로 정했다고 가정했을때
    //     // 최대폭을 넘어가는 경우 canvas 크기를 변경해 줍니다.
    //     var MAX_WIDTH = 400;
    //     var MAX_HEIGHT = 400;
    //     var width = img.width;
    //     var height = img.height;

    //     if (width > height) {
    //         if (width > MAX_WIDTH) {
    //             height *= MAX_WIDTH / width;
    //             width = MAX_WIDTH;
    //         }
    //     } else {
    //         if (height > MAX_HEIGHT) {
    //             width *= MAX_HEIGHT / height;
    //             height = MAX_HEIGHT;
    //         }
    //     }
    //     canvas.width = width;
    //     canvas.height = height;

    //     // canvas에 변경된 크기의 이미지를 다시 그려줍니다. 
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0, width, height);

    //     // canvas 에 있는 이미지를 img 태그로 넣어줍니다
    //     var dataurl = canvas.toDataURL("image/png");
    //     document.getElementById('output').src = dataurl;
    // } 
    // reader.readAsDataURL(file);
    // }

    $scope.getDateCustList = function() {
        if($scope.dateData.yyyyMM != null) {
            console.log($scope.dateData.yyyyMM);
        }
    }

    console.log('kim');



});