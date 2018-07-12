class Profile < ActiveRecord::Base
  include Aws::AwsServices

  validates :name,:email, presence: true, uniqueness: true

  after_create :initiate_callback_to_server_through_lambda

  private
  def initiate_callback_to_server_through_lambda
    connect_and_send_message_to_lambda(JSON.parse(JSON.generate(ProfileSerializer.new(self,:root=>false).as_json)))
  end
end
