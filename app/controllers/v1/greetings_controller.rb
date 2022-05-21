class V1::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :greeting => 'Good Night'
      }
    ]}.to_json
  end
end