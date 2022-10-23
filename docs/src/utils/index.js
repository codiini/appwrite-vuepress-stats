import { Client, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63547b1de043de00974a");

export const database = new Databases(client);
