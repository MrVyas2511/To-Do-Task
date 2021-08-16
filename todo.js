let clearstatment = document.querySelector("#clrAll p");


function clearstate(){
    let tasknumber = document.querySelectorAll(".lists").length;
    console.log(tasknumber);
    clearstatment.innerHTML = "You have "+ tasknumber +" Task To Do..";
       
}

document.querySelector('#btn').onclick = function () {

    if (document.querySelector('#input input').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {

        document.querySelector('#list').innerHTML +=
            `<div class="lists">
         <span> ${document.querySelector('#input input').value}</span>
         <div>
                    <button class="done ">Done</button>
                    <button class="delbtn">X</button>
                </div>
        </div>
        `;
        clearstate();
         document.querySelector('#input input').value = "";
    }

    // Delete functoin
    let task = document.querySelectorAll(".delbtn");
    for (let i = 0; i < task.length; i++) {
        task[i].onclick = function () {
            this.parentNode.parentNode.remove();
            clearstate();
            }
    }
    let done = document.querySelectorAll(".done");
    let crosstask = document.querySelectorAll(".lists span");
    for (let i = 0; i < crosstask.length; i++) {
        done[i].onclick = function () {
            crosstask[i].classList.toggle('completed');
        }
        crosstask[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
}

let clr = document.querySelector('#clear');
clr.onclick = function(){
    document.querySelector('#list').innerHTML =" ";
    clearstate();
}

var backRGB = document.getElementById("colorpicker").value;
var todo = document.getElementById("todo");
document.getElementById("colorpicker").onchange = function() {
  backRGB = this.value;
  todo.style.backgroundColor = backRGB;
    let title  = document.querySelector("#title h2");
    console.log(title);
  if (
    backRGB.includes("00") ||
    backRGB.includes("0a") ||
    backRGB.includes("0b") ||
    backRGB.includes("0c") ||
    backRGB.includes("0d") ||
    backRGB.includes("0e") ||
    backRGB.includes("0f")
  ) {
   title.style.color = "#fff";
  } else {
    title.style.color = "#000";
  }
  
}

// let dat = document.getElementById("date");
// var today = new Date();
// var year = today.getFullYear();
// var mes = today.getMonth()+1;
// var dia = today.getDate();
// var fecha =dia+"-"+mes+"-"+year;
// dat.innerHTML = fecha;
