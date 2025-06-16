# Интернет-магазин для оналайн-продаж одежды Эко Гардероб
## Содержание / Content
#### Russian version:
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

#### Данный проект является частью обучения в колледже и представляет из себя дипломную работу:
- #### Проектирование и разработка интернет-магазина для онлайн-продаж одежды на примере бренда "ЭкоГардероб"

<!--  -->

<a name='DependencysRu'></a>
## Зависимости

#### При разработке использовались следующие версии dev-зависимостей:
#### - Node: ```^20.14.0```,
#### - React: ```^19.0.0```,
#### - TypeScript: ```~5.7.2```,
#### - Vite: ```^6.2.0```;

#### Прежде чем начать вам нужно выполнить установку следующих зависимостей:
#### - React-router-dom: ```^7.5.1```,
#### - React-dom: ```^19.0.0```,
#### - Prettier: ```^3.5.3```,
#### - Axios: ```^1.9.0```,
#### - Lorem-ipsum: ```^2.0.8```;

<br>

> [!WARNING]
> При инсталяции иных версий зависимостей, не гарантируется стабильная работа приложения

<!--  -->

<a name='RunProjectRu'></a>
## Запуск проекта

#### Чтобы установить зависимости, выполните следующие команды:
```terminal
npm install
```

#### Для запуска проекта, выполните следующие команды:
```terminal
npm run dev
```

<br>
<br>
<br>

# Store for online sales of clothing Eco Wardrobe

<!--  -->

<a name='DescriptionEng'></a>
## Descrription

#### This project is part of college education and is a thesis:
#### - Design and development of an online store for online sales of clothing using the example of the EcoGarderob brand

<!--  -->

<a name='DependencysEng'></a>
## Dependencys

#### The following versions of dependencies were used during development:
#### - Node: ```^20.14.0```,
#### - React: ```^19.0.0```,
#### - TypeScript: ```~5.7.2```,
#### - Vite: ```^6.2.0```;

#### To get started you will need to the following install:
#### - React-router-dom: ```^7.5.1```,
#### - React-dom: ```^19.0.0```,
#### - Prettier: ```^3.5.3```,
#### - Axios: ```^1.9.0```,
#### - Lorem-ipsum: ```^2.0.8```;

<br>

> [!WARNING]
> When installing other versions of dependencies, stable operation of the application is not guaranteed

<!--  -->

<a name='ProjectStructureEng'></a>
## Project structure

```
Website_EcoWardrobe/
|
├──public/                              # Local media content
|
├──src/                                 # Main directory
|   ├──api/                             # Api directory
|   |   ├──auth.ts                      # Authorization requests
|   |   ├──config.ts                    # Api configuration
|   |   └──errorHandler.ts              # Error handler
|   ├──assets/
|   ├──components/                      # Components directory
|   |   ├──Pages/                       # Pages directory
|   |   └──functional-components/       # Functional components / Smart components directory
|   ├──App.css                          # Compile styles for App.tsx
|   ├──App.sass                         # Pre-process styles for App.tsx
|   ├──App.tsx                          # Main routes file
|   └──main.tsx                         # Root element
|
├──index.html                           # Base index file
├──package-lock.json                    # All project information
└──package.json                         # All project dependencys / dev-dependencys
```

<!-- -->

<a name='RunProjectEng'></a>
## Run the project

#### To install dependencies, run the following command:
```
npm install
```

#### To start the project, run the following command:
```
npm run dev
```
