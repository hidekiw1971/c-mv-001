# compornent（共通部品）

## イメージ画像
<img width="400" alt="image" src="https://user-images.githubusercontent.com/99580997/159159224-786d0f54-47e4-4502-8875-20dca947fadd.png">
<img width="781" alt="image" src="https://user-images.githubusercontent.com/99580997/159159245-85f520c2-aa5b-443c-86c3-da55b66e9cda.png">
<img width="877" alt="image" src="https://user-images.githubusercontent.com/99580997/159159256-18279780-3c35-4e30-95c9-5c143322dc8f.png">

## 概要

- mv(swiper(zoom,fadein/out)、画像に擬似要素でマスク)
- 模擬案件

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- 

## 注意事項

- swiperの画像に擬似要素でマスクする場合、`_swiper.scss`に以下を追加して対応する。
- html
- `<div class="swiper-slide">`
-   `<div class="slide-img">`
-   `<img src="images/FyD3OWBuXnY3@2x.png" alt="img3">`
-   `</div>`
- `</div>`
- css
- `.slide-img {`
-   `position: absolute;`
-   `content: "";`
-   `background-color: rgba(17, 17, 17, 0.2);`
-   `width: 100%;`
-   `height: 100%;`
-  `}`


## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> mv をコピペ。

## w3c html チェック結果

- https://validator.w3.org/nu/
- <img width="1022" alt="image" src="https://user-images.githubusercontent.com/99580997/159159271-28967058-ab6f-44a9-8fa6-28c94da8df3f.png">

## w3c css チェック結果

- https://jigsaw.w3.org/css-validator/
<img width="1341" alt="image" src="https://user-images.githubusercontent.com/99580997/159159294-2b4b5285-cf79-45fe-a142-d8652f0704e8.png">

## portfolio url:

- https://c-0029.wtb.cfbx.jp/

## 参考にしたサイト

- 疑似要素を使って背景を任意の色で透過させながら覆う（マスクさせる）CSS
- https://haniwaman.com/parts/post-10462/
- 「コピペ」で簡単！Web パーツ屋
- https://haniwaman.com/parts/
- 擬似要素タグ before と after を活用しよう！基礎知識と使い方を解説！
- https://tinyurl.com/yagoyr9n

## 更新履歴

- 2022/3/20 初版 作成完了
- 2022/3/20 初版 作成中(スライド画像にフィルター掛けて終了)

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
