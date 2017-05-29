const addTodoComponent = {
    templateUrl: 'app/components/addTodo/addTodo.template.html',
    controller: addTodoController,
    bindings: {
        addTodo: '&'
    }
};

function addTodoController() {
    const ctrl = this;

    ctrl.todoValue = '';
    ctrl.todoPlaceholder = 'todo`s title';
    ctrl.buttonMessage = 'Add new todo';

    ctrl.submit = (title) => {
        if (title.trim()) {
            ctrl.addTodo({title});
            ctrl.todoValue = '';
        } else {
            alert('Field is empty');
        }
    };
}

export default addTodoComponent;

