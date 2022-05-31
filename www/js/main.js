const navMenu = document.getElementById( 'nav-menu' );
const burgerMenu = document.getElementById( 'burger-menu' );
const aboutMeLi = document.getElementById( 'about-me-li' );
const projectsLi = document.getElementById( 'projects-li' );
const stackLi = document.getElementById( 'stack-li' );
const projectsGrid = document.getElementById( 'projects-grid' );
const styleEl = document.createElement( 'style' );

const toggleBurger = () => burgerMenu.classList.toggle( 'opened' );
const toggleNav = () => navMenu.classList.toggle( 'active' );

const loadData = async ( url ) => {

    const res = await fetch( url );
    return await res.json();

};

const loadProjects = async () => {

    const projects = await loadData( 'assets/data/projects.json' );

    document.head.appendChild( styleEl );
    const styleSheet = styleEl.sheet;

    for ( const key in projects ) {


        const card = document.createElement( 'article' );
        card.className = `project-card ${ projects[ key ].altTitle }`;
        styleSheet.insertRule( `.${ projects[ key ].altTitle } { background-image: url(${ projects[ key ].image }) }` );


        const header = document.createElement( 'header' );
        header.className = 'card-header';
        card.appendChild( header );

        const h3 = document.createElement( 'h3' );
        h3.className = 'card-title';
        header.appendChild( h3 );

        const demoLink = document.createElement( 'a' );
        demoLink.href = projects[ key ].url;
        demoLink.target = '_blank';
        demoLink.rel = 'noreferrer noopener';
        demoLink.title = `${ projects[ key ].title } demo`;
        demoLink.innerText = projects[ key ].title;
        h3.appendChild( demoLink );

        const description = document.createElement( 'p' );
        description.className = 'card-description';
        description.innerText = projects[ key ].description;
        header.appendChild( description );

        const screenshot = document.createElement( 'a' );
        screenshot.className = 'card-screenshot';
        screenshot.style = `background-image: url(${ projects[ key ].image })`;
        screenshot.href = projects[ key ].url;
        screenshot.target = '_blank';
        screenshot.rel = 'noreferrer noopener';
        screenshot.title = `${ projects[ key ].title } demo`;
        card.appendChild( screenshot );

        const footer = document.createElement( 'footer' );
        footer.className = 'card-footer';
        card.appendChild( footer );

        const cardStack = document.createElement( 'ul' );
        cardStack.className = 'card-stack';
        projects[ key ].technologies.map( technology => {
            const stackIcon = document.createElement ( 'li' );
            stackIcon.className = `stack-icon fa-brands fa-${ technology }`;
            stackIcon.title = technology;
            cardStack.appendChild( stackIcon );
        });
        footer.appendChild( cardStack );

        const cardLinks = document.createElement( 'span' );
        cardLinks.className = 'card-links';
        footer.appendChild( cardLinks );

        const demo = document.createElement( 'a' );
        demo.className = 'demo';
        demo.href = projects[ key ].url;
        demo.target = '_blank';
        demo.rel = 'noreferrer noopener';
        demo.title = `${ projects[ key ].title } demo`
        cardLinks.appendChild( demo );

        const demoIcon = document.createElement( 'i' );
        demoIcon.className = 'fa-solid fa-eye';
        demo.appendChild( demoIcon );

        const repo = document.createElement( 'a' );
        repo.className = 'repo';
        repo.href = projects[ key ].repository;
        repo.target = '_blank';
        repo.rel = 'noreferrer noopener';
        repo.title = `${ projects[ key ].title } repo`
        cardLinks.appendChild( repo );

        const repoIcon = document.createElement( 'i' );
        repoIcon.className = 'fa-brands fa-github';
        repo.appendChild( repoIcon );

        projectsGrid.appendChild( card );

    };

};

loadProjects();

burgerMenu.onclick = () => {
    toggleNav();
    toggleBurger();
};

aboutMeLi.onclick = () => {
    toggleNav();
    toggleBurger();
    window.scroll(0, document.getElementById( 'about-me' )?.offsetTop -50 );
};

projectsLi.onclick = () => {
    toggleNav();
    toggleBurger();
    window.scroll( 0, document.getElementById( 'projects') ?.offsetTop -10) ;
};

stackLi.onclick = () => {
    toggleNav();
    toggleBurger();
    window.scroll( 0, document.getElementById( 'stack' )?.offsetTop);
};
