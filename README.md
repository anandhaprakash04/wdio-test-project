### Dependencies
- Must have node and npm installed. Visit https://nodejs.org/ for installation.
- May or May not have typescript installed globally. ( npm install -g typescript)


### Clone the repository to your local

https://github.com/anandhaprakash-gartner/wdio-applitools.git

### Add your browserstack in wdio.config.ts file before running

Make sure you have below values in either .env under root folder or .bash_profile

```
BROWSERSTACK_USERNAME=""
BROWSERSTACK_ACCESS_KEY=""

```

### Setup

1. Install packages 
```
yarn install
```

#### Optional Parameters/Arguments to be passed to the test;  

`--browserName (default: chrome)`
 
#### Running a Single Spec 

Browserstack: 
```
yarn test --browserName chrome
```
