// Set the date we're counting down to
var countDownDate = new Date("May 3, 2020 08:00:00").getTime();

let Bground = document.querySelector('body');
let image = "linear-gradient(rgba(112, 112, 112, 0.239), rgba(112, 112, 112, 0.239)),";

// Get today's date and time
var now = new Date().getTime();
        
// Find the distance between now and the count down date
var distance = countDownDate - now;
        
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + " dite";
let title = document.getElementById("title");
// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "You did it.";
}
if(days <= 180 && days >= 165){
    title.innerHTML = "Html/Css Basics";
}
if(days < 165 && days >= 130){
    title.innerHTML = "Js Basics";
}
if(days < 130 && days >= 99){
    title.innerHTML = "30 Day Vanilla JS Coding Challenge";
}
if(days < 99 && days >= 60){
    title.innerHTML = "Learn React";
}
if(days < 60 && days <= 10){
    title.innerHTML = "Learn Node, MongoDB, and PostgreSQL (Backend development)";
}
if(days < 10 && days <= 1){
    title.innerHTML = "Learn DevOps and Git";
}
if(days == 0){
    title.innerHTML ="Now, Go get a job";
}


//---- Background changing img ------//
var rand_num = Math.floor(Math.random() * 6);
switch (rand_num){
    case 0:
        Bground.style.backgroundImage = image + "url('./pic1.jpg')";
        break;
    case 1:
        Bground.style.backgroundImage = image +"url('./pic2.jpg')";
        break;
    case 2:
        Bground.style.backgroundImage = image +"url('./pic3.jpg')";
        break; 
    case 3:
        Bground.style.backgroundImage = image + "url('./pic4.jpg')";
        break; 
    case 4:
        Bground.style.backgroundImage = image + "url('./pic5.jpg')";
        break;
    default:
        Bground.style.backgroundImage = image + "url('./pic6.jpg')";   
}

