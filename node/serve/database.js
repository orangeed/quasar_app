const Sequelize = require("sequelize");
const config = require("./config.js");
const DataType = require("sequelize/lib/data-types.js");

const sequelize = new Sequelize(config.database);
sequelize.authenticate()
    .then(() => {
        console.log("连接建立成功");
        resolve();
    })
    .catch(err => {
        reject();
        throw new Error(`无法连接数据库:${err.message}`);
    });
// (async () =>{
//   try {
//     await database.authenticate();
//     console.log('连接已成功建立。');
//     // const queryInterface = await sequelize.getQueryInterface()
//     // const tableNameList = await queryInterface.showAllSchemas();
//     // for (let i = 0; i < tableNameList.length; i++) {
//     //   const element = tableNameList[i];
//     //   console.log(await queryInterface.describeTable(element.name));
//     // }
//   } catch (error) {
//     console.error('无法连接到数据库：', error);
//   }
// })()
module.exports = {
    sequelize,
    DataType,
    Sequelize
}