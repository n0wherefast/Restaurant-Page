
function contact (){
    
const contactPage = document.createElement('div');
const pContact = document.createElement('p');
  
   contactPage.classList.add('Cpage');
   contactPage.innerHTML='<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=nevada&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div></div>'
   pContact.innerHTML='Location:  282 Griffith St,  Lenora Hills, Nevada';
   pContact.classList.add('pContact')
   contactPage.appendChild(pContact);
   return contactPage 
}

export default contact