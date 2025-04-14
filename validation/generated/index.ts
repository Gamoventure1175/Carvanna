import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "emailVerified",
  "username",
  "password",
  "role",
  "createdAt",
  "updatedAt",
  "isVerified",
  "oauthOnly",
  "name",
  "bio",
  "driversLicense",
  "profileImageUrl",
  "gender",
  "dateOfBirth",
  "phone",
  "location",
]);

export const CarScalarFieldEnumSchema = z.enum([
  "id",
  "ownerId",
  "brand",
  "model",
  "year",
  "licensePlate",
  "carImageUrl",
  "color",
  "engineType",
  "transmission",
  "mileage",
  "registrationState",
  "description",
  "createdAt",
  "updatedAt",
]);

export const FollowerScalarFieldEnumSchema = z.enum([
  "id",
  "followerId",
  "followingId",
  "createdAt",
]);

export const PostScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "content",
  "imageUrl",
  "createdAt",
]);

export const LikeScalarFieldEnumSchema = z.enum([
  "id",
  "postId",
  "userId",
  "carId",
]);

export const VerificationTokenScalarFieldEnumSchema = z.enum([
  "id",
  "identifier",
  "token",
  "expires",
]);

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "type",
  "provider",
  "providerAccountId",
  "refresh_token",
  "access_token",
  "expires_at",
  "token_type",
  "scope",
  "id_token",
  "session_state",
  "createdAt",
  "updatedAt",
]);

export const UserAccountScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "accountId",
  "createdAt",
]);

export const SessionScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "expires",
  "sessionToken",
  "deviceInfo",
  "ipAddress",
  "createdAt",
  "updatedAt",
]);

export const NotificationScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "content",
  "isRead",
  "createdAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  username: z.string(),
  password: z.string().nullable(),
  role: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isVerified: z.boolean(),
  oauthOnly: z.boolean(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  driversLicense: z.string().nullable(),
  profileImageUrl: z.string().nullable(),
  gender: z.string(),
  dateOfBirth: z.coerce.date().nullable(),
  phone: z.string().nullable(),
  location: z.string().nullable(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// CAR SCHEMA
/////////////////////////////////////////

export const CarSchema = z.object({
  id: z.string(),
  ownerId: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  licensePlate: z.string(),
  carImageUrl: z.string().nullable(),
  color: z.string().nullable(),
  engineType: z.string().nullable(),
  transmission: z.string().nullable(),
  mileage: z.number().int().nullable(),
  registrationState: z.string().nullable(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Car = z.infer<typeof CarSchema>;

/////////////////////////////////////////
// FOLLOWER SCHEMA
/////////////////////////////////////////

export const FollowerSchema = z.object({
  id: z.string(),
  followerId: z.string(),
  followingId: z.string(),
  createdAt: z.coerce.date(),
});

export type Follower = z.infer<typeof FollowerSchema>;

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.string(),
  userId: z.string(),
  content: z.string(),
  imageUrl: z.string(),
  createdAt: z.coerce.date(),
});

export type Post = z.infer<typeof PostSchema>;

/////////////////////////////////////////
// LIKE SCHEMA
/////////////////////////////////////////

export const LikeSchema = z.object({
  id: z.string(),
  postId: z.string(),
  userId: z.string(),
  carId: z.string(),
});

export type Like = z.infer<typeof LikeSchema>;

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
});

export type VerificationToken = z.infer<typeof VerificationTokenSchema>;

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Account = z.infer<typeof AccountSchema>;

/////////////////////////////////////////
// USER ACCOUNT SCHEMA
/////////////////////////////////////////

export const UserAccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  accountId: z.string(),
  createdAt: z.coerce.date(),
});

export type UserAccount = z.infer<typeof UserAccountSchema>;

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().nullable(),
  ipAddress: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  content: z.string(),
  isRead: z.boolean(),
  createdAt: z.coerce.date(),
});

