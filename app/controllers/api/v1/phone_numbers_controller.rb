class Api::V1::PhoneNumbersController < ApplicationController

  def index
    @phone_numbers = PhoneNumber.find(params[:ids])
    render json: @phone_numbers
  end

end
