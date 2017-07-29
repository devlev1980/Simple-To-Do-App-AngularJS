var app = angular.module('ToDo', []);
app.controller('myController', function($scope) {
    $scope.todos = [{
        'tittle': 'Task1',
        'done': false
    }];


    $scope.addtodo = function() {
        if ($scope.newTodo == '') {
            alert('Please fill the field')
        } else {
            $scope.todos.push({ 'tittle': $scope.newTodo, 'done': false });
        }


        $scope.newTodo = '';
    }


    $scope.clearCompleted = function() {

        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done;
        })
    }
});