export type Notification = z.infer<typeof NotificationSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({})
  .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      cars: z.boolean().optional(),
      followers: z.boolean().optional(),
      following: z.boolean().optional(),
      posts: z.boolean().optional(),
      sessions: z.boolean().optional(),
      notifications: z.boolean().optional(),
      accounts: z.boolean().optional(),
      Account: z.boolean().optional(),
      Like: z.boolean().optional(),
    })
    .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    isVerified: z.boolean().optional(),
    oauthOnly: z.boolean().optional(),
    name: z.boolean().optional(),
    bio: z.boolean().optional(),
    driversLicense: z.boolean().optional(),
    profileImageUrl: z.boolean().optional(),
    gender: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    phone: z.boolean().optional(),
    location: z.boolean().optional(),
    cars: z.union([z.boolean(), z.lazy(() => CarArgsSchema)]).optional(),
    followers: z
      .union([z.boolean(), z.lazy(() => FollowerArgsSchema)])
      .optional(),
    following: z
      .union([z.boolean(), z.lazy(() => FollowerArgsSchema)])
      .optional(),
    posts: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionArgsSchema)])
      .optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationArgsSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => UserAccountArgsSchema)])
      .optional(),
    Account: z.union([z.boolean(), z.lazy(() => AccountArgsSchema)]).optional(),
    Like: z.union([z.boolean(), z.lazy(() => LikeArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// CAR
//------------------------------------------------------

export const CarIncludeSchema: z.ZodType<Prisma.CarInclude> = z
  .object({})
  .strict();

export const CarArgsSchema: z.ZodType<Prisma.CarDefaultArgs> = z
  .object({
    select: z.lazy(() => CarSelectSchema).optional(),
    include: z.lazy(() => CarIncludeSchema).optional(),
  })
  .strict();

export const CarCountOutputTypeArgsSchema: z.ZodType<Prisma.CarCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => CarCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const CarCountOutputTypeSelectSchema: z.ZodType<Prisma.CarCountOutputTypeSelect> =
  z
    .object({
      likes: z.boolean().optional(),
    })
    .strict();

export const CarSelectSchema: z.ZodType<Prisma.CarSelect> = z
  .object({
    id: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    brand: z.boolean().optional(),
    model: z.boolean().optional(),
    year: z.boolean().optional(),
    licensePlate: z.boolean().optional(),
    carImageUrl: z.boolean().optional(),
    color: z.boolean().optional(),
    engineType: z.boolean().optional(),
    transmission: z.boolean().optional(),
    mileage: z.boolean().optional(),
    registrationState: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    likes: z.union([z.boolean(), z.lazy(() => LikeArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => CarCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// FOLLOWER
//------------------------------------------------------

export const FollowerIncludeSchema: z.ZodType<Prisma.FollowerInclude> = z
  .object({})
  .strict();

export const FollowerArgsSchema: z.ZodType<Prisma.FollowerDefaultArgs> = z
  .object({
    select: z.lazy(() => FollowerSelectSchema).optional(),
    include: z.lazy(() => FollowerIncludeSchema).optional(),
  })
  .strict();

export const FollowerSelectSchema: z.ZodType<Prisma.FollowerSelect> = z
  .object({
    id: z.boolean().optional(),
    followerId: z.boolean().optional(),
    followingId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    follower: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    following: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// POST
//------------------------------------------------------

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z
  .object({})
  .strict();

export const PostArgsSchema: z.ZodType<Prisma.PostDefaultArgs> = z
  .object({
    select: z.lazy(() => PostSelectSchema).optional(),
    include: z.lazy(() => PostIncludeSchema).optional(),
  })
  .strict();

export const PostCountOutputTypeArgsSchema: z.ZodType<Prisma.PostCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => PostCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const PostCountOutputTypeSelectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> =
  z
    .object({
      likes: z.boolean().optional(),
    })
    .strict();

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    content: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    likes: z.union([z.boolean(), z.lazy(() => LikeArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// LIKE
//------------------------------------------------------

export const LikeIncludeSchema: z.ZodType<Prisma.LikeInclude> = z
  .object({})
  .strict();

export const LikeArgsSchema: z.ZodType<Prisma.LikeDefaultArgs> = z
  .object({
    select: z.lazy(() => LikeSelectSchema).optional(),
    include: z.lazy(() => LikeIncludeSchema).optional(),
  })
  .strict();

export const LikeSelectSchema: z.ZodType<Prisma.LikeSelect> = z
  .object({
    id: z.boolean().optional(),
    postId: z.boolean().optional(),
    userId: z.boolean().optional(),
    carId: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    car: z.union([z.boolean(), z.lazy(() => CarArgsSchema)]).optional(),
  })
  .strict();

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenArgsSchema: z.ZodType<Prisma.VerificationTokenDefaultArgs> =
  z
    .object({
      select: z.lazy(() => VerificationTokenSelectSchema).optional(),
    })
    .strict();

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> =
  z
    .object({
      id: z.boolean().optional(),
      identifier: z.boolean().optional(),
      token: z.boolean().optional(),
      expires: z.boolean().optional(),
    })
    .strict();

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z
  .object({})
  .strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
  .object({
    select: z.lazy(() => AccountSelectSchema).optional(),
    include: z.lazy(() => AccountIncludeSchema).optional(),
  })
  .strict();

export const AccountCountOutputTypeArgsSchema: z.ZodType<Prisma.AccountCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => AccountCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const AccountCountOutputTypeSelectSchema: z.ZodType<Prisma.AccountCountOutputTypeSelect> =
  z
    .object({
      userAccounts: z.boolean().optional(),
    })
    .strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerAccountId: z.boolean().optional(),
    refresh_token: z.boolean().optional(),
    access_token: z.boolean().optional(),
    expires_at: z.boolean().optional(),
    token_type: z.boolean().optional(),
    scope: z.boolean().optional(),
    id_token: z.boolean().optional(),
    session_state: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    userAccounts: z
      .union([z.boolean(), z.lazy(() => UserAccountArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AccountCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// USER ACCOUNT
//------------------------------------------------------

export const UserAccountIncludeSchema: z.ZodType<Prisma.UserAccountInclude> = z
  .object({})
  .strict();

export const UserAccountArgsSchema: z.ZodType<Prisma.UserAccountDefaultArgs> = z
  .object({
    select: z.lazy(() => UserAccountSelectSchema).optional(),
    include: z.lazy(() => UserAccountIncludeSchema).optional(),
  })
  .strict();

export const UserAccountSelectSchema: z.ZodType<Prisma.UserAccountSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    accountId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    account: z.union([z.boolean(), z.lazy(() => AccountArgsSchema)]).optional(),
  })
  .strict();

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
  .object({})
  .strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z
  .object({
    select: z.lazy(() => SessionSelectSchema).optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
  })
  .strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    expires: z.boolean().optional(),
    sessionToken: z.boolean().optional(),
    deviceInfo: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// NOTIFICATION
//------------------------------------------------------

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> =
  z.object({}).strict();

export const NotificationArgsSchema: z.ZodType<Prisma.NotificationDefaultArgs> =
  z
    .object({
      select: z.lazy(() => NotificationSelectSchema).optional(),
      include: z.lazy(() => NotificationIncludeSchema).optional(),
    })
    .strict();

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    content: z.boolean().optional(),
    isRead: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    username: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    role: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    isVerified: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    oauthOnly: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    bio: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    driversLicense: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    profileImageUrl: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    gender: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    dateOfBirth: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    location: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    cars: z.lazy(() => CarListRelationFilterSchema).optional(),
    followers: z.lazy(() => FollowerListRelationFilterSchema).optional(),
    following: z.lazy(() => FollowerListRelationFilterSchema).optional(),
    posts: z.lazy(() => PostListRelationFilterSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
    notifications: z
      .lazy(() => NotificationListRelationFilterSchema)
      .optional(),
    accounts: z.lazy(() => UserAccountListRelationFilterSchema).optional(),
    Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
    Like: z.lazy(() => LikeListRelationFilterSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isVerified: z.lazy(() => SortOrderSchema).optional(),
      oauthOnly: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      driversLicense: z.lazy(() => SortOrderSchema).optional(),
      profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      cars: z.lazy(() => CarOrderByRelationAggregateInputSchema).optional(),
      followers: z
        .lazy(() => FollowerOrderByRelationAggregateInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerOrderByRelationAggregateInputSchema)
        .optional(),
      posts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
      sessions: z
        .lazy(() => SessionOrderByRelationAggregateInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationOrderByRelationAggregateInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountOrderByRelationAggregateInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountOrderByRelationAggregateInputSchema)
        .optional(),
      Like: z.lazy(() => LikeOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        email: z.string(),
        username: z.string(),
      }),
      z.object({
        id: z.string(),
        email: z.string(),
      }),
      z.object({
        id: z.string(),
        username: z.string(),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        email: z.string(),
        username: z.string(),
      }),
      z.object({
        email: z.string(),
      }),
      z.object({
        username: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          email: z.string().optional(),
          username: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => UserWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          emailVerified: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          role: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          isVerified: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          oauthOnly: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          bio: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          driversLicense: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          profileImageUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          gender: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          dateOfBirth: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          phone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          location: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          cars: z.lazy(() => CarListRelationFilterSchema).optional(),
          followers: z.lazy(() => FollowerListRelationFilterSchema).optional(),
          following: z.lazy(() => FollowerListRelationFilterSchema).optional(),
          posts: z.lazy(() => PostListRelationFilterSchema).optional(),
          sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
          notifications: z
            .lazy(() => NotificationListRelationFilterSchema)
            .optional(),
          accounts: z
            .lazy(() => UserAccountListRelationFilterSchema)
            .optional(),
          Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
          Like: z.lazy(() => LikeListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isVerified: z.lazy(() => SortOrderSchema).optional(),
      oauthOnly: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      driversLicense: z.lazy(() => SortOrderSchema).optional(),
      profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      emailVerified: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      username: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      password: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      role: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      isVerified: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      oauthOnly: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      name: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      dateOfBirth: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const CarWhereInputSchema: z.ZodType<Prisma.CarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CarWhereInputSchema),
        z.lazy(() => CarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CarWhereInputSchema),
        z.lazy(() => CarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    ownerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    brand: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    year: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    licensePlate: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    carImageUrl: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    color: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    engineType: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    transmission: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    mileage: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    registrationState: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    owner: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
  })
  .strict();

export const CarOrderByWithRelationInputSchema: z.ZodType<Prisma.CarOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ownerId: z.lazy(() => SortOrderSchema).optional(),
      brand: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      year: z.lazy(() => SortOrderSchema).optional(),
      licensePlate: z.lazy(() => SortOrderSchema).optional(),
      carImageUrl: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      engineType: z.lazy(() => SortOrderSchema).optional(),
      transmission: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
      registrationState: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      likes: z.lazy(() => LikeOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export const CarWhereUniqueInputSchema: z.ZodType<Prisma.CarWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        licensePlate: z.string(),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        licensePlate: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          licensePlate: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => CarWhereInputSchema),
              z.lazy(() => CarWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => CarWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => CarWhereInputSchema),
              z.lazy(() => CarWhereInputSchema).array(),
            ])
            .optional(),
          ownerId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          brand: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          model: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          year: z
            .union([z.lazy(() => IntFilterSchema), z.number().int()])
            .optional(),
          carImageUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          color: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          engineType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          transmission: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          mileage: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
            .optional()
            .nullable(),
          registrationState: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          owner: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const CarOrderByWithAggregationInputSchema: z.ZodType<Prisma.CarOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ownerId: z.lazy(() => SortOrderSchema).optional(),
      brand: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      year: z.lazy(() => SortOrderSchema).optional(),
      licensePlate: z.lazy(() => SortOrderSchema).optional(),
      carImageUrl: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      engineType: z.lazy(() => SortOrderSchema).optional(),
      transmission: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
      registrationState: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => CarCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => CarAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => CarMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => CarMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => CarSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const CarScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CarScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CarScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CarScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CarScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CarScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CarScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      ownerId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      brand: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      model: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      year: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      licensePlate: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      carImageUrl: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const FollowerWhereInputSchema: z.ZodType<Prisma.FollowerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FollowerWhereInputSchema),
        z.lazy(() => FollowerWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FollowerWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FollowerWhereInputSchema),
        z.lazy(() => FollowerWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    followerId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    followingId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    follower: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    following: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const FollowerOrderByWithRelationInputSchema: z.ZodType<Prisma.FollowerOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      followerId: z.lazy(() => SortOrderSchema).optional(),
      followingId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      follower: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      following: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const FollowerWhereUniqueInputSchema: z.ZodType<Prisma.FollowerWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => FollowerWhereInputSchema),
              z.lazy(() => FollowerWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => FollowerWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => FollowerWhereInputSchema),
              z.lazy(() => FollowerWhereInputSchema).array(),
            ])
            .optional(),
          followerId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          followingId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          follower: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          following: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const FollowerOrderByWithAggregationInputSchema: z.ZodType<Prisma.FollowerOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      followerId: z.lazy(() => SortOrderSchema).optional(),
      followingId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => FollowerCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => FollowerMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => FollowerMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const FollowerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FollowerScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FollowerScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FollowerScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => FollowerScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FollowerScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FollowerScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      followerId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      followingId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const PostWhereInputSchema: z.ZodType<Prisma.PostWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostWhereInputSchema),
        z.lazy(() => PostWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostWhereInputSchema),
        z.lazy(() => PostWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    imageUrl: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
  })
  .strict();

export const PostOrderByWithRelationInputSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      likes: z.lazy(() => LikeOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => PostWhereInputSchema),
              z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => PostWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => PostWhereInputSchema),
              z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          content: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          imageUrl: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const PostOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PostScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      imageUrl: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const LikeWhereInputSchema: z.ZodType<Prisma.LikeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LikeWhereInputSchema),
        z.lazy(() => LikeWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LikeWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LikeWhereInputSchema),
        z.lazy(() => LikeWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    postId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    carId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    post: z
      .union([
        z.lazy(() => PostScalarRelationFilterSchema),
        z.lazy(() => PostWhereInputSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    car: z
      .union([
        z.lazy(() => CarScalarRelationFilterSchema),
        z.lazy(() => CarWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const LikeOrderByWithRelationInputSchema: z.ZodType<Prisma.LikeOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      postId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      carId: z.lazy(() => SortOrderSchema).optional(),
      post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      car: z.lazy(() => CarOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const LikeWhereUniqueInputSchema: z.ZodType<Prisma.LikeWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => LikeWhereInputSchema),
              z.lazy(() => LikeWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => LikeWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => LikeWhereInputSchema),
              z.lazy(() => LikeWhereInputSchema).array(),
            ])
            .optional(),
          postId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          carId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          post: z
            .union([
              z.lazy(() => PostScalarRelationFilterSchema),
              z.lazy(() => PostWhereInputSchema),
            ])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          car: z
            .union([
              z.lazy(() => CarScalarRelationFilterSchema),
              z.lazy(() => CarWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const LikeOrderByWithAggregationInputSchema: z.ZodType<Prisma.LikeOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      postId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      carId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LikeCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LikeMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LikeMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const LikeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LikeScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LikeScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      postId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      carId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => VerificationTokenWhereInputSchema),
          z.lazy(() => VerificationTokenWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => VerificationTokenWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => VerificationTokenWhereInputSchema),
          z.lazy(() => VerificationTokenWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      identifier: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      expires: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        identifier: z.string(),
        token_identifier: z.lazy(
          () => VerificationTokenTokenIdentifierCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.string(),
        identifier: z.string(),
      }),
      z.object({
        id: z.string(),
        token_identifier: z.lazy(
          () => VerificationTokenTokenIdentifierCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        identifier: z.string(),
        token_identifier: z.lazy(
          () => VerificationTokenTokenIdentifierCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        identifier: z.string(),
      }),
      z.object({
        token_identifier: z.lazy(
          () => VerificationTokenTokenIdentifierCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          identifier: z.string().optional(),
          token_identifier: z
            .lazy(
              () => VerificationTokenTokenIdentifierCompoundUniqueInputSchema,
            )
            .optional(),
          AND: z
            .union([
              z.lazy(() => VerificationTokenWhereInputSchema),
              z.lazy(() => VerificationTokenWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => VerificationTokenWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => VerificationTokenWhereInputSchema),
              z.lazy(() => VerificationTokenWhereInputSchema).array(),
            ])
            .optional(),
          token: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          expires: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        })
        .strict(),
    );

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => VerificationTokenCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => VerificationTokenMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => VerificationTokenMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      identifier: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      token: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      expires: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    provider: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    providerAccountId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    refresh_token: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    access_token: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    expires_at: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    token_type: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    scope: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    id_token: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    session_state: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    userAccounts: z.lazy(() => UserAccountListRelationFilterSchema).optional(),
  })
  .strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      provider: z.lazy(() => SortOrderSchema).optional(),
      providerAccountId: z.lazy(() => SortOrderSchema).optional(),
      refresh_token: z.lazy(() => SortOrderSchema).optional(),
      access_token: z.lazy(() => SortOrderSchema).optional(),
      expires_at: z.lazy(() => SortOrderSchema).optional(),
      token_type: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      id_token: z.lazy(() => SortOrderSchema).optional(),
      session_state: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      userAccounts: z
        .lazy(() => UserAccountOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        provider_providerAccountId: z.lazy(
          () => AccountProviderProviderAccountIdCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        provider_providerAccountId: z.lazy(
          () => AccountProviderProviderAccountIdCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          provider_providerAccountId: z
            .lazy(
              () => AccountProviderProviderAccountIdCompoundUniqueInputSchema,
            )
            .optional(),
          AND: z
            .union([
              z.lazy(() => AccountWhereInputSchema),
              z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => AccountWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => AccountWhereInputSchema),
              z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          type: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          provider: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          providerAccountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          refresh_token: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          access_token: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          expires_at: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
            .optional()
            .nullable(),
          token_type: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          scope: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          id_token: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          session_state: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          userAccounts: z
            .lazy(() => UserAccountListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      provider: z.lazy(() => SortOrderSchema).optional(),
      providerAccountId: z.lazy(() => SortOrderSchema).optional(),
      refresh_token: z.lazy(() => SortOrderSchema).optional(),
      access_token: z.lazy(() => SortOrderSchema).optional(),
      expires_at: z.lazy(() => SortOrderSchema).optional(),
      token_type: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      id_token: z.lazy(() => SortOrderSchema).optional(),
      session_state: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      provider: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      providerAccountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      refresh_token: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountWhereInputSchema: z.ZodType<Prisma.UserAccountWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserAccountWhereInputSchema),
          z.lazy(() => UserAccountWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserAccountWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserAccountWhereInputSchema),
          z.lazy(() => UserAccountWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      user: z
        .union([
          z.lazy(() => UserScalarRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
      account: z
        .union([
          z.lazy(() => AccountScalarRelationFilterSchema),
          z.lazy(() => AccountWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountOrderByWithRelationInputSchema: z.ZodType<Prisma.UserAccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      account: z.lazy(() => AccountOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const UserAccountWhereUniqueInputSchema: z.ZodType<Prisma.UserAccountWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => UserAccountWhereInputSchema),
              z.lazy(() => UserAccountWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => UserAccountWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => UserAccountWhereInputSchema),
              z.lazy(() => UserAccountWhereInputSchema).array(),
            ])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          account: z
            .union([
              z.lazy(() => AccountScalarRelationFilterSchema),
              z.lazy(() => AccountWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const UserAccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserAccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => UserAccountCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => UserAccountMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserAccountMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserAccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserAccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expires: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    sessionToken: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    deviceInfo: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    ipAddress: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      sessionToken: z.lazy(() => SortOrderSchema).optional(),
      deviceInfo: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        sessionToken: z.string(),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        sessionToken: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          sessionToken: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => SessionWhereInputSchema),
              z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => SessionWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => SessionWhereInputSchema),
              z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          expires: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          deviceInfo: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          ipAddress: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      sessionToken: z.lazy(() => SortOrderSchema).optional(),
      deviceInfo: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      expires: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      sessionToken: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      deviceInfo: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => NotificationWhereInputSchema),
          z.lazy(() => NotificationWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => NotificationWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => NotificationWhereInputSchema),
          z.lazy(() => NotificationWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isRead: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      user: z
        .union([
          z.lazy(() => UserScalarRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => NotificationWhereInputSchema),
              z.lazy(() => NotificationWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => NotificationWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => NotificationWhereInputSchema),
              z.lazy(() => NotificationWhereInputSchema).array(),
            ])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          content: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          isRead: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => NotificationCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => NotificationMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => NotificationMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => NotificationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => NotificationScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => NotificationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      isRead: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    emailVerified: z.coerce.date().optional().nullable(),
    username: z.string(),
    password: z.string().optional().nullable(),
    role: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isVerified: z.boolean().optional(),
    oauthOnly: z.boolean().optional(),
    name: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    driversLicense: z.string().optional().nullable(),
    profileImageUrl: z.string().optional().nullable(),
    gender: z.string().optional(),
    dateOfBirth: z.coerce.date().optional().nullable(),
    phone: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
    followers: z
      .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
      .optional(),
    following: z
      .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
      .optional(),
    posts: z.lazy(() => PostCreateNestedManyWithoutUserInputSchema).optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    Account: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    username: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    oauthOnly: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    bio: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    driversLicense: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    profileImageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    gender: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dateOfBirth: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    location: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
    followers: z
      .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
      .optional(),
    following: z
      .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
      .optional(),
    posts: z.lazy(() => PostUpdateManyWithoutUserNestedInputSchema).optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    notifications: z
      .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    Account: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
    })
    .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const CarCreateInputSchema: z.ZodType<Prisma.CarCreateInput> = z
  .object({
    id: z.string().optional(),
    brand: z.string(),
    model: z.string(),
    year: z.number().int(),
    licensePlate: z.string(),
    carImageUrl: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    engineType: z.string().optional().nullable(),
    transmission: z.string().optional().nullable(),
    mileage: z.number().int().optional().nullable(),
    registrationState: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
    likes: z.lazy(() => LikeCreateNestedManyWithoutCarInputSchema).optional(),
  })
  .strict();

export const CarUncheckedCreateInputSchema: z.ZodType<Prisma.CarUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      ownerId: z.string(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutCarInputSchema)
        .optional(),
    })
    .strict();

export const CarUpdateInputSchema: z.ZodType<Prisma.CarUpdateInput> = z
  .object({
    brand: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    model: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    year: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    licensePlate: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    carImageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    color: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    engineType: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    transmission: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    mileage: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    registrationState: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    owner: z
      .lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema)
      .optional(),
    likes: z.lazy(() => LikeUpdateManyWithoutCarNestedInputSchema).optional(),
  })
  .strict();

export const CarUncheckedUpdateInputSchema: z.ZodType<Prisma.CarUncheckedUpdateInput> =
  z
    .object({
      ownerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutCarNestedInputSchema)
        .optional(),
    })
    .strict();

export const CarCreateManyInputSchema: z.ZodType<Prisma.CarCreateManyInput> = z
  .object({
    id: z.string().optional(),
    ownerId: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.number().int(),
    licensePlate: z.string(),
    carImageUrl: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    engineType: z.string().optional().nullable(),
    transmission: z.string().optional().nullable(),
    mileage: z.number().int().optional().nullable(),
    registrationState: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const CarUpdateManyMutationInputSchema: z.ZodType<Prisma.CarUpdateManyMutationInput> =
  z
    .object({
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CarUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyInput> =
  z
    .object({
      ownerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerCreateInputSchema: z.ZodType<Prisma.FollowerCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      follower: z.lazy(() => UserCreateNestedOneWithoutFollowersInputSchema),
      following: z.lazy(() => UserCreateNestedOneWithoutFollowingInputSchema),
    })
    .strict();

export const FollowerUncheckedCreateInputSchema: z.ZodType<Prisma.FollowerUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      followerId: z.string(),
      followingId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerUpdateInputSchema: z.ZodType<Prisma.FollowerUpdateInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      follower: z
        .lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputSchema)
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateInput> =
  z
    .object({
      followerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      followingId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerCreateManyInputSchema: z.ZodType<Prisma.FollowerCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      followerId: z.string(),
      followingId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerUpdateManyMutationInputSchema: z.ZodType<Prisma.FollowerUpdateManyMutationInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateManyInput> =
  z
    .object({
      followerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      followingId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    id: z.string().optional(),
    content: z.string(),
    imageUrl: z.string(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
    likes: z.lazy(() => LikeCreateNestedManyWithoutPostInputSchema).optional(),
  })
  .strict();

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z
  .object({
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    imageUrl: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
      .optional(),
    likes: z.lazy(() => LikeUpdateManyWithoutPostNestedInputSchema).optional(),
  })
  .strict();

export const PostUncheckedUpdateInputSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PostUpdateManyMutationInputSchema: z.ZodType<Prisma.PostUpdateManyMutationInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateInputSchema: z.ZodType<Prisma.LikeCreateInput> = z
  .object({
    id: z.string().optional(),
    post: z.lazy(() => PostCreateNestedOneWithoutLikesInputSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutLikeInputSchema),
    car: z.lazy(() => CarCreateNestedOneWithoutLikesInputSchema),
  })
  .strict();

export const LikeUncheckedCreateInputSchema: z.ZodType<Prisma.LikeUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      userId: z.string(),
      carId: z.string(),
    })
    .strict();

export const LikeUpdateInputSchema: z.ZodType<Prisma.LikeUpdateInput> = z
  .object({
    post: z
      .lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutLikeNestedInputSchema)
      .optional(),
    car: z
      .lazy(() => CarUpdateOneRequiredWithoutLikesNestedInputSchema)
      .optional(),
  })
  .strict();

export const LikeUncheckedUpdateInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateManyInputSchema: z.ZodType<Prisma.LikeCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      userId: z.string(),
      carId: z.string(),
    })
    .strict();

export const LikeUpdateManyMutationInputSchema: z.ZodType<Prisma.LikeUpdateManyMutationInput> =
  z.object({}).strict();

export const LikeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> =
  z
    .object({
      id: z.string().optional(),
      identifier: z.string(),
      token: z.string(),
      expires: z.coerce.date(),
    })
    .strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      identifier: z.string(),
      token: z.string(),
      expires: z.coerce.date(),
    })
    .strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> =
  z
    .object({
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> =
  z
    .object({
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      identifier: z.string(),
      token: z.string(),
      expires: z.coerce.date(),
    })
    .strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> =
  z
    .object({
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> =
  z
    .object({
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().optional().nullable(),
    access_token: z.string().optional().nullable(),
    expires_at: z.number().int().optional().nullable(),
    token_type: z.string().optional().nullable(),
    scope: z.string().optional().nullable(),
    id_token: z.string().optional().nullable(),
    session_state: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountInputSchema),
    userAccounts: z
      .lazy(() => UserAccountCreateNestedManyWithoutAccountInputSchema)
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      userAccounts: z
        .lazy(
          () => UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
    })
    .strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z
  .object({
    type: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    provider: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerAccountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    refresh_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    access_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    expires_at: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    token_type: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    id_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    session_state: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAccountNestedInputSchema)
      .optional(),
    userAccounts: z
      .lazy(() => UserAccountUpdateManyWithoutAccountNestedInputSchema)
      .optional(),
  })
  .strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userAccounts: z
        .lazy(
          () => UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> =
  z
    .object({
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountCreateInputSchema: z.ZodType<Prisma.UserAccountCreateInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
      account: z.lazy(
        () => AccountCreateNestedOneWithoutUserAccountsInputSchema,
      ),
    })
    .strict();

export const UserAccountUncheckedCreateInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      accountId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountUpdateInputSchema: z.ZodType<Prisma.UserAccountUpdateInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema)
        .optional(),
      account: z
        .lazy(
          () => AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountCreateManyInputSchema: z.ZodType<Prisma.UserAccountCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      accountId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountUpdateManyMutationInputSchema: z.ZodType<Prisma.UserAccountUpdateManyMutationInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    expires: z.coerce.date(),
    sessionToken: z.string(),
    deviceInfo: z.string().optional().nullable(),
    ipAddress: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
  })
  .strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      expires: z.coerce.date(),
      sessionToken: z.string(),
      deviceInfo: z.string().optional().nullable(),
      ipAddress: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    expires: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessionToken: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    deviceInfo: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema)
      .optional(),
  })
  .strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      expires: z.coerce.date(),
      sessionToken: z.string(),
      deviceInfo: z.string().optional().nullable(),
      ipAddress: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> =
  z
    .object({
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationCreateInputSchema: z.ZodType<Prisma.NotificationCreateInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputSchema),
    })
    .strict();

export const NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutNotificationsNestedInputSchema)
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationCreateManyInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationUpdateManyMutationInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const CarListRelationFilterSchema: z.ZodType<Prisma.CarListRelationFilter> =
  z
    .object({
      every: z.lazy(() => CarWhereInputSchema).optional(),
      some: z.lazy(() => CarWhereInputSchema).optional(),
      none: z.lazy(() => CarWhereInputSchema).optional(),
    })
    .strict();

export const FollowerListRelationFilterSchema: z.ZodType<Prisma.FollowerListRelationFilter> =
  z
    .object({
      every: z.lazy(() => FollowerWhereInputSchema).optional(),
      some: z.lazy(() => FollowerWhereInputSchema).optional(),
      none: z.lazy(() => FollowerWhereInputSchema).optional(),
    })
    .strict();

export const PostListRelationFilterSchema: z.ZodType<Prisma.PostListRelationFilter> =
  z
    .object({
      every: z.lazy(() => PostWhereInputSchema).optional(),
      some: z.lazy(() => PostWhereInputSchema).optional(),
      none: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SessionWhereInputSchema).optional(),
      some: z.lazy(() => SessionWhereInputSchema).optional(),
      none: z.lazy(() => SessionWhereInputSchema).optional(),
    })
    .strict();

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> =
  z
    .object({
      every: z.lazy(() => NotificationWhereInputSchema).optional(),
      some: z.lazy(() => NotificationWhereInputSchema).optional(),
      none: z.lazy(() => NotificationWhereInputSchema).optional(),
    })
    .strict();

export const UserAccountListRelationFilterSchema: z.ZodType<Prisma.UserAccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => UserAccountWhereInputSchema).optional(),
      some: z.lazy(() => UserAccountWhereInputSchema).optional(),
      none: z.lazy(() => UserAccountWhereInputSchema).optional(),
    })
    .strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AccountWhereInputSchema).optional(),
      some: z.lazy(() => AccountWhereInputSchema).optional(),
      none: z.lazy(() => AccountWhereInputSchema).optional(),
    })
    .strict();

export const LikeListRelationFilterSchema: z.ZodType<Prisma.LikeListRelationFilter> =
  z
    .object({
      every: z.lazy(() => LikeWhereInputSchema).optional(),
      some: z.lazy(() => LikeWhereInputSchema).optional(),
      none: z.lazy(() => LikeWhereInputSchema).optional(),
    })
    .strict();

export const CarOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CarOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FollowerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FollowerOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserAccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserAccountOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LikeOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isVerified: z.lazy(() => SortOrderSchema).optional(),
      oauthOnly: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      driversLicense: z.lazy(() => SortOrderSchema).optional(),
      profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isVerified: z.lazy(() => SortOrderSchema).optional(),
      oauthOnly: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      driversLicense: z.lazy(() => SortOrderSchema).optional(),
      profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isVerified: z.lazy(() => SortOrderSchema).optional(),
      oauthOnly: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      driversLicense: z.lazy(() => SortOrderSchema).optional(),
      profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
      gender: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
    isSet: z.boolean().optional(),
  })
  .strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => UserWhereInputSchema).optional(),
      isNot: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const CarCountOrderByAggregateInputSchema: z.ZodType<Prisma.CarCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ownerId: z.lazy(() => SortOrderSchema).optional(),
      brand: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      year: z.lazy(() => SortOrderSchema).optional(),
      licensePlate: z.lazy(() => SortOrderSchema).optional(),
      carImageUrl: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      engineType: z.lazy(() => SortOrderSchema).optional(),
      transmission: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
      registrationState: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CarAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CarAvgOrderByAggregateInput> =
  z
    .object({
      year: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CarMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CarMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ownerId: z.lazy(() => SortOrderSchema).optional(),
      brand: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      year: z.lazy(() => SortOrderSchema).optional(),
      licensePlate: z.lazy(() => SortOrderSchema).optional(),
      carImageUrl: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      engineType: z.lazy(() => SortOrderSchema).optional(),
      transmission: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
      registrationState: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CarMinOrderByAggregateInputSchema: z.ZodType<Prisma.CarMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ownerId: z.lazy(() => SortOrderSchema).optional(),
      brand: z.lazy(() => SortOrderSchema).optional(),
      model: z.lazy(() => SortOrderSchema).optional(),
      year: z.lazy(() => SortOrderSchema).optional(),
      licensePlate: z.lazy(() => SortOrderSchema).optional(),
      carImageUrl: z.lazy(() => SortOrderSchema).optional(),
      color: z.lazy(() => SortOrderSchema).optional(),
      engineType: z.lazy(() => SortOrderSchema).optional(),
      transmission: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
      registrationState: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CarSumOrderByAggregateInputSchema: z.ZodType<Prisma.CarSumOrderByAggregateInput> =
  z
    .object({
      year: z.lazy(() => SortOrderSchema).optional(),
      mileage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const FollowerCountOrderByAggregateInputSchema: z.ZodType<Prisma.FollowerCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      followerId: z.lazy(() => SortOrderSchema).optional(),
      followingId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FollowerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FollowerMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      followerId: z.lazy(() => SortOrderSchema).optional(),
      followingId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FollowerMinOrderByAggregateInputSchema: z.ZodType<Prisma.FollowerMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      followerId: z.lazy(() => SortOrderSchema).optional(),
      followingId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostScalarRelationFilterSchema: z.ZodType<Prisma.PostScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => PostWhereInputSchema).optional(),
      isNot: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const CarScalarRelationFilterSchema: z.ZodType<Prisma.CarScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => CarWhereInputSchema).optional(),
      isNot: z.lazy(() => CarWhereInputSchema).optional(),
    })
    .strict();

export const LikeCountOrderByAggregateInputSchema: z.ZodType<Prisma.LikeCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      postId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      carId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LikeMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      postId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      carId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeMinOrderByAggregateInputSchema: z.ZodType<Prisma.LikeMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      postId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      carId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationTokenTokenIdentifierCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenTokenIdentifierCompoundUniqueInput> =
  z
    .object({
      token: z.string(),
      identifier: z.string(),
    })
    .strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> =
  z
    .object({
      provider: z.string(),
      providerAccountId: z.string(),
    })
    .strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      provider: z.lazy(() => SortOrderSchema).optional(),
      providerAccountId: z.lazy(() => SortOrderSchema).optional(),
      refresh_token: z.lazy(() => SortOrderSchema).optional(),
      access_token: z.lazy(() => SortOrderSchema).optional(),
      expires_at: z.lazy(() => SortOrderSchema).optional(),
      token_type: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      id_token: z.lazy(() => SortOrderSchema).optional(),
      session_state: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> =
  z
    .object({
      expires_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      provider: z.lazy(() => SortOrderSchema).optional(),
      providerAccountId: z.lazy(() => SortOrderSchema).optional(),
      refresh_token: z.lazy(() => SortOrderSchema).optional(),
      access_token: z.lazy(() => SortOrderSchema).optional(),
      expires_at: z.lazy(() => SortOrderSchema).optional(),
      token_type: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      id_token: z.lazy(() => SortOrderSchema).optional(),
      session_state: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      provider: z.lazy(() => SortOrderSchema).optional(),
      providerAccountId: z.lazy(() => SortOrderSchema).optional(),
      refresh_token: z.lazy(() => SortOrderSchema).optional(),
      access_token: z.lazy(() => SortOrderSchema).optional(),
      expires_at: z.lazy(() => SortOrderSchema).optional(),
      token_type: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      id_token: z.lazy(() => SortOrderSchema).optional(),
      session_state: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> =
  z
    .object({
      expires_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountScalarRelationFilterSchema: z.ZodType<Prisma.AccountScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => AccountWhereInputSchema).optional(),
      isNot: z.lazy(() => AccountWhereInputSchema).optional(),
    })
    .strict();

export const UserAccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserAccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserAccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      sessionToken: z.lazy(() => SortOrderSchema).optional(),
      deviceInfo: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      sessionToken: z.lazy(() => SortOrderSchema).optional(),
      deviceInfo: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      sessionToken: z.lazy(() => SortOrderSchema).optional(),
      deviceInfo: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CarCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutOwnerInputSchema),
          z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CarCreateManyOwnerInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerCreateNestedManyWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerCreateNestedManyWithoutFollowerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowerInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerCreateNestedManyWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerCreateNestedManyWithoutFollowingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowingInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutUserInputSchema),
          z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),
          z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => NotificationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => NotificationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutUserInputSchema),
          z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CarUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutOwnerInputSchema),
          z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CarCreateManyOwnerInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUncheckedCreateNestedManyWithoutFollowerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowerInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUncheckedCreateNestedManyWithoutFollowingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowingInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutUserInputSchema),
          z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),
          z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => NotificationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => NotificationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutUserInputSchema),
          z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional().nullable(),
      unset: z.boolean().optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
      unset: z.boolean().optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();

