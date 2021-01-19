export const routes = ({ Router }) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send({
      message: "hello there",
    });
  });
  router.post("/", (req, res) => {
    res.json({
      data: [{ a: 1 }, { b: 2 }],
    });
  });
  router.get("*", (req, res) => {
    res
      .status(404)
      .send({ message: "you are trying to access an unknown route" });
  });

  return router;
};
