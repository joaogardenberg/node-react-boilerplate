# Johnny's Node + React Boilerplate with Docker

A boilerplate project I built for myself to use whenever I want to start a new project.

It has:

- A [React](https://reactjs.org/) frontend with some basic functionality
- A [NodeJS](https://nodejs.org/en/) backend with a structure inspired by [Ruby on Rails](https://rubyonrails.org/)
- A [MongoDB](https://www.mongodb.com/) service
- A [Redis](https://redis.io/) service
- All managed by [Docker](https://www.docker.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need [Docker](https://www.docker.com/) to run this project.

**Optional:** [Git](https://git-scm.com/downloads) _(if you want to clone the project)_

### Installing

First you have to **clone** or **download** this repository:

```
$ git clone git@github.com:joaogardenberg/node-react-boilerplate.git
```

Then open a terminal at the **project root** and build the docker images:

```
$ docker-compose build
```

And you're all set! Start everything with the following command:

```
$ docker-compose up -d
```

## Information

### Whole project

- All you need is Docker, everything else is managed inside its containers.

- Has a [Prettier](https://prettier.io/) configuration file for you to use ([.prettierrc](.prettierrc)).

- Comes with steps for deploying to production.

### Backend (API)

- Built with [NodeJS](https://nodejs.org/).

- Using [Express](https://expressjs.com/) for the web server.

- [Documentation](/backend)

### Frontend

- Built with [ReactJS](https://reactjs.org/), using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

- Using [Redux](https://redux.js.org/) for global state management.

- [Documentation](/frontend)

### MongoDB and Redis

- Run automatically when you start docker, you don't have to do anything.

### Docker

- Has a configuration file ([docker-compose.yml](docker-compose.yml)).

## Authors

- **Jo??o Lucas da Costa Gardenberg** - _Initial work_

See also the list of [contributors](https://github.com/joaogardenberg/node-react-boilerplate/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License.
