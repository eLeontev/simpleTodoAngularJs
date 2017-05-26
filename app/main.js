import addTodoComponent from './components/addTodo/addTodo.component.js';
import todoListComponent from './components/todoList/todoList.component.js';
import todoElementComponent from './components/todoElement/todoElement.component.js';

const app = angular.module('todoList', []);

app.component('addTodoComponent', addTodoComponent);
app.component('todoListComponent', todoListComponent);
app.component('todoElementComponent', todoElementComponent);
