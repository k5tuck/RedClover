# RedClover

<p align="center"><tb><img  src="https://visitor-badge.glitch.me/badge?page_id=k5tuck.RedClover"/></tb></p>

## Table of Contents

- [About Redclover](#about-redclover)
  - [Built Using](#built-using)
  - [Diagrams and Screenshots](#diagrams-and-screenshots)
  - [Contributors](#contributors)
- [Getting Started](#getting-started)
- [License](#license)

## About RedClover

After doing various research on fintechs and how they operated, a spark of interest was raised on how they do things technology wise.
However, finding information (or even examples), of backend finance projects was proving to be difficult to find. So what better way
is there to learn about something, than to make it yourself?

The project was structured around the "core banking" concept that banks have used for more than a couple of decades now. The current plan is
to create a monolithic architecture to get a basic understaning of how banks kind of work "under the hood".

### Future Plans

There are a couple of ideas for future iterations, with more to come in the future:

#### Short Term

- [x] Make Account Transaction Template Page
- [x] Create Transactions
- [ ] Edit Deposits/Withdrawals on Details Page
- [ ] Transfer "Menu"
- [ ] Add (Save) Accounts to Transfers "List"
- [ ] Update/Delete Accounts
- [ ] Update/Delete Member Details

#### Long Term

- [ ] Eventually re-implement server into a Go "version"
- [ ] Create a Microservice Architecture

### Built Using

- JavaScript: Node.js, Express, Sequelize
- PostgreSQL
- Deployed with: AWS (Coming Soon)

### Diagrams and Screenshots

Version 1 of the Login Page and Database
<img src="add't files/RedClover_Login.PNG" alt="Login Page">

Database Design and Layout
<img src="add't files/Tables.PNG" alt="Database Design">

### Contributors

Kevin Tucker  
[Github](http://github.com/k5tuck)
[LinkedIn](https://www.linkedin.com/in/ktuck18)

### Contact

## Getting Started

### Prerequisites

- Node.js, NPM
  In order to test you must have Node.js installed.

### Installation

1. Clone repository and cd into folder
2. Run `npm i` in the terminal to install necessary dependencies (`npm i -D` for Dev Dependencies)
3. Run `npm run dev` and open the url address displayed in the terminal

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/k5tuck/RedClover/blob/main/LICENSE) for more information.
