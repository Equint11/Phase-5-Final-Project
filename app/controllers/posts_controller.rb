class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        render json: Post.all.order(created_at: :desc)
    end

    def create
        
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def change_profile_picture
        Post.where(user_id: params[:user_id]).each do |post|
            post.update(user_profile_picture: params[:user_profile_picture])
        end
    end

    private
    
    def post_params
        params.permit(:caption, :image, :user_id)

    end
end
#  :user_id, :username, :user_profile_picture