function showAlert() {
    alert("This feature will be available upon store launch. Thank you for your patience!");
  }

  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.querySelector(".close");

    // Show the popup after a delay (e.g., 3 seconds)
    setTimeout(function() {
        popup.style.display = "block";
    }, 5000);

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Close the popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

const productImagesContainer = document.querySelector('.product-images');

// Duplicate the product images to create a seamless loop
productImagesContainer.innerHTML += productImagesContainer.innerHTML;