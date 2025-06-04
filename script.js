$(function(){

//ロゴ

  $(".logo").hover(function(){
	$(this).attr("src","images/logo_energy_cafe2.png");
 },function(){
   $(this).attr("src","images/logo_energy_cafe.png");
 });



 //　slick

$('.slick01').slick({ //{}を入れる
    autoplay: true, //「オプション名: 値」の形式で書く
    dots: true, //複数書く場合は「,」でつなぐ
    arrows:true,
    infinite: true,
    centerMode: true,
    variableWidth: true,

    responsive: [{
        breakpoint: 600,
        settings: {
        arrows: false,
        }
    }]
  });



//ハンバーガーメニュー

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




//コンタクトフォーム

const submit_btn = document.getElementById("submit_btn");

const contact_name = document.getElementById("name");
const email = document.getElementById("email");
const body = document.getElementById("message");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const body_error = document.getElementById("body_error");

const email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/;
const body_exp = /^.{1,100}$/;

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (contact_name.value == "") {
        name_error.classList.remove("hidden");
    }

    if (!email_exp.test(email.value)) {
        email_error.classList.remove("hidden");
    }

    if (!body_exp.test(body.value)) {
        body_error.classList.remove("hidden");
    }

    if (name_error.classList.contains("hidden") && email_error.classList.contains("hidden") && body_error.classList.contains("hidden")) {
        alert(`お名前：${contact_name.value}\nemail：${email.value}\nお問合せ内容：${body.value}`);
    }

});

contact_name.addEventListener("keyup", (e) => {
    if (contact_name.value == "") {
        name_error.classList.remove("hidden");
    } else {
        name_error.classList.add("hidden");
    }
});

email.addEventListener("keyup", (e) => {
    if (!email_exp.test(email.value)) {
        email_error.classList.remove("hidden");
    } else {
        email_error.classList.add("hidden");
    }
});

body.addEventListener("keyup", (e) => {
    if (!body_exp.test(body.value)) {
        body_error.classList.remove("hidden");
    } else {
        body_error.classList.add("hidden");
    }
});


});
