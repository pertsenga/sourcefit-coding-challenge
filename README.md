# Sourcefit Coding Challenge

## Local Setup
Requirements:
 - [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
 - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installing the dependencies
Once the the requirements are installed, you should run `composer install` to install dependencies for **Laravel**

Then, create a `.env` file in the root folder of this project and copy the contents from `.env.example` into it and save.

Next, run `composer run post-create-project-cmd` to run the final setup for Laravel.

After setting up the backend, run `yarn install` (or `npm install`, if you have **NPM** as your package manager, instead) to install the dependencies for **React**

Finally, you can now run `composer run dev` to access the app at `http://127.0.0.1:8000/` from your browser
