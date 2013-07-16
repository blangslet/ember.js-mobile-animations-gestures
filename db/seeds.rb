# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(title: "Apple Pie", body: "Souffle apple pie pastry icing topping carrot cake marshmallow.")
Post.create(title: "Cheesecake Factory", body: "Cheesecake brownie croissant sugar plum. Sweet cookie toffee.")
Post.create(title: "Jujubes", body: "Croissant bonbon oat cake carrot cake sugar plum oat.")
Post.create(title: "Coffee Ice Cream", body: "Tart candy powder candy donut macaroon caramels icing.")

Comment.create(post_id: 1, text: "Croissant souffle candy!")
Comment.create(post_id: 1, text: "Sesame snaps gummi bears")
Comment.create(post_id: 1, text: "Caramels cookie chupa")
Comment.create(post_id: 2, text: "Cake sugar plum")
Comment.create(post_id: 2, text: "Macaroon caramels icing")
Comment.create(post_id: 3, text: "Jelly-o toffee")
Comment.create(post_id: 4, text: "Fruitcake caramels jelly")
Comment.create(post_id: 4, text: "Gingerbread gummies!")
Comment.create(post_id: 4, text: "Get up get out n' get something")