'use strict';

//DATA
const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Lil Nas X", title: "MONTERO (Call Me By Your Name)", youtubeUrl: "https://www.youtube.com/watch?v=6swmTBVI83k"
  }
];

//STATE
let puppyShown = true;



//modifying html
const h1Elem = document.querySelector('h1');
console.log(h1Elem);

// const imgElem = document.querySelector('#puppySection img')
// console.log(imgElem);

h1Elem.textContent = "DOM Demo Section B";

// imgElem.src = "img/husky.jpg";
// imgElem.alt = "a big puppy";

const headerElem = document.querySelector('header');
//console.log(headerElem.classList);

//creating html

//takes in a data object {}
//create and return an HTML element
function createSongListItem(aSongObj) {
  const aElem = document.createElement('a');
  aElem.href = aSongObj.youtubeUrl;
  aElem.textContent = aSongObj.artist + " - " + aSongObj.title;

  const newLi = document.createElement('li');
  // newLi.classList.add('list-group-item');
  newLi.appendChild(aElem);
  return newLi;

}

function renderSongList(aSongArray){
  const songListElem = document.querySelector("#dataSection ol");

  songListElem.innerHTML = ""; //get rid of old songs

  for(const songObj of aSongArray){
    const songLi = createSongListItem(songObj);
    songListElem.appendChild(songLi);
  }

  document.querySelector("#dataSection h2")
    .textContent = "Top "+aSongArray.length+" Songs";

}

renderSongList(songArray);


//event handling!
const hideButton = document.querySelector('#puppySection button');

//adds a puppy image to the page
function renderPuppy() {
  const puppyContainer = document.querySelector('#puppySection div');

  puppyContainer.innerHTML = "";

  if(puppyShown){
    const imgElem = document.createElement('img');
    imgElem.src = "img/puppy.jpg";
    imgElem.alt = "a cute puppy";

    puppyContainer.appendChild(imgElem);
 
    hideButton.textContent = "Hide";
   } 
   else { //puppy not shown
    //don't show the puppy

    hideButton.textContent = "Show";
   }
}

renderPuppy(); //show the puppy at the start!


//                             whattodowhenclicked
hideButton.addEventListener('click', function(event){
  // console.log("You clicked me!");
  // console.log(event.target);

  //modify my state
  puppyShown = !puppyShown; //switch from T <-> F

  //re-render my content
  renderPuppy();
});


//FORMS
const formElem = document.querySelector("#formSection form");

formElem.addEventListener('submit', function(event){
  event.preventDefault();
  console.log("you submitted the form!");

  //get what the user typed in
  const artistInput = document.querySelector("#artistInput");
  const titleInput = document.querySelector("#titleInput");
  const urlInput = document.querySelector("#urlInput");

  const enteredArtist = artistInput.value;
  const enteredTitle = titleInput.value;
  const enteredUrl = urlInput.value;

  //update the data
  const newSongObj = {
    artist: enteredArtist,
    title: enteredTitle,
    youtubeUrl: enteredUrl,
  }
  songArray.push(newSongObj);

  renderSongList(songArray);


  

})






