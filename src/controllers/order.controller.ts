import { FastifyRequest, FastifyReply } from "fastify";
import { OrderService } from "../services/order.service";
import { Customer } from "../services/customer.service";
import { ChangeStatusCommand } from "../commands/changeStatusCommand";

interface StatusBody {
    status: string;
}

const orderService = new OrderService();
const customer = new Customer("Nícolas");
const owner = new Customer("Laura");
orderService.addObserver(customer);
orderService.addObserver(owner);

export async function setStatus(
    request: FastifyRequest<{ Body: StatusBody }>,
) {
    const { status } = request.body;

    const command = new ChangeStatusCommand(orderService, status);
    command.execute();

    return { message: `Pedido atualizado para: ${orderService.getStatus()}` };
}

export async function undoStatus() {
    orderService.undo();
    return { message: `Pedido revertido para: ${orderService.getStatus()}` };
}

export async function getStatus() {
    return { status: orderService.getStatus() };
}
