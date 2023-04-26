var beeNoise = new Audio('bee.mp3');
let beeButton = document.getElementById("showBee");
let beeBody = document.getElementById("bee");
let gameEndScreen = document.getElementById("endGame");
let gameWonScreen = document.getElementById("winGame");
let popup = document.getElementById("popup");
var elements = document.getElementsByClassName("letter"); 
let middlePetals = document.getElementsByClassName("middlePetal");
let keyboardButton = document.getElementsByClassName("keyboardButton"); 
let petals = document.getElementsByClassName("petal");
var petalNum = 0; 

var test = fetch('https://api.api-ninjas.com/v1/randomword', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'N+/gymp2ogPLVQ3YHFwWUQ==Sl26jzvucXrCcG5e'
    }
})

async function getApi(test) {
    const response = await test;
    var word = await response.json();

    var selectedWord = word['word'];
    selectedWord = selectedWord.toLowerCase(); 

    console.log(word);
    console.log(selectedWord);

    lostGame(); 
    
    for (let i = 0; i < selectedWord.length; i++) 
    {
        elements[i].removeAttribute("hidden", "");
    }

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
            if (petalNum < 8)
            {
                showBee();
            }
            else 
            {
                lostGame(); 
            }
        }
    }

    function showBee() 
    {
        // beeNoise.play();
        beeBody.removeAttribute("hidden");
        setTimeout(() => {removePetal(petalNum); beeBody.setAttribute("hidden", ""); petalNum += 1;}, 2400); 
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

    function lostGame()
    {
        popup.style.display = "block"; 
    }
}

getApi(test); 
