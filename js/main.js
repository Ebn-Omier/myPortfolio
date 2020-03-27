
var myExperince= new XMLHttpRequest();
  
myExperince.open('GET', 'JSON/experience.json');

myExperince.onload = function name(skilsData) {
  var skilsData = JSON.parse(myExperince.responseText);
  
  document.getElementById("mainEcxper").innerHTML = skilsData.map(function(exper) {
    return `
  <div class="Ex_box">
    <div class="poeintOfTheTime">
      <span>${exper.emp_startDate}</span>
    </div>
    <span class="small_titls">${exper.employment}</span>
    <span class="small_titls">in ( ${exper.emp_pleas} )</span>
    <span class="starEnd">${exper.emp_startDate} - ${exper.emp_endDate}</span>
    <span class="Ex_Dic">${exper.emp_detils}</span>
  </div>
    `
  }).join("")
};
myExperince.send();

//- Global strucher
//=====================

var myRecust= new XMLHttpRequest();
  
myRecust.open('GET', 'JSON/main.json');

myRecust.onload = function name() {
  var myData = JSON.parse(myRecust.responseText);
  
  document.getElementById("About_Name").innerHTML = myData.myName ;
  
  document.getElementById("main_About").innerHTML = myData.aboutMe ;

  //- About
  //===============
  document.getElementById("about_ding").innerHTML = myData.whatImDoing.map(function (jap) {
    return `
    <div class="about_box">
      <span class="about_name small_titls" id="">${jap.jop}</span>
      <p class="about_dis">${jap.dist}</p>
    </div>` 
  }).join("") + '<div class="clearFix"></div>';


  //- education
  //==================
  document.getElementById("main_educ_boxes").innerHTML = myData.education.map(function (EDU) {
    return `
    <div class="edu_row">
      <div class="edu_date">
      <span class="esu_start date">
      ${EDU.stareTime} 
      ${EDU.EndTime ? ` - <span class="esu_end date">${EDU.EndTime}</span>` :`` }
      </div>
      <div class="edu_discrption">
        <span class="small_titls">${EDU.college_name}</span>
        <span class="discrption">${EDU.department}</span>
      </div>
      <div class="clearFix"></div>
    </div>
    `
  }).join("");

  //- contact 
  //=================
  document.getElementById("Phons_Numbers").innerHTML = myData.myPhons.map(function (mub) {
    return `<span> ${mub} </span>`
  }).join("");

  document.getElementById("The_Emails").innerHTML = myData.myEmails.map(function (mail) {
    return `<span> ${mail} </span>`
  }).join("");

  document.getElementById("The_adress").innerHTML = `<span> ${myData.myAdress} </span>` ;

 // console.log(myData.myName);
};
myRecust.send();


var my_Skils= new XMLHttpRequest();
  
my_Skils.open('GET', 'JSON/Skils.json');

my_Skils.onload = function name(skilsData) {
  var skilsData = JSON.parse(my_Skils.responseText);
  
  document.getElementById("mainLangBox").innerHTML = 
  
  `${skilsData.lanSKlis.map(function(lang) {
    return `
    <tr>
      <th class="langN">${lang.lang_N} :</th>
      <th class="langP">${lang.lang_Deg}</th>
    </tr>`
  }).join("")}`;
  
  //- function to includ the other items
  function OtherTcno(oth) {
    return `${oth.map(function(tic){
      return `<span class="other">${tic}</span>`
    }).join('')}`
  };

  document.getElementById("mainProgBox").innerHTML = 
  `${skilsData.progSkils.map(function(progeam){
    return `
      <!-- The Main Skil Section Structher. -->
      <div class="min_price">
        <span class="prog_name">${progeam.prog_N}</span>
        <div class="preicenttsg_box">
          <div class="preicent" style="width: ${progeam.progDeg}">
            <span class="preic_cout">${progeam.progDeg}</span>
          </div>
        </div>
        ${progeam.Others ? OtherTcno(progeam.Others) : '' }
        <div class="clearFix"></div>
      </div>  `
  }).join('') }`;

  
};
my_Skils.send();

