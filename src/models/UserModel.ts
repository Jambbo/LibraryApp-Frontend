export class UserModel{
    id: number;
    name: string;
    username: string;
    password: string;
    passwordConfirmation: string;

    constructor(
        id: number,
        name: string,
        username: string,
        password: string,
        passwordConfirmation: string
    ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }

}