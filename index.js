document.addEventListener("DOMContentLoaded", () => {
	let main = document.getElementById("mainDiv");
	let playerIcon = document.getElementById("playerIcon");
	let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    
    let iconPlay = document.getElementById("iconPlay")
    let iconPause = document.getElementById("iconPause")
    let test;
    

	let songList = [
		"./music/siamesMrFear.mp3",
		"./music/jackStauberButtercup.mp3",
		"./music/phumLongGone.mp3"
	];
	let currentSong = 0;

	let song = new Audio();
	song.controls = true;
    song.src = songList[currentSong];
  
    // main.appendChild(song)
    


	playerIcon.addEventListener("click", e => {
        song.play()
        iconPlay.hidden = true
        iconPause.removeAttribute("hidden")
        event.currentTarget.id = "playerIcon2"
         test= document.getElementById("playerIcon2")
	
    });
console.log(test)

    if(test === undefined){
        return null
    }else{
    test.addEventListener("click", e => {
        debugger
    })
}

   
    
    iconPause.addEventListener("click", e => {
        song.pause()

        iconPlay.hidden = false
       iconPause.hidden = true
    })



	button3.addEventListener("click", e => {
		currentSong++;
		song.src = songList[currentSong];
		if (currentSong > 2) {
			currentSong = 0;
			song.src = songList[currentSong];
		}
		song.play();
		console.log(currentSong);
	});
});

//need to get font awesome to get the play, next, and previous and pause icons

//