export const CarUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CarUpdateManyWithoutOwnerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutOwnerInputSchema),
          z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema),
          z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CarCreateManyOwnerInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema),
          z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema),
          z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CarScalarWhereInputSchema),
          z.lazy(() => CarScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUpdateManyWithoutFollowerNestedInputSchema: z.ZodType<Prisma.FollowerUpdateManyWithoutFollowerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FollowerUpsertWithWhereUniqueWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpsertWithWhereUniqueWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowerInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FollowerUpdateWithWhereUniqueWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpdateWithWhereUniqueWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FollowerUpdateManyWithWhereWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpdateManyWithWhereWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUpdateManyWithoutFollowingNestedInputSchema: z.ZodType<Prisma.FollowerUpdateManyWithoutFollowingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => FollowerUpsertWithWhereUniqueWithoutFollowingInputSchema,
          ),
          z
            .lazy(
              () => FollowerUpsertWithWhereUniqueWithoutFollowingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowingInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => FollowerUpdateWithWhereUniqueWithoutFollowingInputSchema,
          ),
          z
            .lazy(
              () => FollowerUpdateWithWhereUniqueWithoutFollowingInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FollowerUpdateManyWithWhereWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUpdateManyWithWhereWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PostUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutUserInputSchema),
          z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),
          z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => NotificationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => NotificationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => NotificationScalarWhereInputSchema),
          z.lazy(() => NotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutUserInputSchema),
          z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.LikeUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CarUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyWithoutOwnerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutOwnerInputSchema),
          z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),
          z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema),
          z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CarCreateManyOwnerInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CarWhereUniqueInputSchema),
          z.lazy(() => CarWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema),
          z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema),
          z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CarScalarWhereInputSchema),
          z.lazy(() => CarScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateManyWithoutFollowerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowerInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FollowerUpsertWithWhereUniqueWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpsertWithWhereUniqueWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowerInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FollowerUpdateWithWhereUniqueWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpdateWithWhereUniqueWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FollowerUpdateManyWithWhereWithoutFollowerInputSchema),
          z
            .lazy(() => FollowerUpdateManyWithWhereWithoutFollowerInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateManyWithoutFollowingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
          z.lazy(() => FollowerCreateWithoutFollowingInputSchema).array(),
          z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerCreateOrConnectWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => FollowerUpsertWithWhereUniqueWithoutFollowingInputSchema,
          ),
          z
            .lazy(
              () => FollowerUpsertWithWhereUniqueWithoutFollowingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FollowerCreateManyFollowingInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FollowerWhereUniqueInputSchema),
          z.lazy(() => FollowerWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => FollowerUpdateWithWhereUniqueWithoutFollowingInputSchema,
          ),
          z
            .lazy(
              () => FollowerUpdateWithWhereUniqueWithoutFollowingInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FollowerUpdateManyWithWhereWithoutFollowingInputSchema),
          z
            .lazy(() => FollowerUpdateManyWithWhereWithoutFollowingInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NotificationCreateWithoutUserInputSchema),
          z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),
          z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => NotificationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => NotificationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => NotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => NotificationWhereUniqueInputSchema),
          z.lazy(() => NotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => NotificationScalarWhereInputSchema),
          z.lazy(() => NotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutUserInputSchema),
          z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCarsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCarsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCarsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const LikeCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.LikeCreateNestedManyWithoutCarInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutCarInputSchema),
          z.lazy(() => LikeCreateWithoutCarInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LikeCreateManyCarInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutCarInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutCarInputSchema),
          z.lazy(() => LikeCreateWithoutCarInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LikeCreateManyCarInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional().nullable(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
      unset: z.boolean().optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCarsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCarsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCarsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCarsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutCarsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutCarsInputSchema),
          z.lazy(() => UserUpdateWithoutCarsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.LikeUpdateManyWithoutCarNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutCarInputSchema),
          z.lazy(() => LikeCreateWithoutCarInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutCarInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutCarInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LikeCreateManyCarInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutCarInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutCarInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutCarInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutCarInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutCarNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutCarInputSchema),
          z.lazy(() => LikeCreateWithoutCarInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutCarInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutCarInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutCarInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => LikeCreateManyCarInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutCarInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutCarInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutCarInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutCarInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutFollowersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowersInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowersInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowersInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutFollowingInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowingInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowingInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowersInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowersInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowersInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutFollowersInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutFollowersInputSchema),
          z.lazy(() => UserUpdateWithoutFollowersInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFollowersInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowingNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowingInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowingInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutFollowingInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutFollowingInputSchema),
          z.lazy(() => UserUpdateWithoutFollowingInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFollowingInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const LikeCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutPostsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutPostsInputSchema),
          z.lazy(() => UserUpdateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.LikeUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostCreateNestedOneWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutLikesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutLikeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLikeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutLikeInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutLikeInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutLikeInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const CarCreateNestedOneWithoutLikesInputSchema: z.ZodType<Prisma.CarCreateNestedOneWithoutLikesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutLikesInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CarCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
    })
    .strict();

