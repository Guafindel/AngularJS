angular.module('todo').factory('todoStorage', function () {
    var storage = {
        todos: [{
                title: 'Java',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: 'Javascript',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: 'AngularJS',
                completed: true,
                createdAt: Date.now()
            }],
        get: function () {
            return storage.todos;
        }

    };

    return storage;

});