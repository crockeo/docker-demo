# docker-demo

Welcome to the Team Check My GitHub Docker Demo. In this repository I will run
you through the introductory steps necessary to:

1. Set up Docker on your computer.
2. Use Docker to instantiate a Docker Container, using the Dockerfile contained
   in this repository.
3. Set up a development environment that interacts directly with the Docker
   Container, without having to rebuild it after every source change.

### Installing Docker

 Navigate to Docker's
[Community Edition](https://www.docker.com/community-edition) web page, and
download Docker CS for Mac, Windows, or the Linux distribution of your choice.
Follow its installation process to completion.

### Setting up Your Docker Container

Once you have Docker, download this repository. Navigate into the directory,
and execute:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now you'll have this Docker instance running on your computer! Navigate to
[localhost:8080](http://localhost:8080) to see the page in action! The page
should come up, and everything should be working! Near the bottom of the page,
there will be a header "Database Status". If it doesn't say "Success!" then
we've got a problem, and feel free to reach out on Slack!

Once you're ready to turn the server off, just enter the following into your
console.

```bash
$ docker-compose down --volumes
```

If you're on the alpha dev team (I'm looking @ you William) then we can spend
some extra time talking about what each of these commands mean.

### License

This repository is licenses under the MIT Open Source license, refer to the
`LICENSE` file for more information.
