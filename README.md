# Thousand Sunny
A front end demonstration

### [Click here](http://www.waxworlds.org/dan/thousand_sunny) to see project

This project was created using Create React App

Aside from the packages installed by Create React App, below is a summary of NPM
packages that I have used:
  - @material-ui/core
  - @material-ui/icons
  - react-transition-group
  - react-on-screen

Fonts:
  - @fontsource/mulish
  - @fontsource/playfair-display
  - @fontsource/inter


# To download and run this project:
  1. Clone master branch of GitHub repository to local folder
  2. Using Node Package Manager to install all dependencies, type the following:
    `npm install`
  3. To run the project enter:
    `npm run start`

The project should open up automatically in your default browser

# To deploy to server subdirectory:
  1. Follow the above instructions to install the project
  2. Edit file `/package.json` and change the `homepage` value (the first entry)
     to the subdirectory that you are deploying to. For example if you are
     deploying to http://yourServer.com/subdirectory/thousand_sunny/
     change the `homepage` value to `/subdirectory/thousand_sunny`
  3. Run the following command:
     `npm run build`
  4. Finally, copy the contents of the newly created `/build` directory to your
     deployment directory on your server
