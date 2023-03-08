console.log("Spotify me aapka haardik swagat hai 😎🕺");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mainPlay = document.getElementById('main-play');
let myTimeBar = document.getElementById('time-bar');
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songDuration = audioElement.duration;

let masterSongName = document.getElementById('master-song-name');

// 36-songs currently
let songs = [
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '03:20',
    },
    {
        songName: "Daydream", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg",Album: "paTA naHI kAUN!", DateAdded: '1-12-15', duration: '3:40',
    },
    {
        songName: "Levitate by Neoni", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg",Album: "Neoni", DateAdded: '17-12-11', duration: '3:40',
    },
    {
        songName: "Royality", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg",Album: "Neoni", DateAdded: '12-11-11', duration: '3:40',
    },
    {
        songName: "Jai Ho", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg",Album: "Jagat", DateAdded: '21-12-11', duration: '3:40',
    },
    {
        songName: "JoJo", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg",Album: "Bizzare ;)", DateAdded: '12-12-12', duration: '3:40',
    },
    {
        songName: "Traitor's Requiem", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg",Album: "UraginiMono", DateAdded: '07-12-11', duration: '3:40',
    },
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '3:40',
    },
    {
        songName: "Daydream", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg",Album: "paTA naHI kAUN!", DateAdded: '1-12-15', duration: '3:40',
    },
    {
        songName: "Levitate by Neoni", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg",Album: "Neoni", DateAdded: '17-12-11', duration: '3:40',
    },
    {
        songName: "Royality", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg",Album: "Neoni", DateAdded: '12-11-11', duration: '3:40',
    },
    {
        songName: "Jai Ho", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg",Album: "Jagat", DateAdded: '21-12-11', duration: '3:40',
    },
    {
        songName: "JoJo", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg",Album: "Bizzare ;)", DateAdded: '12-12-12', duration: '3:40',
    },
    {
        songName: "Traitor's Requiem", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg",Album: "UraginiMono", DateAdded: '07-12-11', duration: '3:40',
    },
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '3:40',
    },
    {
        songName: "Daydream", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg",Album: "paTA naHI kAUN!", DateAdded: '1-12-15', duration: '3:40',
    },
    {
        songName: "Levitate by Neoni", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg",Album: "Neoni", DateAdded: '17-12-11', duration: '3:40',
    },
    {
        songName: "Royality", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg",Album: "Neoni", DateAdded: '12-11-11', duration: '3:40',
    },
    {
        songName: "Jai Ho", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg",Album: "Jagat", DateAdded: '21-12-11', duration: '3:40',
    },
    {
        songName: "JoJo", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg",Album: "Bizzare ;)", DateAdded: '12-12-12', duration: '3:40',
    },
    {
        songName: "Traitor's Requiem", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg",Album: "UraginiMono", DateAdded: '07-12-11', duration: '3:40',
    },
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '3:40',
    },
    {
        songName: "Daydream", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg",Album: "paTA naHI kAUN!", DateAdded: '1-12-15', duration: '3:40',
    },
    {
        songName: "Levitate by Neoni", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg",Album: "Neoni", DateAdded: '17-12-11', duration: '3:40',
    },
    {
        songName: "Royality", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg",Album: "Neoni", DateAdded: '12-11-11', duration: '3:40',
    },
    {
        songName: "Jai Ho", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg",Album: "Jagat", DateAdded: '21-12-11', duration: '3:40',
    },
    {
        songName: "JoJo", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg",Album: "Bizzare ;)", DateAdded: '12-12-12', duration: '3:40',
    },
    {
        songName: "Traitor's Requiem", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg",Album: "UraginiMono", DateAdded: '07-12-11', duration: '3:40',
    },
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '3:40',
    },
    {
        songName: "Daydream", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg",Album: "paTA naHI kAUN!", DateAdded: '1-12-15', duration: '3:40',
    },
    {
        songName: "Levitate by Neoni", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg",Album: "Neoni", DateAdded: '17-12-11', duration: '3:40',
    },
    {
        songName: "Royality", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg",Album: "Neoni", DateAdded: '12-11-11', duration: '3:40',
    },
    {
        songName: "Jai Ho", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg",Album: "Jagat", DateAdded: '21-12-11', duration: '3:40',
    },
    {
        songName: "JoJo", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg",Album: "Bizzare ;)", DateAdded: '12-12-12', duration: '3:40',
    },
    {
        songName: "Traitor's Requiem", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg",Album: "UraginiMono", DateAdded: '07-12-11', duration: '3:40',
    },
    {
        songName: "Luna", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg", Album: "Neoni", DateAdded: '12-12-11', duration: '3:40',
    },
    
];

