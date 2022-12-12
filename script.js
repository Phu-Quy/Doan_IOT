//chuyen slide show trang chu
var slideIndex = 0;
// showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}


//tab thanh vien -------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".thongtin");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");


tabs.forEach((tab, index) => {
const pane = panes[index];

tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".thongtin.active").classList.remove("active");
    
    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
    
};
});

  


