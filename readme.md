# _Doctor Finder_

#### _Week 6 Code Review, 5 July 2019_

#### By _**Lake Bramlett**_

## Description

_'Doctor Finder' is a client-side program that queries an open data base to return and display information about doctors with a certain distance from Portland, Oregon. Search results are based around user inputed names, or a user selected speciality. _

## Setup/Installation Requirements

* _Clone https://github.com/lake-bramlett/doctor-finder repo locally_
* _In the command line, run `npm install` for necessary dependencies_
* _Receive an API key from https://developer.betterdoctor.com/ and place it in a `.env` file under the name `exports.apiKey`
* _Run `npm build` (or whatever local equivalent) to compile code and build to /dist_
* _Open /dist/index.html in preferred web browser_
* _Use preferred text editor to edit_
* _Make any pull requests to https://github.com/lake-bramlett/doctor-finder ._

## Specs

| Spec | Input | Output |
| ---- | :---: | -----: |
| Program will return a notification and state the error in the event that the API call results in an error (any message not a 200 OK). |||
| Program will return a notification if no doctors match the search query |||
| Program displays no more than ten results|||
| Program displays list of doctors in the Portland area that treat the user-selected medical issue|||
| Program displays list of doctor in the Portland area that match the user-inputted name|||
| Program displays any relevant information pertaining to doctors found in any relevant search query |||
| Program returns search results based on user-selected distance.||||

  ## Known Bugs

  _There are no known bugs at this time (5 July 2019)._

  ## Support and contact details

  _email: lake.bramlett@gmail.com_

  ## Technologies Used

  * _HTML_
  * _CSS_
  * _JavaScript_
  * _jQuery_
  * _Git_
  * _NPM_
  * _Webpack_
  * _Jasmine_
  * _Karma_


  ### License

  *This software is licensed under the MIT license.*

  Copyright (c) 2019 **_Lake Bramlett_**
