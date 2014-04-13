Contact.destroy_all

100.times do
  Contact.create do |contact|
    contact.first_name = Faker::Name.first_name
    contact.last_name  = Faker::Name.last_name
    rand(1..3).times do
      contact.phone_numbers << PhoneNumber.new do |phone_number|
        phone_number.number = Faker::PhoneNumber.phone_number
      end
    end
  end
end
