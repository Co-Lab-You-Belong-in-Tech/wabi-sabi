require 'test_helper'

class Api::V1::MemoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_v1_memory = api_v1_memories(:one)
  end

  test 'should get index' do
    get api_v1_memories_url, as: :json
    assert_response :success
  end

  test 'should create api_v1_memory' do
    assert_difference('Api::V1::Memory.count') do
      post api_v1_memories_url,
           params: { api_v1_memory:
            { favorite: @api_v1_memory.favorite, prompt: @api_v1_memory.prompt,
              public: @api_v1_memory.public, story: @api_v1_memory.story } }, as: :json
    end

    assert_response :created
  end

  test 'should show api_v1_memory' do
    get api_v1_memory_url(@api_v1_memory), as: :json
    assert_response :success
  end

  test 'should update api_v1_memory' do
    patch api_v1_memory_url(@api_v1_memory),
          params: { api_v1_memory:
            { favorite: @api_v1_memory.favorite, prompt: @api_v1_memory.prompt,
              public: @api_v1_memory.public, story: @api_v1_memory.story } }, as: :json
    assert_response :success
  end

  test 'should destroy api_v1_memory' do
    assert_difference('Api::V1::Memory.count', -1) do
      delete api_v1_memory_url(@api_v1_memory), as: :json
    end

    assert_response :no_content
  end
end
