// Messenger Desigen
let message = document.querySelector('.show-msg');
let showMsg = document.querySelector('.fb-message');
message.addEventListener('click', function(){
    showMsg.classList.toggle('activemsg')
})

// Notification Desigen
let notification = document.querySelector('.note-fic');
let notificationArea = document .querySelector('.notification-main');
notification.addEventListener('click', function(){
    notificationArea.classList.toggle('shownoti')
})
// console.log(notification)

// Admin Desigen
let admin = document.querySelector('.admin-logo');
let showadmin = document.querySelector('.admin-deshboard');
admin.addEventListener('click', function(){
    showadmin.classList.toggle('showAdmin')
})
// console.log(admin)