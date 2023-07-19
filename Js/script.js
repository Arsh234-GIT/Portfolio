/*section click*/


document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('.navbar-items a');
  
    navbarItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = item.getAttribute('href');
        const section = document.querySelector(sectionId);
  
        if (section) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const sectionTop = section.offsetTop - navbarHeight;
          window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
      });
    });
  });
  
 /*sidebar*/
  var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right="0";
  }
  function closemenu(){
    sidemenu.style.right="-200px";
  }

  
  
  /*contat */

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyC7KgRq5pz8eBKz7CBFfgLI9Fael1LlgCj8W6nbHbz5h6n4calTM5EDnf-2lhAvvIpCA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg-id")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })





const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); a