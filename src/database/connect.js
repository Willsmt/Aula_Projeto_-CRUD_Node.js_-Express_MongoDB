const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-kpobgpu-shard-00-00.j4ra3u7.mongodb.net:27017,ac-kpobgpu-shard-00-01.j4ra3u7.mongodb.net:27017,ac-kpobgpu-shard-00-02.j4ra3u7.mongodb.net:27017/CursoNodeJs?ssl=true&replicaSet=atlas-ej1xsu-shard-0&authSource=admin&appName=CursoNodeJs&retryWrites=true&w=majority`,
    );
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

module.exports = connectToDatabase;