let totalDuration = 0;
let noOfSongs = songs.length;
// -> Display the Songs in the SongList Container
songItems.forEach((element, i)=>{
    // element.getElementsByClassName('rank').classList.add('fas fa-play');
    // element.getElementsByClassName('rank')[0].innerHTML = i+1;
    element.getElementsByClassName('title')[0].innerHTML = songs[i].songName;
    element.getElementsByClassName('album')[0].innerHTML = songs[i].Album;
    element.getElementsByClassName('date-added')[0].innerHTML = songs[i].DateAdded;
    element.getElementsByClassName('duration')[0].innerHTML = songs[i].duration;
    
    totalDuration += songs[i].duration;
});

// time-bar function
const timeBar = (enterId, token)=>{
if(token==0){
    min = Math.floor(audioElement.currentTime/60);
    sec = Math.floor(audioElement.currentTime%60);
    if(min>0 && sec%60==0){
        sec=0;
    }
    min=String(min).padStart(2, '0');
    sec=String(sec).padStart(2, '0');
}
else if(token==1){
    console.log(audioElement.duration);
    min = Math.floor(audioElement.duration/60);
    sec = Math.floor(audioElement.duration%60);
    if(min>0 && sec%60==0){
        sec=0;
    }
    min=String(min).padStart(2, '0');
    sec=String(sec).padStart(2, '0');

}
    document.getElementById(`${enterId}`).innerHTML = `${min}:${sec}`;
}

// pre-loaded data
const defaultState = ()=>{
    document.getElementById('song-ends').innerHTML = songs[songIndex].duration;
    document.getElementById('master-song-namee').innerHTML = songs[songIndex].songName;
    document.getElementById('master-album-name').innerHTML = songs[songIndex].Album;;
}
defaultState();
// play to pause  &  pause to play icon transition
const currentPlay = (sIndex)=>{
    let element = document.getElementById(sIndex);
    
    element.classList.remove('fa-play');
    element.classList.add('fa-pause');
    document.getElementById('master-album-name').innerHTML = songs[sIndex].Album
    document.getElementById('master-song-namee').innerText = songs[sIndex].songName;
    
}
const currentPause = (sIndex)=>{
    let element = document.getElementById(sIndex);
    
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
}


// Handle Play/Pause on Click
const mainSongPlaying = ()=>{
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
    
};
const mainSongPaused = ()=>{
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    mainPlay.classList.remove('fa-pause-circle');
    mainPlay.classList.add('fa-play-circle');
    
};

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        mainSongPlaying();
        currentPlay(songIndex);
        
    }
    else {
        audioElement.pause();
        mainSongPaused();
        currentPause(songIndex);
    }
});
mainPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        mainSongPlaying();
        currentPlay(songIndex);
    }
    else {
        audioElement.pause();
        mainSongPaused();
        currentPause(songIndex);
    }
});



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myTimeBar.value = progress;
    songDuration = audioElement.duration;
    timeBar('song-starts', 0);
    timeBar('song-ends', 1);
    if(audioElement.currentTime==audioElement.duration){
        playNextSong();
    }
});

//   changing the current time of progress using progress time bar
myTimeBar.addEventListener('change', ()=>{
    audioElement.currentTime = myTimeBar.value*audioElement.duration/100;
});


let songItemPlay = Array.from(document.getElementsByClassName('rank'));
const makeAllPlays = ()=>{
    songItemPlay.forEach((element, i)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log("songItemPlay(rank) ke event listen ho rahe hain", e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        eleIndex = songIndex;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        let nIndex = songIndex%7;
        
        if(audioElement.paused || audioElement.currentTime <=0){
            audioElement.src = `./songs/${nIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            mainSongPlaying();

            prevIndex = songIndex;
        }
        else if( prevIndex == songIndex){
            if(audioElement.paused){
                audioElement.play();
                mainSongPlaying();
            }
            else {
                audioElement.pause();
                // e.target.innerHTML = songIndex+1;
                mainSongPaused();
                currentPause(songIndex);
                
            }
        }
        else{
            audioElement.src = `./songs/${nIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTi
            audioElement.play();
            
            mainSongPlaying();
            prevIndex = songIndex;
        }
    });
});



// Configuring Next and Prev Buttons
const playNextSong = ()=>{
    if(songIndex>=35){
        songIndex=0;
    }
    else {
        songIndex +=1;
    }
    nIndex = songIndex%7;
    audioElement.src = `./songs/${nIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainSongPlaying();
    
    makeAllPlays();
    currentPlay(songIndex);

}
document.getElementById('next').addEventListener('click', ()=>{
    playNextSong();
});
const playPrevSong = ()=> {
    if(songIndex<=0){
        songIndex=35;
    }
    else {
        songIndex -=1;
    }
    nIndex = songIndex%7;

    audioElement.src = `./songs/${nIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainSongPlaying();

    makeAllPlays();
    currentPlay(songIndex);
}

document.getElementById('previous').addEventListener('click', ()=>{
    playPrevSong();
});

// -> Volume Control
let volumeBar = document.getElementById('vol-bar');
volumeBar.addEventListener('change', ()=>{
    audioElement.volume = volumeBar.value/100;
    volumeBar.title = `${Math.floor(volumeBar.value)}`;
});


// -> Keyboard key Functions
window.onkeydown = function(e){
    if(e.which == 32){
        if(audioElement.paused || audioElement<=0) {
            makeAllPlays();
            mainSongPlaying();
            audioElement.play();
            currentPlay(songIndex);
        }
        else {
            makeAllPlays();
            mainSongPaused();
            audioElement.pause();
            currentPause(songIndex);          
        }
    }
    return !(e.keyCode == 32 && e.target == document.body);
}
window.onkeyup = function(e){
    return !(e.keyCode == 32 && e.target == document.body);
}





// lyrics-container

var rightCont = document.getElementById('right-container');
let hideContainer = document.getElementsByClassName('hide');

let lyricsFeature = document.getElementById('lyrics-feature');
let songLyrics = document.getElementById('song-lyrics');

rightCont.style.display = 'block';
songLyrics.style.visibility='hidden';
songLyrics.style.display='none';
lyricsFeature.addEventListener('click', ()=>{
    console.log("right: ",rightCont.style.display);
    console.log("songLyrics: ", songLyrics.style.display);
    if(songLyrics.style.visibility!=='visible'){
        // console.log('right cont -> display is none')
        rightCont.style.display = 'none';
        // hideContainer.visibility = 'hidden';
        qContainer.style.visibility= 'hidden';
        qContainer.style.display='none';
        songLyrics.style.visibility = 'visible';
        songLyrics.style.display='block';
        // songLyrics.style.transition= 'visibility 0.7s ease-in-out';
    }
    else{ 
        rightCont.style.display = 'block';
        songLyrics.style.visibility = 'hidden';
        songLyrics.style.display='none';
        // hideContainer.visibility = 'hidden';
        // songLyrics.style.transition= 'visibility 0.7s ease-in-out';
        // console.log('right cont -> display is block');
    }
    // console.log('Lyrics feature has been chosen');
});





//  Queue-container
let qFeature = document.getElementById('queue-feature');
let qContainer = document.getElementById('Queue-container');
qContainer.style.display = 'none';
qContainer.style.visibility = 'hidden';
qFeature.addEventListener('click', ()=>{
    console.log('Queue-feature has been chosen');
    console.log(rightCont.style.display);
    if(qContainer.style.visibility!=='visible'){
        
        rightCont.style.display='none';
        // hideContainer.visibility = 'hidden';
        songLyrics.style.display='none';
        songLyrics.style.visibility = 'hidden';

        qContainer.style.display='block';
        qContainer.style.visibility= 'visible';
    }
    else{
        // yaani right container use ho raha hai

        rightCont.style.display = 'block';
        qContainer.style.display = 'none';
        qContainer.style.visibility= 'hidden';
        // hideContainer.visibility = 'hidden';
    }
})