export const PostUpdateOneRequiredWithoutLikesNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      upsert: z.lazy(() => PostUpsertWithoutLikesInputSchema).optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateToOneWithWhereWithoutLikesInputSchema),
          z.lazy(() => PostUpdateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutLikeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLikeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutLikeInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutLikeInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutLikeInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutLikeInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutLikeInputSchema),
          z.lazy(() => UserUpdateWithoutLikeInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutLikeInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CarUpdateOneRequiredWithoutLikesNestedInputSchema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutLikesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CarCreateWithoutLikesInputSchema),
          z.lazy(() => CarUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CarCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      upsert: z.lazy(() => CarUpsertWithoutLikesInputSchema).optional(),
      connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => CarUpdateToOneWithWhereWithoutLikesInputSchema),
          z.lazy(() => CarUpdateWithoutLikesInputSchema),
          z.lazy(() => CarUncheckedUpdateWithoutLikesInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserAccountCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutAccountInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutAccountInputSchema),
          z.lazy(() => UserUpdateWithoutAccountInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
          z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),
          z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserAccountWhereUniqueInputSchema),
          z.lazy(() => UserAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema),
          z
            .lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const AccountCreateNestedOneWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutUserAccountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutUserAccountsInputSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),
          z.lazy(() => UserUpdateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutUserAccountsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutUserAccountsInputSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountUpsertWithoutUserAccountsInputSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => AccountUpdateToOneWithWhereWithoutUserAccountsInputSchema,
          ),
          z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),
          z.lazy(() => UserUpdateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutNotificationsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutNotificationsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutNotificationsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationsInputSchema),
          z.lazy(() => UserUpdateWithoutNotificationsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
        .optional()
        .nullable(),
      isSet: z.boolean().optional(),
    })
    .strict();

