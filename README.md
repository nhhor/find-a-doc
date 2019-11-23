# Application: **Find-a-Doc**

##### By Noah Horwitz

###### _First published 2019-11-22_

## Description:
This project was made as part of a coding project for Noah Horwitz, a student at _[Epicodus](http://www.epicodus.com)_, a vocational school for technology careers based in Portland, OR. The project is designed to create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

<!-- The fully deployed project is hosted on GH-Pages [HERE](https://nhhor.github.io/pandemic). -->

## Setup/Installation instructions:
* Click the `Clone or download` button and copy the link.
* Open your terminal application (assuming GIT Scripts AND node.js (with NPM) have been installed on your system) and type `git clone (link)`.
* In the terminal using the `cd`... command, navigate to the newly created repository and run `npm install`.
* Then in the terminal, run `npm run start`.
* In the newly created ./dist folder, double click on "index.html" to open the file in the web browser of your choosing.
* (As this project uses a private API Key, users will need their own to make this project fully functional!)

## Technologies Used
> `HTML`
> `CSS`
> `Bootstrap`
> `JavaScript`
> `jQuery`
> `Node Package Manager`
> `WebPack`
> `APIs`

## Known Bugs
* None

## Test Driven Development Specifications

|Spec|Input|Output|
|-|-|-|
|A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.|`ear-ache`|`* Deborah Altemus, DO.` `* Gregory Gramstad, MD.` `* Phillip Wackym, MD.` `* ...`|
|A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.|`Sean`|`* Sean Sweeney, DO.` `* Sean Herrin, DC.` `* Sean Orenstein, MD.` `* ...`|
|If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).|`Sean Sweeney, DO.`|`* Practice: Sean Sweeney, DO` `* Address: 2801 N Gantenbein Ave Portland, OR 97227` `* Phone: 5032766500` `* Website: None provided.` `* Accepting new patients: true`|
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.|404 not found|`We're sorry, there was a NetworkError when attempting to fetch resource.`|
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)|`unstoppable sneezing`|`We're sorry, there were no results on your query.`|





## References
* This project uses the **BetterDoctor API** to function correctly.
  * You can get your own API key to use or test this application [here](https://developer.betterdoctor.com/).

## Support and contact details
Contact [example@sample.com](mailto:example@sample.com)

## License
_This This repository is copyright (C) 2019 by Noah Horwitz and licensed under the GNU General Public License v3.0 [gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)_.
