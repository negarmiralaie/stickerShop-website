//localStorage.clear();
let bestSellesCurrentPage;
let bestSellesPageNavInputElement = document.getElementById(
  "bestSellesPageNavInput"
);
console.log(typeof localStorage.getItem("bestSellesCurrentPage"));
console.log(localStorage.getItem("bestSellesCurrentPage"));
if (
  JSON.parse(localStorage.getItem("bestSellesCurrentPage")) == "1" ||
  JSON.parse(localStorage.getItem("bestSellesCurrentPage")) == "2" ||
  JSON.parse(localStorage.getItem("bestSellesCurrentPage")) == "3"
) {
  bestSellesCurrentPage = parseInt(
    localStorage.getItem("bestSellesCurrentPage")
  );
  bestSellesPageNavInputElement.value = parseInt(bestSellesCurrentPage);
  console.log("A");
} else {
  bestSellesCurrentPage = 1;
  localStorage.setItem(
    "bestSellesCurrentPage",
    JSON.stringify(bestSellesPageNavInputElement.value)
  );
  bestSellesPageNavInputElement.value = parseInt(bestSellesCurrentPage);
  console.log("B");
}


let lastBestSellsPageNo = document.getElementById(
    "lastBestSellsPageNo"
).innerText;

// bestSellesPageNavInputElement.value = bestSellesCurrentPage;
let bestSellesNextPageBtn = document.getElementById("bestSellesNextPageBtn");
let bestSellesPreviousPageBtn = document.getElementById(
    "bestSellesPreviousPageBtn"
);

showBestSellPages();

// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   console.info("This page is reloaded");
//   bestSellesCurrentPage = localStorage.getItem("bestSellesCurrentPage");
// }

//set page navigator input to 1 as default
// bestSellesPageNavInputElement.value = 1;
// bestSellesPreviousPageBtn.style.backgroundColor = "gray";

function updateLocalStorageCurrentBestSellsPage() {
    localStorage.setItem(
        "bestSellesCurrentPage",
        JSON.stringify(bestSellesPageNavInputElement.value)
    );

    bestSellesCurrentPage = parseInt(
      localStorage.getItem("bestSellesCurrentPage")
    );
    bestSellesPageNavInputElement.value = parseInt(bestSellesCurrentPage);
}

bestSellesPageNavInputElement.addEventListener("input", (event) => {
    updateLocalStorageCurrentBestSellsPage();
    showBestSellPages();
});

//click next page
bestSellesNextPageBtn.addEventListener("click", (event) => {
    //if pageNo is max page no, next button should be disabled
    if (
        parseInt(bestSellesPageNavInputElement.value) + 1 ==
        lastBestSellsPageNo
    ) {
        bestSellesNextPageBtn.style.cursor = "not-allowed";
        bestSellesNextPageBtn.style.backgroundColor = "gray";
    }

    //if bestSellesPreviousPageBtn in clicked, go to previous page and change input value
    if (bestSellesPageNavInputElement.value != lastBestSellsPageNo) {
        //if pageNo is not 1, increase input page number each time next btn is clicked
        bestSellesPageNavInputElement.value =
            parseInt(bestSellesPageNavInputElement.value) + 1;
        bestSellesPreviousPageBtn.style.cursor = "pointer";
        bestSellesPreviousPageBtn.style.backgroundColor = "#46a9e0";
        updateLocalStorageCurrentBestSellsPage();
        showBestSellPages();
    }
});

//click previous page
bestSellesPreviousPageBtn.addEventListener("click", (event) => {
    //if pageNo is 1, previous button should be disabled
    if (parseInt(bestSellesPageNavInputElement.value) - 1 == 1) {
        bestSellesPreviousPageBtn.style.cursor = "not-allowed";
        bestSellesPreviousPageBtn.style.backgroundColor = "gray";
    }

    if (bestSellesPageNavInputElement.value != 1) {
        //if pageNo is not max page number, decrease input page number each time previous btn is clicked
        bestSellesPageNavInputElement.value =
            parseInt(bestSellesPageNavInputElement.value) - 1;
        bestSellesNextPageBtn.style.cursor = "pointer";
        bestSellesNextPageBtn.style.backgroundColor = "#46a9e0";
        updateLocalStorageCurrentBestSellsPage();
        showBestSellPages();
    }
});