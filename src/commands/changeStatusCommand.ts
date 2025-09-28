import { OrderService } from "../services/order.service";

export class ChangeStatusCommand implements Command {
    constructor(private service: OrderService, private newStatus: string) {}
    execute() {
        // pode ter outras acoes, como validar, pq é um comando, um engoblamento das ações :D
        console.log("Executando ação...")
        this.service.changeStatus(this.newStatus);
    }
}