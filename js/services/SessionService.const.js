class SessionService {
    constructor() {
        this.todos = [
            {
                "task": "Example task",
                "module": "Introduction to programming",
                "complete": false
            },
            {
                "task": "Example task",
                "module": "Introduction to programming",
                "complete": false
            },
            {
                "task": "Example completed task",
                "module": "Introduction to programming",
                "complete": true
            }
        ];
    }

    getTodos() {
        return this.todos;
    }
    
    addTodos(todo) {
        this.todos.push(todo);
    }
}

const sessionService = new SessionService();
export { sessionService };