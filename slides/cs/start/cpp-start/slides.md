---
theme: default
title: C++ 第一课 - 入门基础
info: |
  ## C++ 程序设计入门
  
  第一讲：C++基础概念与语法
class: text-center
transition: slide-left
drawings:
  persist: false
comark: true
duration: 45min
---

# C++ 程序设计

## 第一课：入门基础

<div class="mt-12">
  <p class="text-xl opacity-80">从零开始学习 C++ 编程</p>
</div>

<div @click="$slidev.nav.next" class="mt-16 py-2 text-lg" hover:bg="white op-10">
  按空格键进入下一页 <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="在编辑器中打开" class="slidev-icon-btn">
    <carbon:edit />
  </button>
</div>

---
transition: fade-out
---

# 课程大纲

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 基础概念
- 📝 什么是 C++？
- 🔧 开发环境搭建
- 📄 第一个程序
- 💡 基本语法结构

</div>

<div>

### 核心内容
- 🔤 变量与数据类型
- ⌨️ 输入与输出
- 🔢 运算符
- 🎯 控制流程

</div>

</div>

---
level: 2
---

# 什么是 C++？

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### 语言特点

- 🚀 **高效性能** - 接近硬件的执行效率
- 🎮 **广泛应用** - 游戏、系统软件、嵌入式
- 🏗️ **面向对象** - 支持封装、继承、多态
- 🔄 **兼容 C** - 可以无缝使用 C 语言代码

</div>

<div v-click>

### 应用领域

- 操作系统（Windows, Linux）
- 游戏引擎（Unreal Engine）
- 数据库系统（MySQL, MongoDB）
- 浏览器引擎（Chrome V8）
- 编译器与解释器

</div>

</div>

<!--
C++ 是由 Bjarne Stroustrup 在 1979 年开始开发的
最初称为 "C with Classes"，1983 年正式命名为 C++

[click] C++ 结合了高级语言的抽象能力和低级语言的控制能力
-->

---
layout: two-cols
---

# 开发环境

### 推荐工具

- **编译器**: GCC / Clang / MSVC
- **IDE**: 
  - Visual Studio (Windows)
  - CLion (跨平台)
  - Code::Blocks (轻量级)
- **编辑器**: VS Code + 插件

::right::

<div v-click>

### 安装步骤

1. 下载并安装编译器
2. 配置环境变量
3. 验证安装

```bash
g++ --version
```

4. 选择适合的 IDE 或编辑器
5. 创建第一个项目

</div>

---
layout: center
---

# 第一个 C++ 程序

<div class="text-6xl font-mono mt-8">

Hello, World!

</div>

---
---

# Hello World 程序

```cpp {all|1|3|5-9|11|all}
// 我的第一个 C++ 程序
#include <iostream>

using namespace std;

int main() {
    // 输出文本到控制台
    cout << "Hello, World!" << endl;
    
    return 0;
}
```

<v-click>

### 程序解析

1. `#include <iostream>` - 引入输入输出库
2. `using namespace std;` - 使用标准命名空间
3. `int main()` - 主函数入口
4. `cout << ...` - 输出语句
5. `return 0;` - 程序正常结束

</v-click>

<!--
[click] 这是预处理指令，告诉编译器包含 iostream 头文件

[click] 这行让我们可以直接使用 cout、cin 等，而不需要写 std::cout

[click] 每个 C++ 程序都必须有一个 main 函数，它是程序的入口点

[click] cout 是标准输出流，<< 是流插入运算符

[click] 返回 0 表示程序成功执行
-->

---
level: 2
---

# 编译和运行

### 编译过程

```bash
# 1. 编译源文件
g++ hello.cpp -o hello

# 2. 运行可执行文件
./hello          # Linux/Mac
hello.exe        # Windows
```

<div v-click class="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">

### 输出结果

```
Hello, World!
```

</div>

<!--
编译过程包括四个阶段：
1. 预处理 - 处理 #include 等预处理指令
2. 编译 - 将源代码转换为汇编代码
3. 汇编 - 将汇编代码转换为目标代码
4. 链接 - 将目标代码与库文件链接生成可执行文件
-->

---
---

