const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    //console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let coins = JSON.parse(xhr.responseText).slice(0, 100)
            parseCoins(coins)
        }
    }
}
 
xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/list')
xhr.send();


function parseCoins(coins) {
    const divs = coins.map(coin => {
        return `
        <div class="display">
        <h1>${coin.symbol}</h1>
        <br>
        <p>${coin.name}</p>
        <br>
        <button id="more">More Info</button>
        </div>
        `
        // let divO = document.createElement('div')
        // document.querySelector('#main').appendChild(divO)
        // divO.classList.add('display')
        // let h11 = document.createElement(h1)
        // document.querySelector('display').appendChild(h11).innerHTML = coin.symbol
        // const x = document.querySelector('.display')
        // console.log(x)
    }
    );
    document.getElementById('main').innerHTML = divs
}

document.getElementById('home').addEventListener('click', () => {
    const coins = JSON.parse(xhr.responseText)
    parseCoins(coins)
    document.getElementById('main').appendChild(y).innerHTML = divs
})



document.getElementById('live').addEventListener('click', () => {
    document.getElementById('main').innerHTML = ''
    const y = document.createElement('h1')
    document.getElementById('main').appendChild(y).innerHTML = 'Live Report'
});

document.getElementById('about').addEventListener('click', () => {
    document.getElementById('main').innerHTML = ''
    const y = document.createElement('h1')
    document.getElementById('main').appendChild(y).innerHTML = 'About'
});

// Search button
document.querySelector('#search').addEventListener('click', () => {

 });


