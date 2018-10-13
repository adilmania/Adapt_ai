window.onload = () => {
    document.querySelectorAll('[data-target]').forEach((result) => {
        result.onclick = () => {
            let modal = document.getElementById(result.getAttribute('data-target'))
            modal.classList.toggle("is-active")
            modal.querySelector('.delete').onclick = () => { modal.classList.toggle("is-active") }
        }
    })
}

var notifications = new Notifications();
notifications.init();