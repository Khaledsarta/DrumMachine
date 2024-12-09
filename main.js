function play(soundLetter){

    if (soundLetter === "q"|| soundLetter==="Q"){
        document.getElementById('display').innerHTML="Heater 1"
    }else if(soundLetter === "w"|| soundLetter==="W"){
        document.getElementById('display').innerHTML="Heater 2"
    }else if(soundLetter === "e"|| soundLetter==="E"){
        document.getElementById('display').innerHTML="Heater 3"
    }else if(soundLetter === "a"|| soundLetter==="A"){
        document.getElementById('display').innerHTML="Heater 4"
    }else if(soundLetter === "s"|| soundLetter==="S"){
        document.getElementById('display').innerHTML="Clap"
    }else if(soundLetter === "d"|| soundLetter==="D"){
        document.getElementById('display').innerHTML="Open-HH"
    }else if(soundLetter === "z"|| soundLetter==="Z"){
        document.getElementById('display').innerHTML="Kick-n'-Hat"
    }else if(soundLetter === "x"|| soundLetter==="X"){
        document.getElementById('display').innerHTML="Kick"
    }else if(soundLetter === "c"|| soundLetter==="C"){
        document.getElementById('display').innerHTML="Closed-HH"
    }

    var audio = document.getElementById(soundLetter)
    audio.play()
}
window.document.onkeyup = function(event){
    let keyButton = event.key
    if (keyButton === "q"|| keyButton==="Q"){
        play("Q");
    }else if(keyButton === "w"|| keyButton==="W"){
        play("W")
    }else if(keyButton === "e"|| keyButton==="E"){
        play("E")
    }else if(keyButton === "a"|| keyButton==="A"){
        play("A")
    }else if(keyButton === "s"|| keyButton==="S"){
        play("S")
    }else if(keyButton === "d"|| keyButton==="D"){
        play("D")
    }else if(keyButton === "z"|| keyButton==="Z"){
        play("Z")
    }else if(keyButton === "x"|| keyButton==="X"){
        play("X")
    }else if(keyButton === "c"|| keyButton==="C"){
        play("C")
    }
}