

var typed = new Typed('.typing', { strings: ["", "AI Engineer", "Web Developer",""], typeSpeed: 100, Backspeed: 60, loop: true })

/* Changing Aside Active Link */

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
            removeBackSection();
            for(let j = 0; j < totalNavList; j++) { 
                if(navList[j].querySelector('a').classList.contains('active')) { addBackSection(j);/*allSection[j].classList.add('back-section');*/ }
                navList[j].querySelector('a').classList.remove('active'); }
        this.classList.add('active');
        showSection(this);

        if(window.innerWidth < 1200) { asideSectionTogglerBtn(); }
    })
}

function addBackSection(num) { allSection[num].classList.add('back-section'); }

function removeBackSection(){
    for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('back-section'); }
}

function showSection(element){
    for( let i = 0; i < totalSection; i++){ allSection[i].classList.remove('active'); }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector('#' + target).classList.add('active');
}

function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) { navList[i].querySelector('a').classList.add('active'); }
        
    }
}



/* Activating Mobile Menu */

const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => { asideSectionTogglerBtn(); })

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < totalSection; i++) { allSection[i].classList.toggle('open'); }
}


