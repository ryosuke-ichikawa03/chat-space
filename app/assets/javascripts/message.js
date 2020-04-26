$(function(){
  function buildHTML(message){
    if (message.post && message.image){
      var html = `<div class="message-box">
        <div class="message-info">
          <div class="message-info__message-user"> 
            ${message.user_name}
          </div>
          <div class="message-info__message-data">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p>
            ${message.post}
          </p>
          <img src=${message.image} >
        </div>
      </div>`
    } else {
      var html = `<div class="message-box">
        <div class="message-info">
          <div class="message-info__message-user"> 
            ${message.user_name}
          </div>
          <div class="message-info__message-data">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p>
            ${message.post}
          </p>
          <img src=${message.image} >
        </div>
      </div>`
    };
    return html;
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
    })
  }); 
});
