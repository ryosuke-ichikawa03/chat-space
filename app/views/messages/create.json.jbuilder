json.user_name @message.user.name
json.created_at @message.created_at.to_s(:datetime_jp)
json.post @message.post
json.image @message.image