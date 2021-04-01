const path = require('path')

module.exports = (env) => {
  const mode = env.mode
  return {
    mode,
    entry: './src/uploader.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'uploader.js',
      library: {
        name: 'Uploader',
        type: 'umd',
      },
      clean: true,
    },
  }
}
