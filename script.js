function showAlert() {
    alert("This feature will be available upon store launch. Thank you for your patience!");
  }

  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closeBtn = document.querySelector(".close");

    setTimeout(function() {
        popup.style.display = "block";
    }, 3000);

    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

const productImagesContainer = document.querySelector('.product-images');

productImagesContainer.innerHTML += productImagesContainer.innerHTML;