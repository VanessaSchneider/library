class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :first_paragraphs
  has_many :chapters
    has_many :pages
end
