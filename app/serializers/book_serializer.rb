class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :photo
end
