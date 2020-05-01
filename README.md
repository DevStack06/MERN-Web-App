### Hello geeks ,I am new on the MERN stack so what I am learning during this lockdown period that I am uploading here .Anyone can take help from this reposiory and also suggest the modification .I am also new in term of writing the readme file so pardon me :smile: .

### This repository consist both backend and front end codes

Before going to code make sure to install mongoDB database on your local system :sweat_smile: .For installing mongoDB you can take help from the [Official mongoDB Ibsite](https://docs.mongodb.com/manual/installation/) .For this project I am using the [Mongoose](https://mongoosejs.com/).

Below are the some basic code for your help after installing the mongoDB.

- For starting the server
  > sudo service mongod start
- For stoping the server
  > sudo service mongod stop
- For restarting the server
  > sudo service mongod restart

**Note -:Above codes are valid for linux only.For more info you can follow the official mongoDB website or else just google it :wink:**

## **Back End Code**

Inside the backend folder all the backend code are available . This is the folder structure of backend code-:

- model
  - All Mongoose model schemas
- routes
  - All end points codes are here(routes folder)
- uploads
  - After uploading any profile picture the image will store on this folder
- index.js file (main Source file)
- middleware.js (middleware for token validation)
- config.js(helper function for middleware.js file)

**Below code will run the server on local ip and port 5000**

```javascript
app.listen(PORT, "0.0.0.0", () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

**However if you want to run the server on localhost just replace above code with the following code**

```javascript
app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
```

For executing the backend server you have to execute the following codes-:

1. For installing the all necessary npm packages-

> \$ npm install

2. Right now app is connected to the local mongoDb databse .You must start the mongoDb server before running the backend server .

   > sudo service mongod start

3. Below is the code of connecting the mongoDB with nodeJs (index.js file)-:

```javascript
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
```

**Note: You can also connect the remote mongoDb server to NodeJs app ,for the follow the official documentation**

4. Start the server by using below code

> \$ npm run dev

5. It will launch the server on [http://[Your IP address]:5000](http://localhost:5000) this url.

**Note -: Make sure you are inside the backend directory :sweat_smile:**

## **Front End Code (Not updated)**

1.The main folder is a react project you can run it by cloning this and running the below codes on terminal for instaling the all npmm packages

> \$ npm install

2.for launching the website run below code

> \$ npm start

3.It will launch the website on [http://localhost:3000](http://localhost:3000) this url.

_Note :Currently working on this project so not fully developed._

### _It is not fully developed yet_
