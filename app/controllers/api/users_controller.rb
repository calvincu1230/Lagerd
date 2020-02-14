class Api::UsersController < ApplicationController

    def index
        @users = User.with_attached_photo.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update_attributes(user_params)
          render :show
        elsif !@user
          render json: ['Could not find user'], status: 400
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy 
        @user = User.find(params[:id])
        if @user
            @user.destroy
            render :show # maybe dont render show?
        else
            render json: ['Could not find user'], status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :image_url, :password, :first_name, :last_name, :birth_date)
    end
end
