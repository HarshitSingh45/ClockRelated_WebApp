
var btn = document.getElementById('btn');
var input=document.getElementById('ip');
var counter=document.getElementById('counter1');
var reset=document.getElementById('rst');
var pause = document.getElementById('pause');
var play = document.getElementById('play');
var stp = document.getElementById('stop');
var interval;
var count, count1, count2, count3;
var isPaused = false; // isPaused is used as a toggle to know wheather the stopwatch is paused or not

// initially play pause and stop button will be hidden, once the stopwatch starts, it will appear
play.style.display = 'none';
pause.style.display = 'none';
stp.style.display = 'none';

// on clicking the stop button
stp.addEventListener('click',function(e){
    // play and pause button will get hidden, after user clicks stop button
    play.style.display = 'none';
    pause.style.display = 'none';

    btn.style.display = 'inline-block';
    clearInterval(interval);
    
    e.preventDefault();
    // isPaused = true;
})

// on clicking pause button, stopwatch will be paused and will starts from only point where it gets paused
pause.addEventListener('click', function(e){
    play.style.display = 'inline-block';
    pause.style.display = 'none';
    e.preventDefault();
    // setting isPaused to be true
    isPaused = true;
})

// this button is used when user has paused the stopwatch, to start from the pause position use this button
play.addEventListener('click', function(e){
    play.style.display = 'none';
    pause.style.display = 'inline-block';
    e.preventDefault();
    isPaused = false;
})

// this is the button which the user has started the stopwatch from 0
btn.addEventListener('click',timer);
var maincount=0;
function timer(){
    // start displaying pause and stop button on screen
    btn.style.display = 'none';
    pause.style.display = "inline-block";
    stp.style.display = "inline-block";
    isPaused = false;
    counter.textContent=0;
    document.getElementById('counter2').textContent=0;
    document.getElementById('counter3').textContent=0;
    document.getElementById('counter4').textContent=0;
    // this counter is used to increment seconds 
    count=1, count2 = 1, count3 = 1, count4 = 1;
    interval = setInterval(function(){
        if(!isPaused){
            maincount++;
            if(count>9){
                //  when count gets > 9, then to display 10 of more than that, we take help of another counter
                count=0;
                // timer2 is used to display, seconds >9
                timer2();
            }
            // display it on screen
            counter.textContent=count;
            count++;
        }  
    },1000);
}
// count2=1;
function timer2(){
    // so, when count2 becomes 6, means 60s has elapsed and we need to set seconds to be 0 and minute to be 1
    if(count2 == 6){
        count2=0;
        // calling timer3 to display minute, because 60s has elapsed
        timer3();
    }
    // display it on the screen
    document.getElementById('counter2').textContent=count2;
    count2++;  
}
// count3=1;
// helps in displaying minutes elapsed
function timer3(){
    if(count3>9){
        //  when count3 gets > 9, then to display 10 of more than that, we take help of another counter
        count3=0;
        // timer4 is used to display minutes>9
        timer4();
    }
    // displays it on screen
    document.getElementById('counter3').textContent=count3;
    count3++;
}
// count4=1;
// helps in displaying minutes elapsed
function timer4(){
    if(count4 == 6){
        // once the minutes become 60, means 60 minutes has elapsed and we need to display time in hours
        count4=0;
        return;
    }
    // displays the time
    document.getElementById('counter4').textContent=count4;
    count4++;
}
// this button will reset the stopwatch
reset.onclick=function(){
    // document.location.reload();
    //   or
    // after clicking this button, only start button will be visible
    btn.style.display = 'inline-block';
    stp.style.display = 'none';
    play.style.display = 'none';
    pause.style.display = 'none';
    // clearing interval
    clearInterval(interval);
    // setting all gigits of time to 0
    counter.textContent=0;
    document.getElementById('counter2').textContent=0;
    document.getElementById('counter3').textContent=0;
    document.getElementById('counter4').textContent=0;
}
