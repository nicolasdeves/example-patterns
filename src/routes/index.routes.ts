import { FastifyInstance } from "fastify";
import { getStatus, setStatus, undoStatus } from "../controllers/order.controller";

export async function indexRoutes(app: FastifyInstance) {
    app.post("/order/status", setStatus); 
    app.post("/order/undo", undoStatus); 
    app.get("/order/status", getStatus); 
  }