export class User {
    constructor(public id: string,
                public username: string,
                public password: string,
                public token: string) {
    }
    public toString(obj: User) : string { 
        return this.username
    } 
}