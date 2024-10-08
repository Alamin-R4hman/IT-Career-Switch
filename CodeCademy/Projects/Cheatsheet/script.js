// JavaScript function to switch between tabs
function showTab(tabName) {
  // Get all elements with the class 'tab-content' and hide them
  var contents = document.getElementsByClassName('tab-content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
  }

  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';

   // Save the selected tab to localStorage
   localStorage.setItem('selectedTab', tabName);
}

// Automatically show the selected tab when the page loads
window.onload = function() {
  // Check if there is a selected tab stored in localStorage
  var selectedTab = localStorage.getItem('selectedTab');

  // If a tab is stored, show it; otherwise, default to the HTML tab
  if (selectedTab) {
      showTab(selectedTab);
  } else {
      showTab('html'); // Default to HTML on initial load
  }
};

// JavaScript for collapsible sections
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


