users = [
    {
        email:'brian@testing.com',
        password:'testing0428',
        password_confirmation:'testing0428'
    }
]

users.each do |attribute|
    User.create attribute
end

apartments = [
    {
        street:'1454 Q street',
        city:'San Diego', 
        state:'CA',
        manager:'mike', 
        email:'mike@gmail.com', 
        price:'1050', 
        bedrooms:3, 
        bathrooms:2,
        pets:'friendly'
    },
    {
        street:'2121 F street',
        city:'Chula Vista', 
        state:'CA',
        manager:'steve o', 
        email:'steve@yahoo.com', 
        price:'1444', 
        bedrooms:3, 
        bathrooms:1,
        pets:'no pets' 
    }

]

first_user = User.where(email: 'brian@testing.com').first

apartments.each do |attribute|
  first_user.apartments.create attribute
end
