import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["header"]

  connect() {
    this.headerTarget.textContent = 'Hello, Stimulus!'
  }
}