const navMenu = document.getElementById( 'nav-menu' );
const burgerIcon = document.getElementById( 'burger-icon' );
const closeIcon = document.getElementById( 'close-icon' );
const aboutMeLi = document.getElementById( 'about-me-li' );
const projectsLi = document.getElementById( 'projects-li' );
const stackLi = document.getElementById( 'stack-li' );

const toggleNav = () => navMenu.classList.toggle( 'active' );

burgerIcon.onclick = () => toggleNav ();
closeIcon.onclick = () => toggleNav ();

aboutMeLi.onclick = () => {
    toggleNav();
    window.scroll(0, document.getElementById( 'about-me' )?.offsetTop -50 );
};

projectsLi.onclick = () => {
    toggleNav();
    window.scroll( 0, document.getElementById( 'projects') ?.offsetTop -10) ;
};

stackLi.onclick = () => {
    toggleNav();
    window.scroll( 0, document.getElementById( 'stack' )?.offsetTop);
};

