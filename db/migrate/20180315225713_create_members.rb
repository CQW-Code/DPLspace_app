class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :nickname
      t.string :location
      t.string :occupation
      t.string :school
      t.string :avatar

      t.timestamps
    end
  end
end
