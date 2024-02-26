import { Elysia } from "elysia";
import books from "./books";

const v1 = new Elysia({ prefix: "/v1" }).use(books);

const app = new Elysia().use(v1);
app.get("/v1", () => "Hello Elysia");

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
