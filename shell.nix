# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import (
  builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/8ba41a1.tar.gz";
    sha256 = "0c2wn7si8vcx0yqwm92dpry8zqjglj9dfrvmww6ha6ihnjl6mfhh";
  }
) {};
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
