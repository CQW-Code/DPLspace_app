# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#100.times do
 # user = User.create!(
  #  name: Faker::Name.name,
   # image: Faker::Placeholdit.image("50x50", 'jpg'),
    #email: Faker::Internet.email,
    #password: 'password',
    #member: Member.create(
    #  name: Faker::Name.name,
    #  nickname: Faker::Internet.username,
    #  avatar: Faker::Placeholdit.image("50x50", 'jpg'),
    #  location: Faker::Address.state,
    #  school: Faker::University.name,
    #  occupation: Faker::Job.position)
  #)
  #  end
  
  user = User.create!(
    name: 'Ducky',
    image: Faker::Avatar.image,
    email: 'Ducky@gallaudet.edu',
    password: 'password',
    member: Member.create(
      name: 'Chris',
      nickname: 'Ducky',
      avatar: Faker::Placeholdit.image("50x50", 'jpg'),
      location: 'North Carolina',
      school: 'Gallaudet University',
      occupation: 'QA Tester/Student')
    
  )

      

    
