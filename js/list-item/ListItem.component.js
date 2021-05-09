class ListItemComponent {
    completeTodo() {
        this.complete = true;
    }
}

export const listItemComponentDefinition = {
    bindings: {
        task: "=",
        module: "=",
        complete: "="
    },
    templateUrl: "./js/list-item/list-item.html",
    controller: ListItemComponent
};