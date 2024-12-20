
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Script for mennu bar
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    // When right is zero show the mennu bar 
    sidemenu.style.right = "0";
}
function closemenu() {
    // When right is not zero hide the mennu bar
    sidemenu.style.right = "-200px";
}

// Script to connect sheet(or sheet script) with out form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzLiiZ_I4ZKPUHj0wLsP2Z5JR5MD5DRLAkPgAWwkVuV9vd6CDXyKdr4BewA4gmpgIiQrg/exec'
const form = document.forms[submit - to - google - sheet]
// name for html form tag-submit-to-google-sheet

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message)
        )
})
