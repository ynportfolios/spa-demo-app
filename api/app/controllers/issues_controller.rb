class IssuesController < ApplicationController
  before_action :set_issue, only: %i[destroy update]

  def index
    issues = Issue.all.order(:id)
    render json: issues
  end

  def create
    issue = Issue.new(issue_params)
    if issue.save
      render json: issue
    else
      render json: issue.errors
    end
  end

  def update
    if @issue.update(issue_params)
      render json: @issue
    else
      render json: @issue.errors
    end
  end

  def destroy
    if @issue.destroy
      render json: @issue
    else
      render json: @issue.errors
    end
  end

  private

  def set_issue
    @issue = Issue.find(params[:id])
  end

  def issue_params
    params.require(:issue).permit(:name)
  end
end
