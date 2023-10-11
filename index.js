console.log("hiiiii")
let idd = 3;
const inputiwant = document.querySelector("input");
const outputiwant = document.querySelector(".oldtodo");


inputiwant.addEventListener('change', () => {
    let varia = inputiwant.value;
    outputiwant.innerHTML += `<div class="item-${idd} storedtodo">${varia}<button class="item-${idd}" onClick="reply_click(this.className)">X</button></div>`;
    // console.log(varia);
    inputiwant.value = "";
    idd++;
});

function reply_click(classs) {
    console.log(classs);
    const elementtobedeleted = document.querySelector(`.${classs}`);
    elementtobedeleted.remove();

}