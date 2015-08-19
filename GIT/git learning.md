### 版本回退
1. HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
2. 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
3. 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

### 添加远程仓库
1. 要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；
2. 关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；
3. 此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；