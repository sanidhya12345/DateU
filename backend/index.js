/** @format */

//used to setup a graphQL API Server
import { ApolloServer } from "@apollo/server";
//framework for building HTTP servers.
import express from "express";
//middleware to integrate apollo server with express
import { expressMiddleware } from "@apollo/server/express4";
import { createServer } from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI =
  "mongodb+srv://varshneysanidhya:iRueqljkBoMutOLa@cluster0.dmkqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const FRONTEND_URL = "http://localhost:5173/";
//intialize the express and http server

const app = express();

//httpserver helps to combine the express and websocket functionalities into one server.

const httpServer = createServer(app);

//socket.io setup

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

//mongodb connection

mongoose
  .connect(process.env.MONGODB_URI || MONGODB_URI)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.error("Mongodb Connection Failed", err));

