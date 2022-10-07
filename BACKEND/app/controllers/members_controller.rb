# app/controllers/members_controller.rb
class MembersController < ApplicationController
  before_action :authenticate_user!

  def show
    user = fetch_user_from_token
    render json: {
      message: "If you see this, you're in!",
      user: user
    }
  end

  private

  def fetch_user_from_token
    jwt_payload = JWT.decode(request.headers['Authorization'].split[1],
                             ENV.fetch('DEVISE_JWT_SECRET_KEY', nil)).first
    user_id = jwt_payload['sub']
    User.find(user_id.to_s)
  end
end
