class Api::MembersController < ApplicationController
  def index
    render json: Member.all.order(created_at: :desc)
  end

  def show
    render json: @member
  end

  def create
  end

  def update
  end

  def destroy
  end
end
