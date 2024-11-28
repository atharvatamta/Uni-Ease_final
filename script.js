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



  document.addEventListener("DOMContentLoaded", function() {
    // Select the About link using its unique selector or attribute
    const aboutLink = document.querySelector("a[href='#about']");
  
    // Add a click event listener to the About link
    if (aboutLink) {
      aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action (scrolling behavior)
        window.location.href = "about.html"; // Redirect to about.html
      });
    }
  });
  





  // Add click event listener for the Campus Tools card
  if (campusToolsCard) {
    campusToolsCard.addEventListener('click', function() {
      window.location.href = 'comingsoon.html';
    });
  }

  // Add click event listener for the Internship card
  if (internshipCard) {
    internshipCard.addEventListener('click', function() {
      window.location.href = 'comingsoon.html';
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
});
