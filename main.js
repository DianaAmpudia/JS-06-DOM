// URL for the placeholder image
const IMAGE_URL = "https://placehold.co/200";

// Array of users data
const USERS = [
  {
    id: 1,
    user_name: "epicGamer247 🎮",
    description: "When I'm not in front of my screens, I love to get outdoors and go hiking. It's a great way to recharge and find inspiration for my next gaming marathon.",
    age: "46",
    fav_music: {
      bands: ["Metallica", "Led Zeppelin", "Pink Floyd", "Queen"],
    },
  },
  {
    id: 2,
    user_name: "starry.dream🌟",
    description: "I play guitar and sing in a local indie band. We gig at small venues on weekends, and I'm always writing new songs inspired by my daily experiences.",
    age: "23",
    fav_music: {
      bands: ["Vampire Weekend", "Boygenius", "Muna", "Wolf Alice"],
    },
  }
];

// Function to create a card for each user.
// Intead of using document.getElementById, now we use document.createElement to create a container for every user.
function createUserCard(user) {
  //const card = document.getElementById("card-container");
  //const cardImgContainer = document.getElementById("card-img-container");

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = ("card-container");

  const cardImgContainer = document.createElement("div");
  cardImgContainer.id = "card-img-container";
  card.appendChild(cardImgContainer);

  // Create image element
  const imageElement = document.createElement("img");
  imageElement.src = IMAGE_URL;
  imageElement.alt = "User profile photo";
  // Append image to card image container
  cardImgContainer.appendChild(imageElement);

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

  // Create favorite music element
  const favMusicElement= document.createElement("p");
  favMusicElement.textContent = "Favorite bands: ";
  const favoriteBandsElement = document.createElement("ul");
  user.fav_music.bands.forEach((band) => {
    const listItem = document.createElement("li");
    listItem.textContent = band;
    // Append list item to favorite music list
    favoriteBandsElement.appendChild(listItem);
  });

  //Render user card
  card.append(
    cardTitle,
    cardAgeElement,
    cardDescriptionElement,
    favMusicElement,
    favoriteBandsElement
  );

  return card;
}

// Creates a card for each user and appends it to the container
const container = document.getElementById("container");
USERS.forEach((user) => {
  const userCard = createUserCard(user);
  container.appendChild(userCard);
});
