let bestSellesCurrentPage = 1;
let lastBestSellsPageNo = document.getElementById("lastBestSellsPageNo");
let bestSellesPageNavInputElement = document.getElementById(
    "bestSellesPageNavInput"
);
let bestSellesNextPageBtn = document.getElementById("bestSellesNextPageBtn");
let bestSellesPreviousPageBtn = document.getElementById(
    "bestSellesPreviousPageBtn"
);
//set page navigator input to 1 as default
bestSellesPageNavInputElement.value = 1;

//if pageNo is 1, previous button should be disabled
if (bestSellesPageNavInputElement.value == 1) {
    bestSellesPreviousPageBtn.style.cursor = "not-allowed";
}

//if pageNo is max page no, next button should be disabled
if (bestSellesPageNavInputElement.value == lastBestSellsPageNo) {
    bestSellesNextPageBtn.style.cursor = "not-allowed";
}

//if bestSellesNextPageBtn in clecked, go to next page and change input value
bestSellesNextPageBtn.addEventListener("click", event => {
    if (bestSellesPageNavInputElement.value == lastBestSellsPageNo) {
        //if pageNo is not 1, increase input page number each time next btn is clicked
        bestSellesPageNavInputElement.value =
            parseInt(bestSellesPageNavInputElement.value) + 1;
    }
});

//if bestSellesPreviousPageBtn in clecked, go to previous page and change input value
bestSellesPreviousPageBtn.addEventListener("click", event => {
    if (bestSellesPageNavInputElement.value != 1) {
        //if pageNo is not max page number, decrease input page number each time previous btn is clicked
        bestSellesPageNavInputElement.value =
            parseInt(bestSellesPageNavInputElement.value) - 1;
    }
});