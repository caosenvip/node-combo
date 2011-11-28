/**
 * @author fuqiang[designsor@gmail.com]
 * @version 20111127
 * @desprition 入口server文件
 */

var deps = require('./requires.js');

deps.GlobalInit();
deps.CustomInit();

var host=config.list.host,
    port=config.list.port,
    server=http.createServer(handle.run);
    
server.listen(port);
console.log('server on '+port);