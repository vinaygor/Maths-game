var playing = false;
var score;
var action;
var timeremaining;
var answer;

var prompt;
    prompt=prompt("Welcome to Maths Quiz. Please Enter your name:");

//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
    
    if(playing==true)
        {
         location.reload();
            
        }
    else{
        
        hide("gameover");
        playing=true;
        timeremaining=60;
        
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        
        //show countdown
       show("timeremaining");
        document.getElementById("time").innerHTML=timeremaining;
        
        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        //start the countdown
        startCountdown();
        
        //generate Q&A
        
        generateQA();
        
        
    }
}

for(i=1;i<5;i++)
    {
document.getElementById("box"+i).onclick=function(){
    if(playing==true)
        {
        var value=this.innerHTML;
        if(value==answer)
            {
                
                score+=1;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                    generateQA();
                },1000);
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    
}
    
}

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score +1
                //show correct box for 1 sec
                //generate new Q&A
            //No
                //show try again box for 1 sec



    function startCountdown(){
        action=setInterval(function(){
            timeremaining-=1;
            document.getElementById("time").innerHTML=timeremaining;
            
            if(timeremaining==0)
                {
                    stopCountdown();
                    show("gameover");
                    
                    document.getElementById("gameover").innerHTML="<p>Game Over</p><p>"+prompt+", your score is "+score+".</p>";
                    
                    hide("timeremaining");
                    hide("correct");
                    hide("wrong");
                    playing=false;
                    document.getElementById("startreset").innerHTML="Start Game";
                }
            
        },1000);
    }

function stopCountdown()
{clearInterval(action);}

function hide(Id){
     document.getElementById(Id).style.display="none";
    
}

function show(Id){
     document.getElementById(Id).style.display="block";
    
}

function generateQA(){
    var x = 1+ Math.round(Math.random()*9);
    var y = 1+ Math.round(Math.random()*9);
    answer = x*y;
    document.getElementById("ques").innerHTML=x+"x"+y;
    
    var boxid=1+ Math.round(Math.random()*3);
    //filling one box with correct answer
    document.getElementById("box"+boxid).innerHTML=answer;
    
    //fill other boxes with other answer
    var answerArray = [answer];
    for(i=1;i<5;i++)
        {
        if(i != boxid)
        {
            var wrongAnswer = 0;
            
            do
                {
                    wrongAnswer = (1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9));
                    
                }
            while(answerArray.indexOf(wrongAnswer)>-1);
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            
            answerArray.push(wrongAnswer);
        }
    }
}
