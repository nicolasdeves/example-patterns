Observer: clientes são notificados quando o status muda (notify).

Memento: histórico de status permite desfazer alterações (history e undo).

Command: encapsula ações do pedido (ChangeStatusCommand) para executar sem chamar changeStatus direto.


/order/status → muda o status do pedido (usa Command + Observer + Memento)

/order/undo → desfaz a última mudança de status

/order/status GET → retorna o status atual