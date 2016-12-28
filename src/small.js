const Small = require('url-loader?limit=10&name=img/[hash:12].[ext]!./img/small.png');
const Image = `<img src=${Small}/>`;
export default Image;