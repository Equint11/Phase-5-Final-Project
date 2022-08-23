class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username, :password_digest, :profile_picture_url, :bio
end
