import { Controller } from "stimulus"
window.$ = window.jQuery = window.jquery = require('jquery')
import 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

export default class extends Controller {
  static targets = ["calendar"]

  connect() {
  	$(this.calendarTarget).fullCalendar()
  }
}

