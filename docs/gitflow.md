# GIT Flow

## Project setup and initialisation of git

The basic git flow for initialization of new project consists of following steps:

1. Create a New Project Directory

2. Open a Terminal or Command Prompt

3. Navigate to Your Project Directory

4. Initialize Git Repository:
   > git init

!!! -> Initialization of project is done only once of one project

## Configuring git

1. Install Git for Windows

2. Open Git Bash

3. Generate an SSH Key

   > ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   > Enter a Secure Passphrase (Optional):

4. Locate Your SSH Key:

   > ssh keys (id_rsa and id_rsa.pub) are inside C:\Users\YourUsername\.ssh folder

5. Copy the Public Key to Clipboard:

   > id_rsa.pub is the public key

6. Add SSH Key to GitHub:

- Go to your GitHub account settings: GitHub Settings.
- Click on "SSH and GPG keys" in the left sidebar.
- Click "New SSH key" and paste the contents of your clipboard into the "Key" field.
- Give your SSH key a descriptive title (e.g., "My Windows SSH Key").
- Click "Add SSH key."

## Configure Global Git Username and Email

In the Git Bash terminal, set your global Git username and email by running these commands:

> git config --global user.name "Your Name"
> git config --global user.email "your_email@example.com"

Replace "Your Name" with your name and "your_email@example.com" with your email address.

## Test Your SSH Key:

To ensure everything is set up correctly, run the following command to test your SSH connection to GitHub:

> ssh -T git@github.com

You should see a message indicating that you've successfully authenticated.

---

## Create git repository and link local project to remote git repository

1. Create a git repository in the github

2. Copy the Repository URL

   > https://github.com/your-username/your-repo.git

3. Navigate to Your Existing Project in terminal

4. Link Your Local Repository to the GitHub Repository
   > git remote add origin https://github.com/your-username/your-repo.git

## Adding source code and pushing it to the git

1. Make changes on code in the local machine project

2. Add and Commit Your Project Files

   > git add .

   > git commit -m "Initial commit"

3. Push Your Local Repository to GitHub
   > git push -u origin master
