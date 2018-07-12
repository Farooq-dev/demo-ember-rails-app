class Api::ProfilesController < Api::BaseController
  def index
    profiles = Profile.all
    respond_with profiles
  end

  def show
    profile = Profile.find(params[:id])
    respond_with profile
  end

  def create
    profile = Profile.create(profile_params)
    respond_with :api, profile
  end

  def update
    profile = Profile.find(params[:id])
    profile.update(profile_params)
    respond_with profile
  end

  def destroy
    profile = Profile.find(params[:id])
    respond_with profile.destroy
  end

  def profile_params
    params.require(:profile).permit(:name, :email, :message, :upwork_name)
  end
end
