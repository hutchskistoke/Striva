class PostsController < ApplicationController
  before_action :authorize_request, except: :login
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  # http://localhost:3000/users/15/posts >>below index shows just posts for user 15 
  def index
    # @user = User.find(params[:user_id])
    @posts = Post.all

    render json: @posts, include: [:comments, :user], status: :ok
  end

  def index_user
    @post = Post.where(user_id: @current_user.id)
    render json: @post, inlcude: :comments
  end


  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    # @user = User.find(params[:user_id])
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, include: [:comments, :user], status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: [:comments, :user]
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :activity_type, :distance, :duration, :elevation_gain, :activity_photo)
    end
end
