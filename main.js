// URL for the placeholder image
const IMAGE_URL = "https://placehold.co/200";

// Array of users data
const USERS = [
  {
    id: 1,
    user_name: "User1",
    description: "lorem ipsum",
    age: "46",
    fav_music: {
      bands: ["Band 1", "Band 2", "Band 3", "Band 4"],
    },
  },
  {
    id: 2,
    user_name: "User LastName",
    description: "Lorem lorem lorem",
    age: "23",
    fav_music: {
      bands: ["Band 1", "Band 2", "Band 3", "Band 4"],
    },
  },
];

// Function to create a card for each user
function createUserCard(user) {
  const card = document.getElementById("card-container");
  const cardImgContainer = document.getElementById("card-img-container");

  // Create image element
  const imageElement = document.createElement("img");
  imageElement.src = IMAGE_URL;
  imageElement.alt = "User profile photo";

  // Create user name element
  const cardTitle = document.createElement("h3");
  cardTitle.textContent = user.user_name;
  cardTitle.classList.add("card-title");

  // Create user age element
  const cardAgeElement = document.createElement("p");
  cardAgeElement.textContent = `Age: ${user.age}`;

  // Create user description element
  const cardDescriptionElement = document.createElement("p");
  cardDescriptionElement.textContent = user.description;

  //Render user card
  cardImgContainer.appendChild(imageElement);
  card.append(cardTitle, cardAgeElement, cardDescriptionElement);

  return card;
}

// Create and add a card for each user
USERS.forEach((user) => {
  createUserCard(user);
});