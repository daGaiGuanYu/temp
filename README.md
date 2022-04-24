https://stackoverflow.com/questions/71985560/what-should-i-do-if-the-node-version-is-different-when-developing-vscode-plugin

Plugin runs in vscode's node runtime.  
But I develop plugin in another node runtime.  
And some dependencies has different release version(built version?) on different node runtime(e.g. better-sqlite3).  
So there will be error like:  

```
...\node_modules\better-sqlite3\build\Release\better_sqlite3.node
was compiled against a different Node.js version using
NODE_MODULE_VERSION 93. This version of Node.js requires
NODE_MODULE_VERSION 101.
How can I do.
```

my node version: v16.14.0  
my vscode version: 1.66.2  
my system: win10  

![error in vscode](https://raw.githubusercontent.com/daGaiGuanYu/temp/vscode20220424/err_in_vscode.png)
![out of vscode](https://raw.githubusercontent.com/daGaiGuanYu/temp/vscode20220424/out_of_vscode.png)
