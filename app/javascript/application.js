// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui"
import "controllers"
import "channels"

function scrollBottom() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
}

function submitMessage  () {
    $('#message_body').on('keydown', function (e) {
        if (e.keyCode === 13) {
            $('#button').click();
        }
    })
}

console.log('BEFORE TURBO LOAD')
$(document).on('turbo:load', function () {
    console.log('LOADED TURBO LINKS')
    $('.ui.dropdown').dropdown()
    $('.message .close')
        .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });
    scrollBottom();
    submitMessage();
});



