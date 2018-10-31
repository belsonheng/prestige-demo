#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp ../public/404.html .

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/belsonheng/prestige-demo.git master:gh-pages

cd -
