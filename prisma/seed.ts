import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { user_name: "test@test.com" },
    update: {},
    create: {
      user_name: "ayemyat",
      name: "hannah",
      password: "123456",
      phone_no: "09887887654",
      email:"hannah@gmail.com"
    },
  });
  console.log(user);
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    prisma.$disconnect;
    process.exit(1);
  });
