class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.integer :chapter_id
      t.integer :page_num

      t.timestamps
    end
  end
end
