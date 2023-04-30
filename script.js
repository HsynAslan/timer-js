var minuteStart = 25;
var secondStart = 00;
var countPauseResume = 0;
var myInterval;
var newMinute;
var newSecond;
// function startTime() {
//   if (
//     // girdi kontolü
//     !(
//       minuteStart < 0 ||
//       secondStart < 0 ||
//       minuteStart > 60 ||
//       secondStart > 60
//     )
//   ) {
//     if (secondStart == 0 && minuteStart > 0) {
//       minuteStart--; // kontrol lazımı
//       console.log("1.if");
//       if (minuteStart < 0) {
//         // zaman bittiğinde - saat 0 olduğunda dk değil
//         console.log("2.if");
//         // bitir
//         clearTimeout(startTime);
//         document.getElementById("time-m").innerHTML = minuteStart;
//         document.getElementById("time-s").innerHTML = secondStart;
//       }
//       secondStart = 59;
//       secondStart--; //kontol lazım
//       document.getElementById("time-m").innerHTML = minuteStart;
//       document.getElementById("time-s").innerHTML = secondStart;
//       document.getElementById("idStartButton").disabled = true;
//       console.log("3.");
//     }
//   } else {
//     minuteStart = 25;
//     secondStart = 00;
//     console.log("Girdi Kontolüne girdi Hata girmemesi lazımdı");
//   }
// }

function startTime() {
  console.log("1 sn geçti");
  if (secondStart == 0 && minuteStart != 0) {
    // saniye 59 olucak ve dk -1
    minuteStart--;
    secondStart = 59;
    timeUpdate();
  } else if (secondStart > 0) {
    secondStart--;
    timeUpdate();
  } else if (secondStart == 0 && minuteStart == 0) {
    stopButton();
    alert("Zaman Doldu !!!");
    window.location.reload();
  }

  // en son buttonlar kapanıp açılır
  document.getElementById("idStopButton").disabled = false;
  document.getElementById("idPauseResumeButton").disabled = false;
  document.getElementById("idStartButton").disabled = true;
}
function timeUpdate() {
  document.getElementById("time-m").innerHTML = minuteStart;
  document.getElementById("time-s").innerHTML = secondStart;
}
document.getElementById("idStopButton").disabled = true;
document.getElementById("idPauseResumeButton").disabled = true;
function startButton() {
  myInterval = setInterval(startTime, 1000);
  console.log("startButton çalışıyor");
}
function stopButton() {
  //clearInterval(startTime);
  clearInterval(myInterval); // durduramadı
  minuteStart = 25;
  secondStart = 00;
  timeUpdate();
  document.getElementById("idStopButton").disabled = true;
  document.getElementById("idPauseResumeButton").disabled = true;
  document.getElementById("idStartButton").disabled = false;
}
function pauseResumeFunc() {
  if (countPauseResume % 2 == 0) {
    // ilk defa veya kendini tekrar etmede
    document.getElementById("idPauseResumeButton").innerText = "Resume";
    clearInterval(myInterval);
    countPauseResume++;
    console.log("countPauseResume:", countPauseResume);
  } else if (countPauseResume % 2 == 1) {
    // ikinci defa veya diğerleri
    document.getElementById("idPauseResumeButton").innerText = "Pause";
    myInterval = setInterval(startTime, 1000);
    countPauseResume++;
    console.log("countPauseResume2:", countPauseResume);
  }
}

function setTimeOnScreen() {
  newMinute = document.getElementById("getMinute").value;
  newSecond = document.getElementById("getSecond").value;
  // kontrol şart
  if (newMinute < 0 || newMinute > 60 || newSecond < 0 || newSecond > 60) {
    console.log("hatalı girdi");
    newMinute = 25;
    newSecond = 00;
    document.getElementById("time-m").innerHTML = 25;
    document.getElementById("time-s").innerHTML = 00;
    minuteStart = newMinute;
    secondStart = newSecond;
    console.log("default atandı");
  } else {
    document.getElementById("time-m").innerHTML = newMinute;
    document.getElementById("time-s").innerHTML = newSecond;
    minuteStart = newMinute;
    secondStart = newSecond;
  }
}
