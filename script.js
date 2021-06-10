/* Jag använder mig av en konstruktor för att kunna ha en "blueprint" för att skapa många objekt av samma typ, detta underlättar när man ska skapa många saker av en typ, då är
det bara att lägga till en 'player', som har en viss "regel" i sig som säger att den måste ha ett "namn, efternamn, en bild och en ålder". I JS är "this" inte en variable utan
ett "keyword". https://www.youtube.com/watch?v=Mus_vwhTCq0 är en video som förklarde bra hur man skriver sin kod smart och lätt, därifrån fick jag några ideér såsom min "player" 
function, ett bugg jag stötte på var att jag skrev fel ID på javascripten när jag skulle hämta min lista genom GetElementById, detta löste jag genom att felsöka min kod och 
senare identifiera problemet när jag hade läst min kod igen. */

window.addEventListener('load', () => {
})

function Player(name, lastName, imgUrl, age) {
    this.name = name;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
    this.age = age;
}

//Här uppdateras min DOM genom att trycka öka eller minska i InputBoxen. DOMen uppdateras på det vis att spelare läggs till eller tas bort beroende vilken Value som ligger i
//InputBoxen.
function onNumberOfPlayerChange(inputBox){
    const myArray = getPlayers(inputBox.value);
    console.log(inputBox.value);
       
    const list = document.getElementById("myList");

    const listItems = myArray.map( (player) => {
        return `<li>
        <div class="player-Info">
            <h2 class="player-Title">${player.name} ${player.lastName}</h2>
            <img class="player-Img" src="${player.imgUrl}" alt="Image of ${player.name} ${player.lastName}" width="500" height="600">
            <p class="player-Age">Age : ${player.age} </p>
        </div>
        </li>`});        

    list.innerHTML = listItems.join('');
}

function getPlayers(numberOfPlayers){

    let player1 = new Player('1. Juan','Lebron','https://padelworldpress.es/wp-content/uploads/2020/08/Juan-Lbron.jpg', 25);
    let player2 = new Player('Alejandro','Galán Romo','https://www.worldpadeltour.com/media-content/2020/09/destacada-alejandro-galn-romo-f38f1626f6-1200x500.JPG', 23);
    let player3 = new Player('Francisco','Navarro Compán','https://www.worldpadeltour.com/media-content/2020/03/destacada-francisco-navarro-compn-71b9866456-1200x500.JPG', 31 );;
    let player4 = new Player('Carlos', 'Gutiérrez', 'https://www.worldpadeltour.com/media-content/2020/03/destacada-carlos-daniel-gutirrez-d868df0ce0-1200x500.JPG', 36);
    let player5 = new Player('Pablo' , 'Lima', 'https://www.worldpadeltour.com/media-content/2019/12/lima-mvp-master-final-774x435.jpg', 34);
    let player6 = new Player('Fernando', 'Belasteguín' ,'https://www.worldpadeltour.com/media-content/2020/09/destacada-fernando-belastegun-c444417350-1200x500.JPG', 41);
    let player7 = new Player('Agustín','Tapia' ,'https://lh3.googleusercontent.com/-xgQwJnLY-1M/XxBqn8DD3XI/AAAAAAAAdCU/Akf_J0pi2l0UX9dAefofXRRIdlnBPcrowCLcBGAsYHQ/s1600/IMG-20200716-WA0023.jpg', 21);
    let player8 = new Player('Maximiliano', 'Sánchez', 'https://www.worldpadeltour.com/media-content/2016/08/Maxi-Sanchez-2-768x432.jpg', 34);
    let player9 = new Player('Franco' , 'Stupaczuk', 'https://www.worldpadeltour.com/media-content/2019/05/franco-stupaczuk-cuartos-vigo-open--774x435.jpg', 24);
    let player10 = new Player('Federico','Chingotto' , 'https://padelmagazine.fr/wp-content/uploads/2020/01/juan-tello-bandeja.jpg' , 23);

    let allPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

    return allPlayers.slice(0,numberOfPlayers);
}