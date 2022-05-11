class Rating < ApplicationRecord
  belongs_to :show
  belongs_to :user



  def ratings_check
      show_id = self.show_id
      show = Show.where(id:show_id)
      all_ratings = Rating.where(show_id:show_id)
      if all_ratings.length ==1
        the_ratings = all_ratings.first
        show.update(rating: the_ratings.rating)
        show.update(rating_number:1)
      else
        show_id = self.show_id
      show = Show.where(id:show_id)
      all_ratings = Rating.where(show_id:show_id)
      my_ratings = all_ratings.average(:rating).to_i
      show.update(rating: my_ratings)
      show.update(rating_number: "#{all_ratings.length}")
  end
end
  


end
