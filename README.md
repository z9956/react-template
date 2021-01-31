> 语法支持

1.可选链操作符、空值合并操作符[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE)

@babel/plugin-proposal-nullish-coalescing-operator
@babel/plugin-proposal-optional-chaining

> 代码规范

1. git commit 规范化: [commitlint](https://commitlint.js.org/#/)
2. git 提交钩子辅助工具: [husky](https://github.com/typicode/husky#readme)
3. 代码格式化: [prettier](https://prettier.io/), [pretty-quick](https://github.com/azz/pretty-quick#readme)

> commitlint 相关规范

```
  build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
  ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
  chore：不属于以上类型的其他类型
  docs：文档更新
  feat：新增功能
  fix：bug 修复
  perf：性能, 体验优化
  refactor：重构代码(既没有新增功能，也没有修复 bug)
  style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
  test：新增测试用例或是更新现有测试
  revert：回滚某个更早之前的提交
```