const express = require("express");
const router = express.Router();
const app = express();

// Middleware
app.use(express.json());

// User routes
app.get("/api/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
  });
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created",
    user: { name, email },
  });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    user: { id, name: "John Doe" },
  });
});

// Product routes in a separate router
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Product 1", price: 99.99 },
      { id: 2, name: "Product 2", price: 149.99 },
    ],
  });
});

productRouter.post("/", (req, res) => {
  const { name, price } = req.body;
  res.status(201).json({
    message: "Product created",
    product: { name, price },
  });
});

productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  res.json({
    message: "Product updated",
    product: { id, name, price },
  });
});

productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Product ${id} deleted`,
  });
});

// Mount the product router
app.use("/api/products", productRouter);

// Order routes using app.route() chaining
app
  .route("/api/orders")
  .get((req, res) => {
    res.json({
      orders: [{ id: 1, items: ["Product 1", "Product 2"] }],
    });
  })
  .post((req, res) => {
    const { items } = req.body;
    res.status(201).json({
      message: "Order created",
      order: { items },
    });
  });

app
  .route("/api/orders/:id")
  .get((req, res) => {
    const { id } = req.params;
    res.json({
      order: { id, items: ["Product 1"] },
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { items } = req.body;
    res.json({
      message: "Order updated",
      order: { id, items },
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.json({
      message: `Order ${id} deleted`,
    });
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
