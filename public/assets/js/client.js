/* === jQUERY === */

$(document).ready(function() {

    /* HAMBURGR ICON  */
    $('.menu-icon').click(() => $('.menu-icon').toggleClass('change'))

    /* SELECT AVATAR */
    $('.form-group--avatar select').change(event => {
        const file = `assets/img/${event.target.value}`
        $('.form-group img').attr('src', file)
    })

    /* HAMBURGR ICON  */

    /* CHAT BTN */

    /* CHAT USER INPUT */

    /* SOCKET MESSAGES */


    


})