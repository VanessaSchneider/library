class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :author, :photo, :user_id
end
