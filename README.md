<p align="center">
  <img src="https://skylab.rocketseat.com.br/api/files/1586184608716.svg",>
</p>

---

<p align="center">
  <br />
  <img src="https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-11-challenge-02">
  <img src="https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-11-challenge-02">
  <img src="https://img.shields.io/badge/made%20by-SkullDarth-lightgrey">
  <img src="https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-11-challenge-02">
  <img src="https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-11-challenge-02">
  

  <!-- Indice personalizado -->
  <p align="center">
      <a href="#about-the-challenge">About the challenge</a>
      <strong>|</strong>
      <a href="#resources-and-procedures">Resources and Procedures</a>
      <strong>|</strong>
      <a href="#running-for-first-time">Running for First Time</a>
      <strong>|</strong>
      <a href="#project-tree">Project Tree</a>
      <strong>|</strong>
      <a href="#project-in-function">Project in function</a>
      <strong>|</strong>
      <a href="#license">License</a>
      <br />
      <br />
      <p align="center"> <strong>GoStack - Challenge 02: Back-end with Node.js</strong></p>
   </p>

</p>

  > "Success is not the result of a game, but the destiny of a journey." !

---
## **About the Challenge**
#### Create an API from scratch to store some repositories to my portfolio using nodejs to create, list, update and remove some repositories also some repositores have a possibility to receive "likes".
#### Objective: Create new functionalities on this teamplate basead on content view in module 01 about nodejs.
---
# Resources and Procedures
---
## Technologies APIs and Libraries used to create this project

- [x] uuidv4 -> Create ID's
- [x] express -> Web framework
- [x] cors -> Automated Tests
- [x] tree-cli -> Directory Tree

---
## Developed Features

- [x] Create new repository
- [x] List repositories
- [x] Delete repositories
- [x] Like in one specific repository

---
## Running for First Time
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [npm][npm] + [Yarn v1.13][yarn] or higher installed on your computer and follow this [tutorial][tutorial] to prepare your enviroment.

After prepare your enviroment execute this comands from you command line:

```bash

# Clone this repository
$ git clone https://github.com/SkullDarth/bootcamp-gostack-11-challenge-02.git

# Go into the repository
$ cd bootcamp-gostack-11-challenge-02

# Install dependencies
$ yarn

# Run the Project into terminal
$ yarn dev

# Run automated test using terminal
$ yarn test

```
---
## Project Tree
To create a tree files in project run commands present right below in respository folder:

```bash
$ yarn add tree-cli

$ yarn tree -l 4 -o out.txt --ignore node_modules,.gitignore,.gitattributes

```

#### Result after run comand present in top:

```bash

├── LICENSE
├── README.md
├── jest.config.js
├── nodemon.json
├── package.json
├── src
|  ├── __tests__
|  |  ├── likes.spec.js
|  |  └── repositories.spec.js
|  ├── app.js
|  └── server.js
└── yarn.lock

directory: 1104 file: 4615

ignored: directory (84)

```
---
## Project in function

### **Initialize project and Insomnia route tests**

![Project in function][project-in-function]

---
## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made with 💙 by Yan Oliveira [Get in touch!][MylinkedIn] 🖖

<!-- Hiperlinks structure to base -->
<!-- Just refer the link using this sintax: "[challenger 02][challenge02]" -->
[challenge02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02

[tree-cli]:https://github.com/MrRaindrop/tree-cli
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: #

[project-in-function]: https://user-images.githubusercontent.com/16024701/80922031-ab5b2a00-8d50-11ea-9920-8657db4fba42.gif

[initialized-project]: #
[project-in-function-02]: #
[projectFunctionInVideo]: #

[MylinkedIn]:https://www.linkedin.com/in/yan-brito/

