json.id @toast.id
json.checkinId @toast.checkin_id
json.userId @toast.user_id
json.imgUrl url_for(@toast.user.photo) if @toast.user.photo.attached?