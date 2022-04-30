const STORE_KEY =`users`;

function saveUser(user){
    //load the old data
    let oldData=readUsers();//getting localstorage info
    oldData.push(user);
    let val= JSON.stringify(oldData); //parse into a JSON string - allow var to be transferred as a string into local storage-JSON means JavaScript Object Notation
    localStorage.setItem(STORE_KEY,val) //store JSON data
}
function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data); //JSON data
    if(!data){//if no data?
        //if you get here it means the local storage is empty
        return [];//creating the array
    }else{
        //we have data
        let list = JSON.parse(data);//parsing JSON into object
        return list;//returning the list of objects(users)
    }
}