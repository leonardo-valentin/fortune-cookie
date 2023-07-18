const closedBiscuit = document.querySelector('.closed-biscuit')
const openedBiscuit = document.querySelector('.opened-biscuit')
const luckyMessagesArray = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A vida trará coisas boas se tiveres paciência.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não compense na ira o que lhe falta na razão.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
]

closedBiscuit.querySelector("img").addEventListener('click', handleClick)
openedBiscuit.querySelector("button").addEventListener('click', handleReset)
document.addEventListener('keydown', keyPress)


function handleClick() {
    toggleScreen()
    showMessage()
}

function handleReset() {
    toggleScreen()
}

function toggleScreen() {
    closedBiscuit.classList.toggle('hide')
    openedBiscuit.classList.toggle('hide')
}

function selectRandomMessage() {
    return luckyMessagesArray[Math.round(Math.random() * 10 /2)]
}

function showMessage() {
    openedBiscuit.querySelector("p").innerText = selectRandomMessage()
}

function keyPress() {
    if (openedBiscuit.classList.contains('hide') === false) {
        toggleScreen()
    }
}