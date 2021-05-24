//slide show releated code
var slideIndex = 1;
showSlides(slideIndex);

var prevSlide = document.getElementById("prev");
prevSlide.addEventListener("click", prevSlideInvoke);

function prevSlideInvoke() {  //for previous slide
    plusSlides(-1)
}

const nextSlide = document.getElementById("next");
nextSlide.addEventListener("click", nextSlideInvoke);

const firstSlideDot = document.getElementById("firstSlide");
firstSlideDot.onclick = function(){ currentSlide(1); }

const secondSlideDot = document.getElementById("secondSlide");
secondSlideDot.onclick = function(){ currentSlide(2); }

const thirdSlideDot = document.getElementById("thirdSlide");
thirdSlideDot.onclick = function(){ currentSlide(3); }

function nextSlideInvoke() {    //for next slide
    plusSlides(1)
}

function plusSlides(n) {
    console.log(slideIndex);
  showSlides(slideIndex += n);
}

function currentSlide(n) {    //slide after clicking the dots
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//hobbies pic display
var hobbypic = document.getElementById('hobbyPic');   //hobby pic
var hobbyDescribtion = document.getElementById('hobby-describtion');
var hobbyIndetail = document.getElementById('hobby-Indetail');

hobbypic.onclick = function(){
    'use strict';
    var imageLocation = hobbypic.getAttribute('src');
    if(imageLocation === '/assets/thinking.png'){
      hobbypic.setAttribute('src','/assets/cricket.jpg');
      hobbyDescribtion.textContent='Watching Cricket';
      hobbyIndetail.textContent = 'I started watching cricket from 2013, '+
      'I used to watch matches and as well as presentations and used to read cricbuzz blogs by which my english got improved '+
      'and also I have learnt about the struggles and failures that one faces to become success and got to know how a team leader and team member should be.';
    }
    else if(imageLocation === '/assets/cricket.jpg'){
      hobbypic.setAttribute('src','/assets/movie.png');
      hobbyDescribtion.textContent='Watching Movies and webseries';
      hobbyIndetail.textContent = 'I Love watching webseries and movies on the FDFS irrespective of language and hero. '+
      'Its not that for timepass i watch movies, I learn a lot from movies like cultures, technologies, different ways of thinking a situation and also realities of the present world.';
    }
    else if(imageLocation === '/assets/movie.png'){
      hobbypic.setAttribute('src','/assets/insta.gif');
      hobbyDescribtion.textContent='using Insta';
      hobbyIndetail.textContent = 'I follow a lot of Influencers like Abhiandniyu, projectnightfall, Brut etc. and '+
      'also many news channels, doctors through which I get a lot of Info and knowledge. And I also follow lot of cricket and Film Industry peoples for entertainment and friends for communication ';
    }
    else if(imageLocation === '/assets/insta.gif'){
      hobbypic.setAttribute('src','/assets/chatting.jpg');
      hobbyDescribtion.textContent='Spending time with people';
      hobbyIndetail.textContent = 'As I am from joint family i love being with peoples, talking with them and knowing their perspectives. '+
      'If required some suggestions';
    }
    else if(imageLocation === '/assets/chatting.jpg'){
      hobbypic.setAttribute('src','/assets/cricket.jpg');
      hobbyDescribtion.textContent='Watching Cricket';
      hobbyIndetail.textContent = 'I started watching cricket from 2013, '+
      'I used to watch matches and as well as presentations and used to read cricbuzz blogs by which my english got improved '+
      'and also I have learnt about the struggles and failures that one faces to become success and got to know how a team leader and team member should be.';
    }
}


//for sending mail to owner

const emailButton = document.getElementById("emailBttn");
emailButton.addEventListener("click", sendMail);

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
  console.log(name);
  Email.send({
  SecureToken : "0343e578-7bc2-4c88-9ec8-4e1362ec7e13",   //smtp js credentials secure token
  To : 'yashwanth.memories@gmail.com',                  
  From : "yashwanth.memories@gmail.com",
  Subject: "Details of the person who viewed ur portfolio",
  Body: "name is "+name+".  email of the Viewed person: "+email+".  msg for you: "+msg
  }).then(function (message) {
  alert("Mail has been sent successfully")
  });
  }