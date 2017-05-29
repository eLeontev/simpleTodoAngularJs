const todoElementComponent = {
    templateUrl: 'app/components/todoElement/todoElement.template.html',
    bindings: {
        item: '<',
        updateItem: '&',
        removeItem: '&'
    }
};

export default todoElementComponent;

