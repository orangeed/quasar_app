//数据库配置
const database = {
    dialect: "mysql", //数据库类型
    database: "gqj", //数据库名字
    username: "root", //数据库账号
    password: process.env.NODE_ENV === "production" ? "wing" : "123456", // 生产环境需要修改
    host: "localhost", //数据库地址
    port: "3306", //数据库端口号
    pool: { //连接池设置
        max: 20, //最大连接数量
        min: 0, //最小连接数量
        idle: 30000, //断开连接后，连接实例在连接池保持的时间
        acquire: 60000, //请求超时时间
    },
    logging: false //阻止sequelize输出到控制台
}

// 服务器配置
const server = {
    port: 8848,
    ip: process.env.NODE_ENV === "production" ? "" : "192.168.43.235",
};

module.exports = {
    database,
    server
}