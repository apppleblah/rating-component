const ratingState = document.querySelector(".rating");
const thankyouState = document.querySelector(".thankyou");

const submit = document.querySelector("button");
const ratingMessage = document.querySelector("div p");


submit.addEventListener("click", submitClick);

function submitClick(event){
    const rating = document.querySelector('input[name="rating"]:checked').value;
    ratingMessage.innerHTML = `You selected ${rating} out of 5`;
    ratingState.style.display = "none"
    thankyouState.style.display = "flex"

    event.preventDefault();
}