#[LitElement、使い方のキホン](https://app.codegrid.net/series/2020-litelement)

//シリーズ名とそのシリーズリンクを書きます。

[CodeGrid](http://www.codegrid.net/)の「[LitElement、使い方のキホン](https://app.codegrid.net/series/2020-litelement)」の記事内で使用しているサンプルです。

各サンプルの解説については上記記事をご確認ください。

## 動作環境

以下の環境で動作を確認しています。

- Node.js v14.4.0
- npm 6.14.4

## サンプルの使い方

リポジトリをクローンしたら、それぞれのディレクトリでパッケージをインストールしてください。

```sh
$ git clone git@github.com:codegrid/2020-litelement.git
$ cd 1
$ npm install
```

### `1/`

LitElementのビルドを、Polymer CLIとWebpackを使って試すことができます。

次のコマンドを実行すると、`js/`ディレクトリをビルドして、サーバーが起動します。ブラウザで`http://localhost:3000/`にアクセスすると、デモを確認することができます。ビルド及びサーバーの起動には、[Polymer CLI](https://polymer-jp.org/2.0/docs/tools/polymer-cli)を使ってビルドします。

```sh
$ npm run start:js
```

次のコマンドを実行すると、`ts/`ディレクトリをビルドして、サーバーが起動します。ブラウザで`http://localhost:3000/`にアクセスすると、デモを確認することができます。ビルドおよびサーバーの起動には、[Webpack](https://webpack.js.org/)を使ってビルドします。

```sh
$ npm run start:ts
```

### `2/`

記事中に登場する、lit-htmlのサンプルコードをデモとして実行します。

次のコマンドを実行すると、サーバーが起動します。ブラウザで`http://localhost:3000/`にアクセスすると、デモを確認することができます。 ビルドおよびサーバーの起動には、[parcel](https://ja.parceljs.org/)を使っています。

```sh
$ npm start
```

ディレクトリの内容は、次のとおりです。

```
|- src
    |- index.html  // エントリポイントとなるHTML
    |- index.js  // 記事中のサンプルコード
```

