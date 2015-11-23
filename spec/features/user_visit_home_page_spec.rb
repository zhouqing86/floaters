feature 'User visit home page' do
  scenario 'they see the A h1 with Greeting for You' do
    visit '/'
    expect(page).to have_content 'Greeting for You'
  end
end