export const CarCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateWithoutOwnerInput> =
  z
    .object({
      id: z.string().optional(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      likes: z.lazy(() => LikeCreateNestedManyWithoutCarInputSchema).optional(),
    })
    .strict();

export const CarUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutOwnerInput> =
  z
    .object({
      id: z.string().optional(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutCarInputSchema)
        .optional(),
    })
    .strict();

export const CarCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => CarWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CarCreateWithoutOwnerInputSchema),
        z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
      ]),
    })
    .strict();

export const CarCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.CarCreateManyOwnerInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CarCreateManyOwnerInputSchema),
        z.lazy(() => CarCreateManyOwnerInputSchema).array(),
      ]),
    })
    .strict();

export const FollowerCreateWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerCreateWithoutFollowerInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      following: z.lazy(() => UserCreateNestedOneWithoutFollowingInputSchema),
    })
    .strict();

export const FollowerUncheckedCreateWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUncheckedCreateWithoutFollowerInput> =
  z
    .object({
      id: z.string().optional(),
      followingId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerCreateOrConnectWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerCreateOrConnectWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
        z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
      ]),
    })
    .strict();

export const FollowerCreateManyFollowerInputEnvelopeSchema: z.ZodType<Prisma.FollowerCreateManyFollowerInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FollowerCreateManyFollowerInputSchema),
        z.lazy(() => FollowerCreateManyFollowerInputSchema).array(),
      ]),
    })
    .strict();

export const FollowerCreateWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerCreateWithoutFollowingInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      follower: z.lazy(() => UserCreateNestedOneWithoutFollowersInputSchema),
    })
    .strict();

export const FollowerUncheckedCreateWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUncheckedCreateWithoutFollowingInput> =
  z
    .object({
      id: z.string().optional(),
      followerId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerCreateOrConnectWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerCreateOrConnectWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
        z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const FollowerCreateManyFollowingInputEnvelopeSchema: z.ZodType<Prisma.FollowerCreateManyFollowingInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FollowerCreateManyFollowingInputSchema),
        z.lazy(() => FollowerCreateManyFollowingInputSchema).array(),
      ]),
    })
    .strict();

export const PostCreateWithoutUserInputSchema: z.ZodType<Prisma.PostCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PostCreateManyUserInputSchema),
        z.lazy(() => PostCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      expires: z.coerce.date(),
      sessionToken: z.string(),
      deviceInfo: z.string().optional().nullable(),
      ipAddress: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      expires: z.coerce.date(),
      sessionToken: z.string(),
      deviceInfo: z.string().optional().nullable(),
      ipAddress: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SessionCreateManyUserInputSchema),
        z.lazy(() => SessionCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const NotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const NotificationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const NotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutUserInputSchema),
        z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const NotificationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => NotificationCreateManyUserInputSchema),
        z.lazy(() => NotificationCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const UserAccountCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      account: z.lazy(
        () => AccountCreateNestedOneWithoutUserAccountsInputSchema,
      ),
    })
    .strict();

export const UserAccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      accountId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserAccountCreateWithoutUserInputSchema),
        z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const UserAccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserAccountCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => UserAccountCreateManyUserInputSchema),
        z.lazy(() => UserAccountCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      userAccounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutAccountInputSchema)
        .optional(),
    })
    .strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      userAccounts: z
        .lazy(
          () => UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
    })
    .strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AccountCreateManyUserInputSchema),
        z.lazy(() => AccountCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const LikeCreateWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      post: z.lazy(() => PostCreateNestedOneWithoutLikesInputSchema),
      car: z.lazy(() => CarCreateNestedOneWithoutLikesInputSchema),
    })
    .strict();

export const LikeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      carId: z.string(),
    })
    .strict();

export const LikeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LikeCreateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.LikeCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LikeCreateManyUserInputSchema),
        z.lazy(() => LikeCreateManyUserInputSchema).array(),
      ]),
    })
    .strict();

export const CarUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpsertWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => CarWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CarUpdateWithoutOwnerInputSchema),
        z.lazy(() => CarUncheckedUpdateWithoutOwnerInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CarCreateWithoutOwnerInputSchema),
        z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),
      ]),
    })
    .strict();

export const CarUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateWithWhereUniqueWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => CarWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CarUpdateWithoutOwnerInputSchema),
        z.lazy(() => CarUncheckedUpdateWithoutOwnerInputSchema),
      ]),
    })
    .strict();

export const CarUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateManyWithWhereWithoutOwnerInput> =
  z
    .object({
      where: z.lazy(() => CarScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CarUpdateManyMutationInputSchema),
        z.lazy(() => CarUncheckedUpdateManyWithoutOwnerInputSchema),
      ]),
    })
    .strict();

export const CarScalarWhereInputSchema: z.ZodType<Prisma.CarScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CarScalarWhereInputSchema),
          z.lazy(() => CarScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CarScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CarScalarWhereInputSchema),
          z.lazy(() => CarScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      ownerId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      brand: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      model: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      year: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      licensePlate: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      carImageUrl: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      color: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      engineType: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      transmission: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      mileage: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      registrationState: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      description: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const FollowerUpsertWithWhereUniqueWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUpsertWithWhereUniqueWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FollowerUpdateWithoutFollowerInputSchema),
        z.lazy(() => FollowerUncheckedUpdateWithoutFollowerInputSchema),
      ]),
      create: z.union([
        z.lazy(() => FollowerCreateWithoutFollowerInputSchema),
        z.lazy(() => FollowerUncheckedCreateWithoutFollowerInputSchema),
      ]),
    })
    .strict();

export const FollowerUpdateWithWhereUniqueWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUpdateWithWhereUniqueWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FollowerUpdateWithoutFollowerInputSchema),
        z.lazy(() => FollowerUncheckedUpdateWithoutFollowerInputSchema),
      ]),
    })
    .strict();

export const FollowerUpdateManyWithWhereWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUpdateManyWithWhereWithoutFollowerInput> =
  z
    .object({
      where: z.lazy(() => FollowerScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FollowerUpdateManyMutationInputSchema),
        z.lazy(() => FollowerUncheckedUpdateManyWithoutFollowerInputSchema),
      ]),
    })
    .strict();

export const FollowerScalarWhereInputSchema: z.ZodType<Prisma.FollowerScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => FollowerScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FollowerScalarWhereInputSchema),
          z.lazy(() => FollowerScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      followerId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      followingId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const FollowerUpsertWithWhereUniqueWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUpsertWithWhereUniqueWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FollowerUpdateWithoutFollowingInputSchema),
        z.lazy(() => FollowerUncheckedUpdateWithoutFollowingInputSchema),
      ]),
      create: z.union([
        z.lazy(() => FollowerCreateWithoutFollowingInputSchema),
        z.lazy(() => FollowerUncheckedCreateWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const FollowerUpdateWithWhereUniqueWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUpdateWithWhereUniqueWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowerWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FollowerUpdateWithoutFollowingInputSchema),
        z.lazy(() => FollowerUncheckedUpdateWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const FollowerUpdateManyWithWhereWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUpdateManyWithWhereWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => FollowerScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FollowerUpdateManyMutationInputSchema),
        z.lazy(() => FollowerUncheckedUpdateManyWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const PostUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PostUpdateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PostUpdateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PostUpdateManyMutationInputSchema),
        z.lazy(() => PostUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostScalarWhereInputSchema: z.ZodType<Prisma.PostScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PostScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      imageUrl: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateManyMutationInputSchema),
        z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SessionScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      expires: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      sessionToken: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      deviceInfo: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      ipAddress: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const NotificationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => NotificationUpdateWithoutUserInputSchema),
        z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => NotificationCreateWithoutUserInputSchema),
        z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const NotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateWithoutUserInputSchema),
        z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const NotificationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => NotificationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => NotificationUpdateManyMutationInputSchema),
        z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => NotificationScalarWhereInputSchema),
          z.lazy(() => NotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => NotificationScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => NotificationScalarWhereInputSchema),
          z.lazy(() => NotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isRead: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const UserAccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => UserAccountUpdateWithoutUserInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserAccountCreateWithoutUserInputSchema),
        z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const UserAccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => UserAccountUpdateWithoutUserInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const UserAccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserAccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => UserAccountUpdateManyMutationInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const UserAccountScalarWhereInputSchema: z.ZodType<Prisma.UserAccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserAccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserAccountScalarWhereInputSchema),
          z.lazy(() => UserAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AccountUpdateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateManyMutationInputSchema),
        z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      provider: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      providerAccountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      refresh_token: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      access_token: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      expires_at: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      token_type: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      scope: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      id_token: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      session_state: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const LikeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LikeUpdateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LikeCreateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateManyMutationInputSchema),
        z.lazy(() => LikeUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeScalarWhereInputSchema: z.ZodType<Prisma.LikeScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LikeScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      postId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      carId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    })
    .strict();

