///<reference path="parentScreen.ts"/>

/*/
*Library greensock
*Animatie van game uitleg
*
/*/
window.onload = function() {
  var logo = document.getElementById("logo");
  TweenLite.to(logo, 2, {left:"600px",color:"white"});

  var box = document.getElementById("greenBox"),
    count = 0,
    tween;

/**
 * Roep tweenmox aan
 * Gebruik element box
 * Repeat de functie 8 keer
 * Yoyo voor herhaling
 * Roep onRpeat functie aan wat er moet gebeuren bij de repeats
 * Kleine delay op alles zodat het niet te snel gaat
 * easing tween
 */
tween = TweenMax.to(box, 2, {repeat:8, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

//Libary wat er gedaan moet worden bij elke counter
function onRepeat() {
  count++;
  if (count == 1) {
      box.innerHTML = "The world is in chaos"
  }else if (count == 2) {
              box.innerHTML = "Billions of dragons"

  }else if (count == 3) {
          box.innerHTML = "Rose from the earth"

  }else if (count == 4) {
          box.innerHTML = "The evacuation to a safe haven started"

  }else if (count == 5) {
          box.innerHTML = "you are the last vessel"

  
  }else if (count == 6) {
          box.innerHTML = "bring these people to safety"

  
  }else if (count == 7) {
          box.innerHTML = "you are their only hope"

  
  }else if (count == 8) {
          box.innerHTML = "press the ship, to start your journey"

  }
    

 }        
  
}


class StartScreen extends ParentScreen {
    constructor() {
        super('start');

         //Knop om de game te starten
        let btn = document.getElementById("logo");
     


        //Een event listener zodat wanneer op de knop wordt geklikt de onstart functie wordt aangeroepen.
        btn.addEventListener("click", this.onStartClick.bind(this));

    }

    //Functie die de huidige div verwijderd, zodat de playScreen er kan worden neergezet.
    onStartClick(): void {
        this.div.remove();
        //Div met library wordt verwijderd zodat het niet in de game blijft staan
        document.getElementById("demo").remove();
        //document.getElementById("box").remove();
        Game.getInstance().getPlayScreen();
    }
}