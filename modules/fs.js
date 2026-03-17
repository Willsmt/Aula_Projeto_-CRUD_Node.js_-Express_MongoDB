const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma Pasta

// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log("error", error);
//   }
//   console.log("Pasta Criada com Sucesso!");
// });

// criar um arquivo

fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("error", error);
    }
    console.log("Arquivo criado com sucesso");
  },
  fs.appendFile(
    path.join(__dirname, "/teste", "teste.txt"),
    "Hello world!",
    (error) => {
      if (error) {
        return console.log("error", error);
      }
      console.log("Arquivo criado com sucesso");
    },

    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Hello world!",
      (error) => {
        if (error) {
          return console.log("error", error);
        }
        console.log("Arquivo criado com sucesso");
      },
    ),
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("error", error);
        }
        console.log(data);
      },
    ),
  ),
);

//  Adicionar conteudo ao arquivo

// fs.appendFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "Hello world!",
//   (error) => {
//     if (error) {
//       return console.log("error", error);
//     }
//     console.log("Arquivo criado com sucesso");
//   },
// );

//  ler arquivos

// fs.readFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "utf8",
//   (error, data) => {
//     if (error) {
//       return console.log("error", error);
//     }
//     console.log(data);
//   },
// );
