class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :nickname
      t.string :avatar
      t.string :location
      t.string :school
      t.string :occupation
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
