## Autogo
A Node Command Line Tool to auto generate a web structure.

This is also a tutorial to teach you how to make a Node Command.Just see http://www.awesomes.cn/source/12

## Install
```bash
npm install autogo -g
```


## Usage
```bash
autogo <项目名>
```

Then
```bash
cd <项目名>
npm install
gulp watch
```

Now you can develop your app...

## Options
```bash
 Usage: autogo [options] [project name]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -W, --without <str | array>  generate project without some models(value can be `sass`、`coffee`、`jade`)

```

You can use `-W` to  without some models,like `sass`、`coffee` or `jade`:
```bash
autogo demo --without sass,jade
```

