json.array! @messages do |message|
  json.post message.post
  json.image message.image.url
  json.created_at message.created_at.to_s(:datetime_jp)
  json.user_name message.user.name
  json.id message.id
end