class ChapterSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :book
  has_many :pages
end
