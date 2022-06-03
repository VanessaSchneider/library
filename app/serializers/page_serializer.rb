class PageSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :chapter
end
