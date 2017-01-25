import rand from 'csprng';

export function rand32bitStrg() {
  return rand(32, 16);
}
