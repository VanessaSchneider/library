class User < ApplicationRecord
  has_secure_password
  has_many :books, dependent: :destroy
  has_many :data

  validates :username, presence: true, uniqueness: true


end
