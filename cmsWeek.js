let myDayNum = 1;
let year = "";
let month = "";
let monthLabel = document.querySelector(".monthLabel1");
function getDayOfCurrentWeek(num) {
    const today = new Date();
    const first = today.getDate() - today.getDay() + num;
    let day = new Date(today.setDate(first));
    year = String(day).slice(11,15);
    month = String(day).slice(4,7);
    day = String(day).slice(3,10);
    monthLabel.innerText = month+" "+year;
    return day;
  }



  function setDate(para){
    let allDates = document.querySelectorAll(".Date1");
    let mobDate = document.querySelectorAll(".mobDateWeek");
    if(para=="prev") myDayNum = myDayNum-14;
    for(let i=0;i<allDates.length;i++){
       allDates[i].children[0].innerText=getDayOfCurrentWeek(myDayNum);
    //    mobDate[i].children[0].innerText=getDayOfCurrentWeek(myDayNum);
        if(i==0){
            let monDate = document.querySelectorAll(".mon");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

        if(i==1){
            let monDate = document.querySelectorAll(".tue");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

        if(i==2){
            let monDate = document.querySelectorAll(".wed");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

        if(i==3){
            let monDate = document.querySelectorAll(".thu");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

        if(i==4){
            let monDate = document.querySelectorAll(".fri");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }
        if(i==5){
            let monDate = document.querySelectorAll(".sat");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

        if(i==6){
            let monDate = document.querySelectorAll(".sun");
            for(let j=0;j<monDate.length;j++){
                monDate[j].innerText = allDates[i].children[0].innerText;
            }
        }

       myDayNum++;
    }

  }
setDate("next");
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
leftArrow.addEventListener("click",handleLeftArrow);
rightArrow.addEventListener("click",handleRightArrow);



function handleLeftArrow(){
    passDataWeek("back");
    setDate("prev");
    changeWeek();
    document.querySelector(".formButton1").click();

}
   

function handleRightArrow(){
    passDataWeek("next");
    setDate("next");
    changeWeek();
    document.querySelector(".formButton1").click();

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
    let empStatus = document.querySelectorAll(".emp_status1");
    let mobDate = document.querySelectorAll(".mobDateWeek");

     for(let i=0;i<empStatus.length;i++){
        if(empStatus[i].innerText=="W"){
            empStatus[i].style.borderBottom =" #e8c6c6 4px solid"; 
        }

        if(empStatus[i].innerText=="O"){
            empStatus[i].style.borderBottom ="#fe4200d1 4px solid"; 
        }
    }


    for(let i=0;i<mobDate.length;i++){
        console.log(mobDate[i].children[1].innerText);
        if(mobDate[i].children[1].innerText == "W"){
            mobDate[i].children[1].style.borderBottom = "#e8c6c6 4px solid";
        }

        if(mobDate[i].children[1].innerText == "O"){
            mobDate[i].children[1].style.borderBottom = "#fe4200d1 4px solid";
        }
    }


}


changeBorder();



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(num) {
    console.log(num)
    let myDropdown = document.querySelectorAll(".myDropdown1");
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
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown1-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let weekNum = document.querySelector(".weekNum");
  function changeWeek(){
    let lastDate = document.querySelector(".lastDate");
    if(parseInt(lastDate.innerText.slice(3))<=7){
        weekNum.innerText = "1";
   
    }
    if(parseInt(lastDate.innerText.slice(3))>7){
        weekNum.innerText = "2";
   
    }
    if(parseInt(lastDate.innerText.slice(3))>14){
        weekNum.innerText = "3";
     
    }
    if(parseInt(lastDate.innerText.slice(3))>21){
        weekNum.innerText = "4";
   
    }


  }
  
changeWeek();
  


function passDataWeek(backOrNext){
    let firstDate = document.querySelector(".Date1").children[0].innerText;
    firstDate = firstDate.split(" ")[1];
    let weekDataInput = document.querySelector(".weekDataStore");
    let monthNum = getMonthNum(monthLabel.innerText.split(" ")[0]);
    weekDataInput.value = `${monthNum}-${year}-${firstDate}-${backOrNext}`;
  }


  function getMonthNum(month){
    if(month=='Jan') return 1;
    if(month=="Feb") return 2;
    if(month=="Mar") return 3;
    if(month=="Apr") return 4;
    if(month=="May") return 5;
    if(month=="Jun") return 6;
    if(month=="Jul") return 7;
    if(month=="Aug") return 8;
    if(month=="Sep") return 9;
    if(month=="Oct") return 10;
    if(month=="Nov") return 11;
    if(month=="Dec") return 12;
  }