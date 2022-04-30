function displayUsers(usersArray){
    tmp=(``)
    //travel the array
    for(let i=0;i<usersArray.length;i++){
    //get the data for each user
    let user=+usersArray[i]
    //display users
    console.log(user)
    // tmp=+(`
    //     <tr>
    //             <td>${data.firstName}</td>
    //             <td>${data.lastName}</td>
    //             <td>${data.email}</td>
    //             <td>${data.password}</td>
    //             <td>${data.gender}</td>
    //             <td>${data.age}</td>
    //             <td>${data.phoneNumber}</td>
    //             <td>${data.address}</td>
    //             <td>${data.Color}</td>
    //             <td>${data.payMethod}</td>
    //         </tr>
    // `);
    }
    // $(`#tableBody`).val(tmp)
    //append the user on the html table ------>read jquery documentation
}
function init(){
    console.log(`Listing Users`);
    let users=readUsers(); //this function is on the store manager-getting the array
    displayUsers(users);
}
window.onload=init;