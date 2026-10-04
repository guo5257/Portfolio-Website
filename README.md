# TIAN 作品集骨架

React + Tailwind CSS + Vite 的静态作品集。包含首屏视频、个人介绍、四张精选作品轮播、瀑布流作品、图片放大预览和联系方式。

## 本地运行

```bash
npm install
npm run dev
```

## 替换内容

- 首屏视频：把 `d.mp4` 放入 `public/`。目前未提供视频时会显示深色背景。
- 个人照片：替换 `src/App.jsx` 中的 `portrait-placeholder`。
- 作品图片：四张精选作品图片已放入 `public/images/`；后续增删轮播图或填充其他作品时，在 `src/data.js` 修改路径、标题和纵横比。
- 联系方式：替换 `src/App.jsx` 中 Contact 组件的占位文字和二维码区域。

前 3 屏使用一滑一屏；第 4、5 屏正常滚动。桌面作品瀑布流为 4 列，手机为 2 列。
