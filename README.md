# How to run

## Method 1

Import the COUNTRY-APP file to VsCode, locate at the root directory, open a new terminal, you can run:

### `npm start`

## Method 2 (deploy the app live on Vercel)

simply click the link [getCountryInfo](https://getcountryinfo-theta.vercel.app/)

# How to use and what content would be displayed

Enter the name of the country into textbox, and click the  "Get Country Info" button.

The country's name, capital, population, currencies, languages, and image of flag would be shown in the format of table.

# Explanation of file structure

.\api\server.js ---- backend server, using NodeJS and express to handle HTTP requests and fetch the data from REST Countries API using the node-fetch library

.\src\component\CountryInfo.js ---- display the information about the country based on the country name recieved
.\src\component\CountryInfo.css ---- style the component CountryInfo using CSS
.\src\component\CountryInputInfo.js ---- create the form for inputting the country name, pass the country name to CountryInfo component
.\src\component\CountryInputInfo.css ---- tyle the component CountryInputInfo using CSS

.\src\App.js ---- renders the CountryInputForm and CountryInfo components

# Advantages

1. Decoupling code, seperate the service layer and presentation layer
2. Mapping the result into table format, make it more readable
3. Containing different types of country info being displayed, including text, merged text and picture
4. Deploying it onto cloud platform and making it live 

