
let beeButton = document.getElementById("showBee");
let beeBody = document.getElementById("bee");

beeButton.addEventListener("click", showBee)


function showBee() 
{
    beeBody.removeAttribute("hidden");
    console.log("heyyyyy");
    setTimeout(() => { beeBody.setAttribute("hidden", "");}, 4800); 
}
