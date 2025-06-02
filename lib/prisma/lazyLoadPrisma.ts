function getPrisma() {
    const {prisma} = require('@/lib/prisma/prisma')
    return prisma
}

const prisma = getPrisma()

export default prisma