export const UserCreateWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateWithoutCarsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutCarsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCarsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCarsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCarsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema),
      ]),
    })
    .strict();

export const LikeCreateWithoutCarInputSchema: z.ZodType<Prisma.LikeCreateWithoutCarInput> =
  z
    .object({
      id: z.string().optional(),
      post: z.lazy(() => PostCreateNestedOneWithoutLikesInputSchema),
      user: z.lazy(() => UserCreateNestedOneWithoutLikeInputSchema),
    })
    .strict();

export const LikeUncheckedCreateWithoutCarInputSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutCarInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      userId: z.string(),
    })
    .strict();

export const LikeCreateOrConnectWithoutCarInputSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutCarInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LikeCreateWithoutCarInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
      ]),
    })
    .strict();

export const LikeCreateManyCarInputEnvelopeSchema: z.ZodType<Prisma.LikeCreateManyCarInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LikeCreateManyCarInputSchema),
        z.lazy(() => LikeCreateManyCarInputSchema).array(),
      ]),
    })
    .strict();

export const UserUpsertWithoutCarsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCarsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutCarsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutCarsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutCarsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCarsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutCarsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutCarsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCarsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutCarsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCarsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUpsertWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutCarInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LikeUpdateWithoutCarInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutCarInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LikeCreateWithoutCarInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutCarInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutCarInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateWithoutCarInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutCarInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateManyWithWhereWithoutCarInputSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutCarInput> =
  z
    .object({
      where: z.lazy(() => LikeScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateManyMutationInputSchema),
        z.lazy(() => LikeUncheckedUpdateManyWithoutCarInputSchema),
      ]),
    })
    .strict();

export const UserCreateWithoutFollowersInputSchema: z.ZodType<Prisma.UserCreateWithoutFollowersInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutFollowersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFollowersInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutFollowersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowersInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowersInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowersInputSchema),
      ]),
    })
    .strict();

export const UserCreateWithoutFollowingInputSchema: z.ZodType<Prisma.UserCreateWithoutFollowingInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutFollowingInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFollowingInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutFollowingInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowingInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutFollowersInputSchema: z.ZodType<Prisma.UserUpsertWithoutFollowersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutFollowersInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFollowersInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowersInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowersInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutFollowersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowersInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutFollowersInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFollowersInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutFollowersInputSchema: z.ZodType<Prisma.UserUpdateWithoutFollowersInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutFollowersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFollowersInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUpsertWithoutFollowingInputSchema: z.ZodType<Prisma.UserUpsertWithoutFollowingInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutFollowingInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFollowingInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutFollowingInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutFollowingInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutFollowingInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowingInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutFollowingInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFollowingInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutFollowingInputSchema: z.ZodType<Prisma.UserUpdateWithoutFollowingInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutFollowingInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFollowingInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
      ]),
    })
    .strict();

export const LikeCreateWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateWithoutPostInput> =
  z
    .object({
      id: z.string().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutLikeInputSchema),
      car: z.lazy(() => CarCreateNestedOneWithoutLikesInputSchema),
    })
    .strict();

export const LikeUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutPostInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      carId: z.string(),
    })
    .strict();

export const LikeCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LikeCreateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.LikeCreateManyPostInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LikeCreateManyPostInputSchema),
        z.lazy(() => LikeCreateManyPostInputSchema).array(),
      ]),
    })
    .strict();

export const UserUpsertWithoutPostsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPostsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LikeUpdateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutPostInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LikeCreateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateManyMutationInputSchema),
        z.lazy(() => LikeUncheckedUpdateManyWithoutPostInputSchema),
      ]),
    })
    .strict();

export const PostCreateWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateWithoutLikesInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
    })
    .strict();

export const PostUncheckedCreateWithoutLikesInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutLikesInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const UserCreateWithoutLikeInputSchema: z.ZodType<Prisma.UserCreateWithoutLikeInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutLikeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutLikeInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutLikeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLikeInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutLikeInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutLikeInputSchema),
      ]),
    })
    .strict();

export const CarCreateWithoutLikesInputSchema: z.ZodType<Prisma.CarCreateWithoutLikesInput> =
  z
    .object({
      id: z.string().optional(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
    })
    .strict();

export const CarUncheckedCreateWithoutLikesInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutLikesInput> =
  z
    .object({
      id: z.string().optional(),
      ownerId: z.string(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const CarCreateOrConnectWithoutLikesInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => CarWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CarCreateWithoutLikesInputSchema),
        z.lazy(() => CarUncheckedCreateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const PostUpsertWithoutLikesInputSchema: z.ZodType<Prisma.PostUpsertWithoutLikesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PostUpdateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
      ]),
      where: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const PostUpdateToOneWithWhereWithoutLikesInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => PostWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PostUpdateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithoutLikesInputSchema: z.ZodType<Prisma.PostUpdateWithoutLikesInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutLikesInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutLikesInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpsertWithoutLikeInputSchema: z.ZodType<Prisma.UserUpsertWithoutLikeInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutLikeInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLikeInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutLikeInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutLikeInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutLikeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLikeInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutLikeInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLikeInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutLikeInputSchema: z.ZodType<Prisma.UserUpdateWithoutLikeInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutLikeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutLikeInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const CarUpsertWithoutLikesInputSchema: z.ZodType<Prisma.CarUpsertWithoutLikesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => CarUpdateWithoutLikesInputSchema),
        z.lazy(() => CarUncheckedUpdateWithoutLikesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CarCreateWithoutLikesInputSchema),
        z.lazy(() => CarUncheckedCreateWithoutLikesInputSchema),
      ]),
      where: z.lazy(() => CarWhereInputSchema).optional(),
    })
    .strict();

export const CarUpdateToOneWithWhereWithoutLikesInputSchema: z.ZodType<Prisma.CarUpdateToOneWithWhereWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => CarWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => CarUpdateWithoutLikesInputSchema),
        z.lazy(() => CarUncheckedUpdateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const CarUpdateWithoutLikesInputSchema: z.ZodType<Prisma.CarUpdateWithoutLikesInput> =
  z
    .object({
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      owner: z
        .lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema)
        .optional(),
    })
    .strict();

export const CarUncheckedUpdateWithoutLikesInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutLikesInput> =
  z
    .object({
      ownerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserAccountCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
    })
    .strict();

export const UserAccountUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
        z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserAccountCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.UserAccountCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => UserAccountCreateManyAccountInputSchema),
        z.lazy(() => UserAccountCreateManyAccountInputSchema).array(),
      ]),
    })
    .strict();

export const UserUpsertWithoutAccountInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutAccountInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutAccountInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => UserAccountUpdateWithoutAccountInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateWithoutAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserAccountCreateWithoutAccountInputSchema),
        z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserAccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => UserAccountUpdateWithoutAccountInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserAccountUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => UserAccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => UserAccountUpdateManyMutationInputSchema),
        z.lazy(() => UserAccountUncheckedUpdateManyWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export const AccountCreateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserAccountsInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutAccountInputSchema),
    })
    .strict();

export const AccountUncheckedCreateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserAccountsInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const AccountCreateOrConnectWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserAccountsInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const AccountUpsertWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpsertWithoutUserAccountsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema),
      ]),
      where: z.lazy(() => AccountWhereInputSchema).optional(),
    })
    .strict();

export const AccountUpdateToOneWithWhereWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutUserAccountsInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema),
      ]),
    })
    .strict();

