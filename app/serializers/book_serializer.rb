class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :first_paragraphs
end
