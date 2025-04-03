var video;

window.addEventListener("load", function(){
    console.log("Good job opening the widow");
    // set the video var = to the id connected to the actual video
    video = document.querySelector("#player1");

    video.autoplay = false;
    console.log("auto play is set to" + video.autoplay);
    video.loop = false;
    console.log("loop is set to" +  video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Playing Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Paused Video");
});

document.querySelector("#slower").addEventListener("click", function(){
    video.playbackRate *= 0.9;
    console.log("New Speed:" + video.playbackRate);
    // multiplying the playback rate by 0.9 (90%) slows the video down since the normal speed is 1.0 (100%) and 1.0 * 0.9 = 0.9, changing the speed from 100% to 90% and so on.
});

document.querySelector("#faster").addEventListener("click", function(){
    video.playbackRate /= 0.9;
    console.log("New Speed:" + video.playbackRate);
    // this reversed what was done in the previous step
});

document.querySelector("#skip").addEventListener("click", function(){
    if(video.currentTime + 10 >= video.duration){
        video.currentTime = 0;
    }
    else{
        video.currentTime += 10;
    }
    console.log("New Time:" + video.currentTime);
    // this is saying if the current time in the video + 10 seconds is greater than or equal to the duration of the video, then restart the video (setting it = to 0). But if it's not, add 10 seconds to the current time of the video.
});

document.querySelector("#mute").addEventListener("click", function(){
    if (video.muted){ // checking if the video is already muted
        video.muted = false; // this unmutes it if it already is, hence the console log
        document.getElementById("mute").textContent = "Mute";
        console.log('Video has been unmuted');
    } 
    else{
        video.muted = true; // this mutes the video
        document.getElementById("mute").textContent = "Unmute";
        console.log("Video has been muted");
    }   
});

document.querySelector("#slider").addEventListener("input", function(){
    let theSlider = document.getElementById("slider")
    video.volume = theSlider.value / 100
    document.getElementById("volume").textContent = theSlider.value + "%"
    console.log("The new volume is " + theSlider.value + "%" );
    // the slider gives numbers 0-100, but when using video.volume the numbers are 0-1, percentages, so dividing by 100 fixes that
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.add("oldSchool"); // adds the styling from the css stylesheet by creating a class
    console.log("Old school styling added")
});

document.querySelector("#orig").addEventListener("click", function(){
    video.classList.remove("oldSchool");
    console.log("Old school styling removed")
});