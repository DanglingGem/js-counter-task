let count = 0;

const value = document.querySelector("#value");
const lowerBtn = document.querySelector("#lower-btn");
const addBtn = document.querySelector("#add-btn");


lowerBtn.addEventListener("click", () => {
    if(count > 0) {
        count--;
        value.innerHTML = count;
    }
});

addBtn.addEventListener("click", () => {
    if(count < 50) {
        count++;
        value.innerHTML = count;
    }
});


