{
  description = "Basic dependencies";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in
      rec {
        packages = flake-utils.lib.flattenTree (with pkgs;  rec {
          tmux-ui = writeShellScriptBin "tmux-ui" ''
			PROJECT=$(basename $(pwd))
			tmux at -t $PROJECT || SHELL=bash tmux new -s $PROJECT -n term \; \
			  send "npm ci" C-m \; splitw -v -p 50 \; \
			  neww -n tig \; send "tig" C-m \; \
			  neww -n kak \; send "kak" C-m \; \
			  selectw -t 1\; selectp -t 1 \;
          '';
          test-unit = writeShellScriptBin "test-unit" ''
	        NIXPKGS_ALLOW_UNFREE=1 nix develop --impure .#testShell -c npm test $@
          '';
          devShell = mkShell {
            buildInputs = [ nodejs-14_x ];
            shellHook = ''
              export PATH=$(npm bin):${lib.makeBinPath [tmux-ui test-unit]}:$PATH
            '';
          };
          testShell = mkShell {
            buildInputs = [ firefox google-chrome ];
          };
        });
        defaultPackage = packages.devShell;
      }
    );
}
