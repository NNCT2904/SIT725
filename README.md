# SIT725
Practical repository for SIT725 Deakin University

## Table of contents
- [SIT725](#sit725)
  - [Table of contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Onboarding](#onboarding)
    - [Clone this repo](#clone-this-repo)
    - [Install node dependencies](#install-node-dependencies)
    - [Launch Application for development](#launch-application-for-development)

## Requirements
- [Node 16+](https://nodejs.org/en/)
- npm 8+, comes with [Node](https://nodejs.org/en/) installation
- Nice to have: Docker 20+, Docker Compose 2+
  - For macOS and Windows: go Install [Docker Desktop](https://www.docker.com/products/docker-desktop "docker desktop"). This contains both Docker and Docker Compose
  - For Linux Master Race:
    - Install [Docker Engine](https://docs.docker.com/engine/install/#server "docker engine")
    - [Linux post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/ "Linux post-installation steps")
    - Install [Docker Compose](https://docs.docker.com/compose/install/ "docker compose")

## Onboarding
Follow below guides to install and launch the application in the localhost.
### Create your MongoDB instance
Follow [this guide](https://docs.mongodb.com/guides/server/drivers/ "Connect to MongoDB") to create an account, cluster and connection string.
### Clone this repo
```shell
git clone git@github.com:NNCT2904/SIT725.git
```
### Create the config file
After cloning the repository, create an `.env` config file and filling the values:
- `MONGODB_URI`: the connection string to MongoDB

For example:
```shell
MONGODB_URI=YourConnectionStringHere
```
### Install node dependencies
```shell
# Navigate to backend folder
cd SIT725/backend/

# If you have nvm and multiple Node versions
nvm use #

# Then install dependencies
npm install 
```
### Launch Application for development
After installing dependencies, launch the application locally with:
```shell
# In the backend folder
npm start
```
Or launch the application with docker compose
```shell
# In the Root folder
docker-compose up app
```

The Application will be launched in [localhost:3000](http://localhost:3000/ "[docker compose](http://localhost:3000/)"). Saving any changes will trigger `nodemon` to hot reload the application, no need to stop the application or container.