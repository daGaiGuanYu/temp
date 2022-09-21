[原问题链接](https://cnodejs.org/topic/6329c923d3061f0b7ce876d1#6329eea1d3061f3527e876ff)

问题复现：
``` bash
# 克隆仓库
git clone git@github.com:daGaiGuanYu/temp.git
# 拉远程仓库
git fetch origin knex-rollup
# 切换分支
git checkout knex-rollup
# 打包
npx rollup -c
```

可以看到，[打包后的文件](https://raw.githubusercontent.com/daGaiGuanYu/temp/knex-rollup/dist.js) ```dist.js``` 里第 13 行就有 ```require('sqlite3')```

感谢各位道友的帮助！
