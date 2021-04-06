//*******************************************************************************************
//*******************************************************************************************
screen1Logo = document.querySelector('#id_top_screen_1');
screen1Login = document.querySelector('#id_work2');
screen1 = document.querySelector('#id_screen_1');
screen2Logo = document.querySelector('#id_top_screen_2');
screen2 = document.querySelector('#id_screen_2');
optionsPage = document.querySelector('#optionsPage');
deviceDriverScreen = document.querySelector('#id_screen_3');
appointmentBookScreen = document.querySelector('#id_screen_4');
hamburgerMenu = document.querySelector('.screen4DropDown');
//*******************************************************************************************
//*******************************************************************************************

//preloader
window.onload=function() {
  screen1Logo.style.display='block';
  screen1Login.style.display='flex';
  screen1.style.display='block';
  document.querySelector('#loadingMask').style.display='none';
  hamburgerMenu.style.display = 'none';
}

//gsap for screen1
gsap.from('#s1NBGsap',{duration: 0.75, y:25,opacity:0.2});
gsap.from('#s1HpGsap',{duration: 0.75, x:-25,opacity:0.2});
gsap.from('#s1Hh4Gsap',{duration: 0.75, x:-25,opacity:0.2});
gsap.from('#s1Hh3Gsap',{duration: 0.75, x:-25,opacity:0.2});
gsap.from('#s1RGsap',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 0.5});
gsap.from('#patientbtn',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 0.75});
gsap.from('#doctorbtn',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 0.75});
gsap.from('#hospitalbtn',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 0.75});
gsap.from('#s1LineGsap',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 0.75});
gsap.from('#register_form_patient',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 1});
gsap.from('#s1NameGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
gsap.from('#s1DobGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
gsap.from('#s1EmailGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
gsap.from('#s1PhoneGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
gsap.from('#s1PssdGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
// gsap.from('#s1MaleGsap',{duration: 0.5, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
// gsap.from('s1FemaleGsap',{duration: 0.5, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
// gsap.from('#s1TransGsap',{duration: 0.5, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});
// gsap.from('#s1SubmitGsap',{duration: 0.5, y:5,opacity:0, ease:'Power2.easeInOut', delay: 1.3});



//navbar for home-about-portfolio-team-contact screen_1
homeBtn = document.querySelector('#homebtn');
home = document.querySelector('#home');
portfolioBtn =document.querySelector('#portfoliobtn');
portfolio = document.querySelector('#portfolio');
teamBtn =  document.querySelector('#teambtn');
team = document.querySelector('#team');
aboutBtn = document.querySelector('#aboutbtn');
about = document.querySelector('#about');
contactBtn = document.querySelector('#contactbtn');
contact = document.querySelector('#contact');

//navBar functionality
homeBtn.addEventListener("click",()=>{
home.style.display = 'block';
portfolio.style.display = 'none';
team.style.display = 'none';
about.style.display = 'none';
contact.style.display = 'none';
});
portfolioBtn.addEventListener("click",()=>{
portfolio.style.display = 'inline-block';
home.style.display = 'none';
team.style.display = 'none';
about.style.display = 'none';
contact.style.display = 'none';
});
teamBtn.addEventListener("click",()=>{
team.style.display = 'flex';
portfolio.style.display = 'none';
home.style.display = 'none';
about.style.display = 'none';
contact.style.display = 'none';

// teamSlider
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
  coverflowEffect: {
    rotate: 10,
    stretch: -30,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
});
aboutBtn.addEventListener("click",()=>{
about.style.display = 'block';
portfolio.style.display = 'none';
team.style.display = 'none';
home.style.display = 'none';
contact.style.display = 'none';
});

//imageSlider-portfolio screen_1
var slideIndex, slides, dots, captionText;
function initGallery()
{
  slideIndex = 0;
  slides=document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity=1;
  captionText = document.querySelector(".captionHolder .captionText");
  captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;
  dots=[];
  var dotsContainer=document.getElementById("dotsContainer");
  for (var i=0; i<slides.length;i++)
  {
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onClick","moveSlide("+i+")");
    dotsContainer.append(dot);
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n)
{
  moveSlide(slideIndex+n);//11.25
}
function moveSlide(n)
{
  var i,current,next;
  var moveSlideAnimClass={forCurrent:"",forNext:""}
  var slideTextAnimClass;
  if (n>slideIndex)
  {
    if(n>=slides.length){n=0;}
    moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
    moveSlideAnimClass.forNext="moveLeftNextSlide";
    slideTextAnimClass="slideTextFromTop";
  }
  else if (n<slideIndex)
  {
    if(n<0){ n=slides.length-1; }
    moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
    moveSlideAnimClass.forNext="moveRightNextSlide";
    slideTextAnimClass="slideTextFromBottom";
  }
  if(n!= slideIndex)
  {
    next=slides[n];
    current=slides[slideIndex];
    for (i=0;i<slides.length;i++)
    {
      slides[i].className = "imageHolder";
      slides[i].style.opacity=0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex=n;
  }
  captionText.style.display="none";
  captionText.className="captionText" + slideTextAnimClass;
  captionText.innerText=slides[n].querySelector(".captionText").innerText;
  captionText.style.display="block";
}

contactBtn.addEventListener("click",()=>{
contact.style.display = 'flex';
portfolio.style.display = 'none';
team.style.display = 'none';
about.style.display = 'none';
home.style.display = 'none';
});



//register form screen_1
navLine = document.querySelector("#s1LineGsap");



hospitalRBtn = document.querySelector('#hospitalbtn');
patientRBtn = document.querySelector('#patientbtn');
doctorRBtn = document.querySelector('#doctorbtn');

hospitalRForm = document.querySelector('#register_form_hospital');
patientRForm = document.querySelector('#register_form_patient');
doctorRForm = document.querySelector('#register_form_doctor');

navLine.classList.add("animation");


patientRBtn.addEventListener("click",()=>{
  navLine.style.left = "3.5%";
  console.log(navLine);
  patientRForm.style.display = 'flex';
  hospitalRForm.style.display = 'none';
  doctorRForm.style.display = 'none';
});
doctorRBtn.addEventListener("click",()=>{
  navLine.style.left = "37%";
  console.log(navLine);
  doctorRForm.style.display = 'flex';
  patientRForm.style.display = 'none';
  hospitalRForm.style.display = 'none';
});
hospitalRBtn.addEventListener("click",()=>{
  navLine.style.left = "70%";
  console.log(navLine);
  hospitalRForm.style.display = 'flex';
  patientRForm.style.display = 'none';
  doctorRForm.style.display = 'none';
});

 
 
//--------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------EOF home page----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------



patientLoginBtn = document.querySelector('#patient_login_btn');
doctorLoginBtn = document.querySelector('#doctor_login_btn');
hospitalLoginBtn = document.querySelector('#hospital_login_btn');

//Display of screen_2 => login page 
patientLoginBtn.addEventListener("click",()=>{
  screen2Logo.style.display = 'block';
  screen2.style.display = 'block';
    //gsap
//   var rule1 = CSSRulePlugin.getRule("#s2ConGsap1:after")
// gsap.to(rule1,{cssRule:{scaleY:0}, duration:0.5, ease:'SlowMo.ease'});
gsap.from('#conGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
gsap.from('#necGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 1});
gsap.from('#tedGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 2});
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  optionsPage.style.display = 'none';
  hamburgerMenu.style.display = 'none';
});

doctorLoginBtn.addEventListener("click",()=>{
  screen2Logo.style.display = 'block';
  screen2.style.display = 'block';
  //gsap
  gsap.from('#conGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
gsap.from('#necGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 1});
gsap.from('#tedGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 2});
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  optionsPagestyle.display = 'none';
  hamburgerMenu.style.display = 'none';
});

hospitalLoginBtn.addEventListener("click",()=>{
  screen2Logo.style.display = 'block';
  screen2.style.display = 'block';
  //gsap
  gsap.from('#conGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
  gsap.from('#conGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
  gsap.from('#necGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 1});
  gsap.from('#tedGsap',{duration: 1, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 2});
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  optionsPagestyle.display = 'none';
  hamburgerMenu.style.display = 'none';
});


//--------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------EOF login page----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


screen2LoginBtn = document.querySelector('#screen_2_login_btn');
screen2LoginBtn.addEventListener("click",()=>{
  screen2Logo.style.display = 'block';
  optionsPage.style.display = 'block';
  hamburgerMenu.style.display = 'block';
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  screen2.style.display = 'none';
  deviceDriverScreen.style.display = 'none';
  appointmentBookScreen.style.display = 'none';
  //gsap for options page
  gsap.from('#SDh3Gsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
  gsap.from('#OCh3Gsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeInOut', delay: 0});
  gsap.from('#SDpGsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 0.5});
  gsap.from('#OCpGsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeInOut', delay: 0.5});
  //optionsPage
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
});



//HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const li = document.querySelector(".navLinks li");
const line = document.querySelectorAll(".line");
hamburger.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  console.log(line);
  let a=1,i=0;
  for(let no of line ){
    no.classList.toggle("lineOpen");
    if(a===1){
      no.classList.toggle("lineCrossed45");
    }
    if(a===2){
      no.classList.toggle("lineCrossed90");
    }
    if(a==3){
      if(i%2===0){
        no.classList.toggle("lineDelete");
      }
      else{
        setTimeout(function(){ no.classList.toggle("lineDelete"); }, 1000);
      }
      i=i+1;      
    }
    a=a+1;
  }
  // to get the card position and set the input to its position 
  var cardNumber = document.querySelector("#cardNo");
  var cardDate = document.querySelector("#validThru");
  var cardName = document.querySelector("#nameOnCard");

  var cardNumberPosition = cardNumber.getBoundingClientRect();
  var cardDatePosition = cardDate.getBoundingClientRect();
  var cardNamePosition = cardName.getBoundingClientRect();

  

  var cardNumberInput = document.querySelector(".cardNumber");
  var cardDateInput = document.querySelector(".cardDate");
  var cardNameInput = document.querySelector(".cardName");

  cardNumberInput.style.width = cardNumberPosition.width+'px' ;
  cardNumberInput.style.height = cardNumberPosition.height+'px' ;
  cardNumberInput.style.left = cardNumberPosition.left+'px' ;
  cardNumberInput.style.top = cardNumberPosition.top+ 'px' ;

  cardDateInput.style.width = cardDatePosition.width+'px';
  cardDateInput.style.height = cardDatePosition.height+'px';
  cardDateInput.style.left = cardDatePosition.left+'px';
  cardDateInput.style.top = cardDatePosition.top+'px';

  cardNameInput.style.width = cardNamePosition.width+'px';
  cardNameInput.style.height = cardNamePosition.height+'px';
  cardNameInput.style.left = cardNamePosition.left+'px';
  cardNameInput.style.top = cardNamePosition.top+'px';

  //hiding the visa/ mastercard icon
  masterCard = document.querySelector("#mastercard1");
  visaCard = document.querySelector("#visa1");
  var cardNoLength = 1;
  cardNumberInput.addEventListener('keyup',(e)=>{
    if(e.target.value==4){
      masterCard.style.display = 'none';
      visaCard.style.display = 'block';
    }
    if(e.target.value==5){
      visaCard.style.display = 'none';
      masterCard.style.display = 'block';
    }
    if(cardNoLength%4==0 && cardNoLength!=16){
      e.target.value = e.target.value + "-";//adding - between the card nos
    }
    cardNoLength = cardNoLength + 1;
    console.log(cardNoLength,e.target.value );
  })

  // card submission button=> adding a new card
 var payButton = document.querySelector(".newPayment");
 payButton.addEventListener("click",addCard);
 var payCardList = document.querySelector(".payUl");
 function addCard(e){
   e.preventDefault();
   if(cardNumber.value != "" || cardDate.value != "" || cardName.value != ""){
     const newCard = document.createElement("li");
     newCard.classList.add("cardItem");
     const payH2 = document.createElement("h2");
     payH2.innerText =  cardNumberInput.value;
     newCard.appendChild(payH2);
     const payParagraph = document.createElement("p");
     payParagraph.innerText = cardDateInput.value;
     newCard.appendChild(payParagraph);
     const payDelete = document.createElement("button");
     payDelete.classList.add("payDelete");
     payDelete.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
     newCard.appendChild(payDelete);
     payCardList.appendChild(newCard);
   }
 }

})




//--------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------EOF options page----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------


//Display Device Driver page Self Diagnosis
selfDiagnosisBtn = document.querySelector('#selfDiagnosisButton');
selfDiagnosisBtn.addEventListener("click",()=>{
  deviceDriverScreen.style.display = 'block';
  screen2Logo.style.display = 'block';
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  screen2.style.display = 'none';
  optionsPage.style.display = 'none';
  appointmentBookScreen.style.display = 'none';
  //gsap
  gsap.from('#DDGsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeOut', delay: 0.25});
  gsap.from('#DD1Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD2Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD3Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD4Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#insGsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeOut', delay: 0.25});
  gsap.from('#ins1Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins2Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins3Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins4Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  
});

//Display Device Driver page Online Consultation


//Device Driver Page
wifiT = document.querySelector('#wifiTick')
wifiC = document.querySelector('#wifiCross')
ppgT = document.querySelector('#ppgTick')
ppgC = document.querySelector('#ppgCross')
ecgT = document.querySelector('#ecgTick')
ecgC = document.querySelector('#ecgCross')
calibrationT = document.querySelector('#calibrationTick')
calibrationC =document.querySelector('#calibrationCross')

//code for activating tick/cross mark
var wifi = 0, ppg=0, ecg=0, calibration=0;
wifi = 1;
ppg = 1;
ecg = 0;
calibration = 0;

if(wifi===1){
  wifiT.style.color = 'green' ;
}
else{
  wifiC.style.color = 'red';
}
if(ppg===1){
  ppgT.style.color = 'green' ;
}
else{
  ppgC.style.color = 'red';
}
if(ecg===1){
  ecgT.style.color = 'green' ;
}
else{
  ecgC.style.color = 'red';
}
if(calibration===1){
  calibrationT.style.color = 'green' ;
}
else{
  calibrationC.style.color = 'red';
}
//--------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------EOF device driver page----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
selfDiagnosisBtn = document.querySelector('#onlineConsultationButton');
selfDiagnosisBtn.addEventListener("click",()=>{
  appointmentBookScreen.style.display = 'block';
  screen2Logo.style.display = 'block';
  deviceDriverScreen.style.display = 'none';
  screen1Logo.style.display = 'none';
  screen1Login.style.display = 'none';
  screen1.style.display = 'none';
  screen2.style.display = 'none';
  optionsPage.style.display = 'none';
  
  //gsap
  gsap.from('#DDGsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeOut', delay: 0.25});
  gsap.from('#DD1Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD2Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD3Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#DD4Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#insGsap',{duration: 0.7, y:-5,opacity:0, ease:'Power2.easeOut', delay: 0.25});
  gsap.from('#ins1Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins2Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins3Gsap',{duration: 1, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  gsap.from('#ins4Gsap',{duration: 0.7, x:-5,opacity:0, ease:'Power2.easeOut', delay: 0.5});
  
});


//--------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------EOF patient appointment booking page----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------

