//creating an Xhr oject
var xhttp =new XMLHttpRequest();
// event listener
xhttp.onreadystatechange=function(){
    // condition
    if(this.readyState==4&&this.status==200){
        
        var response=JSON.parse(this.responseText);
        
        var output="";
            for(var i=0;i<response.length;i++){
              
                if(response[i].completed==true)
                {  
                    output+="<div class='item'>";
                    output+="<input type='checkbox' id=checked disabled >" ;
                    output+="<label>"+  response[i].title + "</label>";
                    output+="</div>";
                   
                }
                else{
                    output+="<div class='item'>";
                    output+="<input type='checkbox' id=checked class=checkmark  onclick=checker().then(sucfn).catch(function(e){console.log(e);});>" ;
                    output+="<label>"+  response[i].title + "</label>";
                    output+="</div>";
                }
                output+="<hr>";
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();

    function sucfn(){
            console.log("ok ok");
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }
        function checker(){
          return  new Promise(function(resolve,reject){
             
            var items=document.querySelectorAll('input[type="checkbox"]:checked').length;
              if(items==5){
                  resolve();
              }
              else{
                  reject("error");
              }
            });
        }
        

        

    
