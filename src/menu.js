
function menu(){

  const menuPage = document.createElement('div');
  const imgMenu = document.createElement('div');
    
    menuPage.classList.add('Mpage');
    imgMenu.classList.add('imgMenu');
    menuPage.appendChild(imgMenu);
    return menuPage
}
 
 export default menu;