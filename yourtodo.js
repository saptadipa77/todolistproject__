const inputt=document.getElementById("inputt");
const listofthings=document.getElementById("listofthings");

function addTask()
{
    if(inputt.value===''){
       alert("ARE you out of ideas?");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputt.value;
        listofthings.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
  inputt.value= "";
  storeanddontgo();
}
listofthings.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("selectt");
        storeanddontgo();
    }   
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storeanddontgo();
    }
},false);
function storeanddontgo()
{
    localStorage.setItem("data",listofthings.innerHTML);
}
function show()
{
    listofthings.innerHTML=localStorage.getItem("data");
}
show();