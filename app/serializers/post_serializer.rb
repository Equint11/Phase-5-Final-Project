class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image, :like
  has_one :User
end
