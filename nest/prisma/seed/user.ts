import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async () => {
  const user = await prisma.user.findFirst({ orderBy: { id: 'asc' }, take: 1 })
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: 'admin',
      password: '123456',
    },
  })
}
