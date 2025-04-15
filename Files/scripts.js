/**
 * Here, I create my own array of objects for the tea bases.
 * I am choosing 3 types of tea bases, Oolong, Black and Green.
 * For each base I will choose 3 types of teas.
 * Each tea will have a name, type, a small discription, and a URL.
 * Similarly, I create another array of objects for the toppings.
 * They have similar properties as the tea bases.
 */
const teaStructure = [
  {
    name: "Tie Guan Yin",
    type: "Oolong",
    disc: "Floral, light, and airy - Often thought of as similar to an orchid.",
    url: "https://www.teadealers.com/cdn/shop/products/IMG-5168copy.jpg?v=1664066888",
    rating: 4.8
  },
  {
    name: "Jin Xuan",
    type: "Oolong",
    disc: "Naturally milky, creamy, and buttery.",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jin_Xuan_oolong_tea.jpg/1200px-Jin_Xuan_oolong_tea.jpg",
    rating: 4.2
  },
  {
    name: "Dan Cong",
    type: "Oolong",
    disc: "Natural flavors and aroma - Full-bodied, rich, and fragrant.",
    url: "https://www.jingteashop.com/cdn/shop/products/oolong-dancong-szdc1.jpg?v=1641104848",
    rating: 4
  },
  {
    name: "Matcha",
    type: "Green",
    disc: "A fine powdered tea with a bright, emerald green color and a rich, vegetal taste.",
    url: "https://oldbarreltea.com/cdn/shop/products/Matcha_1200x1200.jpg?v=1605636985",
    rating: 4.7
  },
  {
    name: "Jasmine",
    type: "Green",
    disc: "Delicate, floral, and slightly sweet flavor, often enjoyed for its aromatic fragrance and refreshing taste.",
    url: "https://oldbarreltea.com/cdn/shop/products/JasmineLooseLeaf_1200x1200.jpg?v=1624483058",
    rating: 4.5
  },
  {
    name: "Hojicha",
    type: "Green",
    disc: "Roasted green tea with a unique, earthy aroma and a distinct flavor profile.",
    url: "https://www.nannuoshan.org/cdn/shop/files/T376_IMG_6337_1200x1200.jpg?v=1711989098",
    rating: 3.8
  },
  {
    name: "Earl Grey",
    type: "Black",
    disc: "A black tea blend flavored with bergamot oil, a citrus fruit oil, resulting in a distinctive, citrusy, and often floral taste.",
    url: "http://thesteepingroom.com/cdn/shop/files/earl-grey-creme-tea-597477.jpg?v=1720131219",
    rating: 3.9
  },
  {
    name: "Red Jade",
    type: "Black",
    disc: "A deep, rich ruby-colored infusion with a complex flavor that includes notes of mint, cinnamon, and a subtle sweetness.",
    url: "https://thejadeleaf.com/cdn/shop/products/IMG_2875.jpg?v=1611684003",
    rating: 3
  },
  {
    name: "Assam",
    type: "Black",
    disc: "A robust, malty black tea variety known for its strong flavor and high caffeine content.",
    url: "https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/1200x1200/products/26516/320993/yxl7gzyduwqoxqwo5nzj__27286.1738960361.jpg?c=1",
    rating: 3.2
  },
];

const toppingStructure = [
  {
    name: "Aloe Vera",
    type: "Refreshing",
    disc: "Highly refreshing and quite neutral in taste, it will work great with any fruity boba.",
    url: "https://m.media-amazon.com/images/I/61MEdjgKlzL.jpg",
    rating: 3
  },
  {
    name: "Lychee Jelly",
    type: "Chewy",
    disc: "This bubble tea topping captures the sweet, floral, and tropical essence of lychee fruit.",
    url: "https://rbtea.com.sg/wp-content/uploads/2021/09/LCY-nata-coco.png",
    rating: 4.2
  },
  {
    name: "Aiyu Jelly",
    type: "Refreshing",
    disc: "Also known as ice flower jelly, it consists mainly of water and is best for cooling properties.",
    url: "https://www.bossenstore.com/cdn/shop/products/aijujelly.jpg?v=1696370518",
    rating: 3
  },
  {
    name: "Herb Jelly",
    type: "Refreshing",
    disc: "It's made by infusing herbs into gel-like base, which is then sweetened to create a delightful taste.",
    url: "https://chatime.ca/wp-content/uploads/2019/04/toppings-grass-jelly.png",
    rating: 2
  },
  {
    name: "Tapioca",
    type: "Chewy",
    disc: "The perfect bubble tea topping if you want some chewiness in your drink.",
    url: "https://chatime.ca/wp-content/uploads/2019/04/toppings-pearl.png",
    rating: 4.5
  },
  {
    name: "Mini Tapioca",
    type: "Chewy",
    disc: "Same quality as their classic variation, but coming in smaller sizes and larger quantities, you can taste them in every sip of your drink!",
    url: "http://i5.walmartimages.com/asr/24f9bfa3-a520-4c9c-bd23-b603925b226c.994e744eab81d383d041f89acdf2c4f1.jpeg",
    rating: 4.3
  },
  {
    name: "Pudding",
    type: "Texture Change",
    disc: "Creamy, smooth, soft custard-like texture adds a sweet and caramelized flavor to the drink.",
    url: "https://chatime.ca/wp-content/uploads/2019/04/toppings-puddings.png",
    rating: 2
  },
  {
    name: "Red Bean",
    type: "Texture Change",
    disc: "They are slightly sweet with a tender beans texture.",
    url: "https://bobabox.co.uk/2342-thickbox_default/sweet-red-bean.jpg",
    rating: 1.8
  },
  {
    name: "Ice Cream",
    type: "Texture Change",
    disc: "Ice cream topping makes the bubble tea sweeter and colder. As the ice cream melts, you get different textures of the drinks making it richer and creamier.",
    url: "https://nutritionrefined.com/wp-content/uploads/2018/07/vegan-vanilla-ice-cream-featured.jpg",
    rating: 3.5
  },
];

