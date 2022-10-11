class Api::V1::MemoriesController < ApplicationController
  before_action :set_api_v1_memory, only: %i[ show update destroy ]
  before_action :authenticate_user!

  # GET /api/v1/memories
  def index
    @api_v1_memories = Api::V1::Memory.all

    render json: @api_v1_memories
  end

  # GET /api/v1/memories/1
  def show
    render json: @api_v1_memory
  end

  # POST /api/v1/memories
  def create
    @api_v1_memory = Api::V1::Memory.new(api_v1_memory_params)

    if @api_v1_memory.save
      render json: @api_v1_memory, status: :created, location: @api_v1_memory
    else
      render json: @api_v1_memory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/memories/1
  def update
    if @api_v1_memory.update(api_v1_memory_params)
      render json: @api_v1_memory
    else
      render json: @api_v1_memory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/memories/1
  def destroy
    @api_v1_memory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_memory
      @api_v1_memory = Api::V1::Memory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_v1_memory_params
      params.require(:api_v1_memory).permit(:prompt, :story, :public, :favorite)
    end
end
