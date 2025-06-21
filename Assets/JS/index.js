// let menuList = document.getElementById("nav_links");
// menuList.style.maxHeight = "0px";

// function toggleMenu() {
//     if (menuList.style.maxHeight === "0px") {
//         menuList.style.maxHeight = "300px";
//     } else {
//         menuList.style.maxHeight = "0px";
//     }
// }

function toggleMenu() {
    const navLinks = document.getElementById('nav_links');
    navLinks.classList.toggle('active');
}



// ...existing code...

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};





  // This function triggers when the element is in the viewport
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100; // how early to trigger

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active'); // Optional: remove on scroll out
      }
    });
  }

  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);

  // Run once on load
  window.addEventListener('load', revealOnScroll);


