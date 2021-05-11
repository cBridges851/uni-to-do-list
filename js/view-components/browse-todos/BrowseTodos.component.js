import { sessionService } from "../../services/SessionService.const.js";

class BrowseTodosComponent {
    constructor() {
        this.todos = sessionService.getTodos()
    }
} 

export const browseTodosComponentDefintion = {
    templateUrl: "./js/view-components/browse-todos/browse-todos.html",
    controller: BrowseTodosComponent
}