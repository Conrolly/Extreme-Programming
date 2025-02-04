const http = '127.0.0.1:8415'

module.exports = {
    //  输出目录
    outputDir: '../src/main/resources/dist',
    //  静态资源使用相对路径
    publicPath: './',
    //  代理配置
    devServer: {
        proxy: {
            '/api': {
                target: `http://${http}`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                timeout: 60 * 1000
            },
            '/auth': {
                target: `http://${http}`,
                changeOrigin: true,
                pathRewrite: {
                    '^/auth': '/auth'
                },
                timeout: 60 * 1000
            }
        }
    },
    configureWebpack: {

    },
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = "通讯录管理系统";
            args[0].build = new Date().getTime();
            args[0].env = process.env.NODE_ENV;
            return args;
        })
    }
}