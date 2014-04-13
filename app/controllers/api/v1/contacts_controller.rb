class Api::V1::ContactsController < ApplicationController

  def index
    sleep(1)
    contacts = Contact.all
    render json: contacts
  end

  def show
    sleep(1)
    contact = Contact.find(params[:id])
    render json: contact
  end

  def create
    contact = Contact.new(contact_params)
    if contact.save
      render json: contact
    else
      render json: {errors: contact.errors}, status: :unprocessable_entity
    end
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update_attributes(contact_params)
      render json: contact
    else
      render json: {errors: contact.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    if contact.destroy
      head :no_content
    else
      head :no_content, status: :unprocessable_entity
    end
  end

protected

  def contact_params
    params.permit(contact: [:first_name, :last_name])[:contact]
  end

end
