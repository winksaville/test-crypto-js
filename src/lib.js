import log from 'log.js';

var field = [];

function logField(name, value) {
  log("field[" + name + "]="
    + value === undefined ? "<undefined>" : "'" + value + "'");
}

export function getField() {
  log("getField:+");

  var name = document.getElementById("get_field_name").value;
  var value = field[name];
  document.getElementById("get_field_value").value = value;

  logField(name, value);

  log("getField:-");
};

export function setField() {
  log("setField:+");

  var name = document.getElementById("set_field_name").value;
  var value = document.getElementById("set_field_value").value;
  field[name] = value;

  logField(name, value);

  log("setField:-");
};
