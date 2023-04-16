var user: any = 'Marrin Owern';

var user_fulll: object = {
    'nome': 'paul mark'
};

var show = function show() {
    console.log((<string>user).length);
    
    (<any>user_fulll).idade = 25;
    console.log(user_fulll);
}

show();