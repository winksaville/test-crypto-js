/**
 * Logging funtion always calls console.log
 * and an option 'log_textarea'.
 */
var log_textarea;
var log_textarea_id = "log_textarea_id";

window.onload = function() {
  log_textarea = document.getElementById(log_textarea_id);
  log("window.onload log.js");
}

export default function log(_text) {
  if (log_textarea != null) {
    log_textarea.value += _text + "\n";
    log_textarea.scrollTop = log_textarea.scrollHeight;
  }
  console.log(_text);
}
