json.id @comment.id
json.body @comment.body
json.checkinId @comment.checkin_id
json.updatedAt @comment.updated_at
json.authorId @comment.author_id
json.imgUrl url_for(@comment.author.photo) if @comment.author.photo.attached?