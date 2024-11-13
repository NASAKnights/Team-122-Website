# 122NasaKnightsWebsite

This is the code base for Team122.org

## Introduction

Should any NASA Knight student want to make contributions, make sure that you are familiar with the GitHub Branch and Pull workflow. Students should also be prepared to work with CSS, HTML and Javascript for this project.

## Style

The website design needs to follow Team 122's style guide. There can be some artistic liberties taken, but certain logos, fonts, and colors must adhere to the style guide. Please consult a mentor if you are unsure if your design is appropiate.

## Git Process

Clone the repo onto your local computer, somewhere you can work on it. Assuming you have git, in your terminal/command window, navigate to the folder you'd like to use, then type:

```bash
git clone PROJECT_URL
```
Checkout the appropiate branch, or create your own.

```bash
git -b checkout BRANCH_NAME
```
If the branch is new, make sure that you push the branch to the remote repo, else the branch will just live locally on your machine.
```bash
git push -u origin BRANCH_NAME
```

Make sure that you DO NOT work on the master/main branch. The master/main branch should always be working. Any unfinished code should live in a branch.

After you make your changes, add and commit the changes. Include a short but informative message with your commit.
```bash
git add . 
git commit -m "COMMENT OF WHAT YOU DID"
```
Push the changes afterwards to your branch.
```bash
git push origin BRANCH_NAME
```

Once you are ready to merge into main, open a pull request and have two people as reviewers, one of which must be a programming mentor.



