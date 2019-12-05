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

    /* FUNCTIONS */
    const addPost = (post) => {
        //get properties
        const {username, type, avatar, time, msg} = post;

        //create elements
        const $posts = $('#chatroom .posts');
        const $post = `
            <div class="post post--${type}">
                <img src="assets/img/${avatar}" alt="${type}" class="post-img">
                <div class="post-body">
                    <p class="card-text post-info">
                        <span class="post-author">${username}</span> 
                        <i class="far fa-clock"></i>
                        <time class="post-time text-muted">${time}</time>
                    </p>
                    <p class="card-text post-msg">${msg}</p>
                </div>
            </div>
        `;

        //append to DOM
        $posts.append($post);
    }

    /* EVENTS */
    $('#send-post').click(() => {
        const post = {
            username: 'julio',
            type: 'me',
            avatar: 'man-1.jpg',
            time: 'now', 
            msg: $('textarea').val(),
        }
        addPost(post);
        $('textarea').val('');
    })

    /* SOCKET MESSAGES */


    


})