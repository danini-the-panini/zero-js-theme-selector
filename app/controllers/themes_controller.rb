# frozen_string_literal: true

class ThemesController < ApplicationController
  def update
    cookies[:theme] = params[:commit] || "auto"

    redirect_back fallback_location: root_path
  end
end