# 基本语法结构

```cpp
// 单行注释

/*
  多行注释
  可以写多行
*/

#include <iostream>           // 预处理指令
using namespace std;          // 命名空间声明

int main() {                  // 主函数
    // 语句以分号结尾
    cout << "Hello!" << endl;
    
    return 0;                 // 返回值
}
```

<div class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div v-click>

### 关键点

✅ 每条语句以 `;` 结尾  
✅ 区分大小写  
✅ 代码块用 `{}` 包裹  
✅ 注释提高可读性  

</div>

<div v-click>

### 常见错误

❌ 忘记分号  
❌ 拼写错误  
❌ 括号不匹配  
❌ 中文标点符号  

</div>

</div>

---
layout: two-cols-header
---

# 变量与数据类型

::left::

### 基本数据类型

| 类型 | 大小 | 范围 |
|------|------|------|
| `int` | 4字节 | ±2×10⁹ |
| `float` | 4字节 | 7位精度 |
| `double` | 8字节 | 15位精度 |
| `char` | 1字节 | 单个字符 |
| `bool` | 1字节 | true/false |

::right::

<div v-click>

### 变量声明

```cpp
// 声明并初始化
int age = 20;
double price = 99.99;
char grade = 'A';
bool isPassed = true;

// 先声明后赋值
int score;
score = 95;

// 常量声明
const double PI = 3.14159;
```

</div>

<!--
[click] C++ 是强类型语言，使用前必须声明类型
[click] const 修饰的变量不能被修改
-->

---
---

# 变量的命名规则

<div class="grid grid-cols-2 gap-8">

<div>

### ✅ 合法命名

```cpp
int age;
double totalScore;
char _grade;
bool is_valid;
string userName;
```

</div>

<div v-click>

### ❌ 非法命名

```cpp
int 2age;        // 不能以数字开头
double class;    // 不能使用关键字
char my-grade;   // 不能有连字符
bool user name;  // 不能有空格
```

</div>

</div>

<div v-click class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded">

### 命名规范建议

- 使用有意义的名称
- 采用驼峰命名法 (`camelCase`) 或下划线命名法 (`snake_case`)
- 避免使用单个字母（循环变量除外）
- 常量使用全大写 (`MAX_SIZE`)

</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800
---

# 输入与输出

### 标准输出 (cout)

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "年龄: " << 20 << endl;
    
    return 0;
}
```

### 标准输入 (cin)

```cpp
int age;
cout << "请输入年龄: ";
cin >> age;
cout << "你的年龄是: " << age << endl;
```

<div v-click class="mt-4">

### 常用操作符

- `<<` 流插入运算符（输出）
- `>>` 流提取运算符（输入）
- `endl` 换行并刷新缓冲区
- `\n` 换行符

</div>

<!--
[click] cin 会等待用户输入并按回车键
[click] 可以连续输入多个值：cin >> a >> b >> c;
-->

---


# 综合示例：个人信息录入

```cpp 
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    double height;
    
    cout << "=== 个人信息录入 ===" << endl;
    
    cout << "请输入姓名: ";
    cin >> name;
    
    cout << "请输入年龄: ";
    cin >> age;
    
    cout << "请输入身高(米): ";
    cin >> height;
    
    cout << "\n=== 信息确认 ===" << endl;
    cout << "姓名: " << name << endl;
    cout << "年龄: " << age << " 岁" << endl;
    cout << "身高: " << height << " 米" << endl;
    
    return 0;
}
```

---
level: 2
---

# 运算符

<div class="grid grid-cols-3 gap-4 text-sm">

<div>

### 算术运算符

| 运算符 | 说明 |
|--------|------|
| `+` | 加法 |
| `-` | 减法 |
| `*` | 乘法 |
| `/` | 除法 |
| `%` | 取模 |

</div>

<div>

### 关系运算符

| 运算符 | 说明 |
|--------|------|
| `==` | 等于 |
| `!=` | 不等于 |
| `>` | 大于 |
| `<` | 小于 |
| `>=` | 大于等于 |
| `<=` | 小于等于 |

</div>

<div>

### 逻辑运算符

| 运算符 | 说明 |
|--------|------|
| `&&` | 逻辑与 |
| `\|\|` | 逻辑或 |
| `!` | 逻辑非 |

</div>

</div>

<div v-click class="mt-6">

### 赋值运算符

```cpp
int a = 10;
a += 5;   // a = a + 5
a -= 3;   // a = a - 3
a *= 2;   // a = a * 2
a /= 4;   // a = a / 4
```

</div>

---
---

# 类型转换

<div class="grid grid-cols-2 gap-8">

<div>

### 隐式转换

```cpp
int a = 10;
double b = a;  // int → double

