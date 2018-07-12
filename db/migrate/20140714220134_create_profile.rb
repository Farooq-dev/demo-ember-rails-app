class CreateProfile < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :email
      t.string :upwork_name
      t.text :message
      t.timestamps
    end
  end
end
