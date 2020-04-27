$(function(){
  function buildHTML(message){
    if (message.image){
      var html = `<div class="main-chat__group-message__message-box">
        <div class="main-chat__group-message__message-box__message-info">
          <div class="main-chat__group-message__message-box__message-info__message-user"> 
            ${message.user_name}
          </div>
          <div class="main-chat__group-message__message-box__message-info__message-data">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__group-message__message-box__message">
          <p>
            ${message.post}
          </p>
          <img src=${message.image} >
        </div>
      </div>`
      return html;
    } else {
      var html = `<div class="main-chat__group-message__message-box">
        <div class="main-chat__group-message__message-box__message-info">
          <div class="main-chat__group-message__message-box__message-info__message-user"> 
            ${message.user_name}
          </div>
          <div class="main-chat__group-message__message-box__message-info__message-data">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__group-message__message-box__message">
          <p>
            ${message.post}
          </p>
          <img src=${message.image} >
        </div>
      </div>`
      return html;
    }
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__group-message').append(html);
      $('form')[0].reset();
      $('.main-chat__group-message').animate({ scrollTop: $('.main-chat__group-message')[0].scrollHeight});

    })
  })
})