char c = 'A';
int d = c;     // char → int (65)
```

</div>

<div v-click>

### 显式转换

```cpp
double x = 9.7;

// C 风格转换
int y = (int)x;      // y = 9

// C++ 风格转换
int z = static_cast<int>(x);  // z = 9
```

</div>

</div>

<div v-click class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded border-l-4 border-yellow-400">

### ⚠️ 注意事项

- 浮点数转整数会**丢失小数部分**
- 大数转小数可能**溢出**
- 建议使用 `static_cast` 提高代码可读性

</div>

---
layout: two-cols
---

# if 条件语句

### 基本语法

```cpp
if (条件) {
    // 条件为真时执行
} else if (条件2) {
    // 条件2为真时执行
} else {
    // 以上都不满足时执行
}
```

::right::

<div v-click>

### 实例：成绩评级

```cpp
int score = 85;

if (score >= 90) {
    cout << "优秀" << endl;
} else if (score >= 80) {
    cout << "良好" << endl;
} else if (score >= 60) {
    cout << "及格" << endl;
} else {
    cout << "不及格" << endl;
}
```

输出：`良好`

</div>

<!--
[click] else if 和 else 是可选的
[click] 条件表达式结果为 bool 类型
-->

---
---

# switch 语句

```cpp
int day = 3;

switch (day) {
    case 1:
        cout << "星期一" << endl;
        break;
    case 2:
        cout << "星期二" << endl;
        break;
    case 3:
        cout << "星期三" << endl;
        break;
    case 4:
    case 5:
        cout << "工作日" << endl;
        break;
    default:
        cout << "周末" << endl;
        break;
}
```

<div v-click class="mt-6 grid grid-cols-2 gap-4 text-sm">

<div>

### 要点

✅ 每个 case 后要加 `break`  
✅ 可以有多个 case 共用代码  
✅ `default` 处理默认情况  

</div>

<div>

### 适用场景

- 多分支选择
- 枚举值判断
- 菜单选择
- 状态机

</div>

</div>

<!--
[click] 忘记 break 会导致"穿透"现象
[click] default 不是必须的，但建议使用
-->

---
---

# for 循环

### 语法结构

```cpp
for (初始化; 条件; 更新) {
    // 循环体
}
```

### 示例

```cpp
// 输出 1 到 10
for (int i = 1; i <= 10; i++) {
    cout << i << " ";
}
// 输出: 1 2 3 4 5 6 7 8 9 10

// 计算 1 到 100 的和
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << "总和: " << sum << endl;  // 5050
```

<div v-click class="mt-4">

### 执行流程

1. 执行**初始化**（仅一次）
2. 检查**条件**，为假则退出
3. 执行**循环体**
4. 执行**更新**
5. 回到步骤 2

</div>

---
---

# while 和 do-while 循环

<div class="grid grid-cols-2 gap-6">

<div>

### while 循环

```cpp
// 当条件为真时循环
int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}
// 输出: 1 2 3 4 5
```

**特点**: 先判断，后执行

</div>

<div v-click>

### do-while 循环

```cpp
// 至少执行一次
int num;
do {
    cout << "请输入正数: ";
    cin >> num;
} while (num <= 0);

cout << "你输入了: " << num << endl;
```

**特点**: 先执行，后判断

</div>

</div>

<div v-click class="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded">

### 循环控制

- `break` - 立即退出循环
- `continue` - 跳过本次循环，进入下一次
- 注意避免**死循环**

</div>

---
layout: center
class: text-center
---

# 实践练习

<div class="text-6xl mb-8">💻</div>

## 编写一个简单的计算器程序

要求：
- 接收两个数字输入
- 支持加减乘除四种运算
- 输出计算结果

<div class="mt-12 text-lg opacity-70">
给你 5 分钟时间尝试编写
</div>

---
---

# 参考答案：简单计算器

```cpp 
#include <iostream>
using namespace std;

