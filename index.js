document.addEventListener("DOMContentLoaded", ()=> {
    let main = document.getElementById("mainDiv")
    let button = document.getElementById("button")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")

    let songList = ["./music/siamesMrFear.mp3", "./music/jackStauberButtercup.mp3", "./music/phumLongGone.mp3"]
    let currentSong = 0

        let song = new Audio()
        song.controls = true
        song.src= songList[currentSong]
        // main.appendChild(song)

        button.addEventListener("click", e => {
           
                song.play()

        })

        button2.addEventListener("click", e => {
           
            song.pause()
    })

    button3.addEventListener("click", e => {
        currentSong++
        song.src= songList[currentSong]
        if(currentSong > 2){
            currentSong = 0
            song.src= songList[currentSong]
        }
        song.play()
        console.log(currentSong)
})

})