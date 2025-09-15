import { OrderService } from "../services/order.service";

export class ChangeStatusCommand implements Command {
    constructor(private service: OrderService, private newStatus: string) {}
    execute() {
        this.service.changeStatus(this.newStatus);
    }
}