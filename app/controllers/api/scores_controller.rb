class Api::ScoresController < ApplicationController

  def index 
    scores = Score.all.order(hits: :desc)
    render json: scores
  end 

  def create
    score = Score.create(score_params)
    if score.save
      render json: score
    else
      render json: {errors: score.errors.full_message.join(', ')}, status: 422
    end
  end

  private 

  def score_params
    params.permit(:hits, :username)
  end
end
