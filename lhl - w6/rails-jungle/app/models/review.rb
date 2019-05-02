class Review < ActiveRecord::Base
  belongs_to :product
  belongs_to :user

  validates :product_id, presence: true
  validates :user_id, presence: true
  validates :description, length: {minimum: 3,  maximum: 500 }
  validates :rating, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
end
