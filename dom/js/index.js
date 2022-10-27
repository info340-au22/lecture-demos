'use strict';

//DATA
const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Lil Nas X", title: "MONTERO (Call Me By Your Name)", youtubeUrl: "https://www.youtube.com/watch?v=6swmTBVI83k"
  }
];

//STATE DATA
let puppyShown = true;



const newSong = { artist: "Justin Bieber", title: "Peaches", youtubeUrl:"" }

songArray.push(newSong);
// songArray[songArray.length] = newSong;
console.log(songArray);

// for(const songObj of songArray) {
//   console.log(songObj.artist + " - " + songObj.title);
// }
// songArray.forEach(function(songObj) {
//   console.log(songObj.artist + " - " + songObj.title);
// })
// const playlistArray = [songArray[0], songArray[3]];

//selecting elements!
const h1Elem = document.querySelector("h1");
console.log(h1Elem);

// const puppyImg = document.querySelector("#puppySection img");
// console.log(puppyImg);

console.log(document.querySelector("section"));

//modify elements
h1Elem.textContent = "DOM Demo";

// puppyImg.src = "img/husky.jpg";
// puppyImg.alt = "a husky";

// document.querySelector('header').classList.add('py-5');

const newLi = document.createElement('li');
newLi.textContent = songArray[0].artist + " - " + songArray[0].title;
console.log(newLi);


//take in a song object
//return a formatted <li>
function createSongListItem(songObj) {
  const aElem = document.createElement('a');
  aElem.textContent = songObj.artist + " - " + songObj.title;
  aElem.href = songObj.youtubeUrl;
  const newLi = document.createElement('li');
  newLi.appendChild(aElem);

  return newLi;
}

function renderSongList(aSongArray){
  const songListElem = document.querySelector('#dataSection ol');
  songListElem.innerHTML = ""; //clear out old content

  //put in the new content
  for(const songObj of aSongArray){
    const songLiElem = createSongListItem(songObj);
    songListElem.appendChild(songLiElem);
  }  
  document.querySelector('#dataSection h2').textContent = "Top "+aSongArray.length+" Songs";
}

renderSongList(songArray);


//INTERACTIVITY
const hideButton = document.querySelector('#puppySection button');

function renderPuppy(){
  const puppyContainer = document.querySelector('#puppySection div');
  puppyContainer.innerHTML = "";

  if(puppyShown) {
    const imgElem = document.createElement('img');
    imgElem.src = 'img/puppy.jpg';
    imgElem.alt = 'a cute puppy'; 
    // if(!puppyShown){
    //   imgElem.classList.add('d-none');
    // }
    puppyContainer.appendChild(imgElem);

    document.querySelector('#puppySection button').textContent = "Hide";
  } else { //not shown
    document.querySelector('#puppySection button').textContent = "Show";
  }
}

renderPuppy();

hideButton.addEventListener('click', function(event) {
  //change the state
  puppyShown = !puppyShown; //toggle!

  //re-render
  renderPuppy();
});

//FORM
const formElem = document.querySelector('#formSection form');

formElem.addEventListener('submit', function(event) {
  event.preventDefault();

  const artistInput = document.querySelector('#artistInput');
  const titleInput = document.querySelector('#titleInput');
  const urlInput = document.querySelector('#urlInput');

  const artistVal = artistInput.value;
  const titleVal = titleInput.value;
  const urlVal = urlInput.value;

  const newSong = {
    artist: artistVal, 
    title: titleVal, 
    youtubeUrl: urlVal 
  }

  songArray.push(newSong);
  renderSongList(songArray);
})













