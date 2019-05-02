require 'rails_helper'

RSpec.describe User, type: :model do

  describe "Validation" do

    before(:each) do
      @user = User.new(name:"nead", email:"dean@dean.dean", password:"asdfasdf", password_confirmation:"asdfasdf")
    end

    context "A valid entry" do
      it "should pass given valid parameters" do
        expect(@user).to be_valid
      end
    end

    context "A invalid entry" do
      it "should not pass given incorrect password confirmation" do
        @user.password_confirmation = "fdsa"
        expect(@user).to_not be_valid
      end

      it "should not pass without a name" do
        @user.name = nil
        expect(@user).to_not be_valid
      end

      it "should not pass without a email" do
        @user.email = nil
        expect(@user).to_not be_valid
      end

      it "should not pass without a password" do
        @user.password = nil
        expect(@user).to_not be_valid
      end

      it "should not pass with a password less than 6 chars" do
        @user.password = "asdf"
        expect(@user).to_not be_valid
      end

    end

    describe '.authenticate_with_credentials' do

      before(:each) do
        @user = User.new(name:"dean", email:"dean@dean.dean", password:"asdfasdf", password_confirmation:"asdfasdf")
      end

      context "A valid login" do
        it "should work" do
          @user.save
          expect(User.authenticate_with_credentials('dean@dean.dean', 'asdfasdf')).to be_truthy
        end
      end

      context "Invalid log in parameters" do
        it "should not accept a mispelled password" do
          @user.save
          expect(User.authenticate_with_credentials('dean@dean.dean', 'aaaa')).to be false
        end

        it "should not accept a mispelled email" do
          @user.save
          expect(User.authenticate_with_credentials('dean@dean.d', 'asdfasdf')).to be false
        end
      end

      context "Edge Cases" do
        it "should still accept emails spelt with fucked up casing" do
          @user.email = "dEaN@dEaN.dean"
          @user.email.downcase!
          @user.save
          expect(User.authenticate_with_credentials('dEAN@dean.dean', 'asdfasdf')).to be_truthy
        end
      end
    end

  end

end
