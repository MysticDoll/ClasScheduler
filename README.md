# ClasScheduler
東京理科大学のClassシステムを利用して時間割をiCalendar形式で取得するNode.jsのプログラムです

## Installation
### わかる人向け
```
$ git clone https://github.com/MysticDoll/ClasScheduler.git
$ cd ClasScheduler
$ mkdir config; echo module.exports = {id: "学籍番号", password: "パスワード"}; > ./config/config.js'
$ node app.js
```

### わからない人向け(Windows)
Node.js v5.0.0 移行のECMAScript2015に準拠しているNode.jsのインストールが必要です。

Node.jsをインストールし、このページのClone or Downloadからこのリポジトリをダウンロード

解凍後、configというフォルダを解凍先に作成し、

```js
module.exports = {id: "学籍番号", password: "パスワード"};
```

という内容のconfig.jsを作成し保存

解凍先を開いたエクスプローラのアドレスバーに

`node 解凍先フォルダのアドレス\app.js`

を入力しエンターを押すと、解凍先フォルダに schedule.ics ファイルが作成されます。これをGoogleカレンダーなどのiCalendar 対応スケジュールソフトなどにインポートしてください。

分からないMacの人はMac使ってるくせにターミナルの使い方もわからんのが悪いです、私は知りません(プルリクとかで教えろ)

# License
MIT License See LISENCE file
