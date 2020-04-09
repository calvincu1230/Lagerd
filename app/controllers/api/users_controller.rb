class Api::UsersController < ApplicationController

    def index
        @users = User.includes(:checkins).with_attached_photo
        render :index
    end

    def show
        @user = User.includes(:checkins, :toasts).with_attached_photo.find(params[:id])
        render :show
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: clearer_errors(@user.errors.full_messages), status: 422
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
        params.require(:user).permit(:username, :email, :password, :first_name, :last_name, :birth_date)
    end

    def clearer_errors(errors) 
        errors.map do |error|
            case error
            when "Username can't be blank"
                "Username is required."
            when "Email can't be blank"
                "Email is required."
            when "First name can't be blank"
                "First name is required."
            when "Last name can't be blank"
                "Last name is required."
            when "Password is too short (minimum is 6 characters)"
                "Password must be at least 6 characters."
            else
                error
            end
        end
    end

end
