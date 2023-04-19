var beeNoise = new Audio('bee.mp3');
let beeButton = document.getElementById("showBee");
let beeBody = document.getElementById("bee");
let petals = document.getElementsByClassName("petal");
let middlePetals = document.getElementsByClassName("middlePetal");
var petalNum = 0; 

var words = ["little", "flower", "penguin", "wallpaper", "design", "kangaroo", "nick", "kitchen", "respect"];

const randomIndex = Math.floor(Math.random() * words.length);
var selectedWord = words[randomIndex];

var elements = document.getElementsByClassName("letter"); 
console.log(selectedWord); 

for (let i = 0; i < selectedWord.length; i++) 
{
    elements[i].removeAttribute("hidden", "");
}


let keyboardButton = document.getElementsByClassName("keyboardButton"); 

for (let i = 0; i < keyboardButton.length; i++)
{
    keyboardButton[i].addEventListener("click", function myFunction() {guessLetter(keyboardButton[i].id.toLowerCase()); keyboardButton[i].removeEventListener("click", myFunction); keyboardButton[i].style.backgroundColor = "darkgrey";});
}

function guessLetter(letter) 
{
    var letterFound = false;  

    console.log(letter);
    for (let i = 0; i < selectedWord.length; i++)
    {
        if(selectedWord.charAt(i) == letter)
        {
            elements[i].textContent = letter; 

            letterFound = true; 
        }
    }

    if (!letterFound) {
        showBee();
    }
}

function showBee() 
{
    beeNoise.play();
    beeBody.removeAttribute("hidden");
    setTimeout(() => {removePetal(petalNum); beeBody.setAttribute("hidden", ""); petalNum += 1;}, 2900); 
}

function removePetal(num)
{
    if (num > 3)
    {
        middlePetals[num - 4].setAttribute("hidden", "");
    }
    else
    {
        petals[num].setAttribute("hidden", "");
    }
}
