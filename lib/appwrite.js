import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("675572e5001e7f1a8fba");

export const databases = new Databases(client);

export const account = new Account(client);
export { ID } from "appwrite";
