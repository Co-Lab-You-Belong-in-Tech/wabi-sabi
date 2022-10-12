class Api::V1::MemoriesController < ApplicationController
  before_action :set_api_v1_memory, only: %i[ show update destroy ]
  before_action :authenticate_user!

  # GET /api/v1/memories
  def index
    @api_v1_memories = Api::V1::Memory.includes(:user).where(user: current_user).order(created_at: :desc)
    memories_data = []
    @api_v1_memories.each do |memory|
      memories_data << Api::V1::MemorySerializer.new(memory).serializable_hash[:data][:attributes]
    end

    render json: memories_data
  end

  # GET /api/v1/memories/public
  def public_memories
    @api_v1_memories = Api::V1::Memory.includes(:user).where(public: true).order(created_at: :desc)
    public_memories_data = []
    @api_v1_memories.each do |memory|
      public_memories_data << Api::V1::MemorySerializer.new(memory).serializable_hash[:data][:attributes]
    end
    render json: public_memories_data
  end


  # GET /api/v1/memories/1
  def show
    render json: Api::V1::MemorySerializer.new(@api_v1_memory).serializable_hash[:data][:attributes]
  end

  # POST /api/v1/memories
  def create
    @api_v1_memory = Api::V1::Memory.new(api_v1_memory_params)
    @api_v1_memory.user = current_user

    if @api_v1_memory.save
      render json: { message: 'Memory created successfully' }, status: :created
    else
      render json: { error: @api_v1_memory.errors }, status: :unprocessable_entity
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
    if @api_v1_memory.destroy
      render json: { message: 'Memory deleted successfully' }, status: :ok
    else
      render json: { error: @api_v1_memory.errors }, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_memory
      @api_v1_memory = Api::V1::Memory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_v1_memory_params
      params.require(:api_v1_memory).permit(:prompt, :story, :public, :favorite, :image)
    end
end
