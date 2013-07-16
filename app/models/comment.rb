class Comment < ActiveRecord::Base
  attr_accessible :post_id, :text

  belongs_to :post
end
