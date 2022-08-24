class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :caption, :image, :like
  has_one :user
  def created_at
    object.created_at.in_time_zone("America/Los_Angeles").strftime("%B %d %Y at %I:%M %p %Z")
  end
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
