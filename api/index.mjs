import app from '../src/server.mjs';

let ready;

export default async function handler(request, response) {
  ready ||= app.ready();
  await ready;
  app.routing(request, response);
}