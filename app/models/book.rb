class Book < ApplicationRecord
    has_many :chapters
    has_many :pages, through: :chapters
    
end
