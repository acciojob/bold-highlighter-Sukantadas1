function highlight() {
 const boldElements = document.querySelectorAll('p strong');

  // Change the color of each bold word to green
  boldElements.forEach(element => {
    element.style.color = 'green';
  });


}


function return_normal() {
     const boldElements = document.querySelectorAll('p strong');

  // Revert the color of each bold word back to black
  boldElements.forEach(element => {
    element.style.color = 'black';
  });

    
}
