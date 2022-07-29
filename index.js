function toggleMenu() {
    const nav = document.querySelector('#nav');
    const burger = document.querySelector('#burger');
    const header = document.querySelector('#header');
    burger.addEventListener("click", ()=>{
        nav.classList.toggle('main-header-nav-show');
        header.classList.toggle('main-header-show');
    })
}
toggleMenu();