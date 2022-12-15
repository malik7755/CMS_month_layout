let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let currMonth = document.querySelector(".Date").children[0].innerText;
let monthLabel = document.querySelector(".monthLabel");
leftArrow.addEventListener("click",handleLeftArrow);
rightArrow.addEventListener("click",handleRightArrow);
let year = 2022;


function handleLeftArrow(){
    let date = document.querySelectorAll(".Date");
    for(let i=0;i<date.length;i++){
     date[i].children[0].innerText = previousMonth(currMonth);
    }
    currMonth = previousMonth(currMonth);
    monthLabel.innerText = currMonth+" "+year;
}

function handleRightArrow(){
let date = document.querySelectorAll(".Date");
   for(let i=0;i<date.length;i++){
    date[i].children[0].innerText = nextMonth(currMonth);
   }
   currMonth = nextMonth(currMonth);
   monthLabel.innerText = currMonth+" "+year;

}



function nextMonth(month){
    if(month=="Jan") return "Feb" 
    if(month=="Feb") return "Mar" 
    if(month=="Mar") return "Apr" 
    if(month=="Apr") return "May" 
    if(month=="May") return "Jun" 
    if(month=="Jun") return "Jul" 
    if(month=="Jul") return "Aug" 
    if(month=="Aug") return "Sep" 
    if(month=="Sep") return "Oct" 
    if(month=="Oct") return "Nov" 
    if(month=="Nov") return "Dec" 
    if(month=="Dec") return "Jan" 
}


function previousMonth(month){
    if(month=="Jan") return "Dec" 
    if(month=="Feb") return "Jan" 
    if(month=="Mar") return "Feb" 
    if(month=="Apr") return "Mar" 
    if(month=="May") return "Apr" 
    if(month=="Jun") return "May" 
    if(month=="Jul") return "Jun" 
    if(month=="Aug") return "Jul" 
    if(month=="Sep") return "Aug" 
    if(month=="Oct") return "Sep" 
    if(month=="Nov") return "Oct" 
    if(month=="Dec") return "Nov" 
}


function changeBorder(){
    let empStatus = document.querySelectorAll(".emp_status");
     for(let i=0;i<empStatus.length;i++){
        if(empStatus[i].innerText=="W"){
            empStatus[i].style.borderBottom ="gray 3px solid"; 
        }

        if(empStatus[i].innerText=="O"){
            empStatus[i].style.borderBottom ="red 3px solid"; 
        }
     }
}


changeBorder();