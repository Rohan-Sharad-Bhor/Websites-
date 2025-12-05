let input=document.querySelector("#inp");

let text=document.querySelector(".text");

function Add(){
    if(input.value==""){
       alert("Please Enter Task");
    }else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="ri-delete-bin-7-fill"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}

