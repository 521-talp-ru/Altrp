const merge = require('webpack-merge');
const common = require('./webpack.admin.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "./public/modules/admin/"),
    filename: "admin.js"
  },
});