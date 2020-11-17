# bankai-debug
Small example project to reproduce bankai+hypercore bundling issue relating to the JavaScript "spread" operator (`{ ...obj }`). The file `.babelrc` appears to be ignored by bankai well as `package.json`.

```
$ npm install && npm install -g browserify
$ browserify index.js -o bundle.js
$
$ echo "no errors!"
$
$ npm run build
> sodium-debug@0.0.1 build /home/rhodey/dev/dsp/js/bankai-debug
> bankai build index.js

12:40:41 ✨ Compiling & compressing files

12:40:41 ✨ created: dist
12:40:41 ✨ created: dist/manifest.json
12:40:41 ✨ created: dist/manifest.json.gz
12:40:41 ✨ created: dist/manifest.json.deflate
12:40:42 ✨ created: dist/manifest.json.br
12:40:46 🚨 Failed while processing 'scripts'.

    --> node_modules/hypercore/index.js:1265:12
         |
	 1265 |   opts = { ...opts }
	      |            ^  Unexpected token  

	      Hmmm. We're having trouble parsing a file.
```
