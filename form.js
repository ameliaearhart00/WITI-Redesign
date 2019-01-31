// YOUR CODE HERE
// Event listener for form submission
$("sendEmail").click(function() {
  var firstName = $("firstName").val();

  $(".modal-body").html(
    "Thank you, " + firstName + ".Your mesage has been sent!"
  );

  $(".form-control").val("");
});

// Save the first name as a variable

// Set HTML of .modal-body

// Clear all fields in form

// Scrollspy added to tabs and Body of page
$("body").scrollspy({ target: "#navbar-scroll" });

// Scroll Reveal

(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal(
    ".card",
    {
      duration: 600,
      distance: "20px",
      easing: "ease-out",
      origin: "bottom",
      reset: true,
      scale: 1,
      viewFactor: 0,
      afterReveal: revealChildren
    },
    150
  );

  var revealChildren = sr.reveal(
    ".card-title, .card-text, .card-process img, .jumbotron-about, .flipInY",
    {
      duration: 500,
      scale: 1,
      distance: "20px",
      origin: "bottom",
      reset: true,
      easing: "ease-out",
      viewFactor: 1
    },
    75
  );
})();

// Arrow Animation
$(document).ready(function() {
  $("#down-page-arrow").hide();

  $("#down-page-arrow")
    .delay(1500)
    .fadeIn(1000);
});

$("#down-page-arrow").click(function() {
  $("body").animate({ scrollTop: $("#sign-in-wrap").offset().top }, "slow");
});
