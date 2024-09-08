# Notes on Git and GitHub

## Preliminary Defintion

_Git_ is a software developed by Linus Torvalds to provide software developers with a tool for Version Control. It stores the current status of a software in a "repository", which one can imagine as 1-n safe state(s) called a "commit". A "commit" contains the current status of the software as well as the history of all commits which preceded the most recent commit. A git repo is safed locally on the hard drive by default but can be used to share Version Control for a software project with others. Git is controlled through the CLI.

_GitHub_ is a and web-app-based service which provides a GUI for Git and Version Control as well as software project management in the cloud. Its a service based on _Git_ providing services such as:

- Online Live Access to the repos
- Management of Branches and Commits in a GUI for better collaboration

## Important stuff about Git

- Don't initialize a repo within another repo
- Use iTerm to move into dir with repos, inside repos use terminal inside VS Code

## Important stuff about GitHub

- When pulling a remote repo from GitHub to (local) repo, use SSH and not HTTPS
- Commit to repo and then push it to remote repo

## Most Important CLI commands for Git and GitHub w/ workflows

command functionality
git switch -c <branchname> create a new branch and switch to it
git switch <branchname> switch branches
git branch list your branches
git branch -a list all branches (local and remote)
git branch -d <branchname> delete a branch

Remember: if you are in the current branch, just use git pull to fetch the status of your post PR review
