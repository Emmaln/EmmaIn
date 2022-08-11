
/* Goggle Map JS */

function initMap() {
    var location = {lat:24.957491, lng: 46.711202};
    var map= new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: location
    });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
    
}

/*  Table section Slider JS */
const slider = document.querySelector('.slider');

const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator,ind){
  //sectionIndex = ind;
  indicator.addEventListener('click', function(){
  document.querySelector('.controls .selected').classList.remove('selected');
indicator.classList.add('selected');

  slider.style.transform = 'translate(' + (ind) * -50 + '%)';
});
});

/* moving slider of skill section by touch and pointer or mouse */


const track = document.querySelector('.slider_skill');

let initialPosition = null;
let moving = false;
let transform = 0;

const gestureStart = (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
  if (transformMatrix !== 'none') {
    transform = parseInt(transformMatrix.split(',')[3].trim());
  }
};

const gestureMove = (e) => {
  if (moving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    track.style.transform = `translateX(${transform + diff}px)`;  
  }
};

const gestureEnd = (e) => {
  moving = false;
};

if(screen.width < 800){

if (window.PointerEvent) {
  window.addEventListener('pointerdown', gestureStart);
  window.addEventListener('pointermove', gestureMove);
  window.addEventListener('pointerup', gestureEnd);  
} else {
  window.addEventListener('touchdown', gestureStart);
  window.addEventListener('touchmove', gestureMove);
  window.addEventListener('touchup', gestureEnd);  

  window.addEventListener('mousedown', gestureStart);
  window.addEventListener('mousemove', gestureMove);
  window.addEventListener('mouseup', gestureEnd);  
}
}





/* Project Customer section slider with arrow JS */
const sliderp = document.querySelector('.slider_cardp');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;


  leftArrow.addEventListener('click', function(){
    sectionIndex  = (sectionIndex > 0 ) ? sectionIndex - 1 : 0;
    sliderp.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
  });
  rightArrow.addEventListener('click', function(){
    sectionIndex  = (sectionIndex < 8 ) ? sectionIndex + 1 : 8;
    sliderp.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
  });

  /* menu js */
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');
  const nav = document.querySelector('nav');

  menu.addEventListener('click', () => {
      nav.classList.add('open-nav')
  });

  close.addEventListener('click', () => {
      nav.classList.remove('open-nav')
  });

  /* Type Writer */
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/* Translation */

/*var language; 
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('en') : false;
$.ajax({ 
url:  '/language/' +  localStorage.getItem('language') + '.json', 
dataType: 'json', async: false, dataType: 'json', 
success: function (lang) { language = lang } });
}

function setLanguage(lang) {
localStorage.setItem('language', lang);
}

$(document).ready(function(){
  $('#div1').text(language.date);
  });*/


  