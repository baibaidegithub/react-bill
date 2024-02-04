const path = require('path')


//别名路径配置
module.exports = {
    webpack:{
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    }
}