# Git 常用命令

作为一名开发人员，每天都要使用 Git 进行版本管理，实在是脑容量有限，虽然查资料也能找的到，但是还是需要搜索，还不如自己记录下来，想找的时候直接看文档。下图是 Git 的常用命令（包含但不限于），希望对你也有所帮助。

![Git 常用命令](./images/git.png)

上图名词解释下：

- Remote：远程仓库。
- Repository：仓库区（或本地仓库）。
- Index / Stage：暂存区。
- Workspace：工作区。

## <span class="italic">01 <br/>分支管理</span>

### 查看分支

```bash
# 查看所有本地分支
$ git branch

# 查看所有远程分支
$ git branch -r

# 查看所有本地分支和远程分支
$ git branch -a
```

### 新建分支

```bash
# 新建一个分支，但依然停留在当前分支
$ git branch branch_name

# 新建一个分支，并切换到该分支
$ git checkout -b branch_name

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track branch_name remote-branch_name
```

### 切换分支

```bash
# 切换到指定分支，前提是本地已经存在该分支。
$ git checkout branch_name

# 切换到上一个分支
$ git checkout -

# 从指定 tag 检出分支并切换
$ git checkout -b branch_name tag_name
```

### 合并分支

```bash
# 合并指定分支到当前分支
$ git merge branch_name

# 选择一个commit，合并进当前分支
$ git cherry-pick commit_id
```

### 删除分支

```bash
# 删除分支
$ git branch -d branch_name

# 删除远程分支
$ git push origin --delete branch_name
$ git branch -dr remote/branch_name
```

### 追踪分支

```bash
# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]
```

## <span class="italic">02 <br/>标签管理</span>

### 查看标签

```bash
# 查看所有 tag
$ git tag

# 查看tag信息
$ git show tag_name
```

### 新建标签

```bash
# 新建一个 tag 在当前 commit
$ git tag tag_name

# 新建一个 tag 在指定 commit
$ git tag tag_name commit_id

# 新建一个分支，指向某个 tag
$ git checkout -b branch_name tag_name
```

### 删除标签

```bash
# 删除本地 tag
$ git tag -d tag_name

# 删除远程 tag
$ git push origin :refs/tags/tag_name
```

### 提交标签

```bash
# 提交指定 tag
$ git push origin tag_name

# 提交所有 tag
$ git push origin --tags
```

## <span class="italic">03 <br/>文件管理</span>

### 增加文件

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区（含子目录）
$ git add [dir]

# 添加当前目录下的所有目录及文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p
```

### 查看文件

```bash
# 显示有变更的文件
$ git status
```

### 删除文件

```bash
# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-current]
```

## <span class="italic">04 <br/>提交管理</span>

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]
```

## <span class="italic">06 <br/>日志管理</span>

### 查看日志

```bash
# 显示指定文件是什么人在什么时间修改过
$ git blame path/xxx/xxx/file_name

# 查看指定文件相关的每一次 diff
$ git log -p -- path/xxx/xxx/file_name

# 显示当前分支的版本历史
$ git log

# 显示 commit 历史，以及每次 commit 发生变更的文件
$ git log --stat

# 查看搜索提交历史，根据关键词
$ git log -S "keyword"

# 查看某个 commit 之后的所有变动，每个 commit 占据一行
$ git log tag_name HEAD --pretty=format:%s

# 查看某个 commit 之后的所有变动，其"提交说明"必须符合搜索条件
$ git log tag_name HEAD --grep feature

# 查看过去 5 次提交
$ git log -5 --pretty --oneline

# 查看所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示某次提交的元数据和内容变化
$ git show commitid

# 显示某次提交发生变化的文件
$ git show --name-only commitid

# 显示某次提交时，某个文件的内容
$ git show commitid:file_name

# 显示当前分支的最近几次提交
$ git reflog
```

### 对比日志

```bash
# 对比暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个 commit 的差异
$ git diff --cached path/xxx/xxx/file_name

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [branch1]...[branch2]
```

### 统计日志

```bash
# 统计今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"
```

## <span class="italic">07 <br/>同步管理</span>

```bash
# 下载远程仓库的所有变动
$ git fetch --all

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show origin

# 上传本地指定分支到远程仓库
$ git push -u origin branch_name

# 强行推送当前分支到远程仓库，即使有冲突
$ git push -u origin branch_name --force
```

## <span class="italic">08 <br/>撤销管理</span>

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout file_name

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout commitid file_name

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset file_name

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset commitid

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard commitid

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep commitid

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert commitid

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

## <span class="italic">09 <br/>仓库管理</span>

### 仓库配置

```bash
# 显示当前的 Git 配置
$ git config --list

# 编辑 Git 配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

### 仓库创建

#### 初始化本地仓库绑定远程仓库

```bash
# 进入项目目录
cd /project-path

# 初始化本地仓库
$ git init

# 添加远程仓库
$ git remote add origin git@github.com:username/repo.git
```

#### 克隆远程仓库到本地

```bash
# 克隆远程仓库到本地
git clone git@github.com:username/repo.git
```

## 作者说

当然了，还是有很多好用的 Git 图形界面工具，如 SourceTree、Fork 等，这些工具能大大提高我们的开发效率，但个人觉得，命令行才是最强大的。你对 Git 命名还有什么补充、对工具还有哪些推荐，可在评论区说明，若有需要，后面可介绍 Git 图形界面工具的使用。

（完，祝好~）