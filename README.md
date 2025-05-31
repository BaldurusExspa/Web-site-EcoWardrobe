# Интернет-магазин для онлайн-продаж одежды Эко Гардероб - Backend
## Содержание / Content
#### Russian version
- #### [Описание](#DescriptionRu)
- #### [Зависимости](#DependencysRu)
- #### [Запуск проекта](#RunProjectRu)

#### English version
- #### [Description](#DescriptionEng)
- #### [Dependencys](#DependencysEng)
- #### [Project structure](#ProjectStructureEng)
- #### [Run the project](#RunProjectEng)

<!--  -->

<a name='DescriptionRu'></a>
## Описание

#### Данная ветка является частью основного кода для дипломного проекта, <br> в которой содержится сервер и Api запросы

<!--  -->

<a name='DependencysRu'></a>
## Зависимости

#### При разработке серверной части использовались следующие версии dev-зависимостей:
- #### Node: ```20.14.0```;

#### Прежде чем начать вам нужно выполнить установку следующих зависимостей:
- #### Bcrypt: ```^6.0.0```,
- #### Cors: ```^2.8.5```,
- #### Dayjs: ```^1.11.13```,
- #### Express: ```^5.1.0```,
- #### Jsonwebtoken: ```^9.0.2```,
- #### Mysql2: ```^3.14.1```,
- #### Zod: ```^3.25.28```;

<br>

> [!WARNING]
> При инсталяции иных версий зависимостей, не гарантируется стабильная работа приложения

<!--  -->

<a name='RunProjectRu'></a>
## Запуск сервера

#### Чтобы установить зависимости, выполните следующие команды:
```terminal
npm install
```

#### Для запуска проекта, выполните следующие команды:
```terminal
node ./src/server/server.js
```

<br>
<br>
<br>

# Store for online sales of clothing Eco Wardrobe - Backend

<!--  -->

<a name='DescriptionEng'></a>
## Description

#### This branch is part of the main code for the thesis project, <br> which contains the server and Api requests

<!--  -->

<a name='DependencysEng'></a>
## Dependencys

#### The following versions of dependencies were used during development:
- #### Node: ```20.14.0```;

#### To get started you will need to the following install:
- #### Bcrypt: ```^6.0.0```,
- #### Cors: ```^2.8.5```,
- #### Dayjs: ```^1.11.13```,
- #### Express: ```^5.1.0```,
- #### Jsonwebtoken: ```^9.0.2```,
- #### Mysql2: ```^3.14.1```,
- #### Zod: ```^3.25.28```;

<br>

> [!WARNING]
> When installing other versions of dependencies, stable operation of the application is not guaranteed

<!--  -->

<a name='ProjectStructureEng'></a>
## Project structure

```
Website_EcoWardrobe/
|
├──src/server
|   ├──connection.js      # Config Database connection
|   ├──model.js           # All models (User, Auth...)
|   └───server.js         # Express Server and Api requests
──
```

<!-- -->

<a name='RunProjectEng'></a>
## Run the server

#### To install dependencies, run the following command:
```terminal
npm install
```

#### To start the project, run the following command:
```terminal
node ./src/server/server.js
```
