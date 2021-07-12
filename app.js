let toggleNavStatus = false;

let toggleNav = function () {
    const getSidebar = document.querySelector(".navbar-menu");
    const getSidebarUL = document.querySelector(".side-nav ul");
    const getSidebarLinks = document.querySelectorAll(".side-nav a");
    const getSidebarVisibility = document.querySelector(".side-nav");
    const htmlGrab = document.querySelector("html");
    const hamburger = document.querySelector('.hamburger');

    hamburger.classList.toggle('is-active');

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible"

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      htmlGrab.classList.add("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        htmlGrab.classList.remove("clicked");
        toggleNavStatus = false;
    }
}

// ------------------------------------------------- DARK MODE -----------------------------

/* Body and Core Elements */
var body = document.querySelector("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
// for an optional footer dark mode button as well
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// This is where you add the dakr mode class.  When the dark mode is enabled as true in localstorage,
// it will add all the dark-mode classes to the elements we created in the variables above
const enableDarkMode = () => {

  // Core dark mode styles
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled")
}

// This is where we remove dark mode.  Just copy and paste all the lines where you added a class
// and paste them into this function, then change "addClass" to "removeClass"
const disableDarkMode = () => {

  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
})

// Copy and paste the dark mode toggle button into the footer, give it a class 
// of "footer .dark-mode-button" so you can have two buttons that toggle dark mode.
// This second function is for the footer dark mode button to toggle dark mode in 
// localstorage
darkModeToggleFooter.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})