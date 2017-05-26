const todoElementComponent = {
    templateUrl: 'app/components/todoElement/todoElement.template.html',
    controller: todoElementController,
    bindings: {
        item: '<',
        updateItem: '&',
        removeItem: '&'
    }
};

function todoElementController() {
    const ctrl = this;

    ctrl.update = function update(id) {
        ctrl.updateItem({id});
    };

    ctrl.remove = function remove(id) {
        ctrl.removeItem({id});
    };
}

export default todoElementComponent;

