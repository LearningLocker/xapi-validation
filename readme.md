# xapi-validation

[![NPM Package Version](https://badge.fury.io/js/xapi-validation.svg)](https://www.npmjs.com/package/xapi-validation)
[![Build Status](https://circleci.com/gh/LearningLocker/xapi-validation/tree/master.svg?style=shield)](https://circleci.com/gh/LearningLocker/xapi-validation)
[![Renovate badge](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovateapp.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Join the chat at https://gitter.im/LearningLocker/learninglocker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/LearningLocker/learninglocker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This is Learning Locker's package for validating xAPI Statements. The package aims to return all of the problems with an xAPI statement in one function call. Since this package is part of Learning Locker, it has been conformance tested. You can [try this package out on RunKit](https://runkit.com/58834fa5d14b5b0013806bde/5883507a9faa130014213d6a).

*Learning Locker is a trademark of [HT2 Inc.](http://ht2labs.com)*

### Installation
To install all of Learning Locker, see the [installation documentation](http://docs.learninglocker.net/guides-installing/). To install just the xAPI validation package, you can follow the instructions below.

```js
npm i xapi-validation
```

### Development
1. Download the code by either:
    - Cloning the repository (authorised collaborators only) `git clone git@github.com:LearningLocker/xapi-validation.git`.
    - [Forking the repository](https://help.github.com/articles/fork-a-repo/) and cloning the fork.
1. Change to the directory of the cloned code `cd xapi-validation`.
1. Install dependencies `npm install`.
1. Make your changes to the "src" directory.
1. Build the code `npm run build`.
1. Test the code `npm test`.
1. Commit and push your changes `npm run acp`.
1. [Create a pull request](https://help.github.com/articles/about-pull-requests/).
