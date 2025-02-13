// Particles.js Configuration (Optimized for Mobile)
particlesJS("particles-js", {
   particles: {
     number: { value: 30, density: { enable: true, value_area: 400 } }, // Fewer particles for mobile
     color: { value: "#ff4d4d" },
     shape: { type: "circle" },
     opacity: { value: 0.5, random: true },
     size: { value: 3, random: true }, // Smaller particles for mobile
     line_linked: { enable: true, distance: 100, color: "#ff4d4d", opacity: 0.4, width: 1 },
     move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
   },
   interactivity: {
     detect_on: "canvas",
     events: {
       onhover: { enable: false }, // Disable hover on mobile
       onclick: { enable: true, mode: "push" },
       resize: true
     },
     modes: {
       bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
       push: { particles_nb: 2 } // Fewer particles on click for mobile
     }
   },
   retina_detect: true
 });
 
 // Anime.js for Heart Click
 document.getElementById('heart').addEventListener('click', () => {
   const message = document.getElementById('message');
   message.style.display = 'block';
   anime({
     targets: '#message',
     opacity: [0, 1],
     scale: [0.8, 1],
     duration: 1000,
     easing: 'easeOutExpo'
   });
 });
 
 // Add Click Events to Notes
 const notes = document.querySelectorAll('.note');
 notes.forEach(note => {
   note.addEventListener('click', () => {
     const message = note.getAttribute('data-message');
     alert(message); // You can replace this with a custom modal or animation
     anime({
       targets: note,
       scale: [1, 1.5, 1],
       rotate: '1turn',
       duration: 1000,
       easing: 'easeInOutSine'
     });
   });
 });