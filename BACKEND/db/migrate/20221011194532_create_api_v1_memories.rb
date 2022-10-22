class CreateApiV1Memories < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'pgcrypto'
    create_table :api_v1_memories do |t|
      t.string :prompt
      t.text :story
      t.boolean :public
      t.boolean :favorite
      t.uuid :share_id, default: 'gen_random_uuid()'
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
