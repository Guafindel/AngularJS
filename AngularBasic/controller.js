angular.module('todo').controller('TodoCtrl', function ($scope, todoStorage) {

    $scope.todos = todoStorage.get();

    $scope.remove = function (todo) {

        // find todo index in todos
        var idx = $scope.todos.findIndex(function (item) {
            return item.id === todo.id;
        })

        // remove from todos
        if (idx > -1) {
            $scope.todos.splice(idx, 1)
        }
    };

    $scope.add = function (newTodoTitle) {
        //alert(newTodoTitle);

        //create new todo
        var newTodo = {
            title: newTodoTitle,
            completed: false,
            createdAt: Date.now()
        };

        //push into todos
        $scope.todos.push(newTodo);

        //empty form
        $scope.newTodoTitle = "";

    };

});