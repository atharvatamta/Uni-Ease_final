document.addEventListener('DOMContentLoaded', function() {
  // Get the Academic Resources card element
  const academicCard = document.querySelector('.academic-card');
  const campusToolsCard = document.querySelector('.campustools-card');
  const internshipCard = document.querySelector('.internship-card');

  // Add click event listener for the Academic Resources card
  if (academicCard) {
    academicCard.addEventListener('click', function() {
      // Open the academic resources page in the same tab
      window.location.href = 'academic-resources.html';
    });
  }

  // Add click event listener for the Campus Tools card
  if (campusToolsCard) {
    campusToolsCard.addEventListener('click', function() {
      // Open the coming soon page in the same tab
      window.location.href = 'comingsoon.html';
    });
  }

  // Add click event listener for the Internship card
  if (internshipCard) {
    internshipCard.addEventListener('click', function() {
      // Open the coming soon page in the same tab
      window.location.href = 'comingsoon.html';
    });
  }
});
