# vue3Practice
vue3.0 学习

# 查看版本
$ npm -v  //2.3.0

# 升级 npm
cnpm install npm -g

# 1. 升级或安装 cnpm
npm install cnpm -g

# 最新稳定版
$ cnpm install vue@next


1.第一种方式使用官方的vue-cli脚手架升级
# 全局安装 vue-cli
yarn global add @vue/cli
# 或
cnpm install -g @vue/cli  (2.0版本升级到3.0版本)

# 2. 如果已经安装过的可以升级一下版本
npm update -g @vue/cli
or
yarn global upgrade --latest @vue/cli


# 接下来我们创建 runoob-vue3-app 项目
vue create runoob-vue3-app
cd runoob-vue3-app // 进去之后
yarn serve or npm run serve

# 如果你创建的项目是默认选择的2.0版本, 按下边的操作就可以
yarn add vue-next // add vue-next 会自动升级到vue3的版本

2.第二种方式使用vite安装，这个也是尤大的力作 vite github 地址
// 首先我们需要先把vite代码clone到本地
git clone https://github.com/vitejs/vite.gi

cd vite // 进入文件

yarn // 开始安装依赖

yarn build // 打包

yarn link

ps: 开始创建你的项目

yarn create vite-app project-name
cd project-name
yarn
yarn dev

完成上述操作就可以开始愉快的体验vue3.0了

学习步骤：
vue3的composition API的简单介绍和使用 compositon API 使用官方手册
1.首先先来认识一下composition API:

important: {
    createApp,             //顾名思义，创建一个App实例
    onMounted,             // 像之前的mounted 一样， 只是写法有些不同
    computed，             //写法变了
    watch,                // 写法有些差异
    watchEffect,          // 新增的watchEffect，立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行改函数
    reative,              //传入一个普通对象返回一个响应式对象
    ref,                  //接受一个参数值并返回一个响应式且可改变的 ref 对象。 ref对象拥有一个指向内布置的单一属性，value
    toRef,                //可以用来为一个reactive 对象的属性创建一个ref 
    toRefs,               // 把一个响应式对象转成普通对象，转换之后可以使用。 。。解构出来
    nextTick
} from 'vue'
 