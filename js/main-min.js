var myRecust=new XMLHttpRequest;myRecust.open("GET","JSON/main.json"),myRecust.onload=function(){var n=JSON.parse(myRecust.responseText);document.getElementById("About_Name").innerHTML=n.myName,document.getElementById("main_About").innerHTML=n.aboutMe;var e=n.typWritMesseg,t=0;!function(){"use strict";var n=setInterval(function(){document.getElementById("typwrite").textContent+=e[t],(t+=1)>e.length-1&&clearInterval(n)},100)}(),document.getElementById("about_ding").innerHTML=n.whatImDoing.map(function(n){return`\n    <div class="about_box">\n      <span class="about_name small_titls" id="">${n.jop}</span>\n      <p class="about_dis">${n.dist}</p>\n    </div>`}).join("")+'<div class="clearFix"></div>',document.getElementById("main_educ_boxes").innerHTML=n.education.map(function(n){return`\n    <div class="edu_row">\n      <div class="edu_date">\n      <span class="esu_start date">\n      ${n.stareTime} \n      ${n.EndTime?` - <span class="esu_end date">${n.EndTime}</span>`:""}\n      </div>\n      <div class="edu_discrption">\n        <span class="small_titls">${n.college_name}</span>\n        <span class="discrption">${n.department}</span>\n      </div>\n      <div class="clearFix"></div>\n    </div>\n    `}).join(""),document.getElementById("Phons_Numbers").innerHTML=n.myPhons.map(function(n){return`<span> ${n} </span>`}).join(""),document.getElementById("The_Emails").innerHTML=n.myEmails.map(function(n){return`<span> ${n} </span>`}).join(""),document.getElementById("The_adress").innerHTML=`<span> ${n.myAdress} </span>`},myRecust.send();var my_Skils=new XMLHttpRequest;my_Skils.open("GET","JSON/Skils.json"),my_Skils.onload=function(n){n=JSON.parse(my_Skils.responseText);document.getElementById("mainLangBox").innerHTML=`${n.lanSKlis.map(function(n){return`\n    <tr>\n      <th class="langN">${n.lang_N} :</th>\n      <th class="langP">${n.lang_Deg}</th>\n    </tr>`}).join("")}`,document.getElementById("mainProgBox").innerHTML=`${n.progSkils.map(function(n){return`\n      \x3c!-- The Main Skil Section Structher. --\x3e\n      <div class="min_price">\n        <span class="prog_name">${n.prog_N}</span>\n        <div class="preicenttsg_box">\n          <div class="preicent" style="width: ${n.progDeg}">\n            <span class="preic_cout">${n.progDeg}</span>\n          </div>\n        </div>\n        ${n.Others?(e=n.Others,`${e.map(function(n){return`<span class="other">${n}</span>`}).join("")}`):""}\n        <div class="clearFix"></div>\n      </div>  `;var e}).join("")}`},my_Skils.send();var myExperince=new XMLHttpRequest;myExperince.open("GET","JSON/experience.json"),myExperince.onload=function(n){n=JSON.parse(myExperince.responseText);document.getElementById("mainEcxper").innerHTML=n.map(function(n){return`\n  <div class="Ex_box">\n    <div class="poeintOfTheTime">\n      <span>${n.emp_startDate}</span>\n    </div>\n    <span class="small_titls">${n.employment}</span>\n    <span class="small_titls">in ( ${n.emp_pleas} )</span>\n    <span class="starEnd">${n.emp_startDate} - ${n.emp_endDate}</span>\n    <span class="Ex_Dic">${n.emp_detils}</span>\n  </div>\n    `}).join("")},myExperince.send();var tstmonial_struct=new XMLHttpRequest;tstmonial_struct.open("GET","JSON/testmolnial.json"),tstmonial_struct.onload=function(n){n=JSON.parse(tstmonial_struct.responseText);document.getElementById("ma_test_box").innerHTML=n.map(function(n){return`\n    <div class="member_box">\n        <div class="mim_box">\n          <h3>${n.clan_name}</h3>\n          <span class="mam_jop">${n.clan_jop}</span>\n          <p>\n            <i class="fa fa-quote-left"></i> \n              ${n.clan_messige}            \n            <i class="fa fa-quote-right"></i> \n          </p>\n            </div>\n          </div>\n    `}).join("")},tstmonial_struct.send();var socyaLicons=new XMLHttpRequest;socyaLicons.open("GET","JSON/contact.json"),socyaLicons.onload=function(n){n=JSON.parse(socyaLicons.responseText);document.getElementById("mySoc_icons").innerHTML=n.map(function(n){return`\n    <a href="${n.coc_link}">\n      <i class="${n.soc_icon}"></i>\n      <span>${n.soc_name}</span>\n    </a>\n    `}).join("")+'<div class="clearFix"></div>'},socyaLicons.send(),$(function(){"use strict";$(".saab_navgaition .saab_navLinksMenu li").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(window).width()<991&&t(),$("html,body").animate({scrollTop:$("#"+$(this).data("value")).offset().top-$(".saab_navgaition").height()},1e3)});var n=$(".saab_navgaition .saab_navLinksMenu"),e=n.children();function t(){e.animate({opacity:0},50,function(){n.animate({opacity:0,width:0,height:0},50)})}$(window).width()<991&&e.css({opacity:0}),$("#open_mianMenu").click(function(){n.animate({opacity:1,width:"100%",height:"100%"},50,function(){e.animate({opacity:1},50)})}),$("#clos_mianMenu").click(function(){t()});var a=document.getElementById("scrollToTop");a&&(a.innerHTML='<i class="scrollButton fa fa-angle-up", id="scrollButton"></i>'),$("#scrollButton").fadeOut(),$("#scrollButton").click(function(){$("html,body").animate({scrollTop:$("body").offset().top},1e3)}),$(".saab_navgaition").wrap('<div class="nav-pleasholder"></div>'),$(".nav-pleasholder").height($(".saab_navgaition").outerHeight()),$(window).scroll(function(){$(window).scrollTop()>2e3?$("#scrollButton").fadeIn(500):$("#scrollButton").fadeOut(500);var n=$(".saab_navgaition").height()+$(".header").height()+$(".hallo_messeg").height();$(window).scrollTop()>n?$(".saab_navgaition").addClass("fixed_nav"):$(".saab_navgaition").removeClass("fixed_nav")})}),$(window).on("load",function(){$(function(){"use strict";var n=$(".Testimonial .T_buttons .right"),e=$(".Testimonial .T_buttons .left"),t=($(".Testimonial .main_test_box .member_box"),$(".Testimonial .main_test_box .member_box:first"));function a(){$(".Testimonial .main_test_box .member_box:first").hasClass("fadet")?e.fadeOut(0):e.fadeIn(0),$(".Testimonial .main_test_box .member_box:last").hasClass("fadet")?n.fadeOut(0):n.fadeIn(0)}t.fadeIn(),t.addClass("fadet"),a(),$(".Testimonial .T_buttons button").click(function(){$(this).hasClass("right")?$(".Testimonial .main_test_box .fadet").fadeOut(200,function(){$(this).removeClass("fadet").next(".member_box").addClass("fadet").fadeIn(),a()}):$(".Testimonial .main_test_box .fadet").fadeOut(200,function(){$(this).removeClass("fadet").prev(".member_box").addClass("fadet").fadeIn(),a()})})})});