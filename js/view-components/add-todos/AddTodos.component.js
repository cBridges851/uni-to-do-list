import { sessionService } from "../../services/SessionService.const.js";

class AddTodosComponent {
    constructor() {
        this.modules = [
            "Academic Skills",
            "Introduction To Programming"
        ];
        this.task = "";
        this.module = this.modules[0];
    }
    add() {
        sessionService.addTodos({
            "task": this.task,
            "module": this.module,
            "complete": false
        });
        this.output = `Todo For ${this.module} Created at ${Date()}`;
        this.task = "";
    }
}

export const addTodosComponentDefinition = {
    templateUrl: "./js/view-components/add-todos/add-todos.html",
    controller: AddTodosComponent
};