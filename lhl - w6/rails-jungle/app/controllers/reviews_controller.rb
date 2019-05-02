class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    @product = Product.find(params[:product_id])
    @review.product = @product
    if @review.save
      redirect_to @product
    else
      render "products/show"
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if current_user == @review.user
      @review.destroy
      redirect_to @review.product
    else
      render "products/show"
    end

  end

  private

  def review_params
    params.require(:review).permit(:rating, :description)
  end
end
