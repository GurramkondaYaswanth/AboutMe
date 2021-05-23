var slideIndex = 1;
showSlides(slideIndex);

var prevSlide = document.getElementById("prev");
prevSlide.addEventListener("click", prevSlideInvoke);

function prevSlideInvoke() {
    plusSlides(-1)
}

const nextSlide = document.getElementById("next");
nextSlide.addEventListener("click", nextSlideInvoke);

function nextSlideInvoke() {
    plusSlides(1)
}

function plusSlides(n) {
    console.log(slideIndex);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
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


const emailButton = document.getElementById("emailBttn");
emailButton.addEventListener("click", sendMail);

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
  console.log(name);
  Email.send({
  SecureToken : "0343e578-7bc2-4c88-9ec8-4e1362ec7e13",
  To : 'yashwanth.memories@gmail.com',
  From : "yashwanth.memories@gmail.com",
  Subject: "Details of the person who viewed ur portfolio",
  Body: "name is "+name+".  email of the Viewed person: "+email+".  msg for you: "+msg
  }).then(function (message) {
  alert("Mail has been sent successfully")
  });
  }