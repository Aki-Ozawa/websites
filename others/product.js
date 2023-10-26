var priceChosen = false;

// Function to set the price when a user clicks on it
function showPrice(price) {
    var priceDisplay = document.querySelector('.price-display');
    priceDisplay.textContent = price;

    // Set the flag to true when a price is clicked
    priceChosen = true;
}

function calculateTotalPrice() {
  // Check if a price has been chosen
  if (!priceChosen)  {
      alert('Please choose a price first.');
      return; // Exit the function if no price has been chosen
  }


  var priceDisplay = document.querySelector('.price-display');
  var priceText = priceDisplay.textContent.trim();
  var price = 0;

  // Extract the numeric value from priceText
  if (!isNaN(priceText.replace('$', ''))) {
      price = parseFloat(priceText.replace('$', ''));
  }

  // Calculate the total price
  var quantitySelect = document.getElementById('quantity');
  var selectedQuantity = parseInt(quantitySelect.value);
  var itemPrice = price * selectedQuantity;

  // Display the calculated total price with proper formatting

  var itemPriceElement = document.querySelector('.itemPrice');
  itemPriceElement.textContent = '$' + itemPrice.toFixed(2);
}

const pictureElements = document.querySelectorAll('.picture');
const mainImage = document.getElementById('mainImage');

pictureElements.forEach((picture, index) => {
  picture.addEventListener('click', () => {
    const backgroundImage = window.getComputedStyle(picture).getPropertyValue('background-image');
    mainImage.style.backgroundImage = backgroundImage;
  });
});
