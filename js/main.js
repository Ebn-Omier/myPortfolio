// alert('if there\'s something roung pleas refrish the page and that will be solved')
//- Global strucher
//=====================

var myRecust= new XMLHttpRequest();  
myRecust.open('GET', 'JSON/main.json');
myRecust.onload = function name() {
  var myData = JSON.parse(myRecust.responseText);

  //-
  document.getElementById("About_Name").innerHTML = myData.myName ;
  //-
  document.getElementById("main_About").innerHTML = myData.aboutMe ;

  //- hallo messeg ajustment.
  var myText = myData.typWritMesseg, i =	0 ;

  // type writer sffect.
  (function writing() { 'use strict';
    var typRit = setInterval(function (){
      document.getElementById("typwrite").textContent += myText[i];
        i = i + 1 ;
        if ( i > myText.length - 1 ) {
          clearInterval(typRit);
        };
      }, 100);
  }()); //__

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
  //-
  document.getElementById("The_Emails").innerHTML = myData.myEmails.map(function (mail) {
    return `<span> ${mail} </span>`
  }).join("");
  //-
  document.getElementById("The_adress").innerHTML = `<span> ${myData.myAdress} </span>` ;
};
myRecust.send();

//- Skils
//================
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

  //- 
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

//- Experince
//==================
var myExperince = new XMLHttpRequest();
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

//- Testmonial
//================
var tstmonial_struct = new XMLHttpRequest();
tstmonial_struct.open('GET', 'JSON/testmolnial.json');
tstmonial_struct.onload = function name(tesmon) {
  var tesmon = JSON.parse(tstmonial_struct.responseText);
  
  document.getElementById('ma_test_box').innerHTML = tesmon.map(function(member) {
    return `
    <div class="member_box">
        <div class="mim_box">
          <h3>${member.clan_name}</h3>
          <span class="mam_jop">${member.clan_jop}</span>
          <p>
            <i class="fa fa-quote-left"></i> 
              ${member.clan_messige}            
            <i class="fa fa-quote-right"></i> 
          </p>
            </div>
          </div>
    `
  }).join('') ;
// ${member}
};
tstmonial_struct.send();


//- Contsct / socyaLicons
//============================
var socyaLicons = new XMLHttpRequest();
socyaLicons.open('GET', 'JSON/contact.json');
socyaLicons.onload = function name(icons) {
  var icons = JSON.parse(socyaLicons.responseText);

  document.getElementById('mySoc_icons').innerHTML = icons.map(function(socyal) {
    return `
    <a href="${socyal.coc_link}">
      <i class="${socyal.soc_icon}"></i>
      <span>${socyal.soc_name}</span>
    </a>
    `
  }).join('') + `<div class="clearFix"></div>`
// ${socyal}
};
socyaLicons.send();


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

  // //- the fuction to Hide the green site (loder) on page loding.
  //   // Hide the items until the page has loaded.
	// $(window).on('load', function() {
	// 	// Fad Out the loading Div after the page has loaded.
	// 	window.setTimeout(function() { 
  //     $("#loderDiv").removeClass('saab_loder')
  //   }, 100);
	// });
  

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

});
$(window).on('load', function() {
  $(function() {	'use strict';
    
    var //- The buttons
    next_button = $('.Testimonial .T_buttons .right'),
    prev_button = $('.Testimonial .T_buttons .left');

    var //- The sections.
    mian_clan_box = $('.Testimonial .main_test_box .member_box'),
    first_box = $('.Testimonial .main_test_box .member_box:first');

    // mian_clan_box.fadeOut();
      //- hide the first box
      first_box.fadeIn();
      
      //-  add class fadet
      first_box.addClass("fadet");
    
    //_function to check the test box first / last.
    function checkTest() { 'use strict';
      
      //_if the mimbers is first one = fadeOut "nextButton" else = fadeIn "nextButton".
      if ($('.Testimonial .main_test_box .member_box:first').hasClass("fadet")) {
        prev_button.fadeOut(0);
      } else {
        prev_button.fadeIn(0);
      };
      
      //_if the mimbers is last one = fadeOut "prevtButton" else = fadeIn "prevtButton".
      if ($('.Testimonial .main_test_box .member_box:last').hasClass("fadet")) {
        next_button.fadeOut(0);
      } else {
        next_button.fadeIn(0);
      };     
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
        });
      }
    }); //____End

  });
});
