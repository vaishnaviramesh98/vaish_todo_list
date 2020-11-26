// login validation function

function login(user,pass,callback){
   if(user=="admin"&&pass==12345){
    //    alert("sucess");
       callback(true);
   }
   else{
       alert("Incorrect username and password");
       return false;
   }
}
// function for redirecting to next function if validation is true
function redirect(some)
{
  if(some==true){
                console.log(true);
                return true;
            }
}


