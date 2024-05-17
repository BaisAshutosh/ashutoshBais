// window.onscroll = function() {myFunction()};

// var header = document.getElementById("sticky-header");
// var sticky = header.getBoundingClientRect().top + window.scrollY;
// var footer = document.getElementById("seven");
// var stickyFooter = Math.floor(footer.getBoundingClientRect().top + window.scrollY);

// function myFunction() {

// console.log("header",sticky)
// console.log("window.pageYOffset",window.pageYOffset)
// console.log("stickyFooter",stickyFooter)

// if (window.pageYOffset > sticky && stickyFooter>window.pageYOffset ) {

//     header.classList.add("header-sticky");
//   } else {
//     header.classList.remove("header-sticky");
//   }
// }

function closeModal() {
  console.log("inside close modal");

  // var modal = document.getElementsByClassName("modal-wrapper");
  var modal = document.querySelector(".modal-wrapper");
  console.log("modal====", close);
  // if(modal[0])
  modal.style.display = "none";
  event.stopPropagation();
}
