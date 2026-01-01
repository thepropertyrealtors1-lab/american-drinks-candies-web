import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Products
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.post(api.products.create.path, async (req, res) => {
    try {
      const input = api.products.create.input.parse(req.body);
      const product = await storage.createProduct(input);
      res.status(201).json(product);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Categories
  app.get(api.categories.list.path, async (req, res) => {
    const categories = await storage.getCategories();
    res.json(categories);
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingCategories = await storage.getCategories();
  if (existingCategories.length === 0) {
    const sodas = await storage.createCategory({
      name: "Sodas",
      slug: "sodas",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
    });
    const chips = await storage.createCategory({
      name: "Chips",
      slug: "chips",
      imageUrl: "https://images.unsplash.com/photo-1621447504864-d8686e12698c"
    });
    const candies = await storage.createCategory({
      name: "Candies",
      slug: "candies",
      imageUrl: "https://images.unsplash.com/photo-1582058928232-216869aa053f"
    });

    await storage.createProduct({
      name: "American Cola Pack",
      description: "Classic American Cola, 12 pack cans.",
      price: "$12.99",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      categoryId: sodas.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Spicy Potato Chips",
      description: "Hot and spicy potato chips, family size.",
      price: "$4.99",
      imageUrl: "https://images.unsplash.com/photo-1621447504864-d8686e12698c",
      categoryId: chips.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Gummy Bears",
      description: "Assorted fruit flavored gummy bears.",
      price: "$3.49",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: candies.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Orange Soda",
      description: "Refreshing orange soda bottle.",
      price: "$1.99",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      categoryId: sodas.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Root Beer 6-Pack",
      description: "Traditional American root beer with a creamy head.",
      price: "$8.99",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      categoryId: sodas.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Classic Beef Jerky",
      description: "High-protein original flavor smoked beef jerky.",
      price: "$6.99",
      imageUrl: "https://images.unsplash.com/photo-1621447504864-d8686e12698c",
      categoryId: chips.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Sour Worms",
      description: "Tangy and sour sugar-coated gummy worms.",
      price: "$2.99",
      imageUrl: "https://images.unsplash.com/photo-1582058928232-216869aa053f",
      categoryId: candies.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Salt & Vinegar Chips",
      description: "Extra crunchy kettle cooked salt and vinegar chips.",
      price: "$4.49",
      imageUrl: "https://images.unsplash.com/photo-1621447504864-d8686e12698c",
      categoryId: chips.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Grape Soda",
      description: "Sweet and bubbly grape flavored soda.",
      price: "$1.99",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      categoryId: sodas.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Peanut Butter Cups",
      description: "Perfect combination of chocolate and peanut butter.",
      price: "$1.49",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: candies.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Cheetos Crunchy",
      description: "Crunchy and cheesy snack, 10 oz bag.",
      price: "$3.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: chips.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Coca-Cola Classic",
      description: "The world's most iconic cola, 24 pack.",
      price: "$14.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: sodas.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Sprite Lemon Lime",
      description: "Crisp and refreshing lemon-lime soda.",
      price: "$8.49",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: sodas.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Doritos Nacho Cheese",
      description: "Bold nacho cheese flavor, family size.",
      price: "$5.49",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: chips.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Hershey's Chocolate Bar",
      description: "Classic American chocolate bar, pack of 6.",
      price: "$4.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: candies.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Mountain Dew Voltage",
      description: "Electric blue berry citrus soda.",
      price: "$9.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: sodas.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Lay's Wavy Chips",
      description: "Wavy-cut classic salted potato chips.",
      price: "$4.79",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: chips.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Skittles Mix",
      description: "Rainbow assortment of colorful candies.",
      price: "$2.49",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: candies.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Dr Pepper",
      description: "Original blend of 23 flavors.",
      price: "$7.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: sodas.id,
      isFeatured: false
    });
    await storage.createProduct({
      name: "Frito Lay Mix Variety",
      description: "Assorted chips and snacks variety pack.",
      price: "$12.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: chips.id,
      isFeatured: true
    });
    await storage.createProduct({
      name: "Starburst Fruit Chews",
      description: "Fruity chewy candies in assorted flavors.",
      price: "$2.99",
      imageUrl: "https://images.unsplash.com/photo-1599599810694-a5d746b3e5e0?w=400&h=500&fit=crop",
      categoryId: candies.id,
      isFeatured: false
    });
  }
}
