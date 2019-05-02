class User < ActiveRecord::Base

  has_secure_password

  def self.authenticate_with_credentials(email, password)
    email.downcase!
    user = User.find_by_email(email)
      # If the user exists AND the password entered is correct.
      if user && user.authenticate(password)
        user
      else
        false
    end
  end

  has_many :reviews

  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :email, presence: true
  validates :name, presence: true

end
