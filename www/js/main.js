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
        card.tabIndex = 0;
        projectsGrid.appendChild( card );

        const header = document.createElement( 'header' );
        header.className = 'card-header';
        card.appendChild( header );

        const title = document.createElement( 'h3' );
        title.className = 'card-title';
        title.innerText = projects[ key ].title;
        header.appendChild( title );

        const description = document.createElement( 'p' );
        description.className = 'card-description';
        description.innerText = projects[ key ].description;
        header.appendChild( description );

        const main = document.createElement( 'main' );
        main.className = 'card-main';
        card.appendChild( main );

        if( projects[ key ].url ){

            const demo = document.createElement( 'div' );
            demo.className = 'demo';
            main.appendChild( demo );

            const demoLink = document.createElement( 'a' );
            demoLink.className = 'demo-link';
            demoLink.href = projects[ key ].url;
            demoLink.target = '_blank';
            demoLink.rel = 'noreferrer noopener';
            demoLink.title = `${ projects[ key ].title } demo`;
            demo.appendChild( demoLink );

            const demoIcon = document.createElement( 'i' );
            demoIcon.className = 'fa-solid fa-eye';
            demoLink.appendChild( demoIcon );

            const demoText = document.createElement( 'span' );
            demoText.className = 'demo-text';
            demoText.innerText = 'demo';
            demo.appendChild( demoText );

        }

        const repo = document.createElement( 'div' );
        repo.className = 'repo';
        main.appendChild( repo );

        const repoLink = document.createElement( 'a' );
        repoLink.className = 'repo-link';
        repoLink.href = projects[ key ].repository;
        repoLink.target = '_blank';
        repoLink.rel = 'noreferrer noopener';
        repoLink.title = `${ projects[ key ].title } repo`;
        repo.appendChild( repoLink );

        const repoIcon = document.createElement( 'i' );
        repoIcon.className = 'fa-brands fa-github';
        repoLink.appendChild( repoIcon );

        const repoText = document.createElement( 'span' );
        repoText.className = 'repo-text';
        repoText.innerText = 'repo';
        repo.appendChild( repoText );

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
