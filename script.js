function startTimer() {
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");
    var hours = parseInt(hoursInput.value) || 0;
    var minutes = parseInt(minutesInput.value) || 0;
    var seconds = parseInt(secondsInput.value) || 0;
    var totalTime = (hours * 3600) + (minutes * 60) + seconds;
  
    if (totalTime <= 0) {
      alert("Please enter a valid time");
      return;
    }
  
    var countdown = setInterval(function() {
      totalTime--;
      var hours = Math.floor(totalTime / 3600);
      var minutes = Math.floor((totalTime - (hours * 3600)) / 60);
      var seconds = totalTime - (hours * 3600) - (minutes * 60);
  
      hoursInput.value = hours;
      minutesInput.value = minutes;
      secondsInput.value = seconds;
  
      if (totalTime <= 0) {
        clearInterval(countdown);
        document.getElementById("alarm").play();
        alert("Time's up!");
      }
    }, 1000);
  }
  