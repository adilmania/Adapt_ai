var notificationTexts = {
    info: Array('Successfully authenticated', 'Your subscription was registered. We\'ve sent you a confirmation email', 'Did you know that a rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.', 'Did you know that among all shapes with the same area, circle has the shortest perimeter.', 'You reached the bottom of the page.'),
    success: Array('Your email was sent successfully.', 'The database is created.', 'You did it!', 'You are the winner!', 'Yes! Absolutely best score ever!', 'Your story, your success...', 'Whatever you wish.'),
    error: Array('Authentication failed', 'Something went wrong! Please come back later.', 'Sorry, the service is temporarily unavailable', 'Sorry, we are out of office', 'The quota was reached!', 'Errors happen', 'It seems that there is a typo in your message.')
};

var CHECKBOX = document.getElementById("bulma-state");
var bulmaStylesheet = document.getElementById("bulma-stylesheet");
CHECKBOX.addEventListener('change', function () {
    if (this.checked) {
        bulmaStylesheet.disabled = false;
    } else {
        bulmaStylesheet.disabled = true;
    }
});
var ADDNEW = document.getElementById("add-new");
var radiosBehavior = document.getElementsByName('self-closing');
var radiosType = document.getElementsByName('notif-type');
ADDNEW.addEventListener('click', function () {
    var behaviorValue = 'yes';
    var typeValue = 'info';
    for (var i = 0, length = radiosBehavior.length; i < length; i++) {
        if (window.CP.shouldStopExecution(0)) break;
        if (radiosBehavior[i].checked) {
            behaviorValue = radiosBehavior[i].value;
            break;
        }
    } window.CP.exitedLoop(0);
    for (var _i = 0, _length = radiosType.length; _i < _length; _i++) {
        if (window.CP.shouldStopExecution(1)) break;
        if (radiosType[_i].checked) {
            typeValue = radiosType[_i].value;
            break;
        }
    } window.CP.exitedLoop(1);
    var el = document.createElement('p');
    el.classList.add('notification');
    var innerHTML = '';
    var random = Math.floor(Math.random() * notificationTexts[typeValue].length);

    innerHTML = notificationTexts[typeValue][random];
    switch (typeValue) {
        case "success":
            el.classList.add('is-success');
            break;
        case "error":
            el.classList.add('is-danger');
            break;
        case "warning":
            el.classList.add('is-warning');
            break;
        default:
            el.classList.add('is-primary');
            break;
    }

    if (behaviorValue === 'yes') {
        el.setAttribute('data-close', 'self');
    } else {
        innerHTML += '<button class="delete will-close" type="button">Close</button>';
    }
    el.innerHTML = innerHTML;
    document.querySelector('body').appendChild(el);
});