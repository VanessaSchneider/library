class BooksController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :get_books]

    def index
        books = Book.all
        render json: books, status: :ok
    end


  def show
       book = Book.find(params[:id])
        render json: book, status: :ok
    end


    def update
        book = Book.find_by!(id: params[:id])
          book.update(book_params)
          if book.valid?
          render json: book, status: :ok
          else 
          render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
          end
        end


        def get_books
          books= Book.all
          filtered_books = books.filter{|m| m.user_id ==0}
          render json: filtered_books, status: :ok
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



        def book_params
            params.permit(:name, :author, :photo, :user_id)
        end



end

