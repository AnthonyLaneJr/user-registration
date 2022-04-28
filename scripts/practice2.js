//click on the button and increase counter


//function 
    //variable counter
    //display var on id counter
let c=0;
let DIV=$(`#counter`);
let info1=$(`#divInfo1`);
let info2=$(`#divInfo2`);

//   one way to create click counter function
function clickCounter(){
    c++;
    DIV.text(c);
    console.log(c);
};

info1.hide();
info2.hide();
function init(){
    $(`#btn-counter`).on(`click`,clickCounter);
    $(`#btn-counter`).on(`mouseover`, function(){
        console.log(`The User Considers A Click`)
    })

    $(`#linkInfo2`).on(`mouseover`,function(){
        $(`#divInfo2`).show();
        $(`#divInfo1`).hide();
        $(`#divInfo2`).css(`color`,`#372`);
    });
    $(`#linkInfo1`).on(`mouseover`,function(){
        $(`#divInfo1`).show();
        $(`#divInfo2`).hide();
        $(`#divInfo1`).css(`font-weight`,`700`);
    });
};


window.onload=init;