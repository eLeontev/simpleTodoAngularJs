import shortid from 'shortid';

const todoListComponent = {
    templateUrl: 'app/components/todoList/todoList.template.html',
    controller: todoListController
};

function todoListController() {
    const ctrl = this;

    ctrl.todoList = [
        {title: 1, id: shortid.generate()},
        {title: 2, id: shortid.generate(), isChecked: true},
        {title: 3, id: shortid.generate()},
    ];
    
    ctrl.updateItem = (id) => {
        ctrl.todoList = ctrl.todoList.map(todo => {
            if (todo.id === id)  {
                todo.isChecked = !todo.isChecked;
            }

            return todo;
        });
    };

    ctrl.removeItem = (id) => ctrl.todoList = ctrl.todoList.filter(todo => todo.id === id ? false : true);

    ctrl.addTodo = (title) => ctrl.todoList = [...ctrl.todoList, {title, id: shortid.generate()}];
}

export default todoListComponent;

