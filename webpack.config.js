var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js'
        //,vendor: ['angular']  
    }, 
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js',
          // export itself to a global var  libraryTarget: "var",
       
        // name of the global var: "Foo"  library: "Foo"
       
    },
    module: {
    loaders: [
      { test: /\.css$/, 
          loader: 'style!css!' },
      {
        test: /\.html$/, 
        loader: 'raw', 
         exclude: /node_modules/
       }
    ]
  },
  externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "ang": "angular"
    }
  //,    
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    // ]
};