var myWorksSrucher= new XMLHttpRequest();
  
myWorksSrucher.open('GET', 'JSON/myWorks.json');

myWorksSrucher.onload = function name(works) {
  var works = JSON.parse(myWorksSrucher.responseText);
  
  document.getElementById("workMainGullBox").innerHTML = works.map(function(wrkSrtct) {
    return `
  <div class="gull_box">
    <img class="main_pro_img" src="${wrkSrtct.work_img}" alt=""/>
    <div class="mainPOPsection">
      <div class="close_pop"> x </div>
      <img src="${wrkSrtct.work_img}" alt=""/>
      <div class="disc"> 
        <h3 class="proj_Name">${wrkSrtct.W_name}</h3>
        <p class="proj_disc_text">${wrkSrtct.W_disc}sit</p>
        <ul>
          use:
          ${ wrkSrtct.used_tecnolges.map(function(tec){
            return `<li>${tec}</li>`;
          }).join('') };
        </ul>
        <span class="proj_Date">complrted at: ${wrkSrtct.W_time}</span>
        <a class="proj_link" href="${wrkSrtct.W_link}">view project</a>
      </div>
    </div>
  </div>
    `
  }).join("") + `<div class="clearFix"></div>`
};
myWorksSrucher.send();

//- all about Works section.
$(function() {	'use strict'; 

  var pro_img_box  = $('.works .main_worj_gull .gull_box img'),
      pro_box = $('.works .main_worj_gull .gull_box'),
      pro_pop_box = $(".works .mainPOPsection"),
      pro_clos_but = $(".works .mainPOPsection .close_pop"),
      pro_link = $(".works .mainPOPsection .proj_link")

  $('.works .main_worj_gull .gull_box img').click(function() {
    $(this).next('.mainPOPsection').fadeIn();
  })
  $(".works .mainPOPsection .proj_link").click(function() {
    $('.works .main_worj_gull .gull_box').children('.mainPOPsection').fadeOut();
  })

  pro_clos_but.click(function(){
	  pro_box.children('.mainPOPsection').fadeOut();
  }) 

})

