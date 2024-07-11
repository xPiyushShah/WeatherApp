

document.addEventListener("DOMContentLoaded", function() {

  var navLinks = document.querySelectorAll(".navbar a");


  navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {

          navLinks.forEach(function(link) {
              link.classList.remove("active");
          });

          link.classList.add("active");
      });
  });
});document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        
        if (username.trim() === "" || password.trim() === "") {
            alert("Username and password are required!");
            return;
        }
        if (username === "admin" && password === "admin123") {
            alert("Admin login successful!");
            window.location.href = "nxt_admin.html";
        } else {
            alert("Invalid admin credentials!");
            window.location.href = "admin.html";
        }
    });
});

function guestLogin() {

    alert("Guest login successful!");
    window.location.href = "main.html"; 
  }
  

let currentTrainNumber = null;

function openModal(trainNumber) {
    currentTrainNumber = trainNumber;
    let modal = document.getElementById("bookingModal");
    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("bookingModal");
    modal.style.display = "none";
}

function submitBooking(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let destination = document.getElementById("destination").value;

    // Display details in modal
    let modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Booking Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <button onclick="confirmBooking()">Confirm Booking</button>
    `;

    // Store booking details in local storage
    let bookingDetails = {
        trainNumber: currentTrainNumber,
        name: name,
        id: id,
        destination: destination
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    // Clear form fields
    document.getElementById("bookingForm").reset();
}

function confirmBooking() {
    // Simulate booking confirmation (could be a server request in real application)
    let bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    if (bookingDetails) {
        showOutcomeMessage(`Booking confirmed for Train ${bookingDetails.trainNumber}`);
    }
    
    // Clear local storage after booking is confirmed
    localStorage.removeItem('bookingDetails');
    
    // Reset modal content and close modal
    let modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";
    closeModal();
}

function showOutcomeMessage(message) {
    let outcomeDiv = document.getElementById("outcomeMessage");
    outcomeDiv.textContent = message;
}
// contentLoader.js
import { fetchData } from './ajax.js';

document.addEventListener('DOMContentLoaded', function() {
  const loadContentBtn = document.getElementById('book');
  const contentContainer = document.getElementById('dashboard');

  loadContentBtn.addEventListener('click', function() {
    const url = 'l.html'; // Replace with your actual page URL

    fetchData(url)
      .then(responseHTML => {
        contentContainer.innerHTML = responseHTML;
      })
      .catch(error => {
        console.error(error.message);
      });
  });
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
  
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Collect form data
      const formData = new FormData(reservationForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Log form data (you can replace this with actual form submission logic)
      console.log('Form Data:', formDataObject);
      alert('Booking Successful!'); // Example alert for booking confirmation
    });
  });
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const reservationForm = document.getElementById('reservationForm');
  const trainSelect = document.getElementById('trainSelect');

  // Fetch train data from server (replace with your actual endpoint)
  fetchTrainData()
    .then(data => {
      // Populate train options in dropdown
      populateTrainOptions(data);
    })
    .catch(error => {
      console.error('Error fetching train data:', error);
    });

  // Function to fetch train data from server (simulated here)
  function fetchTrainData() {
    // Simulated data (replace with actual fetch request to your server)
    return new Promise(resolve => {
      setTimeout(() => {
        const data = [
          { number: '1234', source: 'Station A', destination: 'Station B' },
          { number: '5678', source: 'Station C', destination: 'Station D' },
          { number: '9012', source: 'Station E', destination: 'Station F' }
          // Add more train objects as needed
        ];
        resolve(data);
      }, 1000); // Simulating delay for fetching data
    });
  }
  function logout() {
    // Clear any client-side storage (optional)
    localStorage.clear(); // Optionally clear local storage
    sessionStorage.clear(); // Optionally clear session storage

    // Redirect to logout script or login page
    window.location.href = "logout.php"; // Replace with your logout script URL
  }
  // Function to populate train options in dropdown
  function populateTrainOptions(data) {
    data.forEach(train => {
      const option = document.createElement('option');
      option.value = train.number;
      option.textContent = `${train.number} - ${train.source} to ${train.destination}`;
      trainSelect.appendChild(option);
    });
  }

  // Form submission handler (you can replace this with actual booking logic)
  reservationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const formData = new FormData(reservationForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Log form data (you can replace this with actual form submission logic)
    console.log('Form Data:', formDataObject);
    alert('Booking Successful!'); // Example alert for booking confirmation
  });
});
  