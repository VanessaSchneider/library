class BooksController < ApplicationController


    def index
        books= Book.all
        render json: books, status: :ok
    end


    def getbook
        book = Book.find_by!(name: params[:name])
          if book.valid?
          render json: book, status: :ok
          else 
          render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
          end
        end


end
