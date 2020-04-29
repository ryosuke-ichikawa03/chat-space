$(function(){
  function addUser(user){
    var html =`
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
      </div>`
    $("#user-search-result").append(html);
  }

  function addNoUser(){
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>`
    $("#user-search-result").append(html);
  }

  $("#user-search-field").on("keyup",function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty()
      if (users.length !== 0){
        users.forEach(function(user){
          addUser(user)
        })
      } else if (input.length == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function(){
      alert("ユーザーの検索に失敗しました。");
    })
  });
});