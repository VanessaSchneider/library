class CreateChapters < ActiveRecord::Migration[6.1]
  def change
    create_table :chapters do |t|
    t.integer :book_id
      t.timestamps
    end
  end
end
