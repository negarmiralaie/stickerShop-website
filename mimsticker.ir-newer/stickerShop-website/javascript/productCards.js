// const body = document.body;
let productNo = 0;

class productCard {
    constructor(productImgSrc, productName, productPrice) {
        this.productImgSrc = productImgSrc;
        this.productName = productName;
        this.productPrice = productPrice;

        // console.log(this.productImgSrc, this.productName, this.productPrice);
    }
}

class placeCards {
  constructor(parentSectionId) {
    this.parentSectionId = parentSectionId;
    this.parentSectionElement = document.createElement("section");
    this.parentSectionElement.setAttribute("id", parentSectionId);
    // this.parentSectionElement = document.getElementById(parentSectionId);
  }
  makeSectionWith4childSections(
    productCard1,
    productCard2,
    productCard3,
    productCard4
  ) {
    this.sectionWith4childSections = document.createElement("section");
    this.sectionWith4childSections.classList.add("sectionWith4childSections");
    this.makeSectionWith2childSections(productCard1, productCard2);
    this.makeSectionWith2childSections(productCard3, productCard4);
    console.log(this.parentSectionElement);
    this.parentSectionElement.append(this.sectionWith4childSections);
    body.append(this.parentSectionElement);
  }

  makeSectionWith2childSections(productCard1, productCard2) {
    this.sectionWith2childSections = document.createElement("section");
    this.sectionWith2childSections.classList.add("sectionWith2childSections");
    this.make1ProductCard(productCard1);
    this.make1ProductCard(productCard2);
    this.sectionWith4childSections.append(this.sectionWith2childSections);
    console.log(this.sectionWith4childSections);
  }

  makeProductImgElement(productCard) {
    this.productImgElement = document.createElement("img");
    this.productImgElement.src = productCard.productImgSrc;
    this.productCard.append(this.productImgElement);
  }

  makeProductNameElement(productCard) {
    this.productNameElement = document.createElement("h5");
    this.productNameElement.innerText = productCard.productName;
    this.productCard.append(this.productNameElement);
  }

  makeProductPriceElement(productCard) {
    this.productPriceElement = document.createElement("h6");
    this.productPriceElement.innerText = productCard.productPrice;
    this.productCard.append(this.productPriceElement);
  }

  make1ProductCard(productCard) {
    this.productCard = document.createElement("article");
    this.productCard.classList.add("productCard");
    this.productCard.setAttribute("id", `productCardNo${productNo}`);
    this.makeProductImgElement(productCard);
    this.makeProductNameElement(productCard);
    this.makeProductPriceElement(productCard);
    this.sectionWith2childSections.append(this.productCard);
    productNo++;
  }
}

let allStoredProductCards = [];

let card1 = new productCard("../cardsImages/1-1.jpg", "استیکر عینک اسنوپ داگ", "۳٫۹۲۰تومان");
let card2 = new productCard("../cardsImages/1-1.jpg", "استیکر دایناسور آفلاین", "۳٫۹۲۰تومان");
let card3 = new productCard("../cardsImages/1-1.jpg", "استیکر شارژ 1درصد", "۳٫۹۲۰تومان");
let card4 = new productCard("../cardsImages/1-1.jpg", "استیکر متن", "۳٫۹۲۰تومان");

allStoredProductCards.push(card1);
allStoredProductCards.push(card2);
allStoredProductCards.push(card3);
allStoredProductCards.push(card4);

let placeCards1 = new placeCards("firstSectionWith4Childs");
placeCards1.makeSectionWith4childSections(card1, card2, card3, card4);

