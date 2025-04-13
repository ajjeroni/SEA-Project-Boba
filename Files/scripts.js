/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/**
 * Here, I am creating my own array of objects for the tea bases.
 * I am choosing 3 types of tea bases, Oolong, Black and Green. 
 * For each base I will choose 3 types of teas.
 * Each tea will have a name, type, a small discription, and a URL (preferably 1200 x 1200)
 * I also export it to use in scripts.js
 */
const teaStructure = [
  {
      teaName : "Tie Guan Yin",
      teaType : "Oolong",
      teaDisc : "Floral, light, and airy - Often thought of as similar to an orchid.",
      teaUrl : "https://www.teadealers.com/cdn/shop/products/IMG-5168copy.jpg?v=1664066888"
  },
  {
      teaName : "Jin Xuan",
      teaType : "Oolong",
      teaDisc : "Naturally milky, creamy, and buttery.",
      teaUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jin_Xuan_oolong_tea.jpg/1200px-Jin_Xuan_oolong_tea.jpg"
  },
  {
      teaName : "Dan Cong",
      teaType : "Oolong",
      teaDisc : "Natural flavors and aroma - Full-bodied, rich, and fragrant.",
      teaUrl : "https://www.jingteashop.com/cdn/shop/products/oolong-dancong-szdc1.jpg?v=1641104848"
  },
  {
      teaName : "Matcha",
      teaType : "Green",
      teaDisc : "A fine powdered tea with a bright, emerald green color and a rich, vegetal taste.",
      teaUrl : "https://oldbarreltea.com/cdn/shop/products/Matcha_1200x1200.jpg?v=1605636985"
  },
  {
      teaName : "Jasmine",
      teaType : "Green",
      teaDisc : "Delicate, floral, and slightly sweet flavor, often enjoyed for its aromatic fragrance and refreshing taste.",
      teaUrl : "https://oldbarreltea.com/cdn/shop/products/JasmineLooseLeaf_1200x1200.jpg?v=1624483058"
  },
  {
      teaName : "Hojicha",
      teaType : "Green",
      teaDisc : "Roasted green tea with a unique, earthy aroma and a distinct flavor profile.",
      teaUrl : "https://www.nannuoshan.org/cdn/shop/files/T376_IMG_6337_1200x1200.jpg?v=1711989098"
  },
  {
      teaName : "Earl Grey",
      teaType : "Black",
      teaDisc : "A black tea blend flavored with bergamot oil, a citrus fruit oil, resulting in a distinctive, citrusy, and often floral taste.",
      teaUrl : "http://thesteepingroom.com/cdn/shop/files/earl-grey-creme-tea-597477.jpg?v=1720131219"
  },
  {
      teaName : "Red Jade",
      teaType : "Black",
      teaDisc : "A deep, rich ruby-colored infusion with a complex flavor that includes notes of mint, cinnamon, and a subtle sweetness.",
      teaUrl : "https://thejadeleaf.com/cdn/shop/products/IMG_2875.jpg?v=1611684003"
  },
  {
      teaName : "Assam",
      teaType : "Black",
      teaDisc : "A robust, malty black tea variety known for its strong flavor and high caffeine content.",
      teaUrl : "https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/1200x1200/products/26516/320993/yxl7gzyduwqoxqwo5nzj__27286.1738960361.jpg?c=1"
  }
]

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < teaStructure.length; i++) {
    
    /**
     * Here, I used the for loop to iterate through all the tea objecys in my array
     * in order to pass each objects properties to the edit card content function.
     */
    let title = teaStructure[i].teaName;
    let imageURL = teaStructure[i].teaUrl;
    let type = teaStructure[i].teaType;
    let disc = teaStructure[i].teaDisc;


    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, type, disc); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, newType, newDisc) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Tea";

  //
  const teaType = card.querySelector("h3");
  teaType.textContent = newType;

  const teaDisc = card.querySelector("p");
  teaDisc.textContent = newDisc;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  teaStructure.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}