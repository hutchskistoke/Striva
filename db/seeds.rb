# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@hutchski = User.create!(username: "hutchski", password: "password", user_photo: "https://i.imgur.com/Ev5rvQ8.jpg")
@stokedog = User.create!(username: "stokedog", password: "password", user_photo: "https://i.imgur.com/ZsqYhLM.jpg?1")

@post1 = Post.create!(
    title: "huckleberry gates",
    activity_type: "ski",
    distance: "18mi",
    duration: "4hrs 17m",
    elevation_gain: "19,000ft",
    activity_photo: "https://i.imgur.com/1XoW1SZ.jpg",
    user: @hutchski
)
@post2 = Post.create!(
    title: "corral",
    activity_type: "bike",
    distance: "7mi",
    duration: "48m",
    elevation_gain: "1240ft",
    activity_photo: "https://i.imgur.com/dmzbkhv.jpg",
    user: @hutchski
)
@post3 = Post.create!(
    title: "joggin' with my hooman",
    activity_type: "run",
    distance: "4.7mi",
    duration: "58m",
    elevation_gain: "62ft",
    activity_photo: "https://i.imgur.com/j9u786i.jpg",
    user: @stokedog
)

@comment1 = Comment.create!(
  content: "super sick doooood!",
  user: @hutchski,
  post: @post3
)
@comment2 = Comment.create!(
  content: "Gate 3 is my fave!",
  user: @stokedog,
  post: @post1
)
