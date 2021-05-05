first install
#npm install gh-pages --save-dev

Deploying Create-React-App with Json-Server as backend to Github
#deploy #github #jsonserver #createreactapp
nikita_guliaev profile image
Nikita Guliaev🧩
Aug 19, 2020 ・2 min read
If you are reading this article I’m assuming you already have the following done:

Create a project using Create-React-App;
You are using Json-Server & have a db.json file that you are using as a fake REST API for quick prototyping;
Your application is working in your local environment;
Your app has a repo on GitHub
Now you want to deploy your app to GitHub so you could share the link with someone. Here is a step by step process to do that.

Step 1:
Got to Json-Server page and follow the instructions:

Create a separate repo on GitHub;

Upload your db.json file there;

Go to https://my-json-server.typicode.com/<your-github-username>/<your-repo-name> to access your server.

https://my-json-server.typicode.com/avinash-dewangan/json-server

Step 2:
Deploy your application to GitHub following the usual process:

Add a “Homepage” property to your package.json file: e.g. http://<github-username>.github.io/<repo-name> so it it looks like that:
Alt Text

package.json add
{
"name": "react-redux-shopping-cart-app",
"homepage": "https://avinash-dewangan.github.io/react-redux-shopping-cart-app",
"version": "0.1.0",
"private": true,

}

Add to your existing “Scripts” property 2 new properties - predeploy & deploy:
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
As shown down below:

Alt Text

Run the following commands in your terminal subsequently:
npm run build
npm run deploy
Almost done. Keep in mind that it may take a moment for Github to upload and build your app.

Step 3:
Go to your app’s repo and open Settings. In the GitHub Pages section select gh-pages branch from the drop-down menu. Hit save. If you see the following that means that everything is good & your app is being built. It usually takes up to 20-30 mins to see your app live on gihub pages.

Alt Text
