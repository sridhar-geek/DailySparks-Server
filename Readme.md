# Daily Sparks Server


## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Tech Stack](#tech-stack)
- [setup&Installation](#setupinstallation)
- [Testing](#testing)
- [Author](#author)


## OverView

**It is build to serve routes and data for Daily Sparks [website](https://daily-spark.vercel.app/)**

### Links

**This is the link for Frontend Code which uses Data from this server**
- GitHub URL : [Code](https://github.com/sridhar-geek/Daily-Spark)

### Tech Stack
- Nodejs
- Express
- JavaScript
- Express Async Errors

### SetUp/Installation

 **Clone the repository using this command**

```sh
  `git clone https://github.com/sridhar-geek/DailySparks-Server.git
  ```
  
  **after that install dependencies using `npm install` command and then run the project using `npm start`**

### Testing

 ***To test the api routes in Postman, use this endpoints***

```sh
Base Url: https://dailysparks-server.onrender.com/api/v1/news
```
#### Along with news use can also queries like page and limit which enables pagination

1. Top News Rotes

   This route gets the Top News 

Method: **GET**

      Route: /top-news

example response of news article

   {

      by: "pansa2",
      id: 26245933,
      score: 15,
      time: 1614133964,
      title: "Python Developers Survey 2020 Results",
      type: "story",
      url: "https://www.jetbrains.com/lp/python-developers-survey-2020/",

    }

Ex:  https://dailysparks-server.onrender.com/api/v1/news/latest-news?page=2&limit=10

2. Best News Route

Method: **GET**

        Route: /best-news

3. Trending News Route


Method: **GET**

        Route: /latest-news

## Author

- Linkdin - [Sridhar Moturu](https://www.linkedin.com/in/sridhar-moturu-b4620524b/)
