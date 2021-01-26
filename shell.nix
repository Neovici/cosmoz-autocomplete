# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/f217c0ea7c14.tar.gz";
      sha256 = "0cyksxg2lnzxd0pss09rmmk2c2axz0lf9wvgvfng59nwf8dpq2kf";
    })
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox jre google-chrome ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
