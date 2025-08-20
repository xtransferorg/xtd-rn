- [English](./README_EN.md)
- [Chinese](./README.md)

## Project Startup

* Install dependencies: Run `yarn` in the project root directory
* Build modules: Run `yarn build` in the project root directory to generate the `lib` folder

## Demo Startup
* Go to the `/example` directory and run `yarn`
  * iOS: Run `pod install` to install iOS dependencies, then run `yarn ios` in the project root directory
  * Android: Run `yarn android`

## Unit Testing

* Run unit tests: Execute `yarn test` in the project root directory

## Local Documentation
* Run documentation: Execute `yarn doc` in the project root directory
* Build documentation: Execute `yarn doc:build` in the project root directory

## Notes
1. You do not need to manually modify the version number in `package.json` on the development branch; it will automatically increment based on the current branch.
2. When merging into `master`, make sure the version number matches the one in `master`!
