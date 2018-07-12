module Aws::AwsServices
  extend ActiveSupport::Concern

  require 'aws-sdk'

  def connect_and_send_message_to_lambda(message)
    Aws::Lambda::Client.new(
        access_key_id: ENV['AWS_KEY_ID'],
        secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
        region: 'us-east-2'
    ).invoke(function_name: 'pushMessageToClient', payload: message.to_json)
  end
end