class Api::V1::Memory < ApplicationRecord
  belongs_to :user
  has_one_attached :image
end
