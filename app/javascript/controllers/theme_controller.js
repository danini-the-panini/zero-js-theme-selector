import { Controller } from "@hotwired/stimulus"

const THEMES = ["auto", "dark", "light"]

export default class extends Controller {
  selectTheme({ currentTarget: { value } }) {
    document.cookie = `theme=${value}`
    THEMES.forEach(theme => {
      document.body.classList.toggle(`theme-${theme}`, theme === value)
    })
  }
}
