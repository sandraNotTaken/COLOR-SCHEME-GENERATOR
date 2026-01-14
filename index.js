const colorPicker = document.getElementById("colorPicker");
const schemeType = document.getElementById("schemeType");
const getSchemeBtn = document.getElementById("getSchemeBtn");
const colorDisplayArea = document.getElementById("colorDisplayArea");
const colorDisplay = document.getElementById("color-display");

getSchemeBtn.addEventListener("click", () => {
    const colorPicked = colorPicker.value.slice(1);
    const schemePicked = schemeType.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${schemePicked}&count=5`)
    .then(res => res.json())
    .then(data => {
        
    })
})