# lambda-manager
Simplifies management, building and deploying AWS lambda functions

## Getting started
```
git clone https://github.com/adrianbarwicki/lambda-manager

cd lambda-manager

npm install
```

## Your first lambda
Check out the contents of ./lambdas-src/example-lambda to start working on your first lambda function.

## Building
This will zip every lambda package from ./lambdas-src and pipe it into ./lambdas-build folder.
```
gulp build
```

## Upload to AWS S3
It uploads the contents of /lambdas-build to AWS-S3 bucket. You can configure the name and region of your bucket in the ./s3-config.json file. Remember also to provide AWS credentials in your user directory.

```
gulp deploy
```

## Author
Adrian Barwicki (adrianbarwicki@gmail.com)<br />
VQ-LABS (vq-labs.com)