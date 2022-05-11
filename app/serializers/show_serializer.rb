class ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :photo, :author, :rating_number
  has_many :posts
  has_many :ratings




end