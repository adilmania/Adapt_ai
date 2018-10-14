const notificationTexts = {
    info: Array('Successfully authenticated', 'Your subscription was registered. We\'ve sent you a confirmation email', 'Did you know that a rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.', 'Did you know that among all shapes with the same area, circle has the shortest perimeter.', 'You reached the bottom of the page.'),
    success: Array('Your email was sent successfully.', 'The database is created.', 'You did it!', 'You are the winner!', 'Yes! Absolutely best score ever!', 'Your story, your success...', 'Whatever you wish.'),
    error: Array('Authentication failed', 'Something went wrong! Please come back later.', 'Sorry, the service is temporarily unavailable', 'Sorry, we are out of office', 'The quota was reached!', 'Errors happen', 'It seems that there is a typo in your message.')
}
var CHECKBOX = document.getElementById("bulma-state");
var bulmaStylesheet = document.getElementById("bulma-stylesheet");
CHECKBOX.addEventListener('change', function () {
    if (this.checked) {
        bulmaStylesheet.disabled = false;
    } else {
        bulmaStylesheet.disabled = true;
    }
});
const ADDNEW = document.getElementById("add-new")
const radiosBehavior = document.getElementsByName('self-closing')
const radiosType = document.getElementsByName('notif-type')
ADDNEW.addEventListener('click', function () {
    let behaviorValue = 'yes'
    let typeValue = 'info'
    for (let i = 0, length = radiosBehavior.length; i < length; i++) {
        if (radiosBehavior[i].checked) {
            behaviorValue = radiosBehavior[i].value
            break;
        }
    }
    for (let i = 0, length = radiosType.length; i < length; i++) {
        if (radiosType[i].checked) {
            typeValue = radiosType[i].value
            break
        }
    }
    const el = document.createElement('p')
    el.classList.add('notification')
    let innerHTML = ''
    const random = Math.floor(Math.random() * notificationTexts[typeValue].length)

    innerHTML = notificationTexts[typeValue][random]
    switch (typeValue) {
        case "success":
            el.classList.add('is-success')
            break
        case "error":
            el.classList.add('is-danger')
            break
        case "warning":
            el.classList.add('is-warning')
            break
        default:
            el.classList.add('is-primary')
            break
    }
    if (behaviorValue === 'yes') {
        el.setAttribute('data-close', 'self')
    } else {
        innerHTML += '<button class="delete will-close" type="button">Close</button>'
    }
    el.innerHTML = innerHTML
    document.querySelector('body').appendChild(el)
})