int main() {
    double num1, num2, result;
    char operation;
    
    cout << "=== 简单计算器 ===" << endl;
    cout << "请输入第一个数: ";
    cin >> num1;
    
    cout << "请输入运算符 (+, -, *, /): ";
    cin >> operation;
    
    cout << "请输入第二个数: ";
    cin >> num2;
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                cout << "错误: 除数不能为零!" << endl;
                return 1;
            }
            break;
        default:
            cout << "错误: 无效的运算符!" << endl;
            return 1;
    }
    
    cout << "结果: " << num1 << " " << operation << " " 
         << num2 << " = " << result << endl;
    
    return 0;
}
```

---
---

# 常见错误与调试

<div class="grid grid-cols-2 gap-6">

<div>

### 编译错误

```cpp
// ❌ 缺少分号
int a = 10

// ❌ 未声明变量
cout << b << endl;

// ❌ 类型不匹配
string name = 123;
```

</div>

<div v-click>

### 运行时错误

```cpp
// ❌ 除以零
int result = 10 / 0;

// ❌ 数组越界
int arr[5];
arr[10] = 100;

// ❌ 无限循环
while (true) {
    // 没有退出条件
}
```

</div>

</div>

<div v-click class="mt-6 p-4 bg-purple-50 dark:bg-purple-900 rounded">

### 调试技巧

🔍 仔细阅读错误信息  
🔍 使用 `cout` 输出中间变量  
🔍 逐步缩小问题范围  
🔍 善用 IDE 的调试工具  

</div>

---
level: 2
---

# 最佳实践

<div class="space-y-4">

<div v-click>

### 1. 代码规范

- 使用一致的缩进（推荐 4 空格）
- 变量命名要有意义
- 添加必要的注释

</div>

<div v-click>

### 2. 安全意识

- 检查用户输入的合法性
- 避免除以零
- 防止数据溢出

</div>

<div v-click>

### 3. 代码优化

- 避免重复代码
- 选择合适的算法
- 及时释放资源

</div>

<div v-click>

### 4. 学习方法

- 多动手实践
- 阅读优秀代码
- 参与开源项目
- 持续学习新知识

</div>

</div>

---
---

# 学习资源

<div class="grid grid-cols-2 gap-6">

<div>

### 📚 推荐书籍

- 《C++ Primer》
- 《Effective C++》
- 《C++ 程序设计语言》
- 《深入理解 C++11》

</div>

<div>

### 🌐 在线资源

- [cppreference.com](https://en.cppreference.com/)
- [LearnCPP.com](https://www.learncpp.com/)
- [Stack Overflow](https://stackoverflow.com/)
- GitHub 开源项目

</div>

</div>

<div v-click class="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg">

### 下一步学习计划

1. 数组与字符串
2. 函数与模块化
3. 指针与引用
4. 结构与类
5. 面向对象编程

</div>

---
layout: center
class: text-center
---

# 总结

<div class="text-6xl mb-8">🎉</div>

## 本课要点回顾

<div class="grid grid-cols-3 gap-4 mt-8 text-left max-w-4xl mx-auto">

<div v-click>
✅ C++ 基本概念  
✅ 开发环境搭建  
✅ Hello World 程序  
</div>

<div v-click>
✅ 变量与数据类型  
✅ 输入输出操作  
✅ 运算符使用  
</div>

<div v-click>
✅ 条件语句  
✅ 循环结构  
✅ 调试技巧  
</div>

</div>

<div v-click class="mt-12 text-xl">
继续练习，熟能生巧！
</div>

---
layout: end
class: text-center
---

# 谢谢观看

<div class="text-6xl mb-8">👋</div>

<p class="text-xl opacity-80">下节课见！</p>

<div class="mt-12 text-lg">
有任何问题欢迎提问
</div>

<div class="abs-br m-6">
  <PoweredBySlidev />
</div>
