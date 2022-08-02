import menu from "./menu";
import home from "./home";
import contact from "./contact";

const container = document.createElement('div');
const head = document.createElement('div');
const h1 = document.createElement('h1');
const nav = document.createElement('nav');

const homeBtn = document.createElement('button');

const menuBtn = document.createElement('button')

const contactBtn = document.createElement('button');





function draw(){
    container.classList.add('container');
    head.classList.add('head');
    h1.innerHTML='Surfer Boy Pizza';
    head.appendChild(h1)
    container.appendChild(head);
    head.appendChild(nav);
    nav.appendChild(homeBtn);
    homeBtn.innerHTML='Home';
    menuBtn.innerHTML='Menu';
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    contactBtn.innerHTML='Contact';
    container.appendChild(home())


   

    menuBtn.addEventListener('click',()=>{
        container.removeChild(container.lastElementChild)
        container.appendChild(menu())
    
    })
    homeBtn.addEventListener('click',()=>{
        container.removeChild(container.lastElementChild)
        container.appendChild(home())

    })
    contactBtn.addEventListener('click',()=>{
        container.removeChild(container.lastElementChild)
        container.appendChild(contact())

    })



    return container;
}


function webSite(){
  document.body.appendChild(draw());  
}


export default webSite
