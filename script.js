$(function(){
 $(".logo").hover(function(){
	$(this).attr("src","images/logo_energy_cafe2.png");
 },function(){
   $(this).attr("src","images/logo_energy_cafe.png");
 });


$('.slick01').slick({ //{}を入れる
    autoplay: true, //「オプション名: 値」の形式で書く
    dots: true, //複数書く場合は「,」でつなぐ
    arrows:true,
    infinite: true,

    responsive: [{
        breakpoint: 800,
        settings: {
         centerMode: true,
         variableWidth: true,
          arrows: false,
        }
    }]

    });
  




const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav li");
const mask = document.querySelector('#js-mask');

burger.addEventListener("click", () => {
  //console.log("click");
  //console.log(navLinks.classList);
  nav.classList.toggle("nav-active");
  mask.classList.toggle('active');
  

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("toggle");
});



mask.addEventListener("click", () => {
  //console.log("click");
  //console.log(navLinks.classList);
  nav.classList.toggle("nav-active");
  mask.classList.toggle('active');
  

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("toggle");
});




});
