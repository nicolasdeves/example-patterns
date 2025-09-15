export class Customer implements Observer {
    constructor(public name: string) {}

    update(status: string) {
        console.log(`${this.name} notificado: ${status}`)
    }
}