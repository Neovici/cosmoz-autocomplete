# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/a52e974cff8f.tar.gz";
      sha256 = "0yhcnn435j9wfi1idxr57c990aihg0n8605566f2l8vfdrz7hl7d";
    }
  )
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox jre google-chrome ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
