function displayUsers(usersArray){
    
    //travel the array
    for(let i=0;i<usersArray.length;i++){
    //get the data for each user
    let user = usersArray[i];
    //display users
    tmp = `
        <tr>
        <td class="tdfName">${user.firstName}</td>
        <td class="tdlName">${user.lastName}</td>
        <td class="tdemail">${user.email}</td>
        <td class="tdpass">${user.password}</td>
        <td class="tdgen">${user.gender}</td>
        <td class="tdage">${user.age}</td>
        <td class="tdphone">${user.phone}</td>
        <td class="tdaddress">${user.address}</td>
        <td class="tdcolor">${user.color}</td>
        <td class="tdpay">${user.payMethod}</td>
            </tr>
    `;
    $(`#tableBody`).append(`${tmp}`);
    //append the user on the html table ------>read jquery documentation
}}
function init(){
    console.log(`Listing Users`);
    let users=readUsers(); //this function is on the store manager-getting the array
    displayUsers(users);
};
window.onload=init;