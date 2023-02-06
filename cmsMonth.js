let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let currMonth = document.querySelector(".Date").children[0].innerText;
let monthLabel = document.querySelector(".monthLabel");
const d = new Date();
let year = d.getFullYear();
leftArrow.addEventListener("click",handleLeftArrow);
rightArrow.addEventListener("click",handleRightArrow);



function handleLeftArrow(){
    passData("back")
    document.querySelector(".submitBtn").click();
    let date = document.querySelectorAll(".Date");
    for(let i=0;i<date.length;i++){
        date[i].children[0].innerText = previousMonth(currMonth);
    }
    let mobMonth = document.querySelectorAll(".mobDate")

    for(let i=0;i<mobMonth.length;i++){
        mobMonth[i].children[0].innerText = previousMonth(currMonth);
    }
    currMonth = previousMonth(currMonth);
   if(currMonth=="Dec") year = year-1;
    monthLabel.innerText = currMonth+" "+year;

    
}

function handleRightArrow(){
    passData("next");
    document.querySelector(".submitBtn").click();
let date = document.querySelectorAll(".Date");

   for(let i=0;i<date.length;i++){
    date[i].children[0].innerText = nextMonth(currMonth);
   }

   let mobMonth = document.querySelectorAll(".mobDate")

    for(let i=0;i<mobMonth.length;i++){
        mobMonth[i].children[0].innerText = nextMonth(currMonth);
    }
   currMonth = nextMonth(currMonth);
   if(currMonth=="Jan") year = year+1;
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
    let mobDate = document.querySelectorAll(".mobDate");

     for(let i=0;i<empStatus.length;i++){
        if(empStatus[i].innerText=="W"){
            empStatus[i].style.borderBottom =" #e8c6c6 4px solid"; 
        }

        if(empStatus[i].innerText=="O"){
            empStatus[i].style.borderBottom ="#fe4200d1 4px solid"; 
        }
    }


    for(let i=0;i<mobDate.length;i++){
        console.log(mobDate[i].children[2].innerText);
        if(mobDate[i].children[2].innerText == " W"){
            mobDate[i].children[2].style.borderBottom = "#e8c6c6 4px solid";
        }

        if(mobDate[i].children[2].innerText == " O"){
            mobDate[i].children[2].style.borderBottom = "#fe4200d1 4px solid";
        }
    }


}


changeBorder();



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(num) {
    console.log(num)
    let myDropdown = document.querySelectorAll(".myDropdown");
    // document.querySelectorAll(".myDropdown")[num].classList.toggle("show");
    for(let i=0;i<myDropdown.length;i++){
        if(i==num){
            myDropdown[i].classList.toggle("show");
        }else{
            myDropdown[i].classList.remove("show");
        }
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  
  function setCurrentMonth(){
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const da = new Date();
    let name = month[da.getMonth()];
    console.log(name);
    monthLabel.innerText = name+" "+year;
    let date = document.querySelectorAll(".Date");

   for(let i=0;i<date.length;i++){
    date[i].children[0].innerText = name;
   }
    
  }


  setCurrentMonth();


  function passData(backOrNext){
    let dataInput = document.querySelector(".dataStore");
    dataInput.value = monthLabel.innerText+" "+backOrNext;
  }