// set initial value to zero
let count = 0;
// select buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//console.log();



btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("lower")) {
            count--;
        }else if (styles.contains("add")) {
            count++;
        }else {
            count = 0;
        }
        
        if(count === 0){
            return count;
        }
        if (count === 50){
            return count;
        }
        value.textContent = count;
    });
});