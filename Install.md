# INSTALL

## 1. Clone our repo

clone our remote [repo](https://github.com/ALazyFrog/DoubleC-plus) to your own computer first

```bash
git clone https://github.com/ALazyFrog/DoubleC-plus.git
```

## 2. Install MongoDB and MongoDBCompass

MongoDB is the database we use in this project, you can download it's installer [here](https://www.mongodb.com/try/download/community-kubernetes-operator). Remember to choose version 6.0.3 for windows.

![image-20221213172340266](https://suonan-image.oss-cn-hangzhou.aliyuncs.com/img/image-20221213172340266.png)

After download, follow [this](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) document to install it.

## 3. Install nodejs

Download  [nodejs installer](https://nodejs.org/en/) and install it.

use these 2 instruction in your windows powershell or cmd to check if you have successfully installed nodejs.

![image-20221213181111085](https://suonan-image.oss-cn-hangzhou.aliyuncs.com/img/image-20221213181111085.png)

## 4. Install all dependencies

Install our project dependencies by following 3 instruction:

```bash
npm run install-dependencies
npm install nodemon
npm install react-scripts
```

## 5. Run project

Run our project by following instructions:

```bash
npm run server
# Open another Terminal
npm run client
# the Web App would run on "localhost:3000"
```

## 6. Unexpected situation

if the web failed to complie after you run the instruction below

```bash
npm run client
```

![image-20221213182413282](https://suonan-image.oss-cn-hangzhou.aliyuncs.com/img/image-20221213182413282.png)

you can use open Double-C folder with your vscode and open `package.json`  and do nothing but `Ctrl+S`.

And then run the project again, this problem should be gone.