const data = {
  mainTitle: "crio team",
  cardContents: [
    {
      name: "Ajay",
      imageLink:
        "https://www.crio.do/blog/content/images/size/w150/2020/10/ajay2.JPG",
    },
    {
      name: "sridher",
      imageLink:
      "https://images.yourstory.com/cs/images/people/Crio-1594568824021.png"
    },
    {
      name: "Ajay",
      imageLink:
      "https://www.crio.do/blog/content/images/size/w150/2020/10/ajay2.JPG",
    },
    {
      name: "sridher",
      imageLink:
      "https://images.yourstory.com/cs/images/people/Crio-1594568824021.png",
    },
  ],
  userData: { name: "Crio.Do", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);



// https://images.yourstory.com/cs/images/people/Crio-1594568824021.png