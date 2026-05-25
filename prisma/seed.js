require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Branchen erstellen
  const branchen = [
    { name: "Logistik", slug: "logistik" },
    { name: "Handel", slug: "handel" },
    { name: "Produktion", slug: "produktion" },
    { name: "IT / Software", slug: "it-software" },
    { name: "Bau", slug: "bau" },
    { name: "Lebensmittel", slug: "lebensmittel" },
    { name: "Maschinenbau", slug: "maschinenbau" },
    { name: "Pharma", slug: "pharma" },
  ];

  for (const branche of branchen) {
    await prisma.branche.upsert({
      where: { slug: branche.slug },
      update: {},
      create: {
        name: branche.name,
        slug: branche.slug,
      },
    });
  }

  console.log("✅ Seed erfolgreich!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
