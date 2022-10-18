var img_array = ['img/soundon.PNG', 'img/mute.PNG'];
i = 0;

function toggleSound() {
    var elements = document.getElementsByTagName('audio');
    for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);
}


function soundImageChange(){
    i++;
    document.getElementById("soundcontrol").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;
    }
}

function muteThisOr(){
    toggleSound();
    soundImageChange();
}