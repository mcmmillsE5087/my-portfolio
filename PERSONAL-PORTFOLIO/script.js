// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
}

// scroll section

    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;  
            let offset = sec.offsetTop - 100;  
            let height = sec.offsetHeight;  
            let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {

            // active navbar links
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });

    // Active section for animation on scroll
        sec.classList.add('show-animate');
    } 
    
    // IF YOU WANT TO USE ANINAMTION THAT SCROLL, USE THIS
      else{
            sec.classList.remove('show-animate');

        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active'); 
    
    // ANIAMTION FOR FOOTER
        let footer = document.querySelector('footer');
    
        footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.
        scrollHeight);
}
