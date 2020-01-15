angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1>ToDo</h1>'
    }
});

angular.module('todo').directive('todoItem', function () {
    return {
        // templateUrl: 'todoItem.tpl.html'
         template: 
             '<div class="input-group mb-3">' +
                 '<div class="input-group-prepend">' +
                     '<div class="input-group-text">' +
                         '<input type="checkbox" ng-model="todo.completed" ng-click="update()">' +
                     '</div>' +
                 '</div>' +
                 '<input type="text" class="form-control" ng-model="todo.title" placeholder="item" ng-blur="update()">' +
                 '<span class="input-group-btn">' +
                    '<button class="btn btn-danger" type="button" ng-click="remove(todo)">삭제</button>' +
                 '</span>' +
             '</div>' +
             '<date>{{ todo.createdAt | date:"yyyy-MM-dd HH: mm: ss"}}</date>'
    }
});

angular.module('todo').directive('todoFilters', function() {
    return {
        //templateUrl: 'todoFilters.tpl.html'
         template: 
             '<button class="btn- btn-primary" ng-click="statusFilter={completed:true}">Completed</button>'+
            '<button class="btn- btn-primary" ng-click="statusFilter={completed:false}">Active</button>'+
            '<button class="btn- btn-primary" ng-click="statusFilter={}">All</button>'
    }
});

angular.module('todo').directive('todoForm', function() {
    return {
        //templateUrl: 'todoForm.tpl.html'
        template: 
            '<form name="todoForm" ng-submit="add(newTodoTitle)" action="" onsubmit="return false;">'+
                '<div class="input-group mb-3">'+
                    '<input type="text" ng-model="newTodoTitle" placeholder="할 일을 입력하세요" name="" id="" class="form-control" minlength="3">'+
                    '<span class="input-group-btn">'+
                        '<button class="btn btn-success" type="submit">Add</button>'+
                    '</span>'+
                '</div>'+
                '<div ng-show="todoForm.$dirty && todoForm.$invalid">'+
                    '<div class="alert alert-warning" role="alert">세 글자 이상 입력하세요.</div>'+
                '</div>'+
            '</form>'
    }
});