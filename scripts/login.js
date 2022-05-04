function login(){
    //get values form the form
    let inputEmail=$(`#txtEmail`).val();
    let inputPassword=$(`#txtPassword`).val();
    //get the users form LS
    let flag=false;
    //use a flag to say whether user is found or not -display message/alert
    let userList=readUsers(); //this function is on storemanager
    //travel the user list
    for(i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location=`users.html`;
        }
        if(!flag){
            $(`#alertError`).removeClass(`hide`);
            setTimeout(function(){
                $(`#alertError`).addClass(`hide`);
            },3000);
        }
    }
}

function init(){
    $(`#loginBtn`).click(login);
}

window.onload=init;