enum Roles {
    SuperAdmin = 'super-admin',
    Admin = 'admin',
    Test = 'test'
}

var user: object = {
    nome: 'Owen',
    idade: 30,
    role: setRole(Roles.Admin)
}

function setRole(role:string): string{
    return role
}

const showUser = () => {
    console.log(user)
}

showUser();