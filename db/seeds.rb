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

@hutchski = User.create!(username: "hutchski", password: "password", user_photo: "https://i.imgur.com/eEETwAK.jpg?1")
@stokedog = User.create!(username: "stokedog", password: "password", user_photo: "https://i.imgur.com/Lj26aoP.jpg?1")
@talubi = User.create!(username: "talubi", password: "password", user_photo: "https://i.imgur.com/HiLWMsK.jpg?1")

@post1 = Post.create!(
    title: "huckleberry gates",
    activity_type: "ski",
    distance: "18mi",
    duration: "4hrs 17m",
    elevation_gain: "19,000ft",
    activity_photo: "https://i.imgur.com/xUZWmes.jpg",
    user: @hutchski
)
@post2 = Post.create!(
    title: "joggin' with my hooman",
    activity_type: "run",
    distance: "4.7mi",
    duration: "58m",
    elevation_gain: "62ft",
    activity_photo: "https://i.imgur.com/v3Jm4rd.jpg",
    user: @stokedog
)
@post3 = Post.create!(
    title: "slickrock",
    activity_type: "bike",
    distance: "9mi",
    duration: "48m",
    elevation_gain: "740ft",
    activity_photo: "https://i.imgur.com/eKJp77f.jpg",
    user: @hutchski
)
@post4 = Post.create!(
    title: "borkin'",
    activity_type: "run",
    distance: "11.2mi",
    duration: "2hr 58m",
    elevation_gain: "1262ft",
    activity_photo: "https://i.imgur.com/Vd5Paso.jpg?1",
    user: @talubi
)

@comment1 = Comment.create!(
  content: "super sick doooood!",
  user: @hutchski,
  post: @post3
)
@comment2 = Comment.create!(
  content: "Gate 4 is my fave!",
  user: @talubi,
  post: @post1
)
@comment3 = Comment.create!(
  content: "pshh! no way, gate 2 all day!",
  user: @stokedog,
  post: @post1
)
@comment4 = Comment.create!(
  content: "What are you doing in Utah?!",
  user: @talubi,
  post: @post3
)
