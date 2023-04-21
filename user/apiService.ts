import {User} from "./userModel";

class Api{
    public getUser(id:string, nome: string): User{
        const user: User = new User(id, nome);
        return user;
    }
}

export default new Api