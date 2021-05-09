import { sessionService } from "../../services/SessionService.const.js";

class AddTodosComponent {
    constructor() {
        this.modules = [
            "Academic Skills",
            "Introduction To Programming"
        ]
    }
    add() {
        sessionService.addTodos({
            "task": this.task,
            "module": this.module,
            "complete": false
        });
    }
}

export const addTodosComponentDefinition = {
    templateUrl: "./js/view-components/add-todos/add-todos.html",
    controller: AddTodosComponent
};