document.addEventListener('DOMContentLoaded', function() {
    // Get the Academic Resources card element
    const academicCard = document.querySelector('.academic-card');
  
    // Add click event listener
    academicCard.addEventListener('click', function() {
      // Open the new page in a new tab
      window.open('academic-resources.html', '_blank'); // Replace with your actual page URL
    });
  });
  