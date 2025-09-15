class OrderMemento {
    constructor(public status: string) {}
}

export class OrderService {
    private status: string = "pendente";
    private observers: Observer[] = [];
    private history: OrderMemento[] = [];

    addObserver(o: Observer) {
        this.observers.push(o);
    }

    notify() {
        this.observers.forEach(o => o.update(this.status));
    }

    changeStatus(newStatus: string) {
        this.history.push(new OrderMemento(this.status));

        this.status = newStatus;

        this.notify();
    }

    undo() {
        const memento = this.history.pop();
        if (memento) {
            this.status = memento.status;
            this.notify();
        }
    }

    getStatus() {
        return this.status;
    }
}
