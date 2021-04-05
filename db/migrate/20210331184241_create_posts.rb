class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :activity_type
      t.string :distance
      t.string :duration
      t.string :elevation_gain
      t.string :activity_photo

      t.timestamps
    end
  end
end