export const AccountUpdateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserAccountsInput> =
  z
    .object({
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserAccountsInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      notifications: z
        .lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutNotificationsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
      followers: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerCreateNestedManyWithoutFollowingInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      emailVerified: z.coerce.date().optional().nullable(),
      username: z.string(),
      password: z.string().optional().nullable(),
      role: z.string().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isVerified: z.boolean().optional(),
      oauthOnly: z.boolean().optional(),
      name: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      driversLicense: z.string().optional().nullable(),
      profileImageUrl: z.string().optional().nullable(),
      gender: z.string().optional(),
      dateOfBirth: z.coerce.date().optional().nullable(),
      phone: z.string().optional().nullable(),
      location: z.string().optional().nullable(),
      cars: z
        .lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedCreateNestedManyWithoutFollowerInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedCreateNestedManyWithoutFollowingInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutNotificationsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutNotificationsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutNotificationsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutNotificationsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutNotificationsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
      followers: z
        .lazy(() => FollowerUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(() => FollowerUpdateManyWithoutFollowingNestedInputSchema)
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput> =
  z
    .object({
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      oauthOnly: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      driversLicense: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      profileImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      gender: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      location: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      cars: z
        .lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema)
        .optional(),
      followers: z
        .lazy(() => FollowerUncheckedUpdateManyWithoutFollowerNestedInputSchema)
        .optional(),
      following: z
        .lazy(
          () => FollowerUncheckedUpdateManyWithoutFollowingNestedInputSchema,
        )
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Account: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      Like: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const CarCreateManyOwnerInputSchema: z.ZodType<Prisma.CarCreateManyOwnerInput> =
  z
    .object({
      id: z.string().optional(),
      brand: z.string(),
      model: z.string(),
      year: z.number().int(),
      licensePlate: z.string(),
      carImageUrl: z.string().optional().nullable(),
      color: z.string().optional().nullable(),
      engineType: z.string().optional().nullable(),
      transmission: z.string().optional().nullable(),
      mileage: z.number().int().optional().nullable(),
      registrationState: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerCreateManyFollowerInputSchema: z.ZodType<Prisma.FollowerCreateManyFollowerInput> =
  z
    .object({
      id: z.string().optional(),
      followingId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const FollowerCreateManyFollowingInputSchema: z.ZodType<Prisma.FollowerCreateManyFollowingInput> =
  z
    .object({
      id: z.string().optional(),
      followerId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PostCreateManyUserInputSchema: z.ZodType<Prisma.PostCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      imageUrl: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      expires: z.coerce.date(),
      sessionToken: z.string(),
      deviceInfo: z.string().optional().nullable(),
      ipAddress: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const NotificationCreateManyUserInputSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      content: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountCreateManyUserInputSchema: z.ZodType<Prisma.UserAccountCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      accountId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      type: z.string(),
      provider: z.string(),
      providerAccountId: z.string(),
      refresh_token: z.string().optional().nullable(),
      access_token: z.string().optional().nullable(),
      expires_at: z.number().int().optional().nullable(),
      token_type: z.string().optional().nullable(),
      scope: z.string().optional().nullable(),
      id_token: z.string().optional().nullable(),
      session_state: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const LikeCreateManyUserInputSchema: z.ZodType<Prisma.LikeCreateManyUserInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      carId: z.string(),
    })
    .strict();

export const CarUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateWithoutOwnerInput> =
  z
    .object({
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z.lazy(() => LikeUpdateManyWithoutCarNestedInputSchema).optional(),
    })
    .strict();

export const CarUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutOwnerInput> =
  z
    .object({
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutCarNestedInputSchema)
        .optional(),
    })
    .strict();

export const CarUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyWithoutOwnerInput> =
  z
    .object({
      brand: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      model: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      year: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      licensePlate: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carImageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      color: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      engineType: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      transmission: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      mileage: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      registrationState: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      description: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerUpdateWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUpdateWithoutFollowerInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      following: z
        .lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputSchema)
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateWithoutFollowerInput> =
  z
    .object({
      followingId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateManyWithoutFollowerInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateManyWithoutFollowerInput> =
  z
    .object({
      followingId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerUpdateWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUpdateWithoutFollowingInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      follower: z
        .lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputSchema)
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateWithoutFollowingInput> =
  z
    .object({
      followerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const FollowerUncheckedUpdateManyWithoutFollowingInputSchema: z.ZodType<Prisma.FollowerUncheckedUpdateManyWithoutFollowingInput> =
  z
    .object({
      followerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUpdateWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> =
  z
    .object({
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> =
  z
    .object({
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      expires: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessionToken: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      deviceInfo: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NotificationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isRead: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateWithoutUserInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () => AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutUserInput> =
  z
    .object({
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> =
  z
    .object({
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userAccounts: z
        .lazy(() => UserAccountUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> =
  z
    .object({
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userAccounts: z
        .lazy(
          () => UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      provider: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerAccountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      refresh_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      access_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      expires_at: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      token_type: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      id_token: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      session_state: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateWithoutUserInput> =
  z
    .object({
      post: z
        .lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
      car: z
        .lazy(() => CarUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutUserInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateManyCarInputSchema: z.ZodType<Prisma.LikeCreateManyCarInput> =
  z
    .object({
      id: z.string().optional(),
      postId: z.string(),
      userId: z.string(),
    })
    .strict();

export const LikeUpdateWithoutCarInputSchema: z.ZodType<Prisma.LikeUpdateWithoutCarInput> =
  z
    .object({
      post: z
        .lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutLikeNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateWithoutCarInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutCarInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutCarInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutCarInput> =
  z
    .object({
      postId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateManyPostInputSchema: z.ZodType<Prisma.LikeCreateManyPostInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      carId: z.string(),
    })
    .strict();

export const LikeUpdateWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateWithoutPostInput> =
  z
    .object({
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutLikeNestedInputSchema)
        .optional(),
      car: z
        .lazy(() => CarUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutPostInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      carId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountCreateManyAccountInputSchema: z.ZodType<Prisma.UserAccountCreateManyAccountInput> =
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const UserAccountUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateWithoutAccountInput> =
  z
    .object({
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserAccountUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutAccountInput> =
  z
    .object({
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const CarFindFirstArgsSchema: z.ZodType<Prisma.CarFindFirstArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    where: CarWhereInputSchema.optional(),
    orderBy: z
      .union([
        CarOrderByWithRelationInputSchema.array(),
        CarOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: CarWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([CarScalarFieldEnumSchema, CarScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const CarFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CarFindFirstOrThrowArgs> =
  z
    .object({
      select: CarSelectSchema.optional(),
      include: CarIncludeSchema.optional(),
      where: CarWhereInputSchema.optional(),
      orderBy: z
        .union([
          CarOrderByWithRelationInputSchema.array(),
          CarOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CarWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([CarScalarFieldEnumSchema, CarScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const CarFindManyArgsSchema: z.ZodType<Prisma.CarFindManyArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    where: CarWhereInputSchema.optional(),
    orderBy: z
      .union([
        CarOrderByWithRelationInputSchema.array(),
        CarOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: CarWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([CarScalarFieldEnumSchema, CarScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const CarAggregateArgsSchema: z.ZodType<Prisma.CarAggregateArgs> = z
  .object({
    where: CarWhereInputSchema.optional(),
    orderBy: z
      .union([
        CarOrderByWithRelationInputSchema.array(),
        CarOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: CarWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const CarGroupByArgsSchema: z.ZodType<Prisma.CarGroupByArgs> = z
  .object({
    where: CarWhereInputSchema.optional(),
    orderBy: z
      .union([
        CarOrderByWithAggregationInputSchema.array(),
        CarOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: CarScalarFieldEnumSchema.array(),
    having: CarScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const CarFindUniqueArgsSchema: z.ZodType<Prisma.CarFindUniqueArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    where: CarWhereUniqueInputSchema,
  })
  .strict();

export const CarFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CarFindUniqueOrThrowArgs> =
  z
    .object({
      select: CarSelectSchema.optional(),
      include: CarIncludeSchema.optional(),
      where: CarWhereUniqueInputSchema,
    })
    .strict();

export const FollowerFindFirstArgsSchema: z.ZodType<Prisma.FollowerFindFirstArgs> =
  z
    .object({
      select: FollowerSelectSchema.optional(),
      include: FollowerIncludeSchema.optional(),
      where: FollowerWhereInputSchema.optional(),
      orderBy: z
        .union([
          FollowerOrderByWithRelationInputSchema.array(),
          FollowerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: FollowerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FollowerScalarFieldEnumSchema,
          FollowerScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FollowerFindFirstOrThrowArgs> =
  z
    .object({
      select: FollowerSelectSchema.optional(),
      include: FollowerIncludeSchema.optional(),
      where: FollowerWhereInputSchema.optional(),
      orderBy: z
        .union([
          FollowerOrderByWithRelationInputSchema.array(),
          FollowerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: FollowerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FollowerScalarFieldEnumSchema,
          FollowerScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerFindManyArgsSchema: z.ZodType<Prisma.FollowerFindManyArgs> =
  z
    .object({
      select: FollowerSelectSchema.optional(),
      include: FollowerIncludeSchema.optional(),
      where: FollowerWhereInputSchema.optional(),
      orderBy: z
        .union([
          FollowerOrderByWithRelationInputSchema.array(),
          FollowerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: FollowerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FollowerScalarFieldEnumSchema,
          FollowerScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const FollowerAggregateArgsSchema: z.ZodType<Prisma.FollowerAggregateArgs> =
  z
    .object({
      where: FollowerWhereInputSchema.optional(),
      orderBy: z
        .union([
          FollowerOrderByWithRelationInputSchema.array(),
          FollowerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: FollowerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const FollowerGroupByArgsSchema: z.ZodType<Prisma.FollowerGroupByArgs> =
  z
    .object({
      where: FollowerWhereInputSchema.optional(),
      orderBy: z
        .union([
          FollowerOrderByWithAggregationInputSchema.array(),
          FollowerOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: FollowerScalarFieldEnumSchema.array(),
      having: FollowerScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const FollowerFindUniqueArgsSchema: z.ZodType<Prisma.FollowerFindUniqueArgs> =
  z
    .object({
      select: FollowerSelectSchema.optional(),
      include: FollowerIncludeSchema.optional(),
      where: FollowerWhereUniqueInputSchema,
    })
    .strict();

export const FollowerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FollowerFindUniqueOrThrowArgs> =
  z
    .object({
      select: FollowerSelectSchema.optional(),
      include: FollowerIncludeSchema.optional(),
      where: FollowerWhereUniqueInputSchema,
    })
    .strict();

export const PostFindFirstArgsSchema: z.ZodType<Prisma.PostFindFirstArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const PostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> =
  z
    .object({
      select: PostSelectSchema.optional(),
      include: PostIncludeSchema.optional(),
      where: PostWhereInputSchema.optional(),
      orderBy: z
        .union([
          PostOrderByWithRelationInputSchema.array(),
          PostOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PostWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const PostFindManyArgsSchema: z.ZodType<Prisma.PostFindManyArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const PostAggregateArgsSchema: z.ZodType<Prisma.PostAggregateArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const PostGroupByArgsSchema: z.ZodType<Prisma.PostGroupByArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithAggregationInputSchema.array(),
        PostOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: PostScalarFieldEnumSchema.array(),
    having: PostScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const PostFindUniqueArgsSchema: z.ZodType<Prisma.PostFindUniqueArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> =
  z
    .object({
      select: PostSelectSchema.optional(),
      include: PostIncludeSchema.optional(),
      where: PostWhereUniqueInputSchema,
    })
    .strict();

export const LikeFindFirstArgsSchema: z.ZodType<Prisma.LikeFindFirstArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const LikeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LikeFindFirstOrThrowArgs> =
  z
    .object({
      select: LikeSelectSchema.optional(),
      include: LikeIncludeSchema.optional(),
      where: LikeWhereInputSchema.optional(),
      orderBy: z
        .union([
          LikeOrderByWithRelationInputSchema.array(),
          LikeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LikeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const LikeFindManyArgsSchema: z.ZodType<Prisma.LikeFindManyArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const LikeAggregateArgsSchema: z.ZodType<Prisma.LikeAggregateArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const LikeGroupByArgsSchema: z.ZodType<Prisma.LikeGroupByArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithAggregationInputSchema.array(),
        LikeOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: LikeScalarFieldEnumSchema.array(),
    having: LikeScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const LikeFindUniqueArgsSchema: z.ZodType<Prisma.LikeFindUniqueArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LikeFindUniqueOrThrowArgs> =
  z
    .object({
      select: LikeSelectSchema.optional(),
      include: LikeIncludeSchema.optional(),
      where: LikeWhereUniqueInputSchema,
    })
    .strict();

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationTokenOrderByWithRelationInputSchema.array(),
          VerificationTokenOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationTokenWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationTokenScalarFieldEnumSchema,
          VerificationTokenScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationTokenOrderByWithRelationInputSchema.array(),
          VerificationTokenOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationTokenWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationTokenScalarFieldEnumSchema,
          VerificationTokenScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationTokenOrderByWithRelationInputSchema.array(),
          VerificationTokenOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationTokenWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationTokenScalarFieldEnumSchema,
          VerificationTokenScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> =
  z
    .object({
      where: VerificationTokenWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationTokenOrderByWithRelationInputSchema.array(),
          VerificationTokenOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationTokenWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> =
  z
    .object({
      where: VerificationTokenWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationTokenOrderByWithAggregationInputSchema.array(),
          VerificationTokenOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: VerificationTokenScalarFieldEnumSchema.array(),
      having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereUniqueInputSchema,
    })
    .strict();

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z
  .object({
    where: AccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputSchema.array(),
        AccountOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AccountScalarFieldEnumSchema.array(),
    having: AccountScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const UserAccountFindFirstArgsSchema: z.ZodType<Prisma.UserAccountFindFirstArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserAccountOrderByWithRelationInputSchema.array(),
          UserAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          UserAccountScalarFieldEnumSchema,
          UserAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserAccountFindFirstOrThrowArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserAccountOrderByWithRelationInputSchema.array(),
          UserAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          UserAccountScalarFieldEnumSchema,
          UserAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountFindManyArgsSchema: z.ZodType<Prisma.UserAccountFindManyArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserAccountOrderByWithRelationInputSchema.array(),
          UserAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          UserAccountScalarFieldEnumSchema,
          UserAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const UserAccountAggregateArgsSchema: z.ZodType<Prisma.UserAccountAggregateArgs> =
  z
    .object({
      where: UserAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserAccountOrderByWithRelationInputSchema.array(),
          UserAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const UserAccountGroupByArgsSchema: z.ZodType<Prisma.UserAccountGroupByArgs> =
  z
    .object({
      where: UserAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserAccountOrderByWithAggregationInputSchema.array(),
          UserAccountOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: UserAccountScalarFieldEnumSchema.array(),
      having: UserAccountScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const UserAccountFindUniqueArgsSchema: z.ZodType<Prisma.UserAccountFindUniqueArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereUniqueInputSchema,
    })
    .strict();

export const UserAccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserAccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z
      .union([
        SessionOrderByWithAggregationInputSchema.array(),
        SessionOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: SessionScalarFieldEnumSchema.array(),
    having: SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationFindFirstArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          NotificationOrderByWithRelationInputSchema.array(),
          NotificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NotificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NotificationScalarFieldEnumSchema,
          NotificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          NotificationOrderByWithRelationInputSchema.array(),
          NotificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NotificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NotificationScalarFieldEnumSchema,
          NotificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationFindManyArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          NotificationOrderByWithRelationInputSchema.array(),
          NotificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NotificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NotificationScalarFieldEnumSchema,
          NotificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationAggregateArgs> =
  z
    .object({
      where: NotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          NotificationOrderByWithRelationInputSchema.array(),
          NotificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NotificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationGroupByArgs> =
  z
    .object({
      where: NotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          NotificationOrderByWithAggregationInputSchema.array(),
          NotificationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: NotificationScalarFieldEnumSchema.array(),
      having: NotificationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereUniqueInputSchema,
    })
    .strict();

export const NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereUniqueInputSchema,
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
  })
  .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const CarCreateArgsSchema: z.ZodType<Prisma.CarCreateArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    data: z.union([CarCreateInputSchema, CarUncheckedCreateInputSchema]),
  })
  .strict();

export const CarUpsertArgsSchema: z.ZodType<Prisma.CarUpsertArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    where: CarWhereUniqueInputSchema,
    create: z.union([CarCreateInputSchema, CarUncheckedCreateInputSchema]),
    update: z.union([CarUpdateInputSchema, CarUncheckedUpdateInputSchema]),
  })
  .strict();

export const CarCreateManyArgsSchema: z.ZodType<Prisma.CarCreateManyArgs> = z
  .object({
    data: z.union([CarCreateManyInputSchema, CarCreateManyInputSchema.array()]),
  })
  .strict();

export const CarDeleteArgsSchema: z.ZodType<Prisma.CarDeleteArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    where: CarWhereUniqueInputSchema,
  })
  .strict();

export const CarUpdateArgsSchema: z.ZodType<Prisma.CarUpdateArgs> = z
  .object({
    select: CarSelectSchema.optional(),
    include: CarIncludeSchema.optional(),
    data: z.union([CarUpdateInputSchema, CarUncheckedUpdateInputSchema]),
    where: CarWhereUniqueInputSchema,
  })
  .strict();

export const CarUpdateManyArgsSchema: z.ZodType<Prisma.CarUpdateManyArgs> = z
  .object({
    data: z.union([
      CarUpdateManyMutationInputSchema,
      CarUncheckedUpdateManyInputSchema,
    ]),
    where: CarWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const CarDeleteManyArgsSchema: z.ZodType<Prisma.CarDeleteManyArgs> = z
  .object({
    where: CarWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const FollowerCreateArgsSchema: z.ZodType<Prisma.FollowerCreateArgs> = z
  .object({
    select: FollowerSelectSchema.optional(),
    include: FollowerIncludeSchema.optional(),
    data: z.union([
      FollowerCreateInputSchema,
      FollowerUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const FollowerUpsertArgsSchema: z.ZodType<Prisma.FollowerUpsertArgs> = z
  .object({
    select: FollowerSelectSchema.optional(),
    include: FollowerIncludeSchema.optional(),
    where: FollowerWhereUniqueInputSchema,
    create: z.union([
      FollowerCreateInputSchema,
      FollowerUncheckedCreateInputSchema,
    ]),
    update: z.union([
      FollowerUpdateInputSchema,
      FollowerUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const FollowerCreateManyArgsSchema: z.ZodType<Prisma.FollowerCreateManyArgs> =
  z
    .object({
      data: z.union([
        FollowerCreateManyInputSchema,
        FollowerCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const FollowerDeleteArgsSchema: z.ZodType<Prisma.FollowerDeleteArgs> = z
  .object({
    select: FollowerSelectSchema.optional(),
    include: FollowerIncludeSchema.optional(),
    where: FollowerWhereUniqueInputSchema,
  })
  .strict();

export const FollowerUpdateArgsSchema: z.ZodType<Prisma.FollowerUpdateArgs> = z
  .object({
    select: FollowerSelectSchema.optional(),
    include: FollowerIncludeSchema.optional(),
    data: z.union([
      FollowerUpdateInputSchema,
      FollowerUncheckedUpdateInputSchema,
    ]),
    where: FollowerWhereUniqueInputSchema,
  })
  .strict();

export const FollowerUpdateManyArgsSchema: z.ZodType<Prisma.FollowerUpdateManyArgs> =
  z
    .object({
      data: z.union([
        FollowerUpdateManyMutationInputSchema,
        FollowerUncheckedUpdateManyInputSchema,
      ]),
      where: FollowerWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const FollowerDeleteManyArgsSchema: z.ZodType<Prisma.FollowerDeleteManyArgs> =
  z
    .object({
      where: FollowerWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const PostCreateArgsSchema: z.ZodType<Prisma.PostCreateArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    data: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
  })
  .strict();

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
    create: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
    update: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
  })
  .strict();

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z
  .object({
    data: z.union([
      PostCreateManyInputSchema,
      PostCreateManyInputSchema.array(),
    ]),
  })
  .strict();

export const PostDeleteArgsSchema: z.ZodType<Prisma.PostDeleteArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostUpdateArgsSchema: z.ZodType<Prisma.PostUpdateArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    data: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostUpdateManyArgsSchema: z.ZodType<Prisma.PostUpdateManyArgs> = z
  .object({
    data: z.union([
      PostUpdateManyMutationInputSchema,
      PostUncheckedUpdateManyInputSchema,
    ]),
    where: PostWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const LikeCreateArgsSchema: z.ZodType<Prisma.LikeCreateArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    data: z.union([LikeCreateInputSchema, LikeUncheckedCreateInputSchema]),
  })
  .strict();

export const LikeUpsertArgsSchema: z.ZodType<Prisma.LikeUpsertArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
    create: z.union([LikeCreateInputSchema, LikeUncheckedCreateInputSchema]),
    update: z.union([LikeUpdateInputSchema, LikeUncheckedUpdateInputSchema]),
  })
  .strict();

export const LikeCreateManyArgsSchema: z.ZodType<Prisma.LikeCreateManyArgs> = z
  .object({
    data: z.union([
      LikeCreateManyInputSchema,
      LikeCreateManyInputSchema.array(),
    ]),
  })
  .strict();

export const LikeDeleteArgsSchema: z.ZodType<Prisma.LikeDeleteArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeUpdateArgsSchema: z.ZodType<Prisma.LikeUpdateArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    data: z.union([LikeUpdateInputSchema, LikeUncheckedUpdateInputSchema]),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeUpdateManyArgsSchema: z.ZodType<Prisma.LikeUpdateManyArgs> = z
  .object({
    data: z.union([
      LikeUpdateManyMutationInputSchema,
      LikeUncheckedUpdateManyInputSchema,
    ]),
    where: LikeWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const LikeDeleteManyArgsSchema: z.ZodType<Prisma.LikeDeleteManyArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      data: z.union([
        VerificationTokenCreateInputSchema,
        VerificationTokenUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereUniqueInputSchema,
      create: z.union([
        VerificationTokenCreateInputSchema,
        VerificationTokenUncheckedCreateInputSchema,
      ]),
      update: z.union([
        VerificationTokenUpdateInputSchema,
        VerificationTokenUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationTokenCreateManyInputSchema,
        VerificationTokenCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      where: VerificationTokenWhereUniqueInputSchema,
    })
    .strict();

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> =
  z
    .object({
      select: VerificationTokenSelectSchema.optional(),
      data: z.union([
        VerificationTokenUpdateInputSchema,
        VerificationTokenUncheckedUpdateInputSchema,
      ]),
      where: VerificationTokenWhereUniqueInputSchema,
    })
    .strict();

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationTokenUpdateManyMutationInputSchema,
        VerificationTokenUncheckedUpdateManyInputSchema,
      ]),
      where: VerificationTokenWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> =
  z
    .object({
      where: VerificationTokenWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
    create: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
    update: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const UserAccountCreateArgsSchema: z.ZodType<Prisma.UserAccountCreateArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      data: z.union([
        UserAccountCreateInputSchema,
        UserAccountUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const UserAccountUpsertArgsSchema: z.ZodType<Prisma.UserAccountUpsertArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereUniqueInputSchema,
      create: z.union([
        UserAccountCreateInputSchema,
        UserAccountUncheckedCreateInputSchema,
      ]),
      update: z.union([
        UserAccountUpdateInputSchema,
        UserAccountUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const UserAccountCreateManyArgsSchema: z.ZodType<Prisma.UserAccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        UserAccountCreateManyInputSchema,
        UserAccountCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const UserAccountDeleteArgsSchema: z.ZodType<Prisma.UserAccountDeleteArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      where: UserAccountWhereUniqueInputSchema,
    })
    .strict();

export const UserAccountUpdateArgsSchema: z.ZodType<Prisma.UserAccountUpdateArgs> =
  z
    .object({
      select: UserAccountSelectSchema.optional(),
      include: UserAccountIncludeSchema.optional(),
      data: z.union([
        UserAccountUpdateInputSchema,
        UserAccountUncheckedUpdateInputSchema,
      ]),
      where: UserAccountWhereUniqueInputSchema,
    })
    .strict();

export const UserAccountUpdateManyArgsSchema: z.ZodType<Prisma.UserAccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        UserAccountUpdateManyMutationInputSchema,
        UserAccountUncheckedUpdateManyInputSchema,
      ]),
      where: UserAccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const UserAccountDeleteManyArgsSchema: z.ZodType<Prisma.UserAccountDeleteManyArgs> =
  z
    .object({
      where: UserAccountWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
    create: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
    update: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SessionUpdateManyMutationInputSchema,
        SessionUncheckedUpdateManyInputSchema,
      ]),
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      data: z.union([
        NotificationCreateInputSchema,
        NotificationUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereUniqueInputSchema,
      create: z.union([
        NotificationCreateInputSchema,
        NotificationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        NotificationUpdateInputSchema,
        NotificationUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationCreateManyArgs> =
  z
    .object({
      data: z.union([
        NotificationCreateManyInputSchema,
        NotificationCreateManyInputSchema.array(),
      ]),
    })
    .strict();

export const NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationDeleteArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      where: NotificationWhereUniqueInputSchema,
    })
    .strict();

export const NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationUpdateArgs> =
  z
    .object({
      select: NotificationSelectSchema.optional(),
      include: NotificationIncludeSchema.optional(),
      data: z.union([
        NotificationUpdateInputSchema,
        NotificationUncheckedUpdateInputSchema,
      ]),
      where: NotificationWhereUniqueInputSchema,
    })
    .strict();

export const NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        NotificationUpdateManyMutationInputSchema,
        NotificationUncheckedUpdateManyInputSchema,
      ]),
      where: NotificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationDeleteManyArgs> =
  z
    .object({
      where: NotificationWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();