const teaFilters = ["Oolong", "Green", "Black", "All"];

const toppingFilters = ["Refreshing", "Chewy", "Texture Change", "All"];

//-------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  showCards("teaStructure");
});


function showCards(other = teaStructure) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  if (other == "toppingStructure") {
    for (let i = 0; i < toppingStructure.length; i++) {
      let title = toppingStructure[i].name;
      let imageURL = toppingStructure[i].url;
      let type = toppingStructure[i].type;
      let disc = toppingStructure[i].disc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
      nextCard.addEventListener("click", () => {
        addToppingToCartArray(toppingStructure[i]);
      });
      cardContainer.appendChild(nextCard);
    }
  } else if (other == "teaStructure") {
    for (let i = 0; i < teaStructure.length; i++) {
      let title = teaStructure[i].name;
      let imageURL = teaStructure[i].url;
      let type = teaStructure[i].type;
      let disc = teaStructure[i].disc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
      nextCard.addEventListener("click", () => {
        addTeaToCartArray(teaStructure[i]);
      });
      cardContainer.appendChild(nextCard);
    }
  } else {
    for (let i = 0; i < other.length; i++) {
      let title = other[i].name;
      let imageURL = other[i].url;
      let type = other[i].type;
      let disc = other[i].disc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
      nextCard.addEventListener("click", () => {
        console.log(`You clicked: ${other[i].name}`);
      });
      cardContainer.appendChild(nextCard);
    }
  }
}

function editCardContent(card, newTitle, newImageURL, newType, newDisc) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle;

  const type = card.querySelector("h3");
  type.textContent = newType;

  const disc = card.querySelector("p");
  disc.textContent = newDisc;
}

function filterAddOptionsArray(typeToFilter) {
  if (typeToFilter == "All") {
    filterOptionsArray = [];
    showCards();
  } else if (filterOptionsArray.length == 3) {
    filterOptionsArray = [];
    filterAddOptionsArray(typeToFilter);
  } else {
    filterOptionsArray.push(typeToFilter);
    filterCards();
  }
}

let filterOptionsArray = [];
function filterCards() {
  const specifictypeArr = [];
  teaStructure.forEach((element) => {
    if (filterOptionsArray.includes(element.type)) {
      specifictypeArr.push(element);
    }
  });
  showCards(specifictypeArr);
}

let cartTeaArray = [];
function addTeaToCartArray(tea) {
  if (cartTeaArray.length >= 1) {
    alert("You have a limity of 1 Tea!");
  } else {
    cartTeaArray.push(tea);
    cartArray.unshift(tea);
    displayCartArray();
  }
}

let cartToppingArray = [];
function addToppingToCartArray(topping) {
  if (cartArray.length === 0) {
    alert("First choose your Tea!")
  }
  else if (cartToppingArray.length >= 2) {
    alert("You have a limit of 2 Toppings!");
  } else {
    cartToppingArray.push(topping);
    cartArray.push(topping);
    displayCartArray();
  }
}

let cartArray = [];
function displayCartArray() {
  const cardContainer = document.getElementById("card-container-cart");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card2");

  cartArray.forEach((element) => {
    let title = element.name;
    let imageURL = element.url;
    let type = element.type;
    let disc = element.disc;

    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, imageURL, type, disc);
    cardContainer.appendChild(nextCard);
  });
}

/**
 * Functionality:
 * -remove from cart \
 * -add rating to each card \
 * -total is the average of the sum \
 * - Css no hover over cart items. \
 * -filter buttons
 */

function removeTeaFromCart() {
  if (cartTeaArray.length === 0) {
    alert("You have no Tea!");
  } else {
    cartTeaArray.pop();
    cartArray.shift();
    displayCartArray();
  }
}

function removeToppingFromCart() {
  if (cartToppingArray.length === 0) {
    alert("You have no toppings!");
  } else {
    cartToppingArray.pop();
    cartArray.pop();
    displayCartArray();
  }
}

function cartRating() {
  if (cartArray.length === 0) {
    alert("Nothing in Cart")
  } else if (cartTeaArray.length === 0) {
    alert("Please choose a Tea!")
  } else {
    let sum = 0.0;
    let average = 0.0;
    cartArray.forEach(element => {
      sum += element.rating;
    });
    average = sum / cartArray.length;
    console.log(average);
  }
}