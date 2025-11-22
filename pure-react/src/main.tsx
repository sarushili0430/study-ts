import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.tsx";

/*
ここで行っていること：
- Reactアプリケーションのエントリーポイントを設定
> creatRootでは、HTMLの特定の要素にReactコンポーネントをレンダリングするためのルートを作成
(これはReactがここを起点として仮想DOMを管理するために必要である)
- StrictModeコンポーネントでアプリ全体をラップしている
> これにより開発者モードでチェックするときにいろんなメトリクスが有効になる
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
