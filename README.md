# SPA のデモアプリ

![spa-demo-app](https://user-images.githubusercontent.com/73118731/116396540-7baa0980-a860-11eb-82d0-e5cff80b45f5.gif)

## 実行手順

**前提：git、docker、docker-compose をインストールしていること**

- git から spa-demo-app をクローン
  - 以下のコマンドを実行
  ```
  git clone https://github.com/ynportfolios/spa-demo-app.git
  ```
- spa-demo-app フォルダに移動
  - 以下のコマンドを実行
  ```
  cd spa-demo-app
  ```
- docker コンテナ（api・front・db）を起動
  - 以下のコマンドを実行
  ```
  docker-compose up --build -d
  ```
- docker コンテナ（api）に入る
  - 以下のコマンドを実行
  ```
  docker-compose exec api bash
  ```
- データベースの作成
  - 以下のコマンドを実行
  ```
  rails db:create
  ```
- マイグレーションを実行
  - 以下のコマンドを実行
  ```
  rails db:migrate
  ```
- seed データの投入
  - 以下のコマンドを実行
  ```
  rails db:seed
  ```
- サーバーの実行
  - 以下のコマンドを実行
  ```
  rails s -b 0.0.0.0
  ```
- 別タブを開き docker コンテナ（front）に入る
  - 以下のコマンドを実行
  ```
  docker-compose exec front sh
  ```
- サーバーの実行・アクセス
  - 以下のコマンドを実行
  ```
  npm install
  npm start
  ```
  - ブラウザで localhost:8000 にアクセス
