class ContactSerializer < ActiveModel::Serializer
  embed :ids #, include: true
  attributes :id, :first_name, :last_name
  has_many :phone_numbers
end
