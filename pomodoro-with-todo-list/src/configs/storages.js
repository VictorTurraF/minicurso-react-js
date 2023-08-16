import localforage from "localforage";

export const taskTable = localforage.createInstance({
  name: "site-data",
  storeName: "tasks",
  description: "Task list",
});

export const configsTable = localforage.createInstance({
  name: "site-data",
  storeName: 'configs',
  description: 'Application settings'
});