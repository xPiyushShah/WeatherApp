document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logoutButton');

  logoutButton.addEventListener('click', function() {
      // Perform logout actions here
      // For example, clear session tokens or perform other cleanup
      
      // Clear localStorage or sessionStorage (if storing tokens)
      localStorage.removeItem('token'); // Replace 'token' with your session key
      
      // Redirect to login page (optional)
      window.location.href = 'main.html'; // Replace with your login page URL
  });
});

document.addEventListener('DOMContentLoaded', fetchDataAndRenderTable);

// Function to fetch data and render table
function fetchDataAndRenderTable() {
    const url = 'http://localhost/lol/db2.php';
    console.log(url)
  
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Configure the AJAX request
    xhr.open('GET', url, true);
  
    // Set up event handler for when the AJAX request completes
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        // Parse JSON response
        const data = JSON.parse(xhr.responseText);
        console.log(data);  // Log the fetched data to console (for demonstration)
  
        // Get the table element from the HTML
        const table = document.createElement('table');
        table.classList.add('data-table');
  
        // Create table header row
        const headerRow = table.insertRow();
        Object.keys(data[0]).forEach(key => {
          const headerCell = document.createElement('th');
          headerCell.textContent = key;
          headerRow.appendChild(headerCell);
        });
  
        // Create table body rows
        data.forEach(obj => {
          const row = table.insertRow();
          Object.values(obj).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
          });
        });
  
        // Add the table to the HTML page
        const container = document.getElementById('trainData2');
        container.appendChild(table);
      } else {
        console.error('Error fetching data. Status:', xhr.status);
      }
    };
  
    // Handle network errors
    xhr.onerror = function() {
      console.error('Network error occurred');
    };
  
    // Send the AJAX request
    xhr.send();
  }
  
  // Execute function when the page loads

