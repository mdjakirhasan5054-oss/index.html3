let coins = 0;
function addCoins(amount) {
    coins += amount;
    document.getElementById('wallet').innerText = 'Coins: ' + coins;
}