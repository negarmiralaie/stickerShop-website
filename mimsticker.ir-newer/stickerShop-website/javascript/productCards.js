let productNo = 0;
let bestSellesElement = document.getElementById("bestSelles");
const bestSellesNavigatorElement = document.getElementById(
  "bestSellesNavigator"
);
class productCard {
    constructor(productImgSrc, productName, productPrice) {
        this.productImgSrc = productImgSrc;
        this.productName = productName;
        this.productPrice = productPrice;
    }
}

class placeCards {
    constructor(parentSectionId) {
        this.parentSectionId = parentSectionId;
        this.parentSectionElement = document.createElement("section");
        this.parentSectionElement.setAttribute("id", parentSectionId);
    }
    makeSectionWith4childSections(
        productCard1,
        productCard2,
        productCard3,
        productCard4
    ) {
        this.sectionWith4childSections = document.createElement("section");
        this.sectionWith4childSections.classList.add("sectionWith4childSections");
        this.sectionWith4childSections.setAttribute(
          "id",
          "sectionWith4childSections"
        );
        this.makeSectionWith2childSections(productCard1, productCard2);
        this.makeSectionWith2childSections(productCard3, productCard4);
        this.parentSectionElement.append(this.sectionWith4childSections);
        bestSellesElement.append(this.parentSectionElement);
    }

    makeSectionWith2childSections(productCard1, productCard2) {
        this.sectionWith2childSections = document.createElement("section");
        this.sectionWith2childSections.classList.add("sectionWith2childSections");
        this.make1ProductCard(productCard1);
        this.make1ProductCard(productCard2);
        this.sectionWith4childSections.append(this.sectionWith2childSections);
    }

    makeProductImgElement(productCard) {
        this.productImgElement = document.createElement("img");
        this.productImgElement.classList.add("productImg");
        this.productImgElement.src = productCard.productImgSrc;
        this.productCard.append(this.productImgElement);
    }

    makeProductNameElement(productCard) {
        this.productNameElement = document.createElement("p");
        this.productNameElement.classList.add("productName");
        this.productNameElement.innerText = productCard.productName;
        this.productCard.append(this.productNameElement);
    }

    makeProductPriceElement(productCard) {
        this.productPriceElement = document.createElement("p");
        this.productPriceElement.classList.add("productPrice");
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