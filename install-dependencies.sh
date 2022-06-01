echo "node version: " && node -v &&
echo "npm version: " && npm -v &&
echo "installing dependencies" && npm i electron-squirrel-startup rpm rpmbuild
echo "installing dev dependencies" && npm i --save-dev @electron-forge/cli @electron-forge/maker-deb @electron-forge/maker-rpm @electron-forge/maker-squirrel @electron-forge/maker-zip electron