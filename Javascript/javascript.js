


// If button pressed increment number

let cl = 0;
let a = 0;
let g = 0
function buttonClick() {
    a = ++cl/100;
    cl = Number(cl);
    cl = cl.toFixed(2);
    cl = Math.floor(cl * 100) / 100;
    a = a - (.10 * (up));
    document.getElementById("inc01","num01").value = a ;
    a = a.toFixed(2);
    // setInterval(buttonCheck)
    // function buttonCheck() {
    //     document.getElementById("inc01","num01").value = cl;
    // }
}





let up = 0;

function upgrade() {

    
    if ( a > (.10 * (up + 1)) ){

        // Cost subtracted and value of Upgrade increases
        a = a - (.10 * (up + 1));
        document.getElementById("inc02",).value = ++up;
        

        
        //  if (up = 0){
        // Get decimal # and add to click
    }
        if ( up = 0, 1 ){
        let b = 100;
        let f = 0;
        setInterval(upgradeTick, b);
        
         function upgradeTick() {
            let z = (f++);
            z = z.toFixed(2);
            z = f/1000;
            z = Math.floor(z * 100) / 100;
            g = Number(a) + Number(z) ;
            g = g.toFixed(2);
             document.getElementById("inc01","num01").value = g + a;
            console.log("a = ",a);
            console.log("g = ",g);
            console.log("z = ",z);
            console.log("cl = ",cl);
            console.log("b = ",b);
        }
        
    } else {
       b = b * 2;
    }
    //     } else if (up > 1){
    //         g = g * 2
    //         document.getElementById("inc01","num01").value = g ;

    }


// Basic Game loop

// setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

// function onTimerTick() {
//     // Do stuff.
//     // document.getElementById('Timer').value = ++a;
//     console.log()
// }

// My Game loop

// let a = 1
// setInterval(upgradeTick, 1000);

// function upgradeTick() {
//     let z = (a++);
//     z = z/100;
//     document.getElementById("Timer02").value = z
// }























// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}