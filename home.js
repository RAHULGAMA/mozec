function openPopup() {
    document.getElementById("signup-popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("signup-popup").style.display = "none";
  }

  document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menuleft = document.getElementById('menu-left');

    menuIcon.addEventListener('click', function() {
    menuleft.classList.toggle('open');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function(){
      menuleft.classList.remove('open');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    });
  });

  // like buttons 

  function likeImage(button){

    var likeCountElement = button.nextElementSibling;

    var currentLikes = parseInt(likeCountElement.textContent);

    var newLikes = currentLikes + 1;

    likeCountElement.textContent = newLikes;

    localStorage.setItem('likeCount', newLikes.toString());
  }

  document.getElementById("img-like-button").style.color = "red";

  /*function displayLikeCounts() {

    var likeCountElement = document.querySelectorAll('.like-count');
    likeCountElement.forEach(function(likeCountElement) {
      var currentLikes = parseInt(localStorage.getItem('likeCount') || 0);
      likeCountElement.textContent = currentLikes;
    });
  }

  displayLikeCounts();
  */

// Function to add items to the cart
function addToCart(imageSource, itemName) {
  // Update cart item count
  var cartItemCountElement = document.getElementById('cartItemCount');
  var currentItemCount = parseInt(cartItemCountElement.textContent) || 0;
  cartItemCountElement.textContent = currentItemCount + 1;

  // Add item to cart (you can store it in localStorage or a server as needed)
  var cartItem = {
    name: itemName,
    image: imageSource,
    // Add other details if needed
  };

  // Save cart items to localStorage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(cartItem);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to open the cart page
function openCartPage() {
  // Redirect to the cart page (you can create a separate HTML file for the cart)
  window.location.href = 'cart.html';
}