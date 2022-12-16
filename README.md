# README

## 介绍

DoubleC-plus是一款开源项目分析平台，开源项目负责人和开发者可以使用本平台分析GitHub网站上的开源项目，包括展示开源社区的开发者活跃情况和社区概况，观察项目的Pull requests的增长情况，实现项目贡献人员的信息可视化等。从而更具体地了解开源项目的发展情况并且提高工作效率。

![image-20221213204756306](https://ly-pic1.oss-cn-hangzhou.aliyuncs.com/blog/202212132047380.png)



* Feature1：查看项目贡献者的活跃程度：

  在用户进入社区情况页面后，可以查看过去一年内以月为单位的commit与Pull requests数量。

* Feature2：查看项目发展速度：

  用户可以在项目情况页面查看项目仓库创建以来贡献者的数量变化。

* Feature3：查看项目核心贡献者：

  DoubleC-plus平台会统计项目所有提交的信息，并且展示贡献量排名前十的项目核心贡献者。

* Feature4：查看与项目设计讨论相关的数据：

  DoubleC-plus平台会统计项目所有的Pull requests信息，通过分析Pull requests的label从而统计出所有与项目设计讨论相关的数据并加以展示。

* Feature5：展示项目参与人员的所属公司占比：

  DoubleC-plus平台会统计所有项目参与人员，包括项目收藏者，提交者以及问题创建者的信息，并且分析出他们所属于的公司，最终得出项目各类参与人员的公司占比。

* Feature6：横向对比Pytorch与其他项目

  用户可以在该页面选择对比的按钮，DoubleC-plus平台会获取Pytorch项目与选中的项目的总体发展情况，并以对比图的样式加以展示。



## 样例截图

我们以Pytorch项目为例展现DoubleC-plus平台的核心功能：

* 分析一年内Pytorch项目的Pull requests的增长变化：

![pull request](https://ly-pic1.oss-cn-hangzhou.aliyuncs.com/blog/202212132039794.jpg)



* 分析Pytorch项目贡献人员的company信息，包括项目提交者，项目问题提出者以及项目的收藏者：

![company](https://ly-pic1.oss-cn-hangzhou.aliyuncs.com/blog/202212131952410.jpg)



* 展示Pytorch项目贡献者排行以及他们的具体共享量：

![contribution](https://ly-pic1.oss-cn-hangzhou.aliyuncs.com/blog/202212132009569.jpg)



* 展示Pytorch项目核心贡献者的信息：

![QQ图片20221213195204](https://ly-pic1.oss-cn-hangzhou.aliyuncs.com/blog/202212132006041.jpg)



## 项目部署

你可以通过这个[指南](https://github.com/ALazyFrog/DoubleC-plus/blob/main/Install.md)获得一个更加详细的安装教程。



## 贡献

本项目由浙江大学2022-2023学年秋冬学期软件需求工程课程软需不虚小组完成，并且感谢浙江大学2021-2022学年DoubleC开发团队为我们的项目奠定基础。



## 获取方式

你可以通过我们的GitHub仓库来获取项目：https://github.com/ALazyFrog/DoubleC-plus，欢迎您的建议与贡献。



## Requirements

关于本项目的配置要求，你可以通过这个[文件](https://github.com/ALazyFrog/DoubleC-plus/blob/main/Requirements.md)获得一个完整的配置清单



## License

你可以获取通过[该文件](https://github.com/ALazyFrog/DoubleC-plus/blob/main/LICENSE)访问本项目完整的license

