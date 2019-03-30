var ghpages = require('gh-pages');
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/Chengyanzhao/chengyanzhao.github.io.git',
}, (err) => {
  console.log('publish error: ' + err.message)
});