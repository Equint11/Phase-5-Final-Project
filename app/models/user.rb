class User < ApplicationRecord
    has_secure_password
    has_one_attached :image
    has_many :posts, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates :bio, length: { maximum: 300}
end
