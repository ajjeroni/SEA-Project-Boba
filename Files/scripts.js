/**
 * Here, I am creating my own array of objects for the tea bases.
 * I am choosing 3 types of tea bases, Oolong, Black and Green.
 * For each base I will choose 4 types of teas.
 * Each tea will have a name, type, a small discription, and a URL (preferably 1200 x 1200)
 */
const teaStructure = [
  {
    teaName: "Tie Guan Yin",
    teaType: "Oolong",
    teaDisc:
      "Floral, light, and airy - Often thought of as similar to an orchid.",
    teaUrl:
      "https://www.teadealers.com/cdn/shop/products/IMG-5168copy.jpg?v=1664066888",
  },
  {
    teaName: "Jin Xuan",
    teaType: "Oolong",
    teaDisc: "Naturally milky, creamy, and buttery.",
    teaUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jin_Xuan_oolong_tea.jpg/1200px-Jin_Xuan_oolong_tea.jpg",
  },
  {
    teaName: "Dan Cong",
    teaType: "Oolong",
    teaDisc: "Natural flavors and aroma - Full-bodied, rich, and fragrant.",
    teaUrl:
      "https://www.jingteashop.com/cdn/shop/products/oolong-dancong-szdc1.jpg?v=1641104848",
  },
  {
    teaName: "Gaoshan",
    teaType: "Oolong",
    teaDisc:
      "An airy, floral aroma hovers over the cup - the scent of gardenia, lilac, and orchid abound - accented by a pure note of pine sap.",
    teaUrl:
      "https://www.teamountain.cz/wp-content/uploads/2020/07/cuifeng_qinxiang_oolong.jpg",
  },
  {
    teaName: "Matcha",
    teaType: "Green",
    teaDisc:
      "A fine powdered tea with a bright, emerald green color and a rich, vegetal taste.",
    teaUrl:
      "https://oldbarreltea.com/cdn/shop/products/Matcha_1200x1200.jpg?v=1605636985",
  },
  {
    teaName: "Jasmine",
    teaType: "Green",
    teaDisc:
      "Delicate, floral, and slightly sweet flavor, often enjoyed for its aromatic fragrance and refreshing taste.",
    teaUrl:
      "https://oldbarreltea.com/cdn/shop/products/JasmineLooseLeaf_1200x1200.jpg?v=1624483058",
  },
  {
    teaName: "Hojicha",
    teaType: "Green",
    teaDisc:
      "Roasted green tea with a unique, earthy aroma and a distinct flavor profile.",
    teaUrl:
      "https://www.nannuoshan.org/cdn/shop/files/T376_IMG_6337_1200x1200.jpg?v=1711989098",
  },
  {
    teaName: "Gyokuro",
    teaType: "Green",
    teaDisc:
      "prized for its rich umami flavor, sweetness, and delicate aroma, often described as having notes of seaweed and grass.",
    teaUrl:
      "https://www.teadealers.com/cdn/shop/files/IMG_7927copy_1200x.jpg?v=1691338883",
  },
  {
    teaName: "Earl Grey",
    teaType: "Black",
    teaDisc:
      "A black tea blend flavored with bergamot oil, a citrus fruit oil, resulting in a distinctive, citrusy, and often floral taste.",
    teaUrl:
      "http://thesteepingroom.com/cdn/shop/files/earl-grey-creme-tea-597477.jpg?v=1720131219",
  },
  {
    teaName: "Red Jade",
    teaType: "Black",
    teaDisc:
      "A deep, rich ruby-colored infusion with a complex flavor that includes notes of mint, cinnamon, and a subtle sweetness.",
    teaUrl:
      "https://thejadeleaf.com/cdn/shop/products/IMG_2875.jpg?v=1611684003",
  },
  {
    teaName: "Assam",
    teaType: "Black",
    teaDisc:
      "A robust, malty black tea variety known for its strong flavor and high caffeine content.",
    teaUrl:
      "https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/1200x1200/products/26516/320993/yxl7gzyduwqoxqwo5nzj__27286.1738960361.jpg?c=1",
  },
  {
    teaName: "Ceylon",
    teaType: "Black",
    teaDisc:
      "Known for its brisk and flavorful character, often described as having notes of citrus and spice.",
    teaUrl:
      "https://steepmtntea.com/cdn/shop/files/SingleEstateCeyolonLeaf-corrected.jpg?v=1727189687v",
  },
];

