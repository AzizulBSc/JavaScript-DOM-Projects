const yourName = prompt("Enter Your Name");
const yourPionciName = prompt("Enter Your Pionci Name");
const lovePercentages = Math.floor(Math.random() * 100) + 1;
if ((yourName.length <= 2 || yourPionciName.length <= 2) && (yourPionciName !=null  || yourPionciName.null !=null)) {
    alert("Please Enter Valid Name!!");
    window.location.reload();
}
else {
    document.querySelector("h1").innerHTML = ` Hello ` + yourName;
    if (lovePercentages <= 10) {
        document.querySelector('#leadtext').innerHTML = `Dear ,` + yourName + `Your Pionci ` + yourPionciName + 'loves you' + lovePercentages;
    }
    else if (lovePercentages <= 30) {
        document.querySelector('#leadtext').innerHTML = `Dear ,` + yourName + ` Your Pionci ` + yourPionciName + 'loves you ' + lovePercentages;
    }
    else if (lovePercentages <= 50) {
        document.querySelector('#leadtext').innerHTML = `Dear ,` + yourName + ` Your Pionci ` + yourPionciName + ' loves you ' + lovePercentages;
    }
    else if (lovePercentages <= 70) {
        document.querySelector('#leadtext').innerHTML = ` Dear , ` + yourName + ` Your Pionci ` + yourPionciName + ' loves you ' + lovePercentages;
    }
    else if (lovePercentages <= 90) {
        document.querySelector('#leadtext').innerHTML = ` Dear , ` + yourName + ` Your Pionci ` + yourPionciName + 'loves you' + lovePercentages;
    }
    else{
        document.querySelector('#leadtext').innerHTML = `Dear ,` + yourName + ` Your Pionci ` + yourPionciName + ' loves you ' + lovePercentages;
    }
}