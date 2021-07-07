document.querySelector('#btn').onclick = function(){
    
    if(document.querySelector('#input input').value.length==0)
    {
        alert("Please Enter a Task");
    }
    else{

        document.querySelector('#list').innerHTML +=
        `<div class="lists">
         <span> ${document.querySelector('#input input').value}</span>
         <div>
                    <button class="done ">Done</button>
                    <button class="delbtn">X</button>
                </div>
        </div>
        `;
        document.querySelector('#input input').value = "";
    }
 
    let task = document.querySelectorAll(".delbtn");
    for(let i=0;i<task.length;i++)
    {
        task[i].onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }
    let done = document.querySelectorAll(".done");
let crosstask = document.querySelectorAll(".lists span");
for(let i=0;i<crosstask.length;i++)
{
    done[i].onclick = function(){
        crosstask[i].classList.toggle('completed');
     }
       crosstask[i].onclick = function(){
        this.classList.toggle('completed');
     }
}
}


// let dat = document.getElementById("date");
// var today = new Date();
// var year = today.getFullYear();
// var mes = today.getMonth()+1;
// var dia = today.getDate();
// var fecha =dia+"-"+mes+"-"+year;
// dat.innerHTML = fecha;
