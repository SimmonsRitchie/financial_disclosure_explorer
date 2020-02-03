### Pa. Financial Disclosure Explorer
A searchable portal of statements of financial interest filed by Pennsylvania officials built with React.

This is a joint project between Spotlight PA and Temple University.

It uses [parcel.js](https://github.com/parcel-bundler/parcel) to bundle the source files.

### Install

To install, clone this repo and cd into the project folder.

Now enter the following command:

```npm install```

To run dev server, enter:

```npm run start```

You should be able to view the project at localhost:1234

### Deployment

To deploy to Spotlight PA's S3 account:

1) Make sure you have the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) installed and your Spotlight credentials set in '~/.aws/credentials'. The file should contain lines in the following format:

```
[default]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key
```
Or, if you have more than one AWS account and don't want your spotlight account as default, something like this:

```
[default]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key

[spotlight]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key

```

2) Install [s3deploy](https://github.com/bep/s3deploy)

3) CD into the project folder. If you have more than one AWS account, make sure that either your Spotlight PA account is set as default in '~/.aws/credentials' or enter the command below to change [AWS CLI profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) to your Spotlight PA account. The AWS CLI will use this account until you end your terminal session:

```export AWS_PROFILE=spotlight```

This command assumes you named your Spotlight PA account 'spotlight' in '~/.aws/credentials'.

4) Go into package.json in the root of the project folder and alter the build:prod and deploy scripts to reflect the desired deployment location on Spotlight's S3 account. Eg.

```
    "build:prod": "parcel build src/index.html --public-url https://interactives.data.spotlightpa.org/2019/my-cool-interactive/",

    "deploy": "npm run clean && npm run build:prod && s3deploy -source dist -bucket interactives.data.spotlightpa.org -path 2019/my-cool-interactive/ -region us-east-2  -distribution-id EFR0HZ7VA3Q92 -public-access",

```

5) You're ready to deploy! Run the following command:

```npm run deploy```
