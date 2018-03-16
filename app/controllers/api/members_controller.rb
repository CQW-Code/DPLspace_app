class Api::MembersController < ApplicationController
  
  before_action :authenticate_user!
  
  def index
    render json: Member.all.order(created_at: :desc)
  end

  def update

  end

  def destroy
  end

  def show
  end

  def create 
  end
end
