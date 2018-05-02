class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :hits
      t.string :username

      t.timestamps
    end
  end
end
