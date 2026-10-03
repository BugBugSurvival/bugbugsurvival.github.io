# bugbugsurvival.github.io

个人主页，Vite 构建的纯静态站点。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:5173，改内容自动刷新
npm run build      # 输出到 dist/
npm run preview    # 本地预览 dist/
```

## 改内容

| 要改什么 | 文件 |
| --- | --- |
| 简介、链接、语言、教育/经历/报告/奖学金/服务 | `src/data/profile.js` |
| 论文列表 | `src/data/publications.js` |
| 首页 / 404 的页面结构 | `index.html`、`404.html` |
| 样式（颜色在顶部 `:root` 里） | `src/style.css` |
| 照片、PDF 等静态文件 | `public/`（原样复制到网站根目录） |

页面里的 `<!-- @sidebar -->`、`<!-- @sections -->` 这类注释会在构建时被替换成
`src/render.js` 生成的 HTML，所以最终输出是纯静态 HTML，搜索引擎能直接读到。

## 部署到 GitHub Pages

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布，
也可以在仓库的 **Actions** 页手动运行。

## 首次上线

1. **新建仓库**
   打开 <https://github.com/new>：
   - Repository name 填 `bugbugsurvival.github.io`
   - 选 **Public**（免费账号的 GitHub Pages 仓库必须公开）
   - 不要勾选 README、.gitignore、license，保持空仓库

2. **开启 GitHub Pages**
   新仓库 → **Settings** → **Pages** → **Build and deployment** → **Source** 选 **GitHub Actions**。

3. **在本地推送**

   ```bash
   cd bugbugsurvival.github.io     # 本项目所在文件夹
   git init -b main
   git add -A
   git commit -m "Initial commit"
   git remote add origin git@github.com:bugbugsurvival/bugbugsurvival.github.io.git
   git push -u origin main
   ```

   没配置 SSH 密钥的话，把地址换成 `https://github.com/bugbugsurvival/bugbugsurvival.github.io.git`。

4. **确认上线**
   仓库 **Actions** 页里的 **Deploy** 运行变绿后，打开 <https://bugbugsurvival.github.io/>。
   之后改完内容只需 `git add -A && git commit -m "..." && git push`，会自动重新部署。
