import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import "./src/database/connection";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/user.resolver";

class Server {
  server: ApolloServer | null = null;

  constructor() {
    this.startup();
  }

  async startup() {
    const schema = await buildSchema({
      resolvers: [UserResolver],
    });

    this.server = new ApolloServer({ schema });

    this.server.listen({ port: 4100 }, () => {
      console.log("Initializing...");
    });
  }
}

export default new Server();
