const colorPicker = document.getElementById("colorPicker");
const schemeType = document.getElementById("schemeType");
const getSchemeBtn = document.getElementById("getSchemeBtn");
const colorDisplayArea = document.getElementById("colorDisplayArea");
const colorDisplay = document.getElementById("color-display");

fetchInitialColors()

getSchemeBtn.addEventListener("click", () => {
    fetchInitialColors();
}).catch(err => console.log('Error fetching color scheme:', err));

function fetchInitialColors() {
    const colorPicked = colorPicker.value.slice(1);
    const schemePicked = schemeType.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${schemePicked}&count=5`)
    .then(res => res.json())
    .then(data => {
        colorDisplayArea.innerHTML = "";
        data.colors.forEach(color => {
            colorDisplayArea.innerHTML += `
                <div class="color-item">
                    <div class="color-box" style="background-color: ${color.hex.value};"></div>
                    <p class="color-code">${color.hex.value}</p>
                </div>
            `;
        });
    })
}