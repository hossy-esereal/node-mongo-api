FROM node:12
# アプリケーションディレクトリを作成
WORKDIR /app
# アプリケーションの依存関係をインストール
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm install
# 本番用
# RUN npm install --only=production

COPY . .

EXPOSE 3000
CMD [ "node", "src/server.js" ]
