import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create some clinics
  const clinicA = await prisma.clinic.create({
    data: {
      name: "Dentist Clinic A",
      address: "123 Main St, City, Country",
    },
  });

  const clinicB = await prisma.clinic.create({
    data: {
      name: "Dentist Clinic B",
      address: "456 Elm St, City, Country",
    },
  });

  // Create some predefined services for Clinic A
  await prisma.service.createMany({
    data: [
      {
        name: "Teeth Cleaning",
        description: "Routine cleaning of teeth to maintain oral hygiene.",
        price: 50.0,
        clinicId: clinicA.id,
      },
      {
        name: "Filling",
        description: "Dental filling for cavities or decayed teeth.",
        price: 100.0,
        clinicId: clinicA.id,
      },
      {
        name: "Whitening",
        description: "Teeth whitening for a brighter smile.",
        price: 150.0,
        clinicId: clinicA.id,
      },
    ],
  });

  // Create some predefined services for Clinic B
  await prisma.service.createMany({
    data: [
      {
        name: "General Checkup",
        description: "Routine examination of the teeth and gums.",
        price: 30.0,
        clinicId: clinicB.id,
      },
      {
        name: "Teeth Whitening",
        description:
          "Brighten your teeth with a professional whitening treatment.",
        price: 120.0,
        clinicId: clinicB.id,
      },
      {
        name: "Root Canal",
        description: "Procedure to treat infected or damaged tooth pulp.",
        price: 200.0,
        clinicId: clinicB.id,
      },
    ],
  });

  console.log("Seeding completed: Sample services and clinics added.");
}

main()
  .catch((e) => {
    throw e;
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
