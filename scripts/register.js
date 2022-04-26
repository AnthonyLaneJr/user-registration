//create a User constructor
function User(email, password, age, firstName, lastName, phoneNumber, address, gender, favColor, paymentMethod){
    this.email=email;
    this.password=password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.address=address;
    this.phone=phoneNumber;
    this.gender=gender;
    this.color=favColor;
    this.payMethod=paymentMethod;
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

    
    let newUser= new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputAddress, inputPhone, inputGender, inputColor, inputPayMethod)

    console.log(newUser)

    // clearInputs();
}

// function clearInputs(){

// }
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
}

window.onload=init;
//causes above function to execute after the windows has laoded