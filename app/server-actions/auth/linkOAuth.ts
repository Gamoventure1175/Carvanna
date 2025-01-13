'use server'
import { Account } from "next-auth"
import { ExtendedUserType } from "@/validation/customValidations"
import prisma from "@/lib/prisma"

export default async function linkOAuth(account: Account, user: ExtendedUserType) {
    const linkedAccount = await prisma.account.findUnique({
        where: {
            provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
            },
            userId: user.id,
        }
    })

    if (!linkedAccount) {
        const newAccount = await prisma.account.create({
            data: {
                userId: user.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
            }
        })

        const userAccountLink = await prisma.userAccount.create({
            data:{
                userId: user.id,
                accountId: newAccount.id,
            }
        })

        console.log({'newAccount created': newAccount, 'userAndAccountLinked': userAccountLink})
        return {'newAccount created': newAccount, 'userAndAccountLinked': userAccountLink}
    }

    console.log({'Account already exists': linkedAccount});
    return linkedAccount
}