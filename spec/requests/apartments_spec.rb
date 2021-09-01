require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'brian@test.com', password: 'testing0428', password_confirmation: 'testing0428'
  end
    describe "GET /index" do
      pending "add some examples (or delete) #{__FILE__}"
      it 'gets all the apartments' do
        Apartment.create street: '221c Baker Street', city: 'London', state: 'England', manager: 'Ms. Hudson', email: 'mzhud@email.com', price: '1000', bedrooms: 2, bathrooms: 2, pets: 'no', user_id: user.id
  
        get '/apartments'
  
        apartments = JSON.parse(response.body)
        expect(apartments.length).to eq 1
        expect(response).to have_http_status(200)
  
        apartment = apartments.first
        expect(apartment['street']).to eq '221c Baker Street'
        expect(apartment['city']).to eq 'London'
        expect(apartment['state']).to eq 'England'
        expect(apartment['manager']).to eq 'Ms. Hudson'
        expect(apartment['email']).to eq 'mzhud@email.com'
      end
    end
  end
