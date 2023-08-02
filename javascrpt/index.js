// /*
// Navigation
// */

// //

// const navOpen = document.querySelector(".nav__hamburger");
// const navClose = document.querySelector(".close__toggle");
// const menu = document.querySelector(".nav__menu");

// navOpen.addEventListener("click", () => {
//   const navLeft = menu.getBoundingClientRect().left;
//   if (navLeft < 0) {
//     menu.style.left = "0";
//     document.body.classList.add("active");
//   } else {
//     menu.style.left = "-40rem";
//     document.body.classList.remove("active");
//   }
// });

// navClose.addEventListener("click", () => {
//   const navLeft = menu.getBoundingClientRect().left;
//   if (navLeft > 0) {
//     menu.style.left = "0";
//   } else {
//     menu.style.left = "-40rem";
//     document.body.classList.remove("active");
//   }
// });

// // Smooth Scroll

// const navBar = document.querySelector(".navigation");
// const scrollLinks = document.querySelectorAll(".scroll-link");

// Array.from(scrollLinks).forEach(link => {
//   link.addEventListener("click", e => {
//     // Prevent Default
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     const navHeight = navBar.getBoundingClientRect().height;
//     const fixNav = navBar.classList.contains("fix__nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixNav) {
//       position = position - navHeight;
//     }

//     window.scrollTo({
//       left: "0",
//       top: position,
//     });

//     menu.style.left = "-40rem";
//     document.body.classList.remove("active");
//   });
// });

// // FixNav

// window.addEventListener("scroll", () => {
//   const navHeight = navBar.getBoundingClientRect().height;
//   const scrollHeight = window.pageYOffset;

//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix__nav");
//   } else {
//     navBar.classList.remove("fix__nav");
//   }
// });
// Custom Navigation
const openNav = document.querySelector(".nav__hamburger");
const closeNav = document.querySelector(".close__toggle");
const navMenu = document.querySelector(".nav__menu");

openNav.addEventListener("click", () => {
  const navLeft = navMenu.getBoundingClientRect().left;
  if (navLeft < 0) {
    navMenu.style.left = "0";
    document.body.classList.add("active");
  } else {
    navMenu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

closeNav.addEventListener("click", () => {
  const navLeft = navMenu.getBoundingClientRect().left;
  if (navLeft > 0) {
    navMenu.style.left = "0";
  } else {
    navMenu.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

// Smooth Scrolling

const navigationBar = document.querySelector(".navigation");
const scrollLinks = document.querySelectorAll(".scroll-link");

Array.from(scrollLinks).forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigationBar.getBoundingClientRect().height;
    const fixNav = navigationBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: "0",
      top: position,
    });

    navMenu.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});

// Fix Navigation Bar

window.addEventListener("scroll", () => {
  const navHeight = navigationBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navigationBar.classList.add("fix__nav");
  } else {
    navigationBar.classList.remove("fix__nav");
  }
});
