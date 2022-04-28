function saveUser(user){
    console.log(user);
    let val= JSON.stringify(user); //parse into a JSON string - allow var to be transferred as a string into local storage
    localStorage.setItem(`users`,val)
}