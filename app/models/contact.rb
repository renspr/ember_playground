class Contact < ActiveRecord::Base

  has_many :phone_numbers, dependent: :destroy

  validates_presence_of :first_name
  validates_presence_of :last_name

end
