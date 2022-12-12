const cartArray = [];

function display(cartPlayer){
    const tableBody = document.getElementById("player-name-cart");
    tableBody.innerHTML = "";
    for(let i = 0; i < cartPlayer.length; i++){
        const name = cartPlayer[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1} .</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }
}


function addToCart(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);
    const playerNameObj = {
        playerName: playerName,
    }
    // console.log(playerNameObj);

    cartArray.push(playerNameObj);
    // console.log(cartArray);
    display(cartArray);
}