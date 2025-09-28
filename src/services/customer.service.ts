export class Customer implements Observer {
    constructor(public name: string) {}

    update(status: string) {
        //aqui seria realizado algum envio de notificações hehe :D
        console.log(`${this.name} notificado: ${status}`)
    }
}