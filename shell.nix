# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import (
  builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/a2e06fc.tar.gz";
    sha256 = "0bjx4iq6nyhj47q5zkqsbfgng445xwprrslj1xrv56142jn8n5r9";
  }
) {};
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
