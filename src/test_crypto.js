import log from 'log';
import rand from 'csprng';
import * as CryptoJS from 'crypto-js';

export function test() {
  var randStrg = rand32bitStrg();
  log("randStrg=" + randStrg);
  test_aes();
}

export function rand32bitStrg() {
  return rand(32, 16);
}

// Simple usage of CryptoJS.AES.entrypt
// see: http://www.js-tutorials.com/javascript-tutorial/encrypt-decrypt-string-angularjs-using-aes-crypto-js/
// and https://code.google.com/archive/p/crypto-js/ for more
// info on using an initialization vector and such. Also
// wikipedia has an explanation of block cipher modes:
// https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation.
export function test_aes() {
  var message = 'my message';
  var key = 'secret key 123';

  // Encrypt
  var ciphertext = [];
  var ciphertext_str = [];
  ciphertext.push(CryptoJS.AES.encrypt(message, key));
  ciphertext_str.push(ciphertext[0].toString());
  ciphertext.push(CryptoJS.AES.encrypt(message, key));
  ciphertext_str.push(ciphertext[1].toString());

  // Decrypt
  var bytes= [];
  var plaintext = [];
  bytes.push(CryptoJS.AES.decrypt(ciphertext_str[0], key));
  plaintext.push(bytes[0].toString(CryptoJS.enc.Utf8));
  bytes.push(CryptoJS.AES.decrypt(ciphertext_str[1], key));
  plaintext.push(bytes[1].toString(CryptoJS.enc.Utf8));

  log("message=" + message);
  log("key=" + key);
  for (var i in [0, 1]) {
    log("ciphertext_str[" + i + "]=" + ciphertext_str[i]);
    log("plaintext[" + i + "]=" + plaintext[i]);
    log("message " + ((message == plaintext[i]) ? "==" : "!=") + " plaintext");
  }
}
