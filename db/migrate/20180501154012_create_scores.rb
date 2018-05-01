class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :count
      t.string :username

      t.timestamps
    end
  end
end