// her is about navgation sliding
//===============================
$(function() {  'use strict';
  
  var navLinksA = $('.saab_navgaition .saab_navLinksMenu li');
  
  //- on clike the navgation links.
  navLinksA.click(function() {
    
    //- add and remov (active) Class.
    $(this).addClass("active").siblings().removeClass("active");
    
    //- slid up the menu just on phone screen.
    if ($(window).width() < 991) { close_mianu()  }//- do nothing.
    
    //- scroll to the link section.
    $('html,body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top - $('.saab_navgaition').height()
    }, 1000 );
  });

  //- the fuction to Hide the green site (loder) on page loding.
    // Hide the items until the page has loaded.
	$(window).on('load', function() {
		// Fad Out the loading Div after the page has loaded.
		window.setTimeout(function() { $("#loderDiv").fadeOut(); }, 100);
	});
  

  var min_mienu = $('.saab_navgaition .saab_navLinksMenu'),
  min_mienu_chil = min_mienu.children();

  //- Hide the nav child befor EveryThings.
  if ( $(window).width() < 991 ) { min_mienu_chil.css({"opacity": 0}) };
  
  //- dunction ofr showing up the navgation.
  //==========================================
  function open_mianu() {'use strict';
    min_mienu.animate({ 'opacity':1, 'width': '100%', 'height': '100%' }, 50, function() { 
      min_mienu_chil.animate({'opacity':1}, 50); 
    })
  }

  //- function for Hideing the navgatipon.
  //=========================================
  function close_mianu() {'use strict';
    min_mienu_chil.animate({'opacity':0}, 50, function () {
      min_mienu.animate({ 'opacity':0, 'width': 0, 'height': 0 },50)
    }); 
  };

  //- call the functions
  $("#open_mianMenu").click( function() { open_mianu(); });
  $("#clos_mianMenu").click( function() { close_mianu(); });

  //- add scrol icom
  var scrol_Div = document.getElementById('scrollToTop');

  //- add the scroll button if is ecthist.
  if (scrol_Div) {
    scrol_Div.innerHTML = '<i class="scrollButton fa fa-angle-up", id="scrollButton"></i>';
  }

  //-hide the icon
  $("#scrollButton").fadeOut();

  //_scrollto top on clike the icon.
  $("#scrollButton").click(function() {
    $('html,body').animate({
      scrollTop: $('body').offset().top
    }, 1000);
  })

  //- add elemment to cover the navgation hight. with same hight of navgation.
  $(".saab_navgaition").wrap('<div class="nav-pleasholder"></div>');
	$(".nav-pleasholder").height($(".saab_navgaition").outerHeight());

  //- actions will happn with window scrolling.
  $(window).scroll(function() {

    // - show and hide the scroll top button on scroll.
		//=================================================
		if ( $(window).scrollTop() > 2000) {
			$("#scrollButton").fadeIn(500);
		} else {
			$("#scrollButton").fadeOut(500);
    }

    //-
    var top_nav_speacr = 
      $('.saab_navgaition').height() + 
      $('.header').height() +
      $('.hallo_messeg').height();
    
    if ( $(window).scrollTop() > top_nav_speacr ) {
      $('.saab_navgaition').addClass('fixed_nav')
    } else {
      $('.saab_navgaition').removeClass('fixed_nav');
    }

  });

  //- hallo messeg ajustment.
  var myText =
    "Hallo welcom into my psge this is my only page and her you can fine everything you need",
    i 			=	0,
    divHiddn 	=	$("#typwrite");
  
  // type writer sffect.
  (function writing() {
    'use strict';
    
    var typRit = setInterval(function (){
        document.getElementById("typwrite").textContent += myText[i];
        i = i + 1;
        if (i > myText.length - 1) {
          clearInterval(typRit);
        };
      }, 100);
  }()); //__

});

$(function() {	'use strict';
  
  var //- The buttons
    next_button = $('.Testimonial .T_buttons .right'),
    prev_button = $('.Testimonial .T_buttons .left');

  var //- The sections.
    mian_clan_box = $('.Testimonial .main_test_box .member_box'),
    first_box = $('.Testimonial .main_test_box .member_box:first');

    first_box.fadeIn();

    first_box.addClass("fadet");
  
  //_function to check the test box first / last.
  function checkTest() { 'use strict';
    
    //_if the mimbers is first one = fadeOut "nextButton" else = fadeIn "nextButton".
    if ($('.Testimonial .main_test_box .member_box:first').hasClass("fadet")) {
      prev_button.fadeOut(0)
    } else {
      prev_button.fadeIn(0)
    }
    
    //_if the mimbers is last one = fadeOut "prevtButton" else = fadeIn "prevtButton".
    if ($('.Testimonial .main_test_box .member_box:last').hasClass("fadet")) {
      next_button.fadeOut(0)
    } else {
      next_button.fadeIn(0)
    }     
  }; //_end checkTest.

  //run the checer function.
  checkTest();

  //_on clikc the button.
  $('.Testimonial .T_buttons button').click(function() {
    if ($(this).hasClass("right")){ //_on Clikc next button =
      //_fadeOut this and fadeIn the next titleBox
      $(".Testimonial .main_test_box .fadet").fadeOut(200, function() {
        $(this).removeClass("fadet").next(".member_box").addClass("fadet").fadeIn();
        checkTest(); //_and run checkTest function.
      });
    } else {	//_on Clikc prev button =
      
      //_fadeOut this and fadeIn the prev titleBox
      $(".Testimonial .main_test_box .fadet").fadeOut(200, function() {
        $(this).removeClass("fadet").prev(".member_box").addClass("fadet").fadeIn();
        checkTest(); //_and run checkTest function.
      });}
  }); //____End

});

