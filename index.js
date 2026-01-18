const colorPicker = document.getElementById("colorPicker");
const schemeType = document.getElementById("schemeType");
const getSchemeBtn = document.getElementById("getSchemeBtn");
const colorDisplayArea = document.getElementById("colorDisplayArea");
const colorDisplay = document.getElementById("color-display");

document.addEventListener('dblclick', () => {
    document.body.classList.toggle('dark');
});

fetchInitialColors()

getSchemeBtn.addEventListener("click", () => {
    fetchInitialColors();
}).catch(err => console.log('Error fetching color scheme:', err));
// Fetch and display initial colors

function fetchInitialColors() {
    const colorPicked = colorPicker.value.slice(1);
    const schemePicked = schemeType.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicked}&mode=${schemePicked}&count=5`)
    .then(res => res.json())
    .then(data => {
        colorDisplayArea.innerHTML = "";
        data.colors.forEach(color => {
            colorDisplayArea.innerHTML += `
                <div class="color-item" data-hex="${color.hex.value}">
                    <div class="color-box" style="background-color: ${color.hex.value};"></div>
                    <p class="color-code">${color.hex.value}</p>
                </div>
            `;
        });

        const colorItems = document.querySelectorAll('.color-item');
        colorItems.forEach(item => {
            item.addEventListener('click', () => {
                const hexValue = item.getAttribute('data-hex');
                const p = item.querySelector('.color-code');
                const originalText = p.textContent;
                navigator.clipboard.writeText(hexValue).then(() => {
                    p.textContent = 'Copied!';
                    setTimeout(() => {
                        p.textContent = originalText;
                    }, 1000);
                }).catch(err => console.log('Error copying to clipboard:', err));
            });
        });
    })
}