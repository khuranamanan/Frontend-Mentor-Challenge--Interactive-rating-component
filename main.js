const mainContainer = document.querySelector("#main-container");
const thankYouContainer = document.querySelector("#thank-you-container");
const ratingButtons = document.querySelectorAll(".rating-btn");
const btnSubmit = document.querySelector("#btn-submit");
const ratingNumber = document.querySelector(".rating-number");

ratingButtons.forEach((e)=>{
    e.addEventListener("click", ()=>{
        ratingNumber.innerText = e.innerText;
    })
})

btnSubmit.addEventListener("click", ()=>{
    mainContainer.style.display = "none";
    thankYouContainer.style.display = "";
})