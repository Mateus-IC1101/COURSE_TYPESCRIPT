export class User{
    constructor(public id:string, public nome:string){
    }
    toString() {
        return `User { id: ${this.id}, nome: ${this.nome} }`;
    }
}