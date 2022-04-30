//create a User constructor
function User(email, password, age, firstName, lastName, phoneNumber, address, gender, favColor, paymentMethod){
    this.email=email;
    this.password=password;
    this.age=age;
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phoneNumber;
    this.address=address;
    this.gender=gender;
    this.color=favColor;
    this.payMethod=paymentMethod;
}

function clearInputs(){
    $(`#txtEmail`).val(``);
    $(`#txtPassword`).val(``);
    $(`#txtFirstName`).val(``);
    $(`#txtLastName`).val(``);
    $(`#txtAge`).val(``);
    $(`#txtAddress`).val(``);
    $(`#txtPhone`).val(``);
    $(`#txtGender`).val(``);
    $(`#txtColor`).val(``);
    $(`#txtPay`).val(``);
}
function isValid(user){
    //assume that the values are true
    //returns value as false if information is not up to par (i.e. lenght at 0 or no data input)
    let valid=true;
    $(`input`).removeClass(`input-error`);
    if(user.email.length==0){
        valid=false;
        console.error(`invalid Email`);
        $(`#txtEmail`).addClass(`input-error`);}
    if(user.password.length==0){
        valid=false;
        console.error(`invalid Password`);
        $(`#txtPassword`).addClass(`input-error`);}
    if(user.payMethod.length==0){
        valid=false;
        console.error(`invalid PayMethod`);
        $(`#txtPay`).addClass(`input-error`);}
        return valid;
}
//  one way to validate password
// function validatePass(user){
//     //get the value from the form
//     let valid=true;
//     //compare is the password is less than 6 characters, if statement
//     if(user.password.length<6){
//         valid=false;
//         $(`#txtPassword`).addClass(`input-error`);
//         alert(`password must contain 6 numbers or letters`);}
//         //Jquery function to change the css
//         return valid;
// }

//  another way-professors example
    function validatePass(){
        let txtPass=$(`#txtPassword`);
        let password=txtPass.val();
        //compare is the password is less than 6 characters, if statement
        if(password.length<6){
            txtPass.css("background","red"); //jquery funciton to change css
        }else{
            txtPass.css("background","green");///jquery function to change css
        }
    }

function register(){
    let inputEmail=$(`#txtEmail`).val();
    let inputPassword=$(`#txtPassword`).val();
    let inputFirstName=$(`#txtFirstName`).val();
    let inputLastName=$(`#txtLastName`).val();
    let inputAge=$(`#txtAge`).val();
    let inputAddress=$(`#txtAddress`).val();
    let inputPhone=$(`#txtPhone`).val();
    let inputGender=$(`#txtGender`).val();
    let inputColor=$(`#txtColor`).val();
    let inputPayMethod=$(`#txtPay`).val();

    
    let newUser= new User(inputEmail, inputPassword, inputAge, inputFirstName, inputLastName, inputPhone, inputAddress, inputGender, inputColor, inputPayMethod);
    if(isValid(newUser)){
    saveUser(newUser); //function located in storemanager js

    clearInputs();
    //alternative clear using jquery to clear using tag name 
    // $(`input`).val(""); this will clear all input fields

}}


// input value old method style - new method uses Jquery $ shortcut

// let inputEmail=document.getElementById(`txtEmail`);
// let inputPassword=document.getElementById(`txtPassword`);
// let inputFirstName=document.getElementById(`txtFirstName`);
// let inputLastName=document.getElementById(`txtLastName`);
// let inputAge=document.getElementById(`txtAge`);
// let inputAddress=document.getElementById(`txtAddress`);
// let inputPhone=document.getElementById(`txtPhone`);
// let inputGender=document.getElementById(`txtGender`);
// let inputColor=document.getElementById(`txtColor`);
// let inputPayMethod=document.getElementById(`txtPay`);


//Create two new Users and display on Console
let user1 = new User(`google@gmail.com`, `1234`, 16, `ryan`, `matt`, `1234567`, `123 ave. street`, `male`, `red`, `Visa`,)
let user2 = new User(`google@gmail.com`, `1234`, 22, `steve`, `matt`, `1894561`, `123 ave. street`, `male`, `blue`, `MasterCard`,)
console.log(user1,user2)

function init(){
    console.log(`Init Function`);
    //hook event
    $(`#txtPassword`).keyup(validatePass);//executed everytime that something is inputted into the element
}

window.onload=init;
//causes above function to execute after the windows has laoded