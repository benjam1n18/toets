function init() {

}
var i = 0;
var topPos = 0;
var leftPos = 0;
var leftAdder = 1;
var topAdder = 1;
var id;
// var bulletzoom = document.getElementById('bullet');
var speedOfav = 0;
var positionOfav = 460;
// var speed = 10, 
//     direction = 1; 

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 87 || e.which == 87) { // W key
    speedOfav = -10;
    }
    if (e.keyCode == 83 || e.which == 83) { // S Key
    speedOfav = 10;
    }                               
 }, false); 
 



document.addEventListener('keydown', function (e) {
    
    if (e.keyCode == 87 || e.which == 87) { // W key
        console.log("works");
     positionOfav -= 10;
     document.getElementById("av").style.left = 
                                         (positionOfav) + "px" 
    }
    if (e.keyCode == 83 || e.which == 83) { // S Key
     positionOfav += 10;
     document.getElementById("av").style.left = 
                                        (positionOfav) + "px";
    }
    
}, false);
document.addEventListener('keydown', function (e) {
   
    if (e.keyCode == 32 || e.which == 32) { // space = shoot
        {
            document.getElementById("bullet").style.display = "block";
            
            i++;
            console.log(i);
        }
        
        if(i > 0){
            i--;
            console.log(i)
        }
      

        console.log("bang");
        
       

        //         var boxbottomPos = bulletzoom.offsetbottom,
        //         boxtopPos = boxtopPos + bulletzoom.offsetHeight;

        //     if (boxtopPos > document.body.offsetHeight) {
        //         direction = -1;
        //     }
        //     if (boxbottomPos < 0) {
        //         direction = 1;
        //     }
            
        //     bulletzoom.style.bottom = (boxtopPos + speed * direction) + 'px';
        clearInterval(id);
        id = setInterval(frame, 3);

        function frame() {

        
        topPos = topPos + topAdder; 
        
        document.getElementById("bullet").style.top = topPos + 'px'; 

      
        if (topPos == 1) {
            topAdder = -1;  
        }
        if (topPos == -1000) {
            document.getElementById("bullet").style.display = "none";
            topAdder = 0;
           
        }
    }
    

    function stop(){
        clearInterval(id);
    }

               }    
    
   }, false);
   window.setInterval(function show() {
    positionOfav += speedOfav;
   document.getElementById("av").style.left = 
                                  (positionOfav) + "px";
   }, 1000/60);

   document.addEventListener('keyup', function (e) {
    if (e.keyCode == 87 || e.which == 87) {
    speedOfav = 0;
    }
    if (e.keyCode == 83 || e.which == 83) {
    speedOfav = 0;
    }
   }, false);