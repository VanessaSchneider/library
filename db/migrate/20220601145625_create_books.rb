class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :summary
      t.string :first_paragraphs
  
      t.timestamps
    end
  end
end
