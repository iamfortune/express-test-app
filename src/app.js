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

// Categories routes using a separate router
const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  res.json({
    categories: [
      { id: 1, name: "Electronics", description: "Electronic devices and gadgets" },
      { id: 2, name: "Clothing", description: "Apparel and accessories" },
      { id: 3, name: "Home", description: "Home goods and furniture" }
    ]
  });
});

categoryRouter.post("/", (req, res) => {
  const { name, description } = req.body;
  res.status(201).json({
    message: "Category created",
    category: { name, description }
  });
});

categoryRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    category: { id, name: "Electronics", description: "Electronic devices and gadgets" }
  });
});

categoryRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  res.json({
    message: "Category updated",
    category: { id, name, description }
  });
});

categoryRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Category ${id} deleted`
  });
});

// Mount the category router
app.use("/api/categories", categoryRouter);

// Reviews routes
const reviewRouter = express.Router();

reviewRouter.get("/", (req, res) => {
  res.json({
    reviews: [
      { id: 1, productId: 1, userId: 2, rating: 5, comment: "Great product!" },
      { id: 2, productId: 2, userId: 1, rating: 4, comment: "Good quality." }
    ]
  });
});

reviewRouter.post("/", (req, res) => {
  const { productId, rating, comment } = req.body;
  res.status(201).json({
    message: "Review created",
    review: { productId, rating, comment, userId: 1 }
  });
});

reviewRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    review: { id, productId: 1, userId: 2, rating: 5, comment: "Great product!" }
  });
});

reviewRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  res.json({
    message: "Review updated",
    review: { id, rating, comment }
  });
});

reviewRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Review ${id} deleted`
  });
});

app.use("/api/reviews", reviewRouter);

// Cart routes
app
  .route("/api/cart")
  .get((req, res) => {
    res.json({
      cart: {
        userId: 1,
        items: [
          { productId: 1, quantity: 2, price: 99.99 },
          { productId: 2, quantity: 1, price: 149.99 }
        ],
        total: 349.97
      }
    });
  })
  .post((req, res) => {
    const { productId, quantity } = req.body;
    res.status(200).json({
      message: "Item added to cart",
      item: { productId, quantity }
    });
  })
  .delete((req, res) => {
    res.json({
      message: "Cart cleared"
    });
  });

app
  .route("/api/cart/:productId")
  .put((req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    res.json({
      message: "Cart item updated",
      item: { productId, quantity }
    });
  })
  .delete((req, res) => {
    const { productId } = req.params;
    res.json({
      message: `Product ${productId} removed from cart`
    });
  });

// Authentication routes
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: "Login successful",
    token: "sample-jwt-token",
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    }
  });
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    message: "Registration successful",
    user: {
      id: 3,
      name,
      email
    }
  });
});

app.post("/api/auth/logout", (req, res) => {
  res.json({
    message: "Logout successful"
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
