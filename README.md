# SPA のデモアプリ

https://user-images.githubusercontent.com/73118731/116557608-8e444180-a939-11eb-93c5-4735266cb263.mov

## 実行手順

**前提：git、docker、docker-compose をインストールしていること**

- git から spa-demo-app をクローン
  - 以下のコマンドを実行
  ```
  git clone -b crud-sample https://github.com/ynportfolios/spa-demo-app.git
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
