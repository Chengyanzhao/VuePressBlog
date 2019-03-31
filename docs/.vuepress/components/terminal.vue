<template>
  <div class="terminal">
    <div class="terminal-header">
      <div class="terminal-header-control">
        <span class="control-item close"></span>
        <span class="control-item minimize"></span>
        <span class="control-item maximize"></span>
      </div>
      <div class="terminal-header-title">bash</div>
    </div>
    <div class="terminal-content">
      <pre>{{bashLine}}</pre>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import components from 'prismjs/components.js'
import 'prismjs/themes/prism-dark.css'
const bashText = `
FE -ls
> HTML
> JavaScript
> ES6
> TypeScript
> ...
> clear

> CSS 
> SASS
> Stylus
> Less
> ...
> shit!

> learn how to build.
> Grunt
> Gulp
> Webpack v1 & v2 & v3 & v4
> get off!

> learn the framework.
> Vue
> React
> Angular
> fxxk!

$ Anything else

> NodeJS
> Express
> Koa
> Npm
> HTTP
> Eslint
> Ant Design
> iView
> Element-UI
> Git
> Compatibility
> Deploy
> Nginx
> MongoDB
> Regexp

[error] Bom! OutOfMemory.

`
export default {
  name: 'terminal',
  data () {
    return {
      bashLine: bashText
    }
  },
}
</script>

<style lang="scss" scoped>
.terminal {
  margin: 0 auto;
  width: 500px;
  border-radius: 5px;
  background-color: #282c34;
  color: #e5e5e5;
  font-size: 12px;
  .terminal-header {
    padding: 4px 10px;
    background-color: #3c3c3c;
    text-align: center;
    .terminal-header-control {
      display: inline-block;
      float: left;
      .control-item {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        &.close {
          background-color: #ed655a;
        }
        &.minimize {
          background-color: #e0c04c;
        }
        &.maximize {
          background-color: #72be47;
        }
      }
    }
    .terminal-header-title {
      display: inline-block;
    }
  }
  .terminal-content {
    height: 300px;
    overflow-y: auto;
  }
}
</style>
