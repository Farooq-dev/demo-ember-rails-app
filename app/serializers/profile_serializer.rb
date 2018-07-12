class ProfileSerializer < ActiveModel::Serializer
  attributes :name, :email, :message, :upwork_name, :id
end
