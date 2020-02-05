window.onload = function(){
    document.getElementById("data").innerHTML = `The bird has to decide if it will try to fly, but it was not sure if it wants to. The bird thought, "If I never forever endeavor" then I won't ever learn. On one wing, he worries he might fail and on the other wing he thinks of how he may succeed. He worries that if he tries, he may get lost in the world. That makes him want to stay in his nest where he's safe.

    I think this book would help other children to learn that trying new things can be scary, but sometimes when we try, we can find things that make us happy too. And this book will help others know that mistakes are okay and part of learning.
    
    My favorite part is that the bird tried and learned that she could fly. I also liked that I read this book because it gave me a chance to talk to mom about making mistakes and how I don't like making them. Then I learned they are good and part of learning.
    
    Boys and girls who are 3 to 8 years old would like this book because it teaches about trying a new thing and how it's important to get past being scared so you can learn new things.
    
    I give the book 5 stars since I think it's important for other children to learn about courage.`;

    var givenData = document.getElementById("data").innerHTML;
    var currentElementIndex = 0;
    var correctCnt = 0;
    var hasTestStarted = false; 
    var pastDate = new Date();
    var sec=0;

    $(document).keypress(function(event){
        var keycode = (event.keycode? event.keycode: event.which);
        if(keycode==13 && hasTestStarted==false){
            document.getElementById("data").style.filter="blur(0px)";
            document.getElementById("correctData").style.filter="blur(0px)";
            document.getElementById("data").style.opacity="1.0";
            document.getElementById("correctData").style.opacity="1.0";
            hasTestStarted= true;

            var timerFn = setInterval(() => {
                console.log("we are reaching here");
                
                // var currentTime = new Date().getTime();
                // var pastTime = pastDate.getTime();
                // var secondsDifference = currentTime-pastTime;
                // sec = Math.floor((secondsDifference%(1000*60))/1000);
                ++sec;
                document.getElementById("timer").innerHTML= ("Seconds elapsed : "+sec+"s");
                if(sec>=60){
                    // alert("Total words typed in 1 minute is: "+ correctCnt);
                    document.getElementById("result").innerHTML = "Your typing speed is : "+correctCnt+"wpm";
                    clearInterval(timerFn);
                }
            }, 1000);
        }
    })

    document.addEventListener("keydown", function(event){
        if(event.key == document.getElementById("data").innerHTML.charAt(0) && hasTestStarted==true){
            correctCnt = document.getElementById("correctData").innerHTML.split(' ').length;
            document.getElementById("correctData").innerHTML += document.getElementById("data").innerHTML.charAt(0);
            document.getElementById("data").innerHTML = document.getElementById("data").innerHTML.substr(1);
        }
        document.getElementById("score").innerHTML = correctCnt;
    })
}

