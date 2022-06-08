class BooksController < ApplicationController
    skip_before_action :authorized_user, only: [:index]

    def index
        books = Book.all
        render json: books, status: :ok
    end


  def show
       book = Book.find(params[:id])
        render json: book, status: :ok
    end




    def search
        book = Book.find_by!(name: params[:name])
          if book.valid?
          render json: book, status: :ok
          else 
          render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
          end
        end

        def getbook
            book = Book.find_by!(name: params[:name])
              if book.valid?
              render json: book, status: :ok
              else 
              render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
              end
            end


            def create
              book = Book.create(book_params)
            if book.valid?
                render json: book, status: :created
            else
                render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
            end
          end



        def books_params
            params.permit(:name, :author, :photo)
        end



end

