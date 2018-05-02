50.times do
  Score.create(
    username: Faker::Internet.user_name,
    hits: Faker::Number.between(1, 100)
  )
end