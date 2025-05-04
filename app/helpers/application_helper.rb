module ApplicationHelper
  def theme
    cookies[:theme] || "auto"
  end
end
