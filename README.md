# DB設計

## users table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|user_name|string|null: false|
|emails|string|null: false|
|password|string|null: false|

### Association
has_many :groups_users<br>
has_many :groups, though: :groups_users<br>
has_many :posts

## groups table
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|
|members|string|null: false|

### Association
has_many :groups_users<br>
has_many :users, though: :groups_users<br>
has_many :posts

## posts table
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
|message|text|null: false|
|image|integer|null: false|
### Association
belongs_to :user<br>
belongs_to :group

## groups_users table
|Column|Type|Options|
|------|----|-------|
|user_name|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to :user<br>
belongs_to :group