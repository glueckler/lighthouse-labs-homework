class UserMailer < ApplicationMailer

  def order_confirmation_email(order)
    @order_email = order.email
    mail(:to => @order_email, subject: 'Thank you for shopping!')
  end

end
