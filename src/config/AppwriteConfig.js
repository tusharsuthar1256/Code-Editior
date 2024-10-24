import { Account, Client } from "appwrite";

const client = new Client();

client.
     setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
     .setProject(import.meta.env.VITE_APPWRITE_PEOJECT_ID)

export const account = new Account(client);

export default {client,account};