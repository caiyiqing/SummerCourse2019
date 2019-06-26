# 浙江大学2019年可视化暑期课程

## 作业要求

1. 实现Reducing Snapshots to Points: A Visual Analytics Approach to Dynamic Network Exploration的可视化界面，实现下图中A B D部分，并完成如下功能（共60分）：

   ![interface](./assets/interface.png)

   - 将动态图投影到A面板内
   - 点击A面板内的某个点，可以在B中展示这个点对应的一个图结构
   - 能够在D中展示上面选中的图结构的度（degree）分布
     - 度（degree）的概念，如果一个节点连着N条边，那么这个节点的度就是N
   - 完成上述功能得50分
     - 加入颜色编码，得5分
     - B视图中，网络中的边的粗细能根据其权重进行变化，得5分

3. 文章的数据集来源：[DATASET: High school dynamic contact networks](http://www.sociopatterns.org/datasets/high-school-dynamic-contact-networks/)，选择2012年的数据。

3. 我将会提供已经写好的python后端，以及已经计算好的数据。如果放弃自己完成算法部分，可以使用提供的python后端（[app.py](./app.py)）和计算好的[数据](./data.json)；

4. 阅读[Reducing Snapshots to Points: A Visual Analytics Approach to Dynamic Network Exploration](./Reducing Snapshots to Points A Visual Analytics Approach to Dynamic Network Exploration.pdf)

   理解其中的关于如何将【图】转化为【二维坐标】的算法部分，并实现该算法（推荐使用python），并接入到前端系统中

5. 【Bonus1】当然可以用其他的数据集来代替该数据，推荐数据集：

   - <http://konect.uni-koblenz.de/>
   - <http://networkrepository.com/>
   - <https://snap.stanford.edu/data/index.html>

6. 【Bonus2】实现了其他附加的功能（比如系统其他两个面板，或者其他的交互手段）

7. 最后一天（20日）上午，我们分组进行答辩



## 作业指南

0. 准备工作

     - 编辑器：[Visual Studio Code](https://code.visualstudio.com/)（推荐，可以选择其他编辑器）
     - 浏览器：Chrome（推荐，可以选择其他浏览器）
     - 版本管理+协同合作工具：[Git](https://git-scm.com/downloads)+[Github](http://github.com)（推荐，但可以不用）
     - [Node.js](https://nodejs.org/zh-cn/)，推荐安装
     - [Python](https://www.python.org/downloads/)，推荐安装，版本3，64位（请安装64位版本的python，不但会有内存问题，因为下载过慢，安装包已经在本项目内提供）

     > Windows用户在安装好Nodejs和python后，不要忘记添加环境变量哦
     >
     > python安装方法：https://www.runoob.com/python/python-install.html
     >
     > nodejs安装方法：<https://www.jianshu.com/p/2d9fa3659645>

     > 如果你没有科学上网，那么建议你在开发前进行换源；
     >
     > pip换源：[Windows](https://blog.csdn.net/Artprog/article/details/75632723)，[MacOS](https://www.jianshu.com/p/f771e1120003)
     >
     > [npm换源](https://www.jianshu.com/p/f311a3a155ff)

1. 后端开发：

   - [Pycharm](https://www.jetbrains.com/pycharm/)：python的IDE，使用ZJU邮箱可以免费注册使用

   - 你可能需要用到的库（安装时如果报错，请尝试用管理员权限：windows用户就是管理员权限打开行命令，macOS就是在命令前加上`sudo`）
     ```
     pip install networkx scipy sklearn
     ```

2. 前端开发：

   - 搭建react项目：

     `npm init react-app vis`

     等待数分钟后（会比较久），会在当前目录下创建一个名为`vis`的文件夹。

     ![1561540375095](C:\Users\Jackie\repositories\SummerCourse2019\assets\1561540375095.png)

     `cd vis`

     进入文件夹后，会发现会有很多文件生成，其中`src`文件夹内存放了代码。

     ![1561540407396](C:\Users\Jackie\repositories\SummerCourse2019\assets\1561540407396.png)

     `npm start`

     启动项目，会在浏览器中自动打开项目，当你看到如下界面时，说明成功：

     ![1561540528363](C:\Users\Jackie\repositories\SummerCourse2019\assets\1561540528363.png)

     ![1561540486764](C:\Users\Jackie\repositories\SummerCourse2019\assets\1561540486764.png)

   - 安装必要的组件

     - d3

       `npm install --save-dev d3`

     - ant design（可选，实用的框架，比如提供了按钮等组件，提供了布局）

       `npm install --save-dev antd`

       安装完成后，修改 `src/App.css`，在文件顶部引入 `antd/dist/antd.css`。

       ```css
       @import '~antd/dist/antd.css';
       
       .App {
         text-align: center;
       }
       
       ...
       ```

     - axios（可选）

       `npm install --save-dev axios`

       如果有前后端通讯，则可以实用axios用来通讯。

   - 开始开发

     

### 课程大作业要求（临时）

针对给定的数据，实现可视分析系统。能够完成以下目标：

1. 导入给定的数据

2. 用多个可视化形式来呈现数据

3. 加入必要的交互，用交互来发现数据中隐藏的模式（pattern）

4. 形成一份完整的报告。包括：

   1. 需求报告（针对这份数据，你们想出了哪些分析需求）
   2. 系统整体和各个部分的设计（功能介绍等）
   3. 一段介绍你们系统的视频
   4. 最后得到的分析结果
   5. 对自己系统的改进意见（假如给你充分的时间，你认为还能添加哪些可视化分析）




### 评分规则

最终，需要根据 编程实现（30%）、报告内容（40%）、现场答辩（30%）三块综合给分。

#### 可视化与交互

1. 方案合理：用合适的可视化图表、组件来展现对应的数据，不要误用错用；
2. 设计美观：用合适的编码来设计可视化，不要错误使用编码，整体方案以服务数据分析为主；
3. 交互丰富：让合理的交互（不要添加无意义的交互）能融入你的可视化展示中，如能使多个可视化视图（组件）进行交互联动更佳；

#### 可视分析

1. 提出的可视分析需求的有效性、多样性
2. 制定的可视分析组件能够良好应对可视分析需求
3. 最后得到的分析结果丰富、有趣（考验你的写作和演讲水平）
4. 一些发散性思考（非必须）