import consumer from "./consumer"

function scrollBottom() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('ChatroomChannel', 'connected')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // alert(JSON.stringify(data))
    $('#message_container').append(data.msg);
    scrollBottom();
  }
});
