let bestSellesCurrentPage = 1;
let lastBestSellsPageNo = document.getElementById("lastBestSellsPageNo").innerText;
let bestSellesPageNavInputElement = document.getElementById(
    "bestSellesPageNavInput"
);
let bestSellesNextPageBtn = document.getElementById("bestSellesNextPageBtn");
let bestSellesPreviousPageBtn = document.getElementById(
    "bestSellesPreviousPageBtn"
);
//set page navigator input to 1 as default
bestSellesPageNavInputElement.value = 1;
bestSellesPreviousPageBtn.style.backgroundColor = "gray";

bestSellesPageNavInputElement.addEventListener("input", event => {
    bestSellesCurrentPage = bestSellesPageNavInputElement.value;
    showBestSellPages();
})

//click next page
bestSellesNextPageBtn.addEventListener("click", event => {
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
        bestSellesCurrentPage = bestSellesPageNavInputElement.value;
        showBestSellPages();
    }
})


//click previous page
bestSellesPreviousPageBtn.addEventListener("click", event => {
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
        bestSellesCurrentPage = bestSellesPageNavInputElement.value;
        showBestSellPages();
    }

    // console.log(bestSellesCurrentPage);
})