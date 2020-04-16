# DB設計

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
has_many :groups_users<br>
has_many :groups, though: :groups_users<br>
has_many :posts

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :groups_users<br>
has_many :users, though: :groups_users<br>
has_many :posts

## messages table
|Column|Type|Options|
|------|----|-------|
|post|string|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
belongs_to :user<br>
belongs_to :group

## groups_users table
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
belongs_to :user<br>
belongs_to :group