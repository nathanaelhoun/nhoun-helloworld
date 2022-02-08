# nhoun-helloworld

Small website, made to showcase how to dockerise a basic node webapp.

[Source code on GitHub](https://github.com/nathanaelhoun/nhoun-helloworld).

## Build the image

[Get Docker](https://docs.docker.com/get-docker/) and run :

```bash
# Build the image
docker build --tag nathanaelhoun/nhoun-helloworld:latest .

# Run the image on your computer
docker run --rm -it --publish 8080:80 nathanaelhoun/nhoun-helloworld:latest
```
