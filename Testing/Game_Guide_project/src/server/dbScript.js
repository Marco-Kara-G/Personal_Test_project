import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addUser = async () => {
  await prisma.user.deleteMany();
};

addUser()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
