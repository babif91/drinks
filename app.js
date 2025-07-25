// SWEET SOUR JUICY BUBBLY STRONG JAPANESE
const cocktails = [
  { name: "Suntory Hiball", attributes: ["bubbly", "japanese"] },
  { name: "Gin Tonic", attributes: ["bubbly", "sour"] },
  { name: "Gin Buck", attributes: ["bubbly", "sweet"] },
  { name: "Vodka Tonic", attributes: ["bubbly", "sour"] },
  { name: "Moscow Mule", attributes: ["bubbly", "sweet"] },
  { name: "Screw Driver", attributes: ["sweet", "juicy"] },
  { name: "Rum Coke", attributes: ["bubbly", "sweet"] },
  { name: "Campari Soda", attributes: ["bubbly", "sweet"] },
  { name: "Stones Buck", attributes: ["bubbly", "sweet"] },
  { name: "Cassis Orange", attributes: ["sweet", "juicy"] },
  { name: "Yogurt Pine", attributes: ["sweet", "juicy"] },
  { name: "Tequila Sunrise", attributes: ["sweet", "juicy"] },
  { name: "Peach Fizz", attributes: ["bubbly", "sweet"] },
  { name: "Fazzy Navel", attributes: ["sweet", "juicy"] },
  { name: "Malibu Coke", attributes: ["bubbly", "sweet"] },
  { name: "J.J.", attributes: ["japanese"] },
  { name: "Baileys Milk", attributes: ["sweet"] },
  { name: "Kahlua Milk", attributes: ["sweet"] },
  { name: "Matcha Milk", attributes: ["sweet", "japanese"] },
  { name: "Sakura Fizz", attributes: ["sweet", "japanese", "bubbly"] },
  { name: "White Peach Fizz", attributes: ["sweet", "japanese", "bubbly"] },
  { name: "Salty Dog", attributes: ["sour", "juicy", "strong"] },
  { name: "China Blue", attributes: ["sweet", "juicy"] },
  { name: "Melon Soda", attributes: ["sweet", "bubbly"] },
  { name: "Cointreau Tonic", attributes: ["bubbly", "sweet"] },
  { name: "Kamikaze", attributes: ["strong", "japanese"] },
  { name: "Margarita", attributes: ["strong"] },
  { name: "Martini", attributes: ["strong", "sour"] },
  { name: "Long Island Ice Tea", attributes: ["strong"] },
  { name: "Godiva Milk", attributes: ["sweet"] },
  { name: "Umeshu", attributes: ["sweet", "japanese"] },
  { name: "Umeshu Soda", attributes: ["sweet", "japanese", "bubbly"] },
  { name: "Lemon CHUHI", attributes: ["bubbly", "japanese"] },
  { name: "Mango CHUHI", attributes: ["sweet", "bubbly", "juicy", "japanese"] },
  { name: "Cranberry CHUHI", attributes: ["sweet", "bubbly", "juicy", "japanese"] },
  { name: "Pineapple CHUHI", attributes: ["sweet", "bubbly", "juicy", "japanese"] },
  { name: "Vodka RedBull", attributes: ["strong", "sweet"] },
  // Add more cocktails here
];

// Function to get random cocktail based on selected attributes
function getRandomCocktail(selectedAttributes) {
  // Filter cocktails based on selected attributes
  const filteredCocktails = cocktails.filter(cocktail => {
    return selectedAttributes.every(attribute => cocktail.attributes.includes(attribute));
  });

  // If no cocktails match the selected attributes, return null
  if (filteredCocktails.length === 0) {
    return null;
  }

  // Select a random cocktail from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredCocktails.length);
  return filteredCocktails[randomIndex].name;
}

// Function to play a sound when the generateBtn is clicked
function playButtonClickSound() {
  const audio = new Audio('icewater.mp3');
  audio.play();
}

// Get references to DOM elements
const generateBtn = document.getElementById("generateBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const cocktailResult = document.getElementById("cocktailResult");
const checkboxes = document.querySelectorAll("#attributeCheckboxes input[type='checkbox']");

// Event listener for Generate Random Cocktail button
generateBtn.addEventListener("click", function() {
  const selectedAttributes = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const randomCocktail = getRandomCocktail(selectedAttributes);
  if (randomCocktail) {
    cocktailResult.textContent = `${randomCocktail}`;
  } else {
    cocktailResult.textContent = "Oops! No match found - try different flavors!";
  }

  // Play the sound when the generateBtn is clicked
  playButtonClickSound();

  // Always display the "try again" button
  generateBtn.style.display = "none";
  tryAgainBtn.style.display = "block";
});

// Event listener for Try Again button
tryAgainBtn.addEventListener("click", function() {
  cocktailResult.textContent = "";
  generateBtn.style.display = "block";
  tryAgainBtn.style.display = "none";
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
});