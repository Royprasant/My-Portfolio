console.log("🚀 script.js is loaded and running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running");

    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    console.log(menuIcon); // Check if it exists
    console.log(navMenu);  // Check if it exists

    if (!menuIcon) {
        console.error("Error: #menu-icon not found!");
        return;
    }

    if (!navMenu) {
        console.error("Error: #nav-menu not found!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        console.log("Menu clicked");
        navMenu.classList.toggle("active");

        // Toggle icon
        menuIcon.innerHTML = navMenu.classList.contains("active")
            ? '<i class="fas fa-times"></i>'  // Close icon
            : '<i class="fas fa-bars"></i>';  // Menu icon
    });
});

// Setup and start animation!

    var typed = new Typed('#element', {
      strings: ['Chemical Engineer.', 'Web Developer.', 'Problem Solver.', 'Part-Time Coder.', 'Tech Enthusiast.', 'Curious Mind.'],
      typeSpeed: 90,
      contentType: 'html',
      loop: true,
    });

    document.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
    }
    });
    document.onkeydown = function(e) {
if (e.ctrlKey && (e.key === "U" || e.key === "S")) {
    e.preventDefault();
}
};
document.addEventListener("keydown", function (e) {
if ((e.metaKey && e.altKey && e.key === "U") ||  // Cmd + Option + U (Mac)
    (e.metaKey && e.altKey && e.key === "I") ||  // Cmd + Option + I (Inspect)
    (e.metaKey && e.altKey && e.key === "J") ||  // Cmd + Option + J (Console)
    (e.metaKey && e.altKey && e.key === "C") ||  // Cmd + Option + C (Elements)
    (e.key === "F12")) {  // F12 for Chrome & Firefox
    e.preventDefault();
}
});

setInterval(function () {
    if (window.outerHeight - window.innerHeight > 200) {
        window.location.href = "https://www.google.com"; // Redirect to another page
    }
}, 1000);

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".god").classList.add("page-enter");
// });

// document.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault(); // Prevent the default action of the link

//         let href = this.getAttribute("href");

//         // Apply exit animation only to .god
//         document.querySelector(".god").style.opacity = "0";
//         document.querySelector(".god").style.transform = "translateY(-100%)";

//         // Delay the navigation to let the animation play
//         setTimeout(() => {
//             // If the link has target="_blank", open it in a new tab
//             if (this.target === "_blank") {
//                 window.open(href, "_blank");
//             } else {
//                 // Otherwise, navigate in the same tab
//                 window.location.href = href;
//             }
//         }, 500); // Matches CSS animation duration for smoothness
//     });
// });


// ABOUT

function openTab(event, tabName) {
    var tabcontent = document.getElementsByClassName("tab-contents");
    var tablinks = document.getElementsByClassName("tab-links");

    // Hide all tab contents
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-tab");
    }

    // Remove active class from buttons
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Show the selected tab
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// This is optional. It won't affect target="_blank" links.
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(event) {
        // Here, you could log analytics, handle animations, etc.
        console.log("Opening link in new tab:", link.href);
    });
});




