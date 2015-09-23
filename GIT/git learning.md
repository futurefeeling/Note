### 一. 版本回退
1. HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
2. 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
3. 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

### 二. 添加远程仓库
1. 要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；
2. 关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；
3. 此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；

### 三. 创建合并分支
1. 查看分支：`git branch`
2. 创建分支：`git branch <name>`
3. 切换分支：`git checkout <name>`
4. 创建+切换分支：`git checkout -b <name>`
5. 合并某分支到当前分支：`git merge <name>`
6. 删除分支：`git branch -d <name>`

### 四. 分支合并冲突 
1. 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
2. 用`git log --graph`命令可以看到分支合并图。

### 五. 分支合并新方式
1. 合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并

### 六. bug 分支
1. 修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；
2. 当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场。

### 七. feather 分支
1. 开发一个新feature，最好新建一个分支；
2. 如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

### 八. 多人协作
多人协作的工作模式通常是这样：

1. 首先，可以试图用`git push origin branch-name`推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！
5. 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream branch-name origin/branch-name`。
6. 这就是多人协作的工作模式，一旦熟悉了，就非常简单。

> 总结：

1. 查看远程库信息，使用`git remote -v`；
2. 本地新建的分支如果不推送到远程，对其他人就是不可见的；
3. 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
4. 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
5. 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
6. 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

### 九. 多用 fetch ＋ merge， 少用 pull

1. `git fetch origin develop:branch1`:将远程的`develop`分支的最新修改更新到本地的`branch1`分支上，若`branch1`分支不存在，则自动创建。
2. `git diff branch1`:查看差异
3. `git merge --no-ff -m "some comment" branch1`:合并分支`branch1`

`pull = fetch + merge`,但是`pull`忽略了很多细节。