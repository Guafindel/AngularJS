(function() {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', function($scope) {
        $scope.todos = [{
                title: '요가 수행',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '앵귤러 학습',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '게임 하기',
                completed: true,
                createdAt: Date.now()
            }
        ]

    }]);

    app.controller('hero', ['$scope', function($scope) {
        $scope.heroes = [{
                title: '마블',
                name: '위도우 메이커',
                level: 3
            },
            {
                title: '오버워치',
                name: '파라',
                level: 4
            },
            {
                title: '배트맨',
                name: '슈퍼맨',
                level: 99
            }
        ]
    }]);

})();