import { sessionService } from "../../services/SessionService.const.js"

class CompletedTodosComponent {
    constructor() {
        this.todos = sessionService.getTodos();
    }
}

export const completedTodosComponentDefinition = {
    templateUrl: "./js/view-components/completed-todos/completed-todos.html",
    controller: CompletedTodosComponent
};