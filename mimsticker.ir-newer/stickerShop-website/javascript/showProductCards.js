// let placeCards1;

function showBestSellsPage1() {
  placeCards1 = new placeCards("firstSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card1, card2, card3, card4);

  placeCards1 = new placeCards("secondSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card5, card6, card7, card8);

  placeCards1 = new placeCards("thirdSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card9, card10, card11, card12);

  placeCards1 = new placeCards("fourthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card13, card14, card15, card16);

  placeCards1 = new placeCards("fifthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card17, card18, card19, card20);

  placeCards1 = new placeCards("sixthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card21, card22, card23, card24);

  placeCards1 = new placeCards("seventhSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card25, card26, card27, card28);

  placeCards1 = new placeCards("eighthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card29, card30, card31, card32);
}

function showBestSellsPage2() {
  placeCards1 = new placeCards("firstSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card33, card34, card35, card36);

  placeCards1 = new placeCards("secondSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card37, card38, card39, card40);

  placeCards1 = new placeCards("thirdSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card41, card42, card43, card44);

  placeCards1 = new placeCards("fourthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card45, card46, card47, card48);

  placeCards1 = new placeCards("fifthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card49, card50, card51, card52);

  placeCards1 = new placeCards("sixthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card53, card54, card55, card56);

  placeCards1 = new placeCards("seventhSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card57, card58, card59, card60);

  placeCards1 = new placeCards("eighthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card61, card62, card63, card64);
}

function showBestSellsPage3() {
  placeCards1 = new placeCards("firstSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card65, card66, card67, card68);

  placeCards1 = new placeCards("secondSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card69, card70, card71, card72);

  placeCards1 = new placeCards("thirdSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card73, card74, card75, card76);

  placeCards1 = new placeCards("fourthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card77, card78, card79, card80);

  placeCards1 = new placeCards("fifthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card81, card82, card83, card84);

  placeCards1 = new placeCards("sixthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card85, card86, card87, card88);

  placeCards1 = new placeCards("seventhSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card89, card90, card91, card92);

  placeCards1 = new placeCards("eighthSectionWith4Childs");
  placeCards1.makeSectionWith4childSections(card93, card94, card95, card96);
}

showBestSellsPage1();
let bestSellesNavigator = document.getElementById("bestSellesNavigator");

function createBestSellesElement() {
  bestSellesElement = document.createElement("section");
  bestSellesElement.classList.add("bestSelles");
  bestSellesElement.setAttribute("id", "bestSelles");
  document.body.insertBefore(bestSellesElement, bestSellesNavigator);
}

function showBestSellPages() {
  bestSellesElement.remove();
  createBestSellesElement();
  if (bestSellesCurrentPage == 1) {
    showBestSellsPage1();
  } else if (bestSellesCurrentPage == 2) {
    showBestSellsPage2();
  } else if (bestSellesCurrentPage == 3) {
    showBestSellsPage3();
  }
}