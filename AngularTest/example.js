var test = angular.module('example', []);

test.controller('TestCtrl', function ($scope) {

    $scope.checkIndex = function(data) {

        var count = 0;

        for(var i = 0; i < $scope.checkDate.length; i++) {
            if($scope.checkDate[i].day == '20200120') {
                count++;
            }
        }
        
        return count;
    }

    $scope.changeForm = function(data) {
		
		var year = data.substring(0, 4);
		var month = data.substring(4, 6);
		var day = data.substring(6,8);
		
        var getDate = year +'-'+ month +'-'+ day;
        
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

});