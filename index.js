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

let songInfo = document.getElementsByClassName('song-info');
    // songInfo.getElementById('master-song-name')[0].innerText = songs[songIndex].songName;
    // songInfo.getElementById('master-album-name')[0].innerText = songs[songIndex].Album;

// play to pause  &  pause to play icon transition
const currentPlay = (sIndex)=>{
    let element = document.getElementById(sIndex);

    element.classList.remove('fa-play');
    element.classList.add('fa-pause');
    
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
// -> seconds to minutes
const secToMin = (seconds)=>{
    // hr = Math.ceil(seconds/3600);
    min = Math.ceil(seconds/60);
    sec = seconds%60;
}
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myTimeBar.value = progress;
    songDuration = audioElement.duration;
    min = Math.floor(audioElement.currentTime/60);
    sec = Math.floor(audioElement.currentTime%60);
    if(min>0 && sec%60==0){
        sec=0;
    }
    min=String(min).padStart(2, '0');
    sec=String(sec).padStart(2, '0');
    document.getElementById('song-starts').innerHTML = `${min}:${sec}`;
    min = Math.floor(audioElement.duration/60);
    sec = Math.floor(audioElement.duration%60);
    if(min>0 && sec%60==0){
        sec=0;
    }
    min=String(min).padStart(2, '0');
    sec=String(sec).padStart(2, '0');
    document.getElementById('song-ends').innerHTML = `${min}:${sec}`;

    console.log(Math.ceil(audioElement.currentTime));

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
document.getElementById('next').addEventListener('click', ()=>{
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
});
document.getElementById('previous').addEventListener('click', ()=>{
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
});


// -> Volume Control
let volumeBar = document.getElementById('vol-bar');
volumeBar.addEventListener('change', ()=>{
    audioElement.volume = volumeBar.value/100;
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