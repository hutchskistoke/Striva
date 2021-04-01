class AddUserRefernceToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :user, :string
    add_reference :posts, null: false, foreign_key: true
  end
end
