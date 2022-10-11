class Users::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user
  respond_to :json

  private

  def respond_with(_resource, _opts = {})
    render json: {
      message: 'Logged in.',
      user: current_user
    }, status: :ok
  end

  def respond_to_on_destroy
    current_user ? log_out_success : log_out_failure
  end

  def log_out_success
    render json: { message: 'You are logged out.' }, status: :ok
  end

  def log_out_failure
    render json: { message: 'Something went wrong.' }, status: :unauthorized
  end
end
