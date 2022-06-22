class CreateData < ActiveRecord::Migration[6.1]
    def change
      create_table :data do |t|
        t.integer :user_id
        t.integer :login_time
        t.integer :logout_time
        t.integer :total_time
      
        t.timestamps
      end
    end
  end
  