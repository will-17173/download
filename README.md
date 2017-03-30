# download  
* 在Chrome开发者工具里的Network面板，右键选择Save as HAR with content,另存为 har.json文件.  
运行`node download`, 资源会下载到resources目录
* 运行`node scraper http://www.17173.com 17173`, 这样会把`17173.com`的资源下载到17173目录，但是这个方式不会处理CSS和JS和延迟加载的资源。
