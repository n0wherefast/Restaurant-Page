

function home(){
const homePage = document.createElement('div');
const imgHome = document.createElement('div');
const pHome = document.createElement('p');

    homePage.classList.add('Hpage');    
    pHome.innerHTML='The best pizza in your country';
    homePage.appendChild(pHome);
    imgHome.classList.add('imgHome');
    homePage.appendChild(imgHome)
    return homePage
}
export default home;