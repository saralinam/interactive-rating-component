"use strict";

const parentGroup = document.querySelector(".btn-group");
const ratingButton = document.querySelectorAll(".btn-group button");
const submitBtn = document.querySelector(".btn-submit");
const container = document.querySelector(".container");
const ratingCount = document.querySelector(".rating-count");
const resultEl = document.querySelector(".result");

let rating = 0;

parentGroup.addEventListener("click", (e) => {
  for (let i = 0; i < ratingButton.length; i++) {
 
    if (e.target === ratingButton[i]) {
     ratingButton[i].classList.add("active");


    rating = ratingButton[i].textContent;
      
    }else ratingButton[i].classList.remove("active");
  }
});

submitBtn.addEventListener("click", ()=>{
    console.log(rating);
    if(Number(rating) ===0) return;
    ratingCount.textContent = rating;

    resultEl.classList.remove("hidden");
    container.classList.add("hidden");

})


