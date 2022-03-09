# SIT725
Practical repository for SIT725 Deakin University

## Table of contents
- [SIT725](#sit725)
  - [Table of contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Onboarding](#onboarding)
    - [Clone this repo](#clone-this-repo)
    - [Install node dependencies](#install-node-dependencies)
    - [Launch Application](#launch-application)

## Requirements
- [Node 16+](https://nodejs.org/en/)
- npm 8+
- Nice to have: Docker 20+, Docker Compose 2+
  - For macOS and Windows: go Install [Docker Desktop](https://www.docker.com/products/docker-desktop "docker desktop"). This contains both Docker and Docker Compose.
  - For Linux Master Race:
    - Install [Docker Engine](https://docs.docker.com/engine/install/#server "docker engine")
    - [Linux post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/ "Linux post-installation steps").
    - Install [Docker Compose](https://docs.docker.com/compose/install/ "docker compose")

## Onboarding
Follow belows to install and launch the application in the localhost 
### Clone this repo
```shell
git clone git@github.com:NNCT2904/SIT725.git
```
### Install node dependencies
```shell
# Navigate to backend folder
cd SIT725/backend/

# Then install dependencies
npm install 
```
### Launch Application
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