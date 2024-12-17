export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(`Element found: `, element); 
    if(element){
        element.scrollIntoView({behavior:'smooth'})
    }else {
        console.error(`No element found with id: ${sectionId}`);
      }
}