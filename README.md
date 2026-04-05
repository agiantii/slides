# About

- Powered by [`slidev-workspace`](https://github.com/leochiu-a/slidev-workspace)
- slidev-theme-frankfurt-red 改自 [slidev-theme-frankfurt](https://github.com/MuTsunTsai/slidev-theme-frankfurt)
## 📦 Demo

Check out the live demo: https://leochiu-a.github.io/slidev-workspace-starter/

docs:[docs](https://leochiu-a.github.io/slidev-workspace/)
## note

### pnpm build 
  - pnpm build 构建所有 slides/*
  - pnpm build project-1
    - 构建 slides/project-1 并修改 ./dist/ 中项目的链接
### cover
```
my-slides/
├── presentations/
│   ├── react-fundamentals/
│   │   ├── slides.md          ← Your slide file
│   │   └── og-image.png       ← Cover image (automatically used!)
│   └── vue-guide/
│       ├── slides.md
│       └── og-image.png       ← Each slide can have its own cover

```