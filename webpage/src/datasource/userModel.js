class UserModel{
    constructor(firstName, lastName, email, password, created, updated){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.created = created;
        this.updated = updated;
    }
}

export default UserModel;