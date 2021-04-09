//function to display and hide portfolio tabs
function openField(evt, fieldName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(fieldName).style.display = "block";
    evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//foundation code
$(document).foundation() ;
//function to animate experience timeline
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
//function to display portfolio images' titles and captions
$(document).ready(function () {
  $('.photo img').on('click', function () {
      var image = $(this).attr('src');
      var caption = $(this).attr('caption');
      var title = $(this).attr("alt");
      //alert(image);
      $('#myModal').on('show.bs.modal', function () {
          $(".showimage").attr("src", image);
          $('.modal-title').html(title);
          $('.modal-caption').html(caption);
      });
    });
});
//update year for copyright
var d = new Date();
$('#year').html(d.getFullYear());
