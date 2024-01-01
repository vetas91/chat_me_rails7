class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true
  scope :chat_last, -> { order(:created_at).last(20) }
end
