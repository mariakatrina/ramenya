// creates an array for image elements for the sound button
var img_array = ['img/soundon.PNG', 'img/mute.PNG'];
i = 0;

// this creates a play sound function for the mute button
// it grabs the element with the id "audio" and returns the otherwise true mute value as false;
// playing the sound
function toggleSound() {
    var elements = document.getElementsByTagName('audio');
    for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);
}

// js grabs the html element w/ the soundcontrol id and changes the source of with
// the images from the img_array variable, where every click subracts the value from
// the array and shifting the source image from the array between one or the other with every click
function soundImageChange(){
    i++;
    document.getElementById("soundcontrol").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;
    }
}

// this function brings both togglesSound and soundImageChange function together into one parent
// simplifies and cleans the code in html 
function muteThisOr(){
    toggleSound();
    soundImageChange();
}