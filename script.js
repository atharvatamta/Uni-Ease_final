document.addEventListener('DOMContentLoaded', function() {
  // Get the Academic Resources card element
  const academicCard = document.querySelector('.academic-card');

  const campusToolsCard = document.querySelector('.campustools-card');
  const internshipCard = document.querySelector('.internship-card');

  // Add click event listener for the Academic Resources card
  if (academicCard) {
    academicCard.addEventListener('click', function() {
      window.location.href = 'academic-resources.html';
    });
  }

  // Add click event listener for the Campus Tools card
  if (campusToolsCard) {
    campusToolsCard.addEventListener('click', function() {
      window.location.href = 'campustools.html';
    });
  }

  // Add click event listener for the Internship card
  if (internshipCard) {
    internshipCard.addEventListener('click', function() {
      window.location.href = 'https://docs.google.com/spreadsheets/d/18ne2DeaNh9ZyXWkFOX8gbWSO2oJWvEf2dbsoaXlHFiI/edit?gid=0#gid=0';
    });
  }

  // Get all year cards (1st, 2nd, 3rd, and 4th year) and add click event listeners to navigate to select-branch.html
  const yearCards = document.querySelectorAll('.year-1, .year-2, .year-3, .year-4');

  yearCards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Open the select branch page in the same tab
      window.location.href = 'selectbranch.html';
    });
  });

  // Add click event listener for the "About" link on index.html
  const aboutLink = document.querySelector("a[href='#about']");
  
  if (aboutLink) {
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default scroll behavior
      window.location.href = 'about.html'; // Redirect to about.html
    });
  }
});