const toppingStructure = [
  {
    toppingName: "Aloe Vera",
    toppingType: "Refreshing",
    toppingDisc:
      "Highly refreshing and quite neutral in taste, it will work great with any fruity boba.",
    toppingUrl: "https://m.media-amazon.com/images/I/61MEdjgKlzL.jpg",
  },
  {
    toppingName: "Lychee Jelly",
    toppingType: "Chewy",
    toppingDisc:
      "This bubble tea topping captures the sweet, floral, and tropical essence of lychee fruit.",
    toppingUrl:
      "https://rbtea.com.sg/wp-content/uploads/2021/09/LCY-nata-coco.png",
  },
  {
    toppingName: "Aiyu Jelly",
    toppingType: "Refreshing",
    toppingDisc:
      "Also known as ice flower jelly, it consists mainly of water and is best for cooling properties.",
    toppingUrl:
      "https://www.bossenstore.com/cdn/shop/products/aijujelly.jpg?v=1696370518",
  },
  {
    toppingName: "Herb Jelly",
    toppingType: "Refreshing",
    toppingDisc:
      "It's made by infusing herbs into gel-like base, which is then sweetened to create a delightful taste.",
    toppingUrl:
      "https://chatime.ca/wp-content/uploads/2019/04/toppings-grass-jelly.png",
  },
  {
    toppingName: "Tapioca",
    toppingType: "Chewy",
    toppingDisc:
      "The perfect bubble tea topping if you want some chewiness in your drink.",
    toppingUrl:
      "https://chatime.ca/wp-content/uploads/2019/04/toppings-pearl.png",
  },
  {
    toppingName: "Mini Tapioca",
    toppingType: "Chewy",
    toppingDisc:
      "Same quality as their classic variation, but coming in smaller sizes and larger quantities, you can taste them in every sip of your drink!",
    toppingUrl:
      "http://i5.walmartimages.com/asr/24f9bfa3-a520-4c9c-bd23-b603925b226c.994e744eab81d383d041f89acdf2c4f1.jpeg",
  },
  {
    toppingName: "Pudding",
    toppingType: "Texture Change",
    toppingDisc:
      "Creamy, smooth, soft custard-like texture adds a sweet and caramelized flavor to the drink.",
    toppingUrl:
      "https://chatime.ca/wp-content/uploads/2019/04/toppings-puddings.png",
  },
  {
    toppingName: "Red Bean",
    toppingType: "Texture Change",
    toppingDisc: "They are slightly sweet with a tender beans texture.",
    toppingUrl:
      "https://bobabox.co.uk/2342-thickbox_default/sweet-red-bean.jpg",
  },
  {
    toppingName: "Ice Cream",
    toppingType: "Texture Change",
    toppingDisc:
      "Ice cream topping makes the bubble tea sweeter and colder. As the ice cream melts, you get different textures of the drinks making it richer and creamier.",
    toppingUrl:
      "https://nutritionrefined.com/wp-content/uploads/2018/07/vegan-vanilla-ice-cream-featured.jpg",
  },
];

function showCards(other = teaStructure) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  if (other == "toppingStructure") {
    for (let i = 0; i < toppingStructure.length; i++) {
      let title = toppingStructure[i].toppingName;
      let imageURL = toppingStructure[i].toppingUrl;
      let type = toppingStructure[i].toppingType;
      let disc = toppingStructure[i].toppingDisc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
      cardContainer.appendChild(nextCard);
    }
  } else if (other == "teaStructure") {
    for (let i = 0; i < teaStructure.length; i++) {
      let title = teaStructure[i].teaName;
      let imageURL = teaStructure[i].teaUrl;
      let type = teaStructure[i].teaType;
      let disc = teaStructure[i].teaDisc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
      cardContainer.appendChild(nextCard);
    }
  } else {
    for (let i = 0; i < other.length; i++) {
      let title = other[i].teaName;
      let imageURL = other[i].teaUrl;
      let type = other[i].teaType;
      let disc = other[i].teaDisc;

      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, title, imageURL, type, disc);
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

  const teaType = card.querySelector("h3");
  teaType.textContent = newType;

  const teaDisc = card.querySelector("p");
  teaDisc.textContent = newDisc;
}

document.addEventListener("DOMContentLoaded", () => {
  showCards();
});

function filterAddOptionsArray(typeToFilter) {
  console.log(typeToFilter);
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
  console.log(filterOptionsArray);
}

let filterOptionsArray = [];

function filterCards() {
  console.log("test");
  const specificTeaTypeArr = [];
  teaStructure.forEach((element) => {
    if (filterOptionsArray.includes(element.teaType)) {
      specificTeaTypeArr.push(element);
    }
  });
  showCards(specificTeaTypeArr);
}

// let filterOptionsArray2 = [];

// function filterAddOptionsArray2(typeOfTopping) {
//   if (typeOfTopping == "All") {
//     filterOptionsArray2 = [];
//     showCards2();
//   } else if (filterOptionsArray2.length == 3) {
//     filterOptionsArray2 = [];
//     filterAddOptionsArray2(typeOfTopping);
//   } else {
//     filterOptionsArray2.push(typeOfTopping);
//     filterCards2();
//   }
//   console.log(filterOptionsArray2);
// }

// function filterCards2() {
//   const specificToppingTypeArr = [];
//   toppingStructure.forEach((element) => {
//     if (filterOptionsArray2.includes(element.toppingType)) {
//       specificToppingTypeArr.push(element);
//     }
//   });
//   showCards2(specificToppingTypeArr);
// }

/**
 * Functionality:
 * Cart component
 * -Orders
 * -2 card display
 * -save and delete
 */
