/* 

App Landing Template

http://www.templatemo.com/tm-474-app-landing

*/
jQuery(document).ready(function () {
  // jQuery.templatemo_is_chrome
  $.templatemo_is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
  $.templatemo_is_ie = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
  // Template Mo menu hide
  jQuery.fn.templateMoMenuHide = function () {
    return this.each(function () {
      $(this)
        .removeClass("shadow-top-down")
        .animate({ opacity: 0, top: 120 }, 240, "easeOutSine", function () {
          $(this).hide();
        });
      return true;
    });
  }
  // Template Mo menu show
  jQuery.fn.templateMoMenuShow = function () {
    return this.each(function () {
      $(this)
        .addClass("shadow-top-down")
        .show()
        .css({ opacity: 0, top: 120 })
        .animate({ opacity: 1, top: 130 }, 40, "easeInSine");
      return true;
    });
  }
  // Menu click on plus btn
  $('.show-menu a').on('click', function (e) {
    // When nav is visible make nav hide
    if ($('nav').is(":visible")) {
      $('nav:visible').templateMoMenuHide();
      // When nav is not visible make nav show
    } else {
      $('nav').templateMoMenuShow();
    }
    return false;
  });
  // Menu hide when click on any area of document
  $(document).on('click', function (e) {
    $('nav:visible').templateMoMenuHide();
    return true;
  });
  // Menu scroll to.
  $('a.scroll_effect').on('click', function (e) {
    target_element = $(this).attr('href');
    scroll_to = $(target_element).offset().top;
    if ($(window).scrollTop() != scroll_to && target_element !== undefined) {
      // Chrome scroll to calculation and other browser scroll to calculation is different.
      if ($.templatemo_is_chrome) {
        body_scroll_target = scroll_to;
      } else {
        body_scroll_target = $("body").scrollTop() + scroll_to;
      }
      $('html,body').animate({ scrollTop: body_scroll_target }, 1000);
    }
    // If menu is visible hide the nav.
    $('nav:visible').templateMoMenuHide();
    return false;
  });
  // Javascropt parallax effect config for different browser.
  // Chrome broswer setting
  if ($.templatemo_is_chrome) {
    $("html").attr("style", "overflow:auto;");
    $("body").attr("style", "overflow:auto;height:auto;");
    $('#templatemo_home').parallax("50%", 0.1);
    $('#templatemo_download').parallax("50%", 0.1);
    // Non IE broswer setting
  } else if (!$.templatemo_is_ie) {
    $("html").attr("style", "overflow: auto;");
    $("body").attr("style", "background: #455a64;overflow: auto;height: auto;");
    $('#templatemo_home').parallax("50%", 0.1);
    $('#templatemo_download').parallax("50%", 0.1);
    // IE broswer setting
  } else {
    $('#templatemo_home').parallax("50%", 0.5);
    $('#templatemo_download').parallax("50%", 0.5);
  }
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

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

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
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
  // review


  const reviews = [
    {
      id: 1,
      name: "John",
      job: "Dates",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I booked a date at a new restaurant through this app and it was amazing. My partner and I had a great time and we'll definitely be using this app again."
    }, {
      id: 2,
      name: "Rachel",
      job: "Engagements",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I used the engagement announcement feature to share the news with my friends and family and everyone loved it! The customization options made it easy to create a beautiful and personal announcement."
    },
    {
      id: 3,
      name: "Mark",
      job: "Weddings",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "The budget tracker feature helped me stay on track with my wedding expenses and the guest list tool made it easy to keep track of RSVPs."
    },

    {
      id: 4,
      name: "Jack",
      job: "Engagements",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "The proposal resources on this app were so helpful in planning my surprise proposal. The photographer I hired through the app captured amazing photos and I'll treasure them forever."
    }, {
      id: 5,
      name: "Emily",
      job: "Dates",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque neque aut laudantium illo incidunt error aliquam eius minima amet. Ad beatae, culpa obcaecati quam cupiditate similique consequatur! Inventore, et."
    }, {
      id: 6,
      name: "Kelly",
      job: "Events",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I used this app to plan a surprise birthday party for my best friend and it was a huge success. The event rental integration made it easy to find everything we needed and the messaging feature helped me coordinate with all the guests."
    }, {
      id: 7,
      name: "Lisa",
      job: "Weddings",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I used this app to plan my entire wedding and it made the process so much easier. The vendor directory was a lifesaver and I loved being able to create my own personalized wedding website."
    }, {
      id: 8,
      name: "Mike",
      job: "Engagements",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I found the perfect engagement ring on this app and the customization options were so easy to use. My fiancee loves the ring and I couldn't be happier with my purchase."
    }, {
      id: 9,
      name: "Amy",
      job: "Events",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "The in-app messaging feature was great for communicating with guests and keeping everyone updated on event details. It made the entire planning process so much easier."
    }, {
      id: 10,
      name: "Jen",
      job: "Weddings",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I had some questions about wedding planning and the expert advice I received through this app was so helpful. The wedding planners were knowledgeable and responsive, and I felt like I had a trusted resource throughout the planning process."
    }, {
      id: 11,
      name: "Tom",
      job: "Events",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I created a corporate event through this app and it was so easy to use. The customization options made it easy to create a professional and polished event."
    },
  ];

  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentItem = 0;

  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });

  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  mobiscroll.datepicker('#datetimepicker', {
    controls: ['calendar', 'time'],
    touchUi: true
  });

  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  //   DATE PICKER


});