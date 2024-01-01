class ChatroomController < ApplicationController
  before_action :require_user
  def show
    @message = Message.new
    @messages = Message.chat_last
    @users = User.all
  end
end