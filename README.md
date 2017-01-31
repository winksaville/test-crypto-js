# Test crypto-js

Prerequesites:
```
node
yarn
yarn global install webpack@2
yarn global install webpack-dev-server@2
chromium
```

Clone and install modules:
```
git clone https://github.com/winksaville/test-crypto-js.git
cd test-crypto-js
yarn install
```

In another terminal build and start the webpack-dev-server:
```
yarn run bs
```

Finally start the client in a chromium browser change client script
in package.json if you have a different browser:
```
yarn run client
```
