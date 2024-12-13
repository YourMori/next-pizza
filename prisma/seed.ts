import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, _ingredients, products } from "./constants";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({ productId, pizzaType, size }: { productId: number; pizzaType?: 1 | 2; size?: 20 | 30 | 40 }) => {
  return {
    productId,
    pizzaType,
    size,
    price: randomDecimalNumber(200, 600),
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: "John Doe",
        email: "uQD6O@example.com",
        password: hashSync("12345678", 10),
        role: "USER",
        verified: new Date(),
      },
      {
        fullname: "Jovan Admin",
        email: "trecZ@example.com",
        password: hashSync("145678", 10),
        role: "ADMIN",
        verified: new Date(),
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, size: 20, pizzaType: 1 }),
      generateProductItem({ productId: pizza1.id, size: 30, pizzaType: 2 }),
      generateProductItem({ productId: pizza1.id, size: 40, pizzaType: 2 }),
      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, size: 20, pizzaType: 1 }),
      generateProductItem({ productId: pizza2.id, size: 30, pizzaType: 1 }),
      generateProductItem({ productId: pizza2.id, size: 40, pizzaType: 1 }),
      generateProductItem({ productId: pizza2.id, size: 20, pizzaType: 2 }),
      generateProductItem({ productId: pizza2.id, size: 30, pizzaType: 2 }),
      generateProductItem({ productId: pizza2.id, size: 40, pizzaType: 2 }),
      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, size: 20, pizzaType: 1 }),
      generateProductItem({ productId: pizza3.id, size: 30, pizzaType: 2 }),
      generateProductItem({ productId: pizza3.id, size: 40, pizzaType: 2 }),

      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "token111",
      },
      {
        userId: 2,
        token: "token123",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productItemId: 18,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
