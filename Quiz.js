var questions=["1 + 4 = ?", "2 + 5 = ?", "3 + 9 = ?", "4 x 5 = ?", "12 / 6 = ?"];
var i=["#C0C0C0", "#FFD700", "#EEE8AA", "#98FB98", "skyblue", "#E0FFFF", "pink", "#FFFACD", "#F0FFF0", "#FFFAFA", "white"]
function color(){
  var num=Math.floor(Math.random()*i.length)
  document.getElementById("target").style.backgroundColor=i[num]
}
var count= 0;
var j=0;
function myfunction(){
  var person=prompt("PLEASE ENTER YOUR NAME", "AKSHAY")
  if(person != null && person !=" ")
  {
    document.getElementById("name").innerHTML="Hello " + person + ", We will start the quiz as soon as you hit the start.";
    document.getElementById("start").style.display="block";
  }
}
function next(){
  if(document.getElementById("answer").innerHTML===""){  
    document.getElementById("choose").style.color="navy"
    document.getElementById("choose").style.marginLeft="23.5%"
    document.getElementById("choose").innerHTML="Please choose one of the options"}
  else{
     if(j<=4){
   j = j + 1
   document.getElementById("choose").innerHTML=""
   document.getElementById("answer").innerHTML=""
   document.getElementById("question").innerHTML= questions[j];
   ans();
   }
 }
}
function viewscore(){
  document.getElementById("question").style.color="darkcyan"
  document.getElementById("question").style.marginLeft="36%"
  document.getElementById("question").innerHTML= count+" out of 5"
}
function afunc(){
  j=0;
  count=0 
  document.getElementById("name").innerHTML=""
  document.getElementById("answer").innerHTML=""
  document.getElementById("start").style.backgroundColor="darkorange"
  document.getElementById("start").style.Color="white"
  document.getElementById("start").innerHTML="Reset"
  document.getElementById("start").style.marginLeft="312px"
  document.getElementById("click").style.display="none"
  document.getElementById("score").innerHTML=""
  document.getElementById("next").style.display="block"
  document.getElementById("question").innerHTML= questions[j]
}
function ans(){
  if(document.getElementById("question").innerHTML==="1 + 4 = ?"){
    var opt1=document.createElement("button")
    opt1.innerHTML="6"
    opt1.style.marginLeft="43.2%"
    document.body.appendChild(opt1)
    opt1.onclick= function option(){
      document.getElementById("answer").style.color="red";
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt2=document.createElement("button")
    opt2.innerHTML="5"
    document.body.appendChild(opt2)
    opt2.onclick= function option(){
      document.getElementById("answer").style.color="green"
      document.getElementById("answer").innerHTML="Your Answer is right"
      document.getElementById("choose").innerHTML=""
      count++
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt3=document.createElement("button")
    opt3.innerHTML="7"
    document.body.appendChild(opt3)
    opt3.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt4=document.createElement("button")
    opt4.innerHTML="4"
    document.body.appendChild(opt4)
    opt4.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
  }
  else if(document.getElementById("question").innerHTML==="2 + 5 = ?"){
    var opt1=document.createElement("button")
    opt1.innerHTML="5"
    opt1.style.marginLeft="43.2%"
    document.body.appendChild(opt1)
    opt1.onclick= function option(){
      document.getElementById("answer").style.color="red";
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt2=document.createElement("button")
    opt2.innerHTML="6"
    document.body.appendChild(opt2)
    opt2.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt3=document.createElement("button")
    opt3.innerHTML="7"
    document.body.appendChild(opt3)
    opt3.onclick= function option(){
      document.getElementById("answer").style.color="green"
      document.getElementById("answer").innerHTML="Your Answer is right"
      document.getElementById("choose").innerHTML=""
      count++
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt4=document.createElement("button")
    opt4.innerHTML="4"
    document.body.appendChild(opt4)
    opt4.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
  }
  else if(document.getElementById("question").innerHTML==="3 + 9 = ?"){
    var opt1=document.createElement("button")
    opt1.innerHTML="11"
    opt1.style.marginLeft="41.7%"
    document.body.appendChild(opt1)
    opt1.onclick= function option(){
      document.getElementById("answer").style.color="red";
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt2=document.createElement("button")
    opt2.innerHTML="12"
    document.body.appendChild(opt2)
    opt2.onclick= function option(){
      document.getElementById("answer").style.color="green"
      document.getElementById("answer").innerHTML="Your Answer is right"
      document.getElementById("choose").innerHTML=""
      count++
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt3=document.createElement("button")
    opt3.innerHTML="13"
    document.body.appendChild(opt3)
    opt3.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt4=document.createElement("button")
    opt4.innerHTML="10"
    document.body.appendChild(opt4)
    opt4.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
  }
  else if(document.getElementById("question").innerHTML==="4 x 5 = ?"){
    var opt1=document.createElement("button")
    opt1.innerHTML="16"
    opt1.style.marginLeft="42%"
    document.body.appendChild(opt1)
    opt1.onclick= function option(){
      document.getElementById("answer").style.color="red";
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt2=document.createElement("button")
    opt2.innerHTML="24"
    document.body.appendChild(opt2)
    opt2.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt3=document.createElement("button")
    opt3.innerHTML="20"
    document.body.appendChild(opt3)
    opt3.onclick= function option(){
      document.getElementById("answer").style.color="green"
      document.getElementById("answer").innerHTML="Your Answer is right"
      document.getElementById("choose").innerHTML=""
      count++
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt4=document.createElement("button")
    opt4.innerHTML="25"
    document.body.appendChild(opt4)
    opt4.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
  }
  else if(document.getElementById("question").innerHTML==="12 / 6 = ?"){
    var opt1=document.createElement("button")
    opt1.innerHTML="3"
    opt1.style.marginLeft="43.7%"
    document.body.appendChild(opt1)
    opt1.onclick= function option(){
      document.getElementById("answer").style.color="red";
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt2=document.createElement("button")
    opt2.innerHTML="2"
    document.body.appendChild(opt2)
    opt2.onclick= function option(){
      document.getElementById("answer").style.color="green"
      document.getElementById("answer").innerHTML="Your Answer is right"
      document.getElementById("choose").innerHTML=""
      count++
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt3=document.createElement("button")
    opt3.innerHTML="1"
    document.body.appendChild(opt3)
    opt3.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
      setTimeout(Next,1000)
    }
    var opt4=document.createElement("button")
    opt4.innerHTML="4"
    document.body.appendChild(opt4)
    opt4.onclick= function option(){
      document.getElementById("answer").style.color="red"
      document.getElementById("answer").innerHTML="Your Answer is wrong"
      document.getElementById("choose").innerHTML=""
      opt1.style.display="none"
      opt2.style.display="none"
      opt3.style.display="none"
      opt4.style.display="none"
    }
  }
  else{
    document.getElementById("question").innerHTML=""
    document.getElementById("answer").innerHTML=""
    document.getElementById("start").style.display="none"
    document.getElementById("next").style.display="none"
    document.getElementById("name").innerHTML="Your Quiz Ends Here"
    document.getElementById("name").style.marginLeft="26.3%"
    document.getElementById("viewscore").style.display="block"
    }
}

