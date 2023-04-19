var beeNoise = new Audio('bee.mp3');
let beeButton = document.getElementById("showBee");
let beeBody = document.getElementById("bee");

beeButton.addEventListener("click", showBee)

function showBee() 
{
    beeNoise.play();
    beeBody.removeAttribute("hidden");
    setTimeout(() => { beeBody.setAttribute("hidden", "");}, 4800); 
}
