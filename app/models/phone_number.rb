class PhoneNumber < ActiveRecord::Base

  belongs_to :contact

  validate :number, presence: true

end
