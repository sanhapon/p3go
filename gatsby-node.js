const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const iltorb = require('iltorb');
const glob = require('glob');

exports.onPostBuild = () =>
  new Promise((resolve, reject) => {
    try {
      const publicPath = path.join(__dirname, 'public');
      const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css|*.svg)`, { nodir: true });
      gzippable.forEach((file) => {
        const content = fs.readFileSync(file);
        const zipped = zlib.gzipSync(content);
        // fs.writeFileSync(`${file}.gz`, zipped);
        fs.writeFileSync(file, zipped);
        
        // const brotlied = iltorb.compressSync(content);
        // fs.writeFileSync(`${file}.br`, brotlied);
      });
    } catch (e) {
      console.log(e)
      reject(new Error('onPostBuild: Could not compress the files:'));
    }

    if (fs.existsSync('./public/sitemap-index.xml')) {
      fs.renameSync('./public/sitemap-index.xml', './public/sitemap.xml');
    }
    
    resolve();
  });
