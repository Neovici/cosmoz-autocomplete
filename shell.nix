# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/102eb68ceecb.tar.gz";
      sha256 = "1mlrd419vaz9vw5k0lymb8nasxziqv0yd4f2v7p14mlxcin3g7c3";
    })
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox jre google-chrome ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
