console.log("AI Dashboard Loaded");



// Dark Mode

const darkBtn = document.getElementById("darkBtn");


darkBtn.onclick = function(){

document.body.classList.toggle("dark");


};





// AI Loading Effect


window.onload = function(){


setTimeout(()=>{


alert("🤖 AI System Ready");


},1000);


};






// AI Chat


const button=document.querySelector(".chat button");

const input=document.querySelector(".chat input");



button.onclick=function(){


if(input.value==""){


alert("Ask something to AI");


}

else{


alert("🤖 AI Processing: "+input.value);


input.value="";


}


};






// Chart


new Chart(document.getElementById("aiChart"),{


type:"line",


data:{


labels:["Jan","Feb","Mar","Apr","May","Jun"],


datasets:[{

label:"AI Requests",

data:[1000,2500,3500,5000,7500,10000],


borderWidth:3


}]


},


options:{


responsive:true


}



});