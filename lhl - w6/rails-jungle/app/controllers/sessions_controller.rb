class SessionsController < ApplicationController

  def create
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      session[:user_id] = user.id
      redirect_to '/'
    else
      @products = Product.all.order(created_at: :desc)
      # If user's login doesn't work, send them back to the login form.
      render 'products/index'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end
