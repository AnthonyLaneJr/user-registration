//selecting the txtEmail with js

//let email=document.getElementById(`txtEmail`);

// selectors Type:
// ID, Class, Tag Name (element type)
//jquery = $

//selecting by ID
email=$(`#txtEmail`).val();
console.log(email);
//selecting by classname
// let formControl = document.getElementsByClassName(`form-control`);
// console.log(formControl);
let formControl = $(`.form-control`);
console.log(formControl)

//hiding sections
// for (let i=0;i<formControl.length;i++){
//     formControl[i].style.display=`none`
// }
//formControl.hide();

//selecting by tag name
// let labels = document.getElementsByTagName(`label`);
// console.log(labels);
let labels = $(`label`);
console.log(labels);

