"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var Todo = /** @class */ (function () {
    function Todo(todoId, todoName, isCompleted) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.isCompleted = isCompleted;
    }
    Todo.prototype.display = function () {
        console.log(this.todoId + " " + this.todoName + " " + this.isCompleted);
    };
    return Todo;
}());
var temp = uuid_1.v4();
var arr = temp.split('-');
var mytodo = new Todo(arr[0], 'First-task', true);
mytodo.display();
