# Prepare the Environment

**Note**: Between each installation step make sure to close the command prompt and re open it.

## Install Node

1. Download the appropriate Windows installer from [here](https://nodejs.org/en/download/).
2. Run the downloaded installer and go through all the steps without changing the default options.
3. Verify that Node was successfully installed by typing `node -v` in a command prompt (PowerShell or CMD). You should see an output similar to the following:
    ```
    v8.12.0
    ```

## Update NPM

1. Open a command prompt (PowerShell or CMD).
2. Run the command `npm install -g npm`.

## Install Git

1. Download the Git installer from [here](https://git-scm.com/download/win).
2. Run the downloaded installer and go through all the steps without changing the default options.
3. Verify that Git was successfully installed by typing `git --help` in a command prompt (PowerShell or CMD). You should see a bunch of help instructions.

## Install VS Code.

1. Download the VS Code installer from [here](https://code.visualstudio.com/download).
2. Run the downloaded installer.
3. When you get to the "Select Additional Tasks" step, mark all the boxes under "Other".
4. Finish the installation.

## Install Firebase Tools

1. Open a command prompt (PowerShell or CMD).
2. Run the command `npm install -g firebase-tools`.
3. Run the command `firebase login` which will trigger the process for signing in to Firebase:
4. You will see a message similar to the following:
    ```PowerShell
    ? Allow Firebase to collect anonymous CLI usage and error reporting information? (Y/n)
    ```
    Type `n` to proceed.

5. A browser window will open up prompting you to select/login to a Google account. Use the account that is associated with this project.
6. Once you have approved account access, you should see a message similar to this in the command prompt:
    ```PowerShell
    ...

    +   Success! Logged in as person@example.com
    ```
3. Verify that the authentication worked by running `firebase list` to see the associated projects. You should see the `ghassan-murad` project listed.

## Install Polymer CLI

1. Open a command prompt (PowerShell or CMD).
2. Run the command `npm install -g polymer-cli`.
3. Verify that Polymer was successfully installed by typing `polymer --help` in the commad prompt. You should see a bunch of help instructions.

## Install Bower

1. Open a command prompt (PowerShell or CMD).
2. Run the command `npm install -g bower`.
3. Verify that Bower was successfully installed by typing `bower --help` in the command prompt. You should see a bunch of help instructions.

## Clone the Project

1. Open a command prompt (PowerShell or CMD).
2. Navigate to the "Documents" directory: `cd ~/Documents`.
3. Create a "Projects" folder: `mkdir projects`.
4. Navigate into the new projects directory: `cd projects`.
5. Clone the project repository: `git clone https://github.com/TheSabby/ghassan-murad.git`.
6. Open your file explorer and you should be able to find the project in your Documents folder.

## Install Dependencies

1. Open a command prompt (PowerShell or CMD).
2. Navigate to the project directory: `cd ~/Documents/projects/ghassan-murad`.
3. Run the command: `npm install`.
4. Wait for installation to complete.
5. Run the command: `bower install`.
6. Wait for installation to complete.

## Configure Git Credentials

1. Open a command prompt (PowerShell or CMD).
2. Run the following commands substituting your actual email and name:
    ```PowerShell
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

# Making Modifications

## Start the Development Server

1. Open a command prompt (PowerShell or CMD).
2. Navigate to the project directory: `cd ~/Documents/projects/ghassan-murad`.
3. Run the development server: `polymer serve`.
4. Navigate to `localhost:8081` in your browser. You should see the site.

As you make modifications to the files and save them, you should see that when you refresh the browser your changes are reflected. If the browser shows a blank page that means you broke something in which case you should simply trace back your steps until its working again.

In some cases (If you really messed things up) you might need to restart the development server. In that case you can just close the command prompt and run the "Start the Development Server" steps again in a new command prompt.

If you can't seem to fix what you've broken, grab a fresh copy of the project by deleting the `ghassan-murad` directory and following the "Clone the Project" and "Install Dependencies" steps again.

## File Structure (Understand the Code)

1. Open VS Code.
2. Click "File > Open Folder" and navigate to the `ghassan-murad` directory and select it.

    You should now see the files and folders on the left. That is the navigation panel.

    You can find the different pages under the `src` directory. Any file that ends in `-view.html` is a page on the site.
    
    Under the folder `js` there is a file called `projects.js`. This file contains all the information regarding how to display the projects.

    Every project is represented as an object enclosed in curly braces (`{` and `}`). Each project contains certain fields that describe it.

    Everything is displayed on a grid which has 4 columns. You layout everything on this grid by describing where the object starts and ends based on the lines of the grid:

    These line numbers are important as they are how you will be able to change the layout.

    Here is an example of a video project:
      ```javascript
      {
        id: 4, // This is a unique id for each project.
        type: 'video', // This controls how the project is displayed.
        title: 'Confused App Promo',
        showcase_image: 'Confused.jpg', // This is the name of the image file to use as the showcase image.
        storage_path: 'confused_app', // This is the name of the folder where the images are stored on firebase.
        tile: { // This section describes how to display the project on the main page:
          id: {
            large: {
              rows: '2/3', // This means the tile starts at the 2nd row separator and ends at the third. So it is only one row tall.
              cols: '2/3' // This means the tile starts at the 2nd column separator and ends at the third. So it is only one column wide.
            }
          }
        },
        video_url: '8_PlIBfPF_Y', // This is the youtube video id.
        year: 2013 // This is the date this project was done (Not required).
      }
      ```
    
    Here is an example of a project with images:
      ```javascript
      {
        id: 10,
        type: 'branding',
        title: 'G12 Line',
        description: 'G12 T-Shirt Line is a virtual clothing line brand, designing funky high quality T-Shirts, The brand identity focuses on being up-to-date with the youth scene trends. G12 also provides the service of printing custom designs on T-Shirts.', // This is shown inside the project page.
        showcase_image: '01.jpg',
        storage_path: 'g12_line',
        tile: {
          id: {
            large: {
              rows: '4/6',
              cols: '1/2'
            }
          }
        },
        images: [ // This is an array of objects that describes the images in a project.
          {
            id: 1,
            image: '01.jpg', // This is the name of the image file on firebase.
            tile: { // This section describes how to layout this image:
              large: {
                rows: '1/2',
                cols: '1/2'
              }
            }
          },
          {
            id: 2,
            image: '02.jpg',
            tile: {
              large: {
                rows: '1/3',
                cols: '3/4'
              }
            }
          },
          {
            id: 3,
            image: '03.jpg',
            tile: {
              large: {
                rows: '2/3',
                cols: '1/3'
              }
            }
          },
          {
            id: 4,
            image: '04.jpg',
            tile: {
              large: {
                rows: '1/2',
                cols: '2/3'
              }
            }
          },
          {
            id: 5,
            image: '05.jpg',
            tile: {
              large: {
                rows: '1/3',
                cols: '4/5'
              }
            }
          }
        ],
        year: 2015
      }
      ```
    
    If you want to add a new project, create a new object by copying one of the above and add it to the end of the `projects.js` file just before the `]`.

    Make sure that the `id` you give the project is unique and greater than the last project in the file.

    Also make sure that there is a comman (`,`) between the project definitions:

      ```javascript
        ...
      }, // <-- This comma is important.
      {
        ...
      ```

    Remember that this file is javascript and is therefore strict in terms of how it is structured so make sure you don't miss any of these small commas or curly braces. Follow the examples that already exist.

    To add images for your new project:
      1. Open the [Firebase Console](https://console.firebase.google.com/project/ghassan-murad/overview).
      2. Use the left navigation to open the "Storage" page.
      3. Open the `projects` folder.
      4. Click the "New Folder" button (Next to "Upload File" button) to create a new folder.
      5. Name it something appropriate (like the project name) using only alpha-numeric lowercase characters and underscores then click "Add folder".

          **Note**: This name is the `storage_path` for the project so make sure it matches what you wrote in `projects.js`.

      6. Open the newly created folder.
      7. Click the "Upload file" button to upload your images.
      
          Name your images appropriately. The showcase image should have the same name as the project or `01.jpg`. The rest of the images should be numbered (e.g. `01.jpg`).

          **Note**: For each numbered image you upload, the application expects that there is a thumbnail version of the same image (preferrably as low quality as possible so as not to slow down the main page). The thumbnail should be a PNG file and have the same name as the original image suffixed with `_thumb.png`.

          All these image names are what you will use in the `projects.js` file.

          For example, check out [this](https://console.firebase.google.com/project/ghassan-murad/storage/ghassan-murad.appspot.com/files~2Fprojects~2Felectronic_services_forum~2F) folder.

## Committing Changes

1. Open a command prompt (PowerShell or CMD).
2. Navigate to the project directory: `cd ~/Documents/projects/ghassan-murad`.
3. Type `git status` to see a list of the files you have changed.
4. Type `git add` to "stage" those changes.
5. Commit your changes with some message describing what you have done:
    ```bash
    git commit -m "I added the new advertisment project"
    ```
6. Type `git status` again to verify that your changes have been committed. This time you should see an empty list.
7. Type `git push` to push your changes.
  
    **Note**: First time you try to push, git will request that you login to GitHub.

## Publishing your changes.

1. Open a command prompt (PowerShell or CMD).
2. Navigate to the project directory: `cd ~/Documents/projects/ghassan-murad`.
3. Make sure you have nothing left to commit by typing `git status` and looking for the message "up to date". Otherwise follow the steps above for committing & pushing your code.
4. Build the project: `polymer build`. This can take a few minutes.
5. Deploy the project to Firebase: `firebase deploy`.

Once this is done, within a few minutes you should see your changes appear on https://ghassanmurad.com.