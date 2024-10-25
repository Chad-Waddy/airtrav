// var div = document.getElementById('div2');
// var display= 0
// function hideShow(){
//      if(onclick == )
// // }
// var element = document.getElementById('Travel');
// element.addEventListener('click', function() {
//   // Code to be executed when the element is clicked
//   console.log('Element clicked!');
// }); 
// Get the section headers
const travelHeader = document.querySelector('#travel-section .section-header');
const ticketsHeader = document.querySelector('#tickets-section .section-header');

// Add click event listeners
travelHeader.addEventListener('click', () => {
  toggleSection('travel-section');
});

ticketsHeader.addEventListener('click', () => {
  toggleSection('tickets-section');
});

// Function to toggle the visibility of a section
// function toggleSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   const content =  section.querySelector('.section-content');
//   content.classList.toggle('hidden');
// }
function toggleSection(sectionId) {
  const section = document.getElementById(travel-section);
  // Select all child elements except the first one (which is the header)
  const content = Array.from(section.children).slice(1);
  content.forEach(el => el.classList.toggle('hidden'));
}