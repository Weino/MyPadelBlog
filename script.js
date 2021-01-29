window.addEventListener('load', () => {
})

function Player(name, lastName, imgUrl, age) {
    this.name = name;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
    this.age = age;
}

function onNumberOfPlayerChange(inputBox){

    const myArray = getPlayers(inputBox.value);
    console.log(inputBox.value)
       
    const list = document.getElementById("myList");

    const listItems = myArray.map( (player) => {
        return `<li>
        <div class="player-Info">
            <h2 class="playerTitle">${player.name} ${player.lastName}</h2>
            <img class="player-Img" src="${player.imgUrl}" alt="Image of ${player.name} ${player.lastName}" width="500" height="600">
            <p class="player-Age">Age : ${player.age} </p>
        </div>
        </li>`});        

        

    list.innerHTML = listItems.join('')

}

function getPlayers(numberOfPlayers){

    let player1 = new Player('Juan','Lebron','https://padelworldpress.es/wp-content/uploads/2020/08/Juan-Lbron.jpg', 25);
    let player2 = new Player('Alejandro','Galn Romo','https://www.worldpadeltour.com/media-content/2020/09/destacada-alejandro-galn-romo-f38f1626f6-1200x500.JPG', 23);
    let player3 = new Player('Francisco','Navarro Compán','https://www.worldpadeltour.com/media-content/2020/03/destacada-francisco-navarro-compn-71b9866456-1200x500.JPG', 41 )
    let allPlayers = [player1, player2, player3];

    return allPlayers.slice(0,numberOfPlayers);
   //hej 
}