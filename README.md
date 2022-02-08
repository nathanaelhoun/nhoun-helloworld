# nhoun-helloworld

Small website, made to showcase how to dockerise a basic node webapp.

Using node-v8 because the docker image was much smaller, and the vast majority of used features did not require a recent version of node.

## Build the image

[Get Docker](https://docs.docker.com/get-docker/) and run :

```bash
# Build the image
docker build --tag nathanaelhoun/nhoun-helloworld --file Dockerfile .

# Run the image on your computer
docker run --publish 8080:80 nathanaelhoun/nhoun-helloworld:latest --detach
docker rm $CONTAINER_ID
```
