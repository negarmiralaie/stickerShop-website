function showEachBestSellsPage(pageNo) {
  for (let i = (pageNo - 1) * 32; i < pageNo * 32;) {
    placeCards1 = new placeCards("firstSectionWith4Childs");
    placeCards1.makeSectionWith4childSections(
      allStoredProductCards[i],
      allStoredProductCards[i + 1],
      allStoredProductCards[i + 2],
      allStoredProductCards[i + 3]
    );
    i += 4;
  }
}

function showBestSellsPage1() {
  showEachBestSellsPage(1);
}

function showBestSellsPage2() {
  showEachBestSellsPage(2);
}

function showBestSellsPage3() {
  showEachBestSellsPage(3);
}

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