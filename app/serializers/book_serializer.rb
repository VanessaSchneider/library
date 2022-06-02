class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary
end
