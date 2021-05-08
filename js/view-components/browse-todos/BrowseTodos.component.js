class BrowseTodosComponent {
    constructor() {
        this.todos = [
            {
                "task": "Example task 1",
                "module": "Introduction to programming",
                "completed": false
            },
            {
                "task": "Example task 2",
                "module": "Introduction to programming",
                "completed": false
            }
        ];
    }
} 

export const browseTodosComponentDefintion = {
    templateUrl: "./js/view-components/browse-todos/browse-todos.html",
    controller: BrowseTodosComponent
}