import log from 'log';
import rand from 'csprng';

export function test() {
  var randStrg = rand32bitStrg();
  log("randStrg=" + randStrg);
}

export function rand32bitStrg() {
  return rand(32, 16);
}
