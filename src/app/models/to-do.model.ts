export class TodoModel {
    id: number;
    title: string;
    description: string;
    // completed: boolean = false;
    completed: boolean;
    constructor(id, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}