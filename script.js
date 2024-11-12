document.addEventListener('DOMContentLoaded', function() {
  // Get the Academic Resources card element
  const academicCard = document.querySelector('.academic-card');

  // Add click event listener
  academicCard.addEventListener('click', function() {
    // Open the new page in a new tab
    window.location.href = 'academic-resources.html';
});
});