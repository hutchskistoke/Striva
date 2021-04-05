class DeleteColumnsFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :user 
    remove_column :posts, "{:null=>false, :foreign_key=>true}_id"
  end
end
