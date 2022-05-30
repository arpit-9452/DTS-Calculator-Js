
function calculateDistance(){
    const inputOneKilomerter = document.getElementById("input-1").value;
    const inputTwoTime = document.getElementById("input-2").value;
    const timeInMint = inputTwoTime/60;
    const distance = inputOneKilomerter * timeInMint;
    //distance.parseFloat(n.toFixed(4));
    const answerArea = document.getElementById("answer").innerHTML= distance+"K.m Distance will cover..";
    console.log(answerArea); 
}
function calculateTime(){
    const inputDistance = document.getElementById("input-1").value;
    const inputSpeed = document.getElementById("input-2").value;
    const time = inputDistance/inputSpeed;
    const timeinMint = time*60;
    const answerArea = document.getElementById("answer").innerHTML = timeinMint+"min  Time will Take..";
    console.log(answerArea);
}
function calculateSpeed(){
    const inputDistance = document.getElementById("input-1").value;
    const inputTime = document.getElementById("input-2").value;
    const timeinMint = inputTime/60;
    const Speed = inputDistance/timeinMint;
    const answer = document.getElementById("answer").innerHTML = "Speed was at "+Speed+"K.m  per/hours";
    console.log(answer);
}

function divertToTimePage(){
    window.location.replace("./Time.html");
}
function divertToDistancePage(){
    window.location.replace("./Distance.html");
}
function divertToSpeedPage(){
    window.location.replace("./Speed.html");
}