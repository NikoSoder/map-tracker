<h1 align="center">
  Map tracker
</h1>

<div align="center">

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/NikoSoder/map-tracker/develop?style=flat-square) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/NikoSoder/map-tracker/develop?style=flat-square)

</div>

## Introduction

TODO: description about the project

## Demo video

Project gif here

## Installation

1.Install npm packages

```bash
$ cd node-express/
$ npm install
$ cd ..
$ cd angular-frontend/
$ npm install
```

2.Create your own .env file in `node-express` folder. Check in `.env-sample` for a sample.

3.Create your database and table. You can check in `create_table_example` for a sample.

```sql
CREATE TABLE table_name (
     map_id INT NOT NULL AUTO_INCREMENT,
     map_name CHAR(40) NOT NULL,
     map_type CHAR(10) NOT NULL,
     map_tier INT NOT NULL,
     map_notes CHAR(30),
     map_completed BOOLEAN NOT NULL,
     PRIMARY KEY (map_id)
 );
```

## Technologies used

- Angular
- TypeScript
- Tailwind
- Node
- Express
