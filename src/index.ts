import { Elysia } from "elysia";
import books from "./books";
import { swagger } from "@elysiajs/swagger";

const v1 = new Elysia(
  // { prefix: "/v1" }
  )
  .use(
    swagger({
      path: "/swagger",
      documentation: {
        tags: [
          { name: "Books", description: "Getting the list of books" },
          { name: "Add Book", description: "Adding a book" },
          { name: "Update Book", description: "Updating a book" },
          { name: "View Book", description: "Getting a book" },
          { name: "Delete Book", description: "Deleting a book" },
        ],
      },
    })
  )
  .use(books);

const app = new Elysia().use(v1);
app.get("/v1", () => "Hello Elysia");

app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
