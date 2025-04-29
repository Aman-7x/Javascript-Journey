const user={
    username : "Aman",
    bill:900,
    welcomeMessage:function (){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
        this help to access current context object
    }

}

user.welcomeMessage();
user.username="Sam"
user.welcomeMessage();


The Global Object in the browser is Window Object (imp)

chai();
function chai(){
    let username = "Aman";
    console.log(this.username);
    
}
we can't use this here