# Install the app

```shell
# Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating
# If you use BASH: Add .nvmrc autoload to ~/.bashrc via https://gist.github.com/DenisGorbachev/0c321443d9fe684b6d2a9de785420a6a
# If you use ZSH: Add .nvmrc autoload to ~/.zshrc via https://github.com/nvm-sh/nvm#zsh
nvm install $(cat .nvmrc)
nvm use # loads .nvmrc
# Install yarn v1: https://classic.yarnpkg.com/en/docs/install
# Ensure node_modules/.bin is in your PATH
yarn install
```
