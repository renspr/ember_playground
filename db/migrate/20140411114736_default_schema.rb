class DefaultSchema < ActiveRecord::Migration
  def change

    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.timestamps
    end

    create_table :phone_numbers do |t|
      t.belongs_to :contact, index: true
      t.string :number_type
      t.string :number
      t.timestamps
    end

  end
end
