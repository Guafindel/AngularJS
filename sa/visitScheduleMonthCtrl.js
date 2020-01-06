
var visitScheduleMonthCtrl = angular.module("visitScheduleMonthCtrl", []);

visitScheduleMonthCtrl.controller("visitScheduleMonthCtrl", function($scope, $rootScope) {
    ufn_Log.debug("visitScheduleMonthCtrl");

    $scope.go_back = function() {}
        $window.history.back();
    }
})