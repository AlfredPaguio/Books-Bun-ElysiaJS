import { Elysia } from "elysia";

const books = new Elysia({ prefix: "/books" })
  .get("/", "list of books", {
    detail: {
      tags: ["Books"],
    },
  })
  .post("/", "Add Book", {
    detail: {
      tags: ["Add Book"],
    },
  })
  .put("/:id", ({ params: { id } }) => "Updating book: " + id, {
    detail: {
      tags: ["Update Book"],
    },
  })
  .get("/:id", ({ params: { id } }) => "viewing book: " + id, {
    detail: {
      tags: ["View Book"],
    },
  })
  .delete("/:id", ({ params: { id } }) => "deleting book: " + id, {
    detail: {
      tags: ["Delete Book"],
    },
  });

export default books;
