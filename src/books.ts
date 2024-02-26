import { Elysia } from "elysia";

const books = new Elysia({ prefix: "/books" })
  .get("/", "list of books")
  .post("/", "Add Book")
  .put("/", "Update Book")
  .get("/:id", ({ params: { id } }) => "viewing book: " + id)
  .delete("/:id", ({ params: { id } }) => "deleting book: " + id);

export default books;
