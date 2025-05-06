import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','emailVerified','password','username','isVerified','role','oauthOnly','createdAt','updatedAt','onBoarded','name','phone','driversLicense','profileImageUrl','location']);

export const CarScalarFieldEnumSchema = z.enum(['id','ownerId','brand','model','year','mileage','color','licensePlate','createdAt','updatedAt']);

export const ServiceTypeScalarFieldEnumSchema = z.enum(['id','name','label','intervalKm','intervalDays']);

export const ServiceLogScalarFieldEnumSchema = z.enum(['id','carId','serviceTypeId','serviceDate','mileageAtTime','notes','createdAt']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','createdAt','updatedAt']);

export const UserAccountScalarFieldEnumSchema = z.enum(['id','userId','accountId','createdAt']);

export const UserSessionScalarFieldEnumSchema = z.enum(['id','userId','expires','sessionToken','deviceInfo','ipAddress','createdAt','updatedAt']);

export const ReminderJobScalarFieldEnumSchema = z.enum(['id','userId','carId','type','referenceId','scheduledAt','sent','createdAt']);

export const InsuranceScalarFieldEnumSchema = z.enum(['id','carId','provider','policyNo','startDate','expiryDate','amount','documentUrl','createdAt']);

export const PUCCheckScalarFieldEnumSchema = z.enum(['id','carId','checkedAt','validTill','documentUrl','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserRoleSchema = z.enum(['USER','ADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export const ReminderTypeSchema = z.enum(['SERVICE','PUC','INSURANCE']);

export type ReminderTypeType = `${z.infer<typeof ReminderTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRoleSchema,
  id: z.number().int(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  password: z.string().nullable(),
  username: z.string(),
  isVerified: z.boolean(),
  oauthOnly: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  onBoarded: z.boolean(),
  name: z.string().nullable(),
  phone: z.string().nullable(),
  driversLicense: z.string().nullable(),
  profileImageUrl: z.string().nullable(),
  location: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// CAR SCHEMA
/////////////////////////////////////////

export const CarSchema = z.object({
  id: z.number().int(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().nullable(),
  color: z.string().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Car = z.infer<typeof CarSchema>

/////////////////////////////////////////
// SERVICE TYPE SCHEMA
/////////////////////////////////////////

export const ServiceTypeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().nullable(),
  intervalDays: z.number().int().nullable(),
})

export type ServiceType = z.infer<typeof ServiceTypeSchema>

/////////////////////////////////////////
// SERVICE LOG SCHEMA
/////////////////////////////////////////

export const ServiceLogSchema = z.object({
  id: z.number().int(),
  carId: z.number().int(),
  serviceTypeId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().nullable(),
  notes: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type ServiceLog = z.infer<typeof ServiceLogSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
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
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// USER ACCOUNT SCHEMA
/////////////////////////////////////////

export const UserAccountSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  accountId: z.number().int(),
  createdAt: z.coerce.date(),
})

export type UserAccount = z.infer<typeof UserAccountSchema>

/////////////////////////////////////////
// USER SESSION SCHEMA
/////////////////////////////////////////

export const UserSessionSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().nullable(),
  ipAddress: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserSession = z.infer<typeof UserSessionSchema>

/////////////////////////////////////////
// REMINDER JOB SCHEMA
/////////////////////////////////////////

export const ReminderJobSchema = z.object({
  type: ReminderTypeSchema,
  id: z.number().int(),
  userId: z.number().int(),
  carId: z.number().int(),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean(),
  createdAt: z.coerce.date(),
})

export type ReminderJob = z.infer<typeof ReminderJobSchema>

/////////////////////////////////////////
// INSURANCE SCHEMA
/////////////////////////////////////////

export const InsuranceSchema = z.object({
  id: z.number().int(),
  carId: z.number().int(),
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().nullable(),
  documentUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type Insurance = z.infer<typeof InsuranceSchema>

/////////////////////////////////////////
// PUC CHECK SCHEMA
/////////////////////////////////////////

export const PUCCheckSchema = z.object({
  id: z.number().int(),
  carId: z.number().int(),
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type PUCCheck = z.infer<typeof PUCCheckSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  cars: z.union([z.boolean(),z.lazy(() => CarFindManyArgsSchema)]).optional(),
  reminders: z.union([z.boolean(),z.lazy(() => ReminderJobFindManyArgsSchema)]).optional(),
  Account: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => UserAccountFindManyArgsSchema)]).optional(),
  Session: z.union([z.boolean(),z.lazy(() => UserSessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  cars: z.boolean().optional(),
  reminders: z.boolean().optional(),
  Account: z.boolean().optional(),
  accounts: z.boolean().optional(),
  Session: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  password: z.boolean().optional(),
  username: z.boolean().optional(),
  isVerified: z.boolean().optional(),
  role: z.boolean().optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  onBoarded: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  driversLicense: z.boolean().optional(),
  profileImageUrl: z.boolean().optional(),
  location: z.boolean().optional(),
  cars: z.union([z.boolean(),z.lazy(() => CarFindManyArgsSchema)]).optional(),
  reminders: z.union([z.boolean(),z.lazy(() => ReminderJobFindManyArgsSchema)]).optional(),
  Account: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => UserAccountFindManyArgsSchema)]).optional(),
  Session: z.union([z.boolean(),z.lazy(() => UserSessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CAR
//------------------------------------------------------

export const CarIncludeSchema: z.ZodType<Prisma.CarInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  serviceLogs: z.union([z.boolean(),z.lazy(() => ServiceLogFindManyArgsSchema)]).optional(),
  insurance: z.union([z.boolean(),z.lazy(() => InsuranceFindManyArgsSchema)]).optional(),
  pucChecks: z.union([z.boolean(),z.lazy(() => PUCCheckFindManyArgsSchema)]).optional(),
  ReminderJob: z.union([z.boolean(),z.lazy(() => ReminderJobFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CarCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CarArgsSchema: z.ZodType<Prisma.CarDefaultArgs> = z.object({
  select: z.lazy(() => CarSelectSchema).optional(),
  include: z.lazy(() => CarIncludeSchema).optional(),
}).strict();

export const CarCountOutputTypeArgsSchema: z.ZodType<Prisma.CarCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CarCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CarCountOutputTypeSelectSchema: z.ZodType<Prisma.CarCountOutputTypeSelect> = z.object({
  serviceLogs: z.boolean().optional(),
  insurance: z.boolean().optional(),
  pucChecks: z.boolean().optional(),
  ReminderJob: z.boolean().optional(),
}).strict();

export const CarSelectSchema: z.ZodType<Prisma.CarSelect> = z.object({
  id: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  brand: z.boolean().optional(),
  model: z.boolean().optional(),
  year: z.boolean().optional(),
  mileage: z.boolean().optional(),
  color: z.boolean().optional(),
  licensePlate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  serviceLogs: z.union([z.boolean(),z.lazy(() => ServiceLogFindManyArgsSchema)]).optional(),
  insurance: z.union([z.boolean(),z.lazy(() => InsuranceFindManyArgsSchema)]).optional(),
  pucChecks: z.union([z.boolean(),z.lazy(() => PUCCheckFindManyArgsSchema)]).optional(),
  ReminderJob: z.union([z.boolean(),z.lazy(() => ReminderJobFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CarCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SERVICE TYPE
//------------------------------------------------------

export const ServiceTypeIncludeSchema: z.ZodType<Prisma.ServiceTypeInclude> = z.object({
  serviceLogs: z.union([z.boolean(),z.lazy(() => ServiceLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ServiceTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ServiceTypeArgsSchema: z.ZodType<Prisma.ServiceTypeDefaultArgs> = z.object({
  select: z.lazy(() => ServiceTypeSelectSchema).optional(),
  include: z.lazy(() => ServiceTypeIncludeSchema).optional(),
}).strict();

export const ServiceTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.ServiceTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ServiceTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ServiceTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.ServiceTypeCountOutputTypeSelect> = z.object({
  serviceLogs: z.boolean().optional(),
}).strict();

export const ServiceTypeSelectSchema: z.ZodType<Prisma.ServiceTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  intervalKm: z.boolean().optional(),
  intervalDays: z.boolean().optional(),
  serviceLogs: z.union([z.boolean(),z.lazy(() => ServiceLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ServiceTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SERVICE LOG
//------------------------------------------------------

export const ServiceLogIncludeSchema: z.ZodType<Prisma.ServiceLogInclude> = z.object({
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
  serviceType: z.union([z.boolean(),z.lazy(() => ServiceTypeArgsSchema)]).optional(),
}).strict()

export const ServiceLogArgsSchema: z.ZodType<Prisma.ServiceLogDefaultArgs> = z.object({
  select: z.lazy(() => ServiceLogSelectSchema).optional(),
  include: z.lazy(() => ServiceLogIncludeSchema).optional(),
}).strict();

export const ServiceLogSelectSchema: z.ZodType<Prisma.ServiceLogSelect> = z.object({
  id: z.boolean().optional(),
  carId: z.boolean().optional(),
  serviceTypeId: z.boolean().optional(),
  serviceDate: z.boolean().optional(),
  mileageAtTime: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
  serviceType: z.union([z.boolean(),z.lazy(() => ServiceTypeArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userAccounts: z.union([z.boolean(),z.lazy(() => UserAccountFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountCountOutputTypeArgsSchema: z.ZodType<Prisma.AccountCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AccountCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AccountCountOutputTypeSelectSchema: z.ZodType<Prisma.AccountCountOutputTypeSelect> = z.object({
  userAccounts: z.boolean().optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
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
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userAccounts: z.union([z.boolean(),z.lazy(() => UserAccountFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER ACCOUNT
//------------------------------------------------------

export const UserAccountIncludeSchema: z.ZodType<Prisma.UserAccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  account: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
}).strict()

export const UserAccountArgsSchema: z.ZodType<Prisma.UserAccountDefaultArgs> = z.object({
  select: z.lazy(() => UserAccountSelectSchema).optional(),
  include: z.lazy(() => UserAccountIncludeSchema).optional(),
}).strict();

export const UserAccountSelectSchema: z.ZodType<Prisma.UserAccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  accountId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  account: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
}).strict()

// USER SESSION
//------------------------------------------------------

export const UserSessionIncludeSchema: z.ZodType<Prisma.UserSessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserSessionArgsSchema: z.ZodType<Prisma.UserSessionDefaultArgs> = z.object({
  select: z.lazy(() => UserSessionSelectSchema).optional(),
  include: z.lazy(() => UserSessionIncludeSchema).optional(),
}).strict();

export const UserSessionSelectSchema: z.ZodType<Prisma.UserSessionSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  deviceInfo: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// REMINDER JOB
//------------------------------------------------------

export const ReminderJobIncludeSchema: z.ZodType<Prisma.ReminderJobInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()

export const ReminderJobArgsSchema: z.ZodType<Prisma.ReminderJobDefaultArgs> = z.object({
  select: z.lazy(() => ReminderJobSelectSchema).optional(),
  include: z.lazy(() => ReminderJobIncludeSchema).optional(),
}).strict();

export const ReminderJobSelectSchema: z.ZodType<Prisma.ReminderJobSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  carId: z.boolean().optional(),
  type: z.boolean().optional(),
  referenceId: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  sent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()

// INSURANCE
//------------------------------------------------------

export const InsuranceIncludeSchema: z.ZodType<Prisma.InsuranceInclude> = z.object({
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()

export const InsuranceArgsSchema: z.ZodType<Prisma.InsuranceDefaultArgs> = z.object({
  select: z.lazy(() => InsuranceSelectSchema).optional(),
  include: z.lazy(() => InsuranceIncludeSchema).optional(),
}).strict();

export const InsuranceSelectSchema: z.ZodType<Prisma.InsuranceSelect> = z.object({
  id: z.boolean().optional(),
  carId: z.boolean().optional(),
  provider: z.boolean().optional(),
  policyNo: z.boolean().optional(),
  startDate: z.boolean().optional(),
  expiryDate: z.boolean().optional(),
  amount: z.boolean().optional(),
  documentUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()

// PUC CHECK
//------------------------------------------------------

export const PUCCheckIncludeSchema: z.ZodType<Prisma.PUCCheckInclude> = z.object({
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()

export const PUCCheckArgsSchema: z.ZodType<Prisma.PUCCheckDefaultArgs> = z.object({
  select: z.lazy(() => PUCCheckSelectSchema).optional(),
  include: z.lazy(() => PUCCheckIncludeSchema).optional(),
}).strict();

export const PUCCheckSelectSchema: z.ZodType<Prisma.PUCCheckSelect> = z.object({
  id: z.boolean().optional(),
  carId: z.boolean().optional(),
  checkedAt: z.boolean().optional(),
  validTill: z.boolean().optional(),
  documentUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  car: z.union([z.boolean(),z.lazy(() => CarArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  oauthOnly: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  onBoarded: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  driversLicense: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cars: z.lazy(() => CarListRelationFilterSchema).optional(),
  reminders: z.lazy(() => ReminderJobListRelationFilterSchema).optional(),
  Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
  accounts: z.lazy(() => UserAccountListRelationFilterSchema).optional(),
  Session: z.lazy(() => UserSessionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  oauthOnly: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  onBoarded: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driversLicense: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profileImageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cars: z.lazy(() => CarOrderByRelationAggregateInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobOrderByRelationAggregateInputSchema).optional(),
  Account: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => UserAccountOrderByRelationAggregateInputSchema).optional(),
  Session: z.lazy(() => UserSessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    driversLicense: z.string()
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
    driversLicense: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
    username: z.string(),
    driversLicense: z.string(),
  }),
  z.object({
    id: z.number().int(),
    username: z.string(),
  }),
  z.object({
    id: z.number().int(),
    driversLicense: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string(),
    username: z.string(),
    driversLicense: z.string(),
  }),
  z.object({
    email: z.string(),
    username: z.string(),
  }),
  z.object({
    email: z.string(),
    driversLicense: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    username: z.string(),
    driversLicense: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    driversLicense: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  username: z.string().optional(),
  driversLicense: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  oauthOnly: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  onBoarded: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileImageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cars: z.lazy(() => CarListRelationFilterSchema).optional(),
  reminders: z.lazy(() => ReminderJobListRelationFilterSchema).optional(),
  Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
  accounts: z.lazy(() => UserAccountListRelationFilterSchema).optional(),
  Session: z.lazy(() => UserSessionListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  oauthOnly: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  onBoarded: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  phone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driversLicense: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profileImageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isVerified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleWithAggregatesFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  oauthOnly: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  onBoarded: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  driversLicense: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  profileImageUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CarWhereInputSchema: z.ZodType<Prisma.CarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CarWhereInputSchema),z.lazy(() => CarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CarWhereInputSchema),z.lazy(() => CarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ownerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  brand: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  model: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mileage: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  licensePlate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogListRelationFilterSchema).optional(),
  insurance: z.lazy(() => InsuranceListRelationFilterSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckListRelationFilterSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobListRelationFilterSchema).optional()
}).strict();

export const CarOrderByWithRelationInputSchema: z.ZodType<Prisma.CarOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  model: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  licensePlate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  serviceLogs: z.lazy(() => ServiceLogOrderByRelationAggregateInputSchema).optional(),
  insurance: z.lazy(() => InsuranceOrderByRelationAggregateInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckOrderByRelationAggregateInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CarWhereUniqueInputSchema: z.ZodType<Prisma.CarWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    licensePlate: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    licensePlate: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  licensePlate: z.string().optional(),
  AND: z.union([ z.lazy(() => CarWhereInputSchema),z.lazy(() => CarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CarWhereInputSchema),z.lazy(() => CarWhereInputSchema).array() ]).optional(),
  ownerId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  brand: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  model: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  mileage: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogListRelationFilterSchema).optional(),
  insurance: z.lazy(() => InsuranceListRelationFilterSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckListRelationFilterSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobListRelationFilterSchema).optional()
}).strict());

export const CarOrderByWithAggregationInputSchema: z.ZodType<Prisma.CarOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  model: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  licensePlate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CarCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CarAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CarMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CarMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CarSumOrderByAggregateInputSchema).optional()
}).strict();

export const CarScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CarScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CarScalarWhereWithAggregatesInputSchema),z.lazy(() => CarScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CarScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CarScalarWhereWithAggregatesInputSchema),z.lazy(() => CarScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ownerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  brand: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  model: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  mileage: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  licensePlate: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ServiceTypeWhereInputSchema: z.ZodType<Prisma.ServiceTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceTypeWhereInputSchema),z.lazy(() => ServiceTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceTypeWhereInputSchema),z.lazy(() => ServiceTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  intervalKm: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  intervalDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogListRelationFilterSchema).optional()
}).strict();

export const ServiceTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.ServiceTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intervalDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ServiceTypeWhereUniqueInputSchema: z.ZodType<Prisma.ServiceTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => ServiceTypeWhereInputSchema),z.lazy(() => ServiceTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceTypeWhereInputSchema),z.lazy(() => ServiceTypeWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  intervalKm: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  intervalDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogListRelationFilterSchema).optional()
}).strict());

export const ServiceTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intervalDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ServiceTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServiceTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServiceTypeSumOrderByAggregateInputSchema).optional()
}).strict();

export const ServiceTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServiceTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  intervalKm: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  intervalDays: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ServiceLogWhereInputSchema: z.ZodType<Prisma.ServiceLogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceLogWhereInputSchema),z.lazy(() => ServiceLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceLogWhereInputSchema),z.lazy(() => ServiceLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serviceTypeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serviceDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mileageAtTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
  serviceType: z.union([ z.lazy(() => ServiceTypeScalarRelationFilterSchema),z.lazy(() => ServiceTypeWhereInputSchema) ]).optional(),
}).strict();

export const ServiceLogOrderByWithRelationInputSchema: z.ZodType<Prisma.ServiceLogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  serviceDate: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  car: z.lazy(() => CarOrderByWithRelationInputSchema).optional(),
  serviceType: z.lazy(() => ServiceTypeOrderByWithRelationInputSchema).optional()
}).strict();

export const ServiceLogWhereUniqueInputSchema: z.ZodType<Prisma.ServiceLogWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ServiceLogWhereInputSchema),z.lazy(() => ServiceLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceLogWhereInputSchema),z.lazy(() => ServiceLogWhereInputSchema).array() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serviceTypeId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  serviceDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mileageAtTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
  serviceType: z.union([ z.lazy(() => ServiceTypeScalarRelationFilterSchema),z.lazy(() => ServiceTypeWhereInputSchema) ]).optional(),
}).strict());

export const ServiceLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  serviceDate: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ServiceLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServiceLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServiceLogSumOrderByAggregateInputSchema).optional()
}).strict();

export const ServiceLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServiceLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceLogScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceLogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceLogScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serviceTypeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  serviceDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mileageAtTime: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  userAccounts: z.lazy(() => UserAccountListRelationFilterSchema).optional()
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  userAccounts: z.lazy(() => UserAccountOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  userAccounts: z.lazy(() => UserAccountListRelationFilterSchema).optional()
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserAccountWhereInputSchema: z.ZodType<Prisma.UserAccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserAccountWhereInputSchema),z.lazy(() => UserAccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAccountWhereInputSchema),z.lazy(() => UserAccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  accountId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  account: z.union([ z.lazy(() => AccountScalarRelationFilterSchema),z.lazy(() => AccountWhereInputSchema) ]).optional(),
}).strict();

export const UserAccountOrderByWithRelationInputSchema: z.ZodType<Prisma.UserAccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  account: z.lazy(() => AccountOrderByWithRelationInputSchema).optional()
}).strict();

export const UserAccountWhereUniqueInputSchema: z.ZodType<Prisma.UserAccountWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => UserAccountWhereInputSchema),z.lazy(() => UserAccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAccountWhereInputSchema),z.lazy(() => UserAccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  accountId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  account: z.union([ z.lazy(() => AccountScalarRelationFilterSchema),z.lazy(() => AccountWhereInputSchema) ]).optional(),
}).strict());

export const UserAccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserAccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserAccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserAccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserAccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserAccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserAccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => UserAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  accountId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserSessionWhereInputSchema: z.ZodType<Prisma.UserSessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserSessionWhereInputSchema),z.lazy(() => UserSessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSessionWhereInputSchema),z.lazy(() => UserSessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  deviceInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UserSessionOrderByWithRelationInputSchema: z.ZodType<Prisma.UserSessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  deviceInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UserSessionWhereUniqueInputSchema: z.ZodType<Prisma.UserSessionWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => UserSessionWhereInputSchema),z.lazy(() => UserSessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSessionWhereInputSchema),z.lazy(() => UserSessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deviceInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const UserSessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserSessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  deviceInfo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserSessionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserSessionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserSessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserSessionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSessionSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserSessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserSessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  deviceInfo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReminderJobWhereInputSchema: z.ZodType<Prisma.ReminderJobWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderJobWhereInputSchema),z.lazy(() => ReminderJobWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderJobWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderJobWhereInputSchema),z.lazy(() => ReminderJobWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumReminderTypeFilterSchema),z.lazy(() => ReminderTypeSchema) ]).optional(),
  referenceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict();

export const ReminderJobOrderByWithRelationInputSchema: z.ZodType<Prisma.ReminderJobOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  referenceId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  car: z.lazy(() => CarOrderByWithRelationInputSchema).optional()
}).strict();

export const ReminderJobWhereUniqueInputSchema: z.ZodType<Prisma.ReminderJobWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ReminderJobWhereInputSchema),z.lazy(() => ReminderJobWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderJobWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderJobWhereInputSchema),z.lazy(() => ReminderJobWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => EnumReminderTypeFilterSchema),z.lazy(() => ReminderTypeSchema) ]).optional(),
  referenceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict());

export const ReminderJobOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReminderJobOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  referenceId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReminderJobCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReminderJobAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReminderJobMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReminderJobMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReminderJobSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReminderJobScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReminderJobScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderJobScalarWhereWithAggregatesInputSchema),z.lazy(() => ReminderJobScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderJobScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderJobScalarWhereWithAggregatesInputSchema),z.lazy(() => ReminderJobScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumReminderTypeWithAggregatesFilterSchema),z.lazy(() => ReminderTypeSchema) ]).optional(),
  referenceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InsuranceWhereInputSchema: z.ZodType<Prisma.InsuranceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InsuranceWhereInputSchema),z.lazy(() => InsuranceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InsuranceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InsuranceWhereInputSchema),z.lazy(() => InsuranceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  policyNo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict();

export const InsuranceOrderByWithRelationInputSchema: z.ZodType<Prisma.InsuranceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  policyNo: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  amount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documentUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  car: z.lazy(() => CarOrderByWithRelationInputSchema).optional()
}).strict();

export const InsuranceWhereUniqueInputSchema: z.ZodType<Prisma.InsuranceWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => InsuranceWhereInputSchema),z.lazy(() => InsuranceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InsuranceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InsuranceWhereInputSchema),z.lazy(() => InsuranceWhereInputSchema).array() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  policyNo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict());

export const InsuranceOrderByWithAggregationInputSchema: z.ZodType<Prisma.InsuranceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  policyNo: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  amount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documentUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InsuranceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InsuranceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InsuranceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InsuranceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InsuranceSumOrderByAggregateInputSchema).optional()
}).strict();

export const InsuranceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InsuranceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InsuranceScalarWhereWithAggregatesInputSchema),z.lazy(() => InsuranceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InsuranceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InsuranceScalarWhereWithAggregatesInputSchema),z.lazy(() => InsuranceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  policyNo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  amount: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  documentUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PUCCheckWhereInputSchema: z.ZodType<Prisma.PUCCheckWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PUCCheckWhereInputSchema),z.lazy(() => PUCCheckWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PUCCheckWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PUCCheckWhereInputSchema),z.lazy(() => PUCCheckWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  checkedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict();

export const PUCCheckOrderByWithRelationInputSchema: z.ZodType<Prisma.PUCCheckOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  checkedAt: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  car: z.lazy(() => CarOrderByWithRelationInputSchema).optional()
}).strict();

export const PUCCheckWhereUniqueInputSchema: z.ZodType<Prisma.PUCCheckWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PUCCheckWhereInputSchema),z.lazy(() => PUCCheckWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PUCCheckWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PUCCheckWhereInputSchema),z.lazy(() => PUCCheckWhereInputSchema).array() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  checkedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  car: z.union([ z.lazy(() => CarScalarRelationFilterSchema),z.lazy(() => CarWhereInputSchema) ]).optional(),
}).strict());

export const PUCCheckOrderByWithAggregationInputSchema: z.ZodType<Prisma.PUCCheckOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  checkedAt: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PUCCheckCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PUCCheckAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PUCCheckMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PUCCheckMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PUCCheckSumOrderByAggregateInputSchema).optional()
}).strict();

export const PUCCheckScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PUCCheckScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PUCCheckScalarWhereWithAggregatesInputSchema),z.lazy(() => PUCCheckScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PUCCheckScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PUCCheckScalarWhereWithAggregatesInputSchema),z.lazy(() => PUCCheckScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  checkedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  documentUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CarCreateInputSchema: z.ZodType<Prisma.CarCreateInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateInputSchema: z.ZodType<Prisma.CarUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUpdateInputSchema: z.ZodType<Prisma.CarUpdateInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema).optional(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateInputSchema: z.ZodType<Prisma.CarUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarCreateManyInputSchema: z.ZodType<Prisma.CarCreateManyInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CarUpdateManyMutationInputSchema: z.ZodType<Prisma.CarUpdateManyMutationInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CarUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceTypeCreateInputSchema: z.ZodType<Prisma.ServiceTypeCreateInput> = z.object({
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().optional().nullable(),
  intervalDays: z.number().int().optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutServiceTypeInputSchema).optional()
}).strict();

export const ServiceTypeUncheckedCreateInputSchema: z.ZodType<Prisma.ServiceTypeUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().optional().nullable(),
  intervalDays: z.number().int().optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutServiceTypeInputSchema).optional()
}).strict();

export const ServiceTypeUpdateInputSchema: z.ZodType<Prisma.ServiceTypeUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutServiceTypeNestedInputSchema).optional()
}).strict();

export const ServiceTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.ServiceTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutServiceTypeNestedInputSchema).optional()
}).strict();

export const ServiceTypeCreateManyInputSchema: z.ZodType<Prisma.ServiceTypeCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().optional().nullable(),
  intervalDays: z.number().int().optional().nullable()
}).strict();

export const ServiceTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.ServiceTypeUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ServiceTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServiceTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ServiceLogCreateInputSchema: z.ZodType<Prisma.ServiceLogCreateInput> = z.object({
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  car: z.lazy(() => CarCreateNestedOneWithoutServiceLogsInputSchema),
  serviceType: z.lazy(() => ServiceTypeCreateNestedOneWithoutServiceLogsInputSchema)
}).strict();

export const ServiceLogUncheckedCreateInputSchema: z.ZodType<Prisma.ServiceLogUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  serviceTypeId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogUpdateInputSchema: z.ZodType<Prisma.ServiceLogUpdateInput> = z.object({
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutServiceLogsNestedInputSchema).optional(),
  serviceType: z.lazy(() => ServiceTypeUpdateOneRequiredWithoutServiceLogsNestedInputSchema).optional()
}).strict();

export const ServiceLogUncheckedUpdateInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceTypeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogCreateManyInputSchema: z.ZodType<Prisma.ServiceLogCreateManyInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  serviceTypeId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogUpdateManyMutationInputSchema: z.ZodType<Prisma.ServiceLogUpdateManyMutationInput> = z.object({
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceTypeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
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
  userAccounts: z.lazy(() => UserAccountCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
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
  userAccounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountNestedInputSchema).optional(),
  userAccounts: z.lazy(() => UserAccountUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userAccounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
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
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountCreateInputSchema: z.ZodType<Prisma.UserAccountCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
  account: z.lazy(() => AccountCreateNestedOneWithoutUserAccountsInputSchema)
}).strict();

export const UserAccountUncheckedCreateInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  accountId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserAccountUpdateInputSchema: z.ZodType<Prisma.UserAccountUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema).optional()
}).strict();

export const UserAccountUncheckedUpdateInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountCreateManyInputSchema: z.ZodType<Prisma.UserAccountCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  accountId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserAccountUpdateManyMutationInputSchema: z.ZodType<Prisma.UserAccountUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionCreateInputSchema: z.ZodType<Prisma.UserSessionCreateInput> = z.object({
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionInputSchema)
}).strict();

export const UserSessionUncheckedCreateInputSchema: z.ZodType<Prisma.UserSessionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSessionUpdateInputSchema: z.ZodType<Prisma.UserSessionUpdateInput> = z.object({
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputSchema).optional()
}).strict();

export const UserSessionUncheckedUpdateInputSchema: z.ZodType<Prisma.UserSessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionCreateManyInputSchema: z.ZodType<Prisma.UserSessionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSessionUpdateManyMutationInputSchema: z.ZodType<Prisma.UserSessionUpdateManyMutationInput> = z.object({
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserSessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobCreateInputSchema: z.ZodType<Prisma.ReminderJobCreateInput> = z.object({
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRemindersInputSchema),
  car: z.lazy(() => CarCreateNestedOneWithoutReminderJobInputSchema)
}).strict();

export const ReminderJobUncheckedCreateInputSchema: z.ZodType<Prisma.ReminderJobUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  carId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReminderJobUpdateInputSchema: z.ZodType<Prisma.ReminderJobUpdateInput> = z.object({
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRemindersNestedInputSchema).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutReminderJobNestedInputSchema).optional()
}).strict();

export const ReminderJobUncheckedUpdateInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobCreateManyInputSchema: z.ZodType<Prisma.ReminderJobCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  carId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReminderJobUpdateManyMutationInputSchema: z.ZodType<Prisma.ReminderJobUpdateManyMutationInput> = z.object({
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceCreateInputSchema: z.ZodType<Prisma.InsuranceCreateInput> = z.object({
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  car: z.lazy(() => CarCreateNestedOneWithoutInsuranceInputSchema)
}).strict();

export const InsuranceUncheckedCreateInputSchema: z.ZodType<Prisma.InsuranceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InsuranceUpdateInputSchema: z.ZodType<Prisma.InsuranceUpdateInput> = z.object({
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutInsuranceNestedInputSchema).optional()
}).strict();

export const InsuranceUncheckedUpdateInputSchema: z.ZodType<Prisma.InsuranceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceCreateManyInputSchema: z.ZodType<Prisma.InsuranceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InsuranceUpdateManyMutationInputSchema: z.ZodType<Prisma.InsuranceUpdateManyMutationInput> = z.object({
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InsuranceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckCreateInputSchema: z.ZodType<Prisma.PUCCheckCreateInput> = z.object({
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  car: z.lazy(() => CarCreateNestedOneWithoutPucChecksInputSchema)
}).strict();

export const PUCCheckUncheckedCreateInputSchema: z.ZodType<Prisma.PUCCheckUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const PUCCheckUpdateInputSchema: z.ZodType<Prisma.PUCCheckUpdateInput> = z.object({
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutPucChecksNestedInputSchema).optional()
}).strict();

export const PUCCheckUncheckedUpdateInputSchema: z.ZodType<Prisma.PUCCheckUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckCreateManyInputSchema: z.ZodType<Prisma.PUCCheckCreateManyInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const PUCCheckUpdateManyMutationInputSchema: z.ZodType<Prisma.PUCCheckUpdateManyMutationInput> = z.object({
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PUCCheckUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const EnumUserRoleFilterSchema: z.ZodType<Prisma.EnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const CarListRelationFilterSchema: z.ZodType<Prisma.CarListRelationFilter> = z.object({
  every: z.lazy(() => CarWhereInputSchema).optional(),
  some: z.lazy(() => CarWhereInputSchema).optional(),
  none: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const ReminderJobListRelationFilterSchema: z.ZodType<Prisma.ReminderJobListRelationFilter> = z.object({
  every: z.lazy(() => ReminderJobWhereInputSchema).optional(),
  some: z.lazy(() => ReminderJobWhereInputSchema).optional(),
  none: z.lazy(() => ReminderJobWhereInputSchema).optional()
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const UserAccountListRelationFilterSchema: z.ZodType<Prisma.UserAccountListRelationFilter> = z.object({
  every: z.lazy(() => UserAccountWhereInputSchema).optional(),
  some: z.lazy(() => UserAccountWhereInputSchema).optional(),
  none: z.lazy(() => UserAccountWhereInputSchema).optional()
}).strict();

export const UserSessionListRelationFilterSchema: z.ZodType<Prisma.UserSessionListRelationFilter> = z.object({
  every: z.lazy(() => UserSessionWhereInputSchema).optional(),
  some: z.lazy(() => UserSessionWhereInputSchema).optional(),
  none: z.lazy(() => UserSessionWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const CarOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CarOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderJobOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReminderJobOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserAccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserSessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  oauthOnly: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  onBoarded: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  driversLicense: z.lazy(() => SortOrderSchema).optional(),
  profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  oauthOnly: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  onBoarded: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  driversLicense: z.lazy(() => SortOrderSchema).optional(),
  profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  oauthOnly: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  onBoarded: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  driversLicense: z.lazy(() => SortOrderSchema).optional(),
  profileImageUrl: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const EnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ServiceLogListRelationFilterSchema: z.ZodType<Prisma.ServiceLogListRelationFilter> = z.object({
  every: z.lazy(() => ServiceLogWhereInputSchema).optional(),
  some: z.lazy(() => ServiceLogWhereInputSchema).optional(),
  none: z.lazy(() => ServiceLogWhereInputSchema).optional()
}).strict();

export const InsuranceListRelationFilterSchema: z.ZodType<Prisma.InsuranceListRelationFilter> = z.object({
  every: z.lazy(() => InsuranceWhereInputSchema).optional(),
  some: z.lazy(() => InsuranceWhereInputSchema).optional(),
  none: z.lazy(() => InsuranceWhereInputSchema).optional()
}).strict();

export const PUCCheckListRelationFilterSchema: z.ZodType<Prisma.PUCCheckListRelationFilter> = z.object({
  every: z.lazy(() => PUCCheckWhereInputSchema).optional(),
  some: z.lazy(() => PUCCheckWhereInputSchema).optional(),
  none: z.lazy(() => PUCCheckWhereInputSchema).optional()
}).strict();

export const ServiceLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceLogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InsuranceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InsuranceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PUCCheckOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PUCCheckOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarCountOrderByAggregateInputSchema: z.ZodType<Prisma.CarCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  model: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  licensePlate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CarAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CarMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  model: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  licensePlate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarMinOrderByAggregateInputSchema: z.ZodType<Prisma.CarMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  brand: z.lazy(() => SortOrderSchema).optional(),
  model: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  licensePlate: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarSumOrderByAggregateInputSchema: z.ZodType<Prisma.CarSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  mileage: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const ServiceTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.lazy(() => SortOrderSchema).optional(),
  intervalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceTypeAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.lazy(() => SortOrderSchema).optional(),
  intervalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.lazy(() => SortOrderSchema).optional(),
  intervalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.lazy(() => SortOrderSchema).optional(),
  intervalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceTypeSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  intervalKm: z.lazy(() => SortOrderSchema).optional(),
  intervalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarScalarRelationFilterSchema: z.ZodType<Prisma.CarScalarRelationFilter> = z.object({
  is: z.lazy(() => CarWhereInputSchema).optional(),
  isNot: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const ServiceTypeScalarRelationFilterSchema: z.ZodType<Prisma.ServiceTypeScalarRelationFilter> = z.object({
  is: z.lazy(() => ServiceTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => ServiceTypeWhereInputSchema).optional()
}).strict();

export const ServiceLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceLogCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  serviceDate: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceLogAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceLogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceLogMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  serviceDate: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceLogMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceLogMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  serviceDate: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceLogSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  serviceTypeId: z.lazy(() => SortOrderSchema).optional(),
  mileageAtTime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
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
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
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
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
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
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountScalarRelationFilterSchema: z.ZodType<Prisma.AccountScalarRelationFilter> = z.object({
  is: z.lazy(() => AccountWhereInputSchema).optional(),
  isNot: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const UserAccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserAccountSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserSessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  deviceInfo: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserSessionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserSessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  deviceInfo: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserSessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  deviceInfo: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSessionSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSessionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumReminderTypeFilterSchema: z.ZodType<Prisma.EnumReminderTypeFilter> = z.object({
  equals: z.lazy(() => ReminderTypeSchema).optional(),
  in: z.lazy(() => ReminderTypeSchema).array().optional(),
  notIn: z.lazy(() => ReminderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => NestedEnumReminderTypeFilterSchema) ]).optional(),
}).strict();

export const ReminderJobCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderJobCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  referenceId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderJobAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderJobAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderJobMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderJobMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  referenceId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderJobMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderJobMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  referenceId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderJobSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderJobSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumReminderTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumReminderTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ReminderTypeSchema).optional(),
  in: z.lazy(() => ReminderTypeSchema).array().optional(),
  notIn: z.lazy(() => ReminderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => NestedEnumReminderTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumReminderTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumReminderTypeFilterSchema).optional()
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const InsuranceCountOrderByAggregateInputSchema: z.ZodType<Prisma.InsuranceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  policyNo: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InsuranceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InsuranceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InsuranceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InsuranceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  policyNo: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InsuranceMinOrderByAggregateInputSchema: z.ZodType<Prisma.InsuranceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  policyNo: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  expiryDate: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InsuranceSumOrderByAggregateInputSchema: z.ZodType<Prisma.InsuranceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const PUCCheckCountOrderByAggregateInputSchema: z.ZodType<Prisma.PUCCheckCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  checkedAt: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PUCCheckAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PUCCheckAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PUCCheckMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PUCCheckMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  checkedAt: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PUCCheckMinOrderByAggregateInputSchema: z.ZodType<Prisma.PUCCheckMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional(),
  checkedAt: z.lazy(() => SortOrderSchema).optional(),
  validTill: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PUCCheckSumOrderByAggregateInputSchema: z.ZodType<Prisma.PUCCheckSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  carId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CarCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CarCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobCreateWithoutUserInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserAccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserSessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserSessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionCreateWithoutUserInputSchema).array(),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CarUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CarCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobCreateWithoutUserInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserAccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserSessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionCreateWithoutUserInputSchema).array(),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const EnumUserRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRoleSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const CarUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CarUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CarCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CarScalarWhereInputSchema),z.lazy(() => CarScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReminderJobUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobCreateWithoutUserInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderJobUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReminderJobUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserAccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserSessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionCreateWithoutUserInputSchema).array(),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserSessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserSessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserSessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserSessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserSessionScalarWhereInputSchema),z.lazy(() => UserSessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const CarUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarCreateWithoutOwnerInputSchema).array(),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CarCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CarUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CarCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CarWhereUniqueInputSchema),z.lazy(() => CarWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CarUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CarUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CarScalarWhereInputSchema),z.lazy(() => CarScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobCreateWithoutUserInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderJobUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReminderJobUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountCreateWithoutUserInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserAccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionCreateWithoutUserInputSchema).array(),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => UserSessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserSessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserSessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserSessionWhereUniqueInputSchema),z.lazy(() => UserSessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserSessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UserSessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserSessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UserSessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserSessionScalarWhereInputSchema),z.lazy(() => UserSessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCarsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCarsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCarsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ServiceLogCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogCreateWithoutCarInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InsuranceCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.InsuranceCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceCreateWithoutCarInputSchema).array(),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema),z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InsuranceCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PUCCheckCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckCreateWithoutCarInputSchema).array(),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema),z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PUCCheckCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobCreateWithoutCarInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUncheckedCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogCreateWithoutCarInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InsuranceUncheckedCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUncheckedCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceCreateWithoutCarInputSchema).array(),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema),z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InsuranceCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUncheckedCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckCreateWithoutCarInputSchema).array(),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema),z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PUCCheckCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUncheckedCreateNestedManyWithoutCarInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobCreateWithoutCarInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyCarInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutCarsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCarsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCarsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCarsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCarsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCarsInputSchema),z.lazy(() => UserUpdateWithoutCarsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema) ]).optional(),
}).strict();

export const ServiceLogUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.ServiceLogUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogCreateWithoutCarInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceLogUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => ServiceLogUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InsuranceUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.InsuranceUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceCreateWithoutCarInputSchema).array(),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema),z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InsuranceUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => InsuranceUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InsuranceCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InsuranceUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => InsuranceUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InsuranceUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => InsuranceUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InsuranceScalarWhereInputSchema),z.lazy(() => InsuranceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PUCCheckUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.PUCCheckUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckCreateWithoutCarInputSchema).array(),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema),z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PUCCheckUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => PUCCheckUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PUCCheckCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PUCCheckUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => PUCCheckUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PUCCheckUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => PUCCheckUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PUCCheckScalarWhereInputSchema),z.lazy(() => PUCCheckScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.ReminderJobUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobCreateWithoutCarInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderJobUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => ReminderJobUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogCreateWithoutCarInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceLogUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => ServiceLogUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.InsuranceUncheckedUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceCreateWithoutCarInputSchema).array(),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema),z.lazy(() => InsuranceCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InsuranceUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => InsuranceUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InsuranceCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InsuranceWhereUniqueInputSchema),z.lazy(() => InsuranceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InsuranceUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => InsuranceUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InsuranceUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => InsuranceUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InsuranceScalarWhereInputSchema),z.lazy(() => InsuranceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.PUCCheckUncheckedUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckCreateWithoutCarInputSchema).array(),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema),z.lazy(() => PUCCheckCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PUCCheckUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => PUCCheckUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PUCCheckCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PUCCheckWhereUniqueInputSchema),z.lazy(() => PUCCheckWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PUCCheckUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => PUCCheckUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PUCCheckUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => PUCCheckUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PUCCheckScalarWhereInputSchema),z.lazy(() => PUCCheckScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateManyWithoutCarNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobCreateWithoutCarInputSchema).array(),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema),z.lazy(() => ReminderJobCreateOrConnectWithoutCarInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ReminderJobUpsertWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderJobCreateManyCarInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderJobWhereUniqueInputSchema),z.lazy(() => ReminderJobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutCarInputSchema),z.lazy(() => ReminderJobUpdateWithWhereUniqueWithoutCarInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderJobUpdateManyWithWhereWithoutCarInputSchema),z.lazy(() => ReminderJobUpdateManyWithWhereWithoutCarInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogCreateNestedManyWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogCreateNestedManyWithoutServiceTypeInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyServiceTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogUncheckedCreateNestedManyWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUncheckedCreateNestedManyWithoutServiceTypeInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyServiceTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogUpdateManyWithoutServiceTypeNestedInputSchema: z.ZodType<Prisma.ServiceLogUpdateManyWithoutServiceTypeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyServiceTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceLogUpdateManyWithWhereWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpdateManyWithWhereWithoutServiceTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServiceLogUncheckedUpdateManyWithoutServiceTypeNestedInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateManyWithoutServiceTypeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema).array(),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogCreateOrConnectWithoutServiceTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceLogCreateManyServiceTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceLogWhereUniqueInputSchema),z.lazy(() => ServiceLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceLogUpdateManyWithWhereWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUpdateManyWithWhereWithoutServiceTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CarCreateNestedOneWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarCreateNestedOneWithoutServiceLogsInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedCreateWithoutServiceLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutServiceLogsInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional()
}).strict();

export const ServiceTypeCreateNestedOneWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeCreateNestedOneWithoutServiceLogsInput> = z.object({
  create: z.union([ z.lazy(() => ServiceTypeCreateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedCreateWithoutServiceLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceTypeCreateOrConnectWithoutServiceLogsInputSchema).optional(),
  connect: z.lazy(() => ServiceTypeWhereUniqueInputSchema).optional()
}).strict();

export const CarUpdateOneRequiredWithoutServiceLogsNestedInputSchema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutServiceLogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedCreateWithoutServiceLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutServiceLogsInputSchema).optional(),
  upsert: z.lazy(() => CarUpsertWithoutServiceLogsInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CarUpdateToOneWithWhereWithoutServiceLogsInputSchema),z.lazy(() => CarUpdateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedUpdateWithoutServiceLogsInputSchema) ]).optional(),
}).strict();

export const ServiceTypeUpdateOneRequiredWithoutServiceLogsNestedInputSchema: z.ZodType<Prisma.ServiceTypeUpdateOneRequiredWithoutServiceLogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceTypeCreateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedCreateWithoutServiceLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceTypeCreateOrConnectWithoutServiceLogsInputSchema).optional(),
  upsert: z.lazy(() => ServiceTypeUpsertWithoutServiceLogsInputSchema).optional(),
  connect: z.lazy(() => ServiceTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceTypeUpdateToOneWithWhereWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUpdateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedUpdateWithoutServiceLogsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserAccountCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateNestedManyWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateNestedManyWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountInputSchema),z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]).optional(),
}).strict();

export const UserAccountUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema),z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountCreateWithoutAccountInputSchema).array(),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema),z.lazy(() => UserAccountCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserAccountCreateManyAccountInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserAccountWhereUniqueInputSchema),z.lazy(() => UserAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema),z.lazy(() => UserAccountUpdateManyWithWhereWithoutAccountInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const AccountCreateNestedOneWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutUserAccountsInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutUserAccountsInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutUserAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutUserAccountsInputSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutUserAccountsInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountUpdateToOneWithWhereWithoutUserAccountsInputSchema),z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionInputSchema),z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutRemindersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRemindersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedCreateWithoutRemindersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRemindersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CarCreateNestedOneWithoutReminderJobInputSchema: z.ZodType<Prisma.CarCreateNestedOneWithoutReminderJobInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedCreateWithoutReminderJobInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutReminderJobInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional()
}).strict();

export const EnumReminderTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumReminderTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ReminderTypeSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutRemindersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRemindersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedCreateWithoutRemindersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRemindersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRemindersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRemindersInputSchema),z.lazy(() => UserUpdateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRemindersInputSchema) ]).optional(),
}).strict();

export const CarUpdateOneRequiredWithoutReminderJobNestedInputSchema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutReminderJobNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedCreateWithoutReminderJobInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutReminderJobInputSchema).optional(),
  upsert: z.lazy(() => CarUpsertWithoutReminderJobInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CarUpdateToOneWithWhereWithoutReminderJobInputSchema),z.lazy(() => CarUpdateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedUpdateWithoutReminderJobInputSchema) ]).optional(),
}).strict();

export const CarCreateNestedOneWithoutInsuranceInputSchema: z.ZodType<Prisma.CarCreateNestedOneWithoutInsuranceInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedCreateWithoutInsuranceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutInsuranceInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional()
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const CarUpdateOneRequiredWithoutInsuranceNestedInputSchema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutInsuranceNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedCreateWithoutInsuranceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutInsuranceInputSchema).optional(),
  upsert: z.lazy(() => CarUpsertWithoutInsuranceInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CarUpdateToOneWithWhereWithoutInsuranceInputSchema),z.lazy(() => CarUpdateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedUpdateWithoutInsuranceInputSchema) ]).optional(),
}).strict();

export const CarCreateNestedOneWithoutPucChecksInputSchema: z.ZodType<Prisma.CarCreateNestedOneWithoutPucChecksInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedCreateWithoutPucChecksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutPucChecksInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional()
}).strict();

export const CarUpdateOneRequiredWithoutPucChecksNestedInputSchema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutPucChecksNestedInput> = z.object({
  create: z.union([ z.lazy(() => CarCreateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedCreateWithoutPucChecksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CarCreateOrConnectWithoutPucChecksInputSchema).optional(),
  upsert: z.lazy(() => CarUpsertWithoutPucChecksInputSchema).optional(),
  connect: z.lazy(() => CarWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CarUpdateToOneWithWhereWithoutPucChecksInputSchema),z.lazy(() => CarUpdateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedUpdateWithoutPucChecksInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserRoleFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedEnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumReminderTypeFilterSchema: z.ZodType<Prisma.NestedEnumReminderTypeFilter> = z.object({
  equals: z.lazy(() => ReminderTypeSchema).optional(),
  in: z.lazy(() => ReminderTypeSchema).array().optional(),
  notIn: z.lazy(() => ReminderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => NestedEnumReminderTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumReminderTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumReminderTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ReminderTypeSchema).optional(),
  in: z.lazy(() => ReminderTypeSchema).array().optional(),
  notIn: z.lazy(() => ReminderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => NestedEnumReminderTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumReminderTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumReminderTypeFilterSchema).optional()
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const CarCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateWithoutOwnerInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.number().int().optional(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CarCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.CarCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CarCreateManyOwnerInputSchema),z.lazy(() => CarCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReminderJobCreateWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobCreateWithoutUserInput> = z.object({
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  car: z.lazy(() => CarCreateNestedOneWithoutReminderJobInputSchema)
}).strict();

export const ReminderJobUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReminderJobCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReminderJobCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReminderJobCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReminderJobCreateManyUserInputSchema),z.lazy(() => ReminderJobCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
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
  userAccounts: z.lazy(() => UserAccountCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
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
  userAccounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserAccountCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutUserAccountsInputSchema)
}).strict();

export const UserAccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  accountId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserAccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserAccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserAccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserAccountCreateManyUserInputSchema),z.lazy(() => UserAccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserSessionCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSessionCreateWithoutUserInput> = z.object({
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserSessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserSessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserSessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserSessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserSessionCreateManyUserInputSchema),z.lazy(() => UserSessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CarUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CarUpdateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => CarCreateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CarUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CarUpdateWithoutOwnerInputSchema),z.lazy(() => CarUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const CarUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => CarScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CarUpdateManyMutationInputSchema),z.lazy(() => CarUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const CarScalarWhereInputSchema: z.ZodType<Prisma.CarScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CarScalarWhereInputSchema),z.lazy(() => CarScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CarScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CarScalarWhereInputSchema),z.lazy(() => CarScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ownerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  brand: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  model: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  mileage: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  licensePlate: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReminderJobUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReminderJobUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReminderJobUpdateWithoutUserInputSchema),z.lazy(() => ReminderJobUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ReminderJobUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReminderJobScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReminderJobUpdateManyMutationInputSchema),z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ReminderJobScalarWhereInputSchema: z.ZodType<Prisma.ReminderJobScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderJobScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderJobScalarWhereInputSchema),z.lazy(() => ReminderJobScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumReminderTypeFilterSchema),z.lazy(() => ReminderTypeSchema) ]).optional(),
  referenceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserAccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserAccountUpdateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserAccountCreateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserAccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserAccountUpdateWithoutUserInputSchema),z.lazy(() => UserAccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UserAccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserAccountUpdateManyMutationInputSchema),z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserAccountScalarWhereInputSchema: z.ZodType<Prisma.UserAccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAccountScalarWhereInputSchema),z.lazy(() => UserAccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  accountId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserSessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserSessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserSessionUpdateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserSessionCreateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UserSessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UserSessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserSessionUpdateWithoutUserInputSchema),z.lazy(() => UserSessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UserSessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserSessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserSessionUpdateManyMutationInputSchema),z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserSessionScalarWhereInputSchema: z.ZodType<Prisma.UserSessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserSessionScalarWhereInputSchema),z.lazy(() => UserSessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSessionScalarWhereInputSchema),z.lazy(() => UserSessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  deviceInfo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateWithoutCarsInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  reminders: z.lazy(() => ReminderJobCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCarsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCarsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  reminders: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCarsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCarsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCarsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema) ]),
}).strict();

export const ServiceLogCreateWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogCreateWithoutCarInput> = z.object({
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  serviceType: z.lazy(() => ServiceTypeCreateNestedOneWithoutServiceLogsInputSchema)
}).strict();

export const ServiceLogUncheckedCreateWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUncheckedCreateWithoutCarInput> = z.object({
  id: z.number().int().optional(),
  serviceTypeId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogCreateOrConnectWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogCreateOrConnectWithoutCarInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const ServiceLogCreateManyCarInputEnvelopeSchema: z.ZodType<Prisma.ServiceLogCreateManyCarInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServiceLogCreateManyCarInputSchema),z.lazy(() => ServiceLogCreateManyCarInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InsuranceCreateWithoutCarInputSchema: z.ZodType<Prisma.InsuranceCreateWithoutCarInput> = z.object({
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InsuranceUncheckedCreateWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUncheckedCreateWithoutCarInput> = z.object({
  id: z.number().int().optional(),
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InsuranceCreateOrConnectWithoutCarInputSchema: z.ZodType<Prisma.InsuranceCreateOrConnectWithoutCarInput> = z.object({
  where: z.lazy(() => InsuranceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const InsuranceCreateManyCarInputEnvelopeSchema: z.ZodType<Prisma.InsuranceCreateManyCarInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InsuranceCreateManyCarInputSchema),z.lazy(() => InsuranceCreateManyCarInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PUCCheckCreateWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckCreateWithoutCarInput> = z.object({
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const PUCCheckUncheckedCreateWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUncheckedCreateWithoutCarInput> = z.object({
  id: z.number().int().optional(),
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const PUCCheckCreateOrConnectWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckCreateOrConnectWithoutCarInput> = z.object({
  where: z.lazy(() => PUCCheckWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const PUCCheckCreateManyCarInputEnvelopeSchema: z.ZodType<Prisma.PUCCheckCreateManyCarInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PUCCheckCreateManyCarInputSchema),z.lazy(() => PUCCheckCreateManyCarInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReminderJobCreateWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobCreateWithoutCarInput> = z.object({
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRemindersInputSchema)
}).strict();

export const ReminderJobUncheckedCreateWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUncheckedCreateWithoutCarInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReminderJobCreateOrConnectWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobCreateOrConnectWithoutCarInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const ReminderJobCreateManyCarInputEnvelopeSchema: z.ZodType<Prisma.ReminderJobCreateManyCarInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReminderJobCreateManyCarInputSchema),z.lazy(() => ReminderJobCreateManyCarInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutCarsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCarsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCarsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCarsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCarsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCarsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCarsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCarsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCarsInputSchema) ]),
}).strict();

export const UserUpdateWithoutCarsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCarsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reminders: z.lazy(() => ReminderJobUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCarsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCarsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reminders: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ServiceLogUpsertWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUpsertWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedUpdateWithoutCarInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const ServiceLogUpdateWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUpdateWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceLogUpdateWithoutCarInputSchema),z.lazy(() => ServiceLogUncheckedUpdateWithoutCarInputSchema) ]),
}).strict();

export const ServiceLogUpdateManyWithWhereWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUpdateManyWithWhereWithoutCarInput> = z.object({
  where: z.lazy(() => ServiceLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceLogUpdateManyMutationInputSchema),z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarInputSchema) ]),
}).strict();

export const ServiceLogScalarWhereInputSchema: z.ZodType<Prisma.ServiceLogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceLogScalarWhereInputSchema),z.lazy(() => ServiceLogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serviceTypeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  serviceDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mileageAtTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InsuranceUpsertWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUpsertWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => InsuranceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InsuranceUpdateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedUpdateWithoutCarInputSchema) ]),
  create: z.union([ z.lazy(() => InsuranceCreateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const InsuranceUpdateWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUpdateWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => InsuranceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InsuranceUpdateWithoutCarInputSchema),z.lazy(() => InsuranceUncheckedUpdateWithoutCarInputSchema) ]),
}).strict();

export const InsuranceUpdateManyWithWhereWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUpdateManyWithWhereWithoutCarInput> = z.object({
  where: z.lazy(() => InsuranceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InsuranceUpdateManyMutationInputSchema),z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarInputSchema) ]),
}).strict();

export const InsuranceScalarWhereInputSchema: z.ZodType<Prisma.InsuranceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InsuranceScalarWhereInputSchema),z.lazy(() => InsuranceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InsuranceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InsuranceScalarWhereInputSchema),z.lazy(() => InsuranceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  policyNo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiryDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PUCCheckUpsertWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUpsertWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => PUCCheckWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PUCCheckUpdateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedUpdateWithoutCarInputSchema) ]),
  create: z.union([ z.lazy(() => PUCCheckCreateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const PUCCheckUpdateWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUpdateWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => PUCCheckWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PUCCheckUpdateWithoutCarInputSchema),z.lazy(() => PUCCheckUncheckedUpdateWithoutCarInputSchema) ]),
}).strict();

export const PUCCheckUpdateManyWithWhereWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUpdateManyWithWhereWithoutCarInput> = z.object({
  where: z.lazy(() => PUCCheckScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PUCCheckUpdateManyMutationInputSchema),z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarInputSchema) ]),
}).strict();

export const PUCCheckScalarWhereInputSchema: z.ZodType<Prisma.PUCCheckScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PUCCheckScalarWhereInputSchema),z.lazy(() => PUCCheckScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PUCCheckScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PUCCheckScalarWhereInputSchema),z.lazy(() => PUCCheckScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  checkedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  validTill: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  documentUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReminderJobUpsertWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUpsertWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReminderJobUpdateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedUpdateWithoutCarInputSchema) ]),
  create: z.union([ z.lazy(() => ReminderJobCreateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedCreateWithoutCarInputSchema) ]),
}).strict();

export const ReminderJobUpdateWithWhereUniqueWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUpdateWithWhereUniqueWithoutCarInput> = z.object({
  where: z.lazy(() => ReminderJobWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReminderJobUpdateWithoutCarInputSchema),z.lazy(() => ReminderJobUncheckedUpdateWithoutCarInputSchema) ]),
}).strict();

export const ReminderJobUpdateManyWithWhereWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUpdateManyWithWhereWithoutCarInput> = z.object({
  where: z.lazy(() => ReminderJobScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReminderJobUpdateManyMutationInputSchema),z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarInputSchema) ]),
}).strict();

export const ServiceLogCreateWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogCreateWithoutServiceTypeInput> = z.object({
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  car: z.lazy(() => CarCreateNestedOneWithoutServiceLogsInputSchema)
}).strict();

export const ServiceLogUncheckedCreateWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUncheckedCreateWithoutServiceTypeInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogCreateOrConnectWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogCreateOrConnectWithoutServiceTypeInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema) ]),
}).strict();

export const ServiceLogCreateManyServiceTypeInputEnvelopeSchema: z.ZodType<Prisma.ServiceLogCreateManyServiceTypeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServiceLogCreateManyServiceTypeInputSchema),z.lazy(() => ServiceLogCreateManyServiceTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUpsertWithWhereUniqueWithoutServiceTypeInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceLogUpdateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedUpdateWithoutServiceTypeInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceLogCreateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedCreateWithoutServiceTypeInputSchema) ]),
}).strict();

export const ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUpdateWithWhereUniqueWithoutServiceTypeInput> = z.object({
  where: z.lazy(() => ServiceLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceLogUpdateWithoutServiceTypeInputSchema),z.lazy(() => ServiceLogUncheckedUpdateWithoutServiceTypeInputSchema) ]),
}).strict();

export const ServiceLogUpdateManyWithWhereWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUpdateManyWithWhereWithoutServiceTypeInput> = z.object({
  where: z.lazy(() => ServiceLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceLogUpdateManyMutationInputSchema),z.lazy(() => ServiceLogUncheckedUpdateManyWithoutServiceTypeInputSchema) ]),
}).strict();

export const CarCreateWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarCreateWithoutServiceLogsInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
  insurance: z.lazy(() => InsuranceCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutServiceLogsInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  insurance: z.lazy(() => InsuranceUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarCreateOrConnectWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutServiceLogsInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CarCreateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedCreateWithoutServiceLogsInputSchema) ]),
}).strict();

export const ServiceTypeCreateWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeCreateWithoutServiceLogsInput> = z.object({
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().optional().nullable(),
  intervalDays: z.number().int().optional().nullable()
}).strict();

export const ServiceTypeUncheckedCreateWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeUncheckedCreateWithoutServiceLogsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  label: z.string(),
  intervalKm: z.number().int().optional().nullable(),
  intervalDays: z.number().int().optional().nullable()
}).strict();

export const ServiceTypeCreateOrConnectWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeCreateOrConnectWithoutServiceLogsInput> = z.object({
  where: z.lazy(() => ServiceTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceTypeCreateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedCreateWithoutServiceLogsInputSchema) ]),
}).strict();

export const CarUpsertWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarUpsertWithoutServiceLogsInput> = z.object({
  update: z.union([ z.lazy(() => CarUpdateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedUpdateWithoutServiceLogsInputSchema) ]),
  create: z.union([ z.lazy(() => CarCreateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedCreateWithoutServiceLogsInputSchema) ]),
  where: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const CarUpdateToOneWithWhereWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarUpdateToOneWithWhereWithoutServiceLogsInput> = z.object({
  where: z.lazy(() => CarWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CarUpdateWithoutServiceLogsInputSchema),z.lazy(() => CarUncheckedUpdateWithoutServiceLogsInputSchema) ]),
}).strict();

export const CarUpdateWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarUpdateWithoutServiceLogsInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateWithoutServiceLogsInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutServiceLogsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  insurance: z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const ServiceTypeUpsertWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeUpsertWithoutServiceLogsInput> = z.object({
  update: z.union([ z.lazy(() => ServiceTypeUpdateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedUpdateWithoutServiceLogsInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceTypeCreateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedCreateWithoutServiceLogsInputSchema) ]),
  where: z.lazy(() => ServiceTypeWhereInputSchema).optional()
}).strict();

export const ServiceTypeUpdateToOneWithWhereWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeUpdateToOneWithWhereWithoutServiceLogsInput> = z.object({
  where: z.lazy(() => ServiceTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceTypeUpdateWithoutServiceLogsInputSchema),z.lazy(() => ServiceTypeUncheckedUpdateWithoutServiceLogsInputSchema) ]),
}).strict();

export const ServiceTypeUpdateWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeUpdateWithoutServiceLogsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ServiceTypeUncheckedUpdateWithoutServiceLogsInputSchema: z.ZodType<Prisma.ServiceTypeUncheckedUpdateWithoutServiceLogsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  intervalKm: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const UserAccountCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateWithoutAccountInput> = z.object({
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const UserAccountUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedCreateWithoutAccountInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserAccountCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAccountInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const UserAccountCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.UserAccountCreateManyAccountInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserAccountCreateManyAccountInputSchema),z.lazy(() => UserAccountCreateManyAccountInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutAccountInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserAccountUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpsertWithWhereUniqueWithoutAccountInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserAccountUpdateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedUpdateWithoutAccountInputSchema) ]),
  create: z.union([ z.lazy(() => UserAccountCreateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const UserAccountUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateWithWhereUniqueWithoutAccountInput> = z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserAccountUpdateWithoutAccountInputSchema),z.lazy(() => UserAccountUncheckedUpdateWithoutAccountInputSchema) ]),
}).strict();

export const UserAccountUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateManyWithWhereWithoutAccountInput> = z.object({
  where: z.lazy(() => UserAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserAccountUpdateManyMutationInputSchema),z.lazy(() => UserAccountUncheckedUpdateManyWithoutAccountInputSchema) ]),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const AccountCreateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserAccountsInput> = z.object({
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
  user: z.lazy(() => UserCreateNestedOneWithoutAccountInputSchema)
}).strict();

export const AccountUncheckedCreateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserAccountsInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
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
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountCreateOrConnectWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserAccountsInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const AccountUpsertWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpsertWithoutUserAccountsInput> = z.object({
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserAccountsInputSchema) ]),
  where: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const AccountUpdateToOneWithWhereWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutUserAccountsInput> = z.object({
  where: z.lazy(() => AccountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserAccountsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserAccountsInputSchema) ]),
}).strict();

export const AccountUpdateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserAccountsInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateWithoutUserAccountsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserAccountsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutRemindersInputSchema: z.ZodType<Prisma.UserCreateWithoutRemindersInput> = z.object({
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarCreateNestedManyWithoutOwnerInputSchema).optional(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutRemindersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRemindersInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  username: z.string(),
  isVerified: z.boolean().optional(),
  role: z.lazy(() => UserRoleSchema).optional(),
  oauthOnly: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onBoarded: z.boolean().optional(),
  name: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  driversLicense: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  cars: z.lazy(() => CarUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutRemindersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRemindersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedCreateWithoutRemindersInputSchema) ]),
}).strict();

export const CarCreateWithoutReminderJobInputSchema: z.ZodType<Prisma.CarCreateWithoutReminderJobInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateWithoutReminderJobInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutReminderJobInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarCreateOrConnectWithoutReminderJobInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutReminderJobInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CarCreateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedCreateWithoutReminderJobInputSchema) ]),
}).strict();

export const UserUpsertWithoutRemindersInputSchema: z.ZodType<Prisma.UserUpsertWithoutRemindersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRemindersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedCreateWithoutRemindersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutRemindersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRemindersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRemindersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRemindersInputSchema) ]),
}).strict();

export const UserUpdateWithoutRemindersInputSchema: z.ZodType<Prisma.UserUpdateWithoutRemindersInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUpdateManyWithoutOwnerNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutRemindersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRemindersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isVerified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  oauthOnly: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  onBoarded: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driversLicense: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cars: z.lazy(() => CarUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  accounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => UserSessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CarUpsertWithoutReminderJobInputSchema: z.ZodType<Prisma.CarUpsertWithoutReminderJobInput> = z.object({
  update: z.union([ z.lazy(() => CarUpdateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedUpdateWithoutReminderJobInputSchema) ]),
  create: z.union([ z.lazy(() => CarCreateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedCreateWithoutReminderJobInputSchema) ]),
  where: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const CarUpdateToOneWithWhereWithoutReminderJobInputSchema: z.ZodType<Prisma.CarUpdateToOneWithWhereWithoutReminderJobInput> = z.object({
  where: z.lazy(() => CarWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CarUpdateWithoutReminderJobInputSchema),z.lazy(() => CarUncheckedUpdateWithoutReminderJobInputSchema) ]),
}).strict();

export const CarUpdateWithoutReminderJobInputSchema: z.ZodType<Prisma.CarUpdateWithoutReminderJobInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema).optional(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateWithoutReminderJobInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutReminderJobInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarCreateWithoutInsuranceInputSchema: z.ZodType<Prisma.CarCreateWithoutInsuranceInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateWithoutInsuranceInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutInsuranceInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarCreateOrConnectWithoutInsuranceInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutInsuranceInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CarCreateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedCreateWithoutInsuranceInputSchema) ]),
}).strict();

export const CarUpsertWithoutInsuranceInputSchema: z.ZodType<Prisma.CarUpsertWithoutInsuranceInput> = z.object({
  update: z.union([ z.lazy(() => CarUpdateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedUpdateWithoutInsuranceInputSchema) ]),
  create: z.union([ z.lazy(() => CarCreateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedCreateWithoutInsuranceInputSchema) ]),
  where: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const CarUpdateToOneWithWhereWithoutInsuranceInputSchema: z.ZodType<Prisma.CarUpdateToOneWithWhereWithoutInsuranceInput> = z.object({
  where: z.lazy(() => CarWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CarUpdateWithoutInsuranceInputSchema),z.lazy(() => CarUncheckedUpdateWithoutInsuranceInputSchema) ]),
}).strict();

export const CarUpdateWithoutInsuranceInputSchema: z.ZodType<Prisma.CarUpdateWithoutInsuranceInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema).optional(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateWithoutInsuranceInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutInsuranceInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarCreateWithoutPucChecksInputSchema: z.ZodType<Prisma.CarCreateWithoutPucChecksInput> = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutCarsInputSchema),
  serviceLogs: z.lazy(() => ServiceLogCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarUncheckedCreateWithoutPucChecksInputSchema: z.ZodType<Prisma.CarUncheckedCreateWithoutPucChecksInput> = z.object({
  id: z.number().int().optional(),
  ownerId: z.number().int(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedCreateNestedManyWithoutCarInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedCreateNestedManyWithoutCarInputSchema).optional()
}).strict();

export const CarCreateOrConnectWithoutPucChecksInputSchema: z.ZodType<Prisma.CarCreateOrConnectWithoutPucChecksInput> = z.object({
  where: z.lazy(() => CarWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CarCreateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedCreateWithoutPucChecksInputSchema) ]),
}).strict();

export const CarUpsertWithoutPucChecksInputSchema: z.ZodType<Prisma.CarUpsertWithoutPucChecksInput> = z.object({
  update: z.union([ z.lazy(() => CarUpdateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedUpdateWithoutPucChecksInputSchema) ]),
  create: z.union([ z.lazy(() => CarCreateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedCreateWithoutPucChecksInputSchema) ]),
  where: z.lazy(() => CarWhereInputSchema).optional()
}).strict();

export const CarUpdateToOneWithWhereWithoutPucChecksInputSchema: z.ZodType<Prisma.CarUpdateToOneWithWhereWithoutPucChecksInput> = z.object({
  where: z.lazy(() => CarWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CarUpdateWithoutPucChecksInputSchema),z.lazy(() => CarUncheckedUpdateWithoutPucChecksInputSchema) ]),
}).strict();

export const CarUpdateWithoutPucChecksInputSchema: z.ZodType<Prisma.CarUpdateWithoutPucChecksInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutCarsNestedInputSchema).optional(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateWithoutPucChecksInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutPucChecksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarCreateManyOwnerInputSchema: z.ZodType<Prisma.CarCreateManyOwnerInput> = z.object({
  id: z.number().int().optional(),
  brand: z.string(),
  model: z.string(),
  year: z.number().int(),
  mileage: z.number().int().optional().nullable(),
  color: z.string().optional().nullable(),
  licensePlate: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderJobCreateManyUserInputSchema: z.ZodType<Prisma.ReminderJobCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
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
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserAccountCreateManyUserInputSchema: z.ZodType<Prisma.UserAccountCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  accountId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserSessionCreateManyUserInputSchema: z.ZodType<Prisma.UserSessionCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  expires: z.coerce.date(),
  sessionToken: z.string(),
  deviceInfo: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CarUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUpdateWithoutOwnerInput> = z.object({
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceLogs: z.lazy(() => ServiceLogUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  insurance: z.lazy(() => InsuranceUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  pucChecks: z.lazy(() => PUCCheckUncheckedUpdateManyWithoutCarNestedInputSchema).optional(),
  ReminderJob: z.lazy(() => ReminderJobUncheckedUpdateManyWithoutCarNestedInputSchema).optional()
}).strict();

export const CarUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.CarUncheckedUpdateManyWithoutOwnerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  model: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  mileage: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  licensePlate: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUpdateWithoutUserInput> = z.object({
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutReminderJobNestedInputSchema).optional()
}).strict();

export const ReminderJobUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userAccounts: z.lazy(() => UserAccountUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userAccounts: z.lazy(() => UserAccountUncheckedUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutUserAccountsNestedInputSchema).optional()
}).strict();

export const UserAccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUpdateWithoutUserInput> = z.object({
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserSessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  deviceInfo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ipAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogCreateManyCarInputSchema: z.ZodType<Prisma.ServiceLogCreateManyCarInput> = z.object({
  id: z.number().int().optional(),
  serviceTypeId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InsuranceCreateManyCarInputSchema: z.ZodType<Prisma.InsuranceCreateManyCarInput> = z.object({
  id: z.number().int().optional(),
  provider: z.string(),
  policyNo: z.string(),
  startDate: z.coerce.date(),
  expiryDate: z.coerce.date(),
  amount: z.number().optional().nullable(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const PUCCheckCreateManyCarInputSchema: z.ZodType<Prisma.PUCCheckCreateManyCarInput> = z.object({
  id: z.number().int().optional(),
  checkedAt: z.coerce.date(),
  validTill: z.coerce.date(),
  documentUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReminderJobCreateManyCarInputSchema: z.ZodType<Prisma.ReminderJobCreateManyCarInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  type: z.lazy(() => ReminderTypeSchema),
  referenceId: z.string(),
  scheduledAt: z.coerce.date(),
  sent: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogUpdateWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUpdateWithoutCarInput> = z.object({
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceType: z.lazy(() => ServiceTypeUpdateOneRequiredWithoutServiceLogsNestedInputSchema).optional()
}).strict();

export const ServiceLogUncheckedUpdateWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceTypeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogUncheckedUpdateManyWithoutCarInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateManyWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceTypeId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceUpdateWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUpdateWithoutCarInput> = z.object({
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceUncheckedUpdateWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUncheckedUpdateWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InsuranceUncheckedUpdateManyWithoutCarInputSchema: z.ZodType<Prisma.InsuranceUncheckedUpdateManyWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  policyNo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiryDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckUpdateWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUpdateWithoutCarInput> = z.object({
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckUncheckedUpdateWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUncheckedUpdateWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PUCCheckUncheckedUpdateManyWithoutCarInputSchema: z.ZodType<Prisma.PUCCheckUncheckedUpdateManyWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  checkedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  validTill: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  documentUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobUpdateWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUpdateWithoutCarInput> = z.object({
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRemindersNestedInputSchema).optional()
}).strict();

export const ReminderJobUncheckedUpdateWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderJobUncheckedUpdateManyWithoutCarInputSchema: z.ZodType<Prisma.ReminderJobUncheckedUpdateManyWithoutCarInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ReminderTypeSchema),z.lazy(() => EnumReminderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  referenceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogCreateManyServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogCreateManyServiceTypeInput> = z.object({
  id: z.number().int().optional(),
  carId: z.number().int(),
  serviceDate: z.coerce.date(),
  mileageAtTime: z.number().int().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ServiceLogUpdateWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUpdateWithoutServiceTypeInput> = z.object({
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  car: z.lazy(() => CarUpdateOneRequiredWithoutServiceLogsNestedInputSchema).optional()
}).strict();

export const ServiceLogUncheckedUpdateWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateWithoutServiceTypeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceLogUncheckedUpdateManyWithoutServiceTypeInputSchema: z.ZodType<Prisma.ServiceLogUncheckedUpdateManyWithoutServiceTypeInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serviceDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mileageAtTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountCreateManyAccountInputSchema: z.ZodType<Prisma.UserAccountCreateManyAccountInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UserAccountUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUpdateWithoutAccountInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const UserAccountUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateWithoutAccountInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserAccountUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.UserAccountUncheckedUpdateManyWithoutAccountInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const CarFindFirstArgsSchema: z.ZodType<Prisma.CarFindFirstArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereInputSchema.optional(),
  orderBy: z.union([ CarOrderByWithRelationInputSchema.array(),CarOrderByWithRelationInputSchema ]).optional(),
  cursor: CarWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CarScalarFieldEnumSchema,CarScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CarFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CarFindFirstOrThrowArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereInputSchema.optional(),
  orderBy: z.union([ CarOrderByWithRelationInputSchema.array(),CarOrderByWithRelationInputSchema ]).optional(),
  cursor: CarWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CarScalarFieldEnumSchema,CarScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CarFindManyArgsSchema: z.ZodType<Prisma.CarFindManyArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereInputSchema.optional(),
  orderBy: z.union([ CarOrderByWithRelationInputSchema.array(),CarOrderByWithRelationInputSchema ]).optional(),
  cursor: CarWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CarScalarFieldEnumSchema,CarScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CarAggregateArgsSchema: z.ZodType<Prisma.CarAggregateArgs> = z.object({
  where: CarWhereInputSchema.optional(),
  orderBy: z.union([ CarOrderByWithRelationInputSchema.array(),CarOrderByWithRelationInputSchema ]).optional(),
  cursor: CarWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CarGroupByArgsSchema: z.ZodType<Prisma.CarGroupByArgs> = z.object({
  where: CarWhereInputSchema.optional(),
  orderBy: z.union([ CarOrderByWithAggregationInputSchema.array(),CarOrderByWithAggregationInputSchema ]).optional(),
  by: CarScalarFieldEnumSchema.array(),
  having: CarScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CarFindUniqueArgsSchema: z.ZodType<Prisma.CarFindUniqueArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereUniqueInputSchema,
}).strict() ;

export const CarFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CarFindUniqueOrThrowArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereUniqueInputSchema,
}).strict() ;

export const ServiceTypeFindFirstArgsSchema: z.ZodType<Prisma.ServiceTypeFindFirstArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereInputSchema.optional(),
  orderBy: z.union([ ServiceTypeOrderByWithRelationInputSchema.array(),ServiceTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceTypeScalarFieldEnumSchema,ServiceTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServiceTypeFindFirstOrThrowArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereInputSchema.optional(),
  orderBy: z.union([ ServiceTypeOrderByWithRelationInputSchema.array(),ServiceTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceTypeScalarFieldEnumSchema,ServiceTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceTypeFindManyArgsSchema: z.ZodType<Prisma.ServiceTypeFindManyArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereInputSchema.optional(),
  orderBy: z.union([ ServiceTypeOrderByWithRelationInputSchema.array(),ServiceTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceTypeScalarFieldEnumSchema,ServiceTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceTypeAggregateArgsSchema: z.ZodType<Prisma.ServiceTypeAggregateArgs> = z.object({
  where: ServiceTypeWhereInputSchema.optional(),
  orderBy: z.union([ ServiceTypeOrderByWithRelationInputSchema.array(),ServiceTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceTypeGroupByArgsSchema: z.ZodType<Prisma.ServiceTypeGroupByArgs> = z.object({
  where: ServiceTypeWhereInputSchema.optional(),
  orderBy: z.union([ ServiceTypeOrderByWithAggregationInputSchema.array(),ServiceTypeOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceTypeScalarFieldEnumSchema.array(),
  having: ServiceTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceTypeFindUniqueArgsSchema: z.ZodType<Prisma.ServiceTypeFindUniqueArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereUniqueInputSchema,
}).strict() ;

export const ServiceTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServiceTypeFindUniqueOrThrowArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereUniqueInputSchema,
}).strict() ;

export const ServiceLogFindFirstArgsSchema: z.ZodType<Prisma.ServiceLogFindFirstArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereInputSchema.optional(),
  orderBy: z.union([ ServiceLogOrderByWithRelationInputSchema.array(),ServiceLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceLogScalarFieldEnumSchema,ServiceLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceLogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServiceLogFindFirstOrThrowArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereInputSchema.optional(),
  orderBy: z.union([ ServiceLogOrderByWithRelationInputSchema.array(),ServiceLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceLogScalarFieldEnumSchema,ServiceLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceLogFindManyArgsSchema: z.ZodType<Prisma.ServiceLogFindManyArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereInputSchema.optional(),
  orderBy: z.union([ ServiceLogOrderByWithRelationInputSchema.array(),ServiceLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceLogScalarFieldEnumSchema,ServiceLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceLogAggregateArgsSchema: z.ZodType<Prisma.ServiceLogAggregateArgs> = z.object({
  where: ServiceLogWhereInputSchema.optional(),
  orderBy: z.union([ ServiceLogOrderByWithRelationInputSchema.array(),ServiceLogOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceLogGroupByArgsSchema: z.ZodType<Prisma.ServiceLogGroupByArgs> = z.object({
  where: ServiceLogWhereInputSchema.optional(),
  orderBy: z.union([ ServiceLogOrderByWithAggregationInputSchema.array(),ServiceLogOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceLogScalarFieldEnumSchema.array(),
  having: ServiceLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceLogFindUniqueArgsSchema: z.ZodType<Prisma.ServiceLogFindUniqueArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereUniqueInputSchema,
}).strict() ;

export const ServiceLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServiceLogFindUniqueOrThrowArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereUniqueInputSchema,
}).strict() ;

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const UserAccountFindFirstArgsSchema: z.ZodType<Prisma.UserAccountFindFirstArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereInputSchema.optional(),
  orderBy: z.union([ UserAccountOrderByWithRelationInputSchema.array(),UserAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserAccountScalarFieldEnumSchema,UserAccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserAccountFindFirstOrThrowArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereInputSchema.optional(),
  orderBy: z.union([ UserAccountOrderByWithRelationInputSchema.array(),UserAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserAccountScalarFieldEnumSchema,UserAccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAccountFindManyArgsSchema: z.ZodType<Prisma.UserAccountFindManyArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereInputSchema.optional(),
  orderBy: z.union([ UserAccountOrderByWithRelationInputSchema.array(),UserAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserAccountScalarFieldEnumSchema,UserAccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAccountAggregateArgsSchema: z.ZodType<Prisma.UserAccountAggregateArgs> = z.object({
  where: UserAccountWhereInputSchema.optional(),
  orderBy: z.union([ UserAccountOrderByWithRelationInputSchema.array(),UserAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserAccountGroupByArgsSchema: z.ZodType<Prisma.UserAccountGroupByArgs> = z.object({
  where: UserAccountWhereInputSchema.optional(),
  orderBy: z.union([ UserAccountOrderByWithAggregationInputSchema.array(),UserAccountOrderByWithAggregationInputSchema ]).optional(),
  by: UserAccountScalarFieldEnumSchema.array(),
  having: UserAccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserAccountFindUniqueArgsSchema: z.ZodType<Prisma.UserAccountFindUniqueArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereUniqueInputSchema,
}).strict() ;

export const UserAccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserAccountFindUniqueOrThrowArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereUniqueInputSchema,
}).strict() ;

export const UserSessionFindFirstArgsSchema: z.ZodType<Prisma.UserSessionFindFirstArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereInputSchema.optional(),
  orderBy: z.union([ UserSessionOrderByWithRelationInputSchema.array(),UserSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSessionScalarFieldEnumSchema,UserSessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserSessionFindFirstOrThrowArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereInputSchema.optional(),
  orderBy: z.union([ UserSessionOrderByWithRelationInputSchema.array(),UserSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSessionScalarFieldEnumSchema,UserSessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSessionFindManyArgsSchema: z.ZodType<Prisma.UserSessionFindManyArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereInputSchema.optional(),
  orderBy: z.union([ UserSessionOrderByWithRelationInputSchema.array(),UserSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSessionScalarFieldEnumSchema,UserSessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSessionAggregateArgsSchema: z.ZodType<Prisma.UserSessionAggregateArgs> = z.object({
  where: UserSessionWhereInputSchema.optional(),
  orderBy: z.union([ UserSessionOrderByWithRelationInputSchema.array(),UserSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserSessionGroupByArgsSchema: z.ZodType<Prisma.UserSessionGroupByArgs> = z.object({
  where: UserSessionWhereInputSchema.optional(),
  orderBy: z.union([ UserSessionOrderByWithAggregationInputSchema.array(),UserSessionOrderByWithAggregationInputSchema ]).optional(),
  by: UserSessionScalarFieldEnumSchema.array(),
  having: UserSessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserSessionFindUniqueArgsSchema: z.ZodType<Prisma.UserSessionFindUniqueArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereUniqueInputSchema,
}).strict() ;

export const UserSessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserSessionFindUniqueOrThrowArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereUniqueInputSchema,
}).strict() ;

export const ReminderJobFindFirstArgsSchema: z.ZodType<Prisma.ReminderJobFindFirstArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereInputSchema.optional(),
  orderBy: z.union([ ReminderJobOrderByWithRelationInputSchema.array(),ReminderJobOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderJobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderJobScalarFieldEnumSchema,ReminderJobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderJobFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReminderJobFindFirstOrThrowArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereInputSchema.optional(),
  orderBy: z.union([ ReminderJobOrderByWithRelationInputSchema.array(),ReminderJobOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderJobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderJobScalarFieldEnumSchema,ReminderJobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderJobFindManyArgsSchema: z.ZodType<Prisma.ReminderJobFindManyArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereInputSchema.optional(),
  orderBy: z.union([ ReminderJobOrderByWithRelationInputSchema.array(),ReminderJobOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderJobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderJobScalarFieldEnumSchema,ReminderJobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderJobAggregateArgsSchema: z.ZodType<Prisma.ReminderJobAggregateArgs> = z.object({
  where: ReminderJobWhereInputSchema.optional(),
  orderBy: z.union([ ReminderJobOrderByWithRelationInputSchema.array(),ReminderJobOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderJobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReminderJobGroupByArgsSchema: z.ZodType<Prisma.ReminderJobGroupByArgs> = z.object({
  where: ReminderJobWhereInputSchema.optional(),
  orderBy: z.union([ ReminderJobOrderByWithAggregationInputSchema.array(),ReminderJobOrderByWithAggregationInputSchema ]).optional(),
  by: ReminderJobScalarFieldEnumSchema.array(),
  having: ReminderJobScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReminderJobFindUniqueArgsSchema: z.ZodType<Prisma.ReminderJobFindUniqueArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereUniqueInputSchema,
}).strict() ;

export const ReminderJobFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReminderJobFindUniqueOrThrowArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereUniqueInputSchema,
}).strict() ;

export const InsuranceFindFirstArgsSchema: z.ZodType<Prisma.InsuranceFindFirstArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereInputSchema.optional(),
  orderBy: z.union([ InsuranceOrderByWithRelationInputSchema.array(),InsuranceOrderByWithRelationInputSchema ]).optional(),
  cursor: InsuranceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InsuranceScalarFieldEnumSchema,InsuranceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InsuranceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InsuranceFindFirstOrThrowArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereInputSchema.optional(),
  orderBy: z.union([ InsuranceOrderByWithRelationInputSchema.array(),InsuranceOrderByWithRelationInputSchema ]).optional(),
  cursor: InsuranceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InsuranceScalarFieldEnumSchema,InsuranceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InsuranceFindManyArgsSchema: z.ZodType<Prisma.InsuranceFindManyArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereInputSchema.optional(),
  orderBy: z.union([ InsuranceOrderByWithRelationInputSchema.array(),InsuranceOrderByWithRelationInputSchema ]).optional(),
  cursor: InsuranceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InsuranceScalarFieldEnumSchema,InsuranceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InsuranceAggregateArgsSchema: z.ZodType<Prisma.InsuranceAggregateArgs> = z.object({
  where: InsuranceWhereInputSchema.optional(),
  orderBy: z.union([ InsuranceOrderByWithRelationInputSchema.array(),InsuranceOrderByWithRelationInputSchema ]).optional(),
  cursor: InsuranceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InsuranceGroupByArgsSchema: z.ZodType<Prisma.InsuranceGroupByArgs> = z.object({
  where: InsuranceWhereInputSchema.optional(),
  orderBy: z.union([ InsuranceOrderByWithAggregationInputSchema.array(),InsuranceOrderByWithAggregationInputSchema ]).optional(),
  by: InsuranceScalarFieldEnumSchema.array(),
  having: InsuranceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InsuranceFindUniqueArgsSchema: z.ZodType<Prisma.InsuranceFindUniqueArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereUniqueInputSchema,
}).strict() ;

export const InsuranceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InsuranceFindUniqueOrThrowArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereUniqueInputSchema,
}).strict() ;

export const PUCCheckFindFirstArgsSchema: z.ZodType<Prisma.PUCCheckFindFirstArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereInputSchema.optional(),
  orderBy: z.union([ PUCCheckOrderByWithRelationInputSchema.array(),PUCCheckOrderByWithRelationInputSchema ]).optional(),
  cursor: PUCCheckWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PUCCheckScalarFieldEnumSchema,PUCCheckScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PUCCheckFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PUCCheckFindFirstOrThrowArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereInputSchema.optional(),
  orderBy: z.union([ PUCCheckOrderByWithRelationInputSchema.array(),PUCCheckOrderByWithRelationInputSchema ]).optional(),
  cursor: PUCCheckWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PUCCheckScalarFieldEnumSchema,PUCCheckScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PUCCheckFindManyArgsSchema: z.ZodType<Prisma.PUCCheckFindManyArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereInputSchema.optional(),
  orderBy: z.union([ PUCCheckOrderByWithRelationInputSchema.array(),PUCCheckOrderByWithRelationInputSchema ]).optional(),
  cursor: PUCCheckWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PUCCheckScalarFieldEnumSchema,PUCCheckScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PUCCheckAggregateArgsSchema: z.ZodType<Prisma.PUCCheckAggregateArgs> = z.object({
  where: PUCCheckWhereInputSchema.optional(),
  orderBy: z.union([ PUCCheckOrderByWithRelationInputSchema.array(),PUCCheckOrderByWithRelationInputSchema ]).optional(),
  cursor: PUCCheckWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PUCCheckGroupByArgsSchema: z.ZodType<Prisma.PUCCheckGroupByArgs> = z.object({
  where: PUCCheckWhereInputSchema.optional(),
  orderBy: z.union([ PUCCheckOrderByWithAggregationInputSchema.array(),PUCCheckOrderByWithAggregationInputSchema ]).optional(),
  by: PUCCheckScalarFieldEnumSchema.array(),
  having: PUCCheckScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PUCCheckFindUniqueArgsSchema: z.ZodType<Prisma.PUCCheckFindUniqueArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereUniqueInputSchema,
}).strict() ;

export const PUCCheckFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PUCCheckFindUniqueOrThrowArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CarCreateArgsSchema: z.ZodType<Prisma.CarCreateArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  data: z.union([ CarCreateInputSchema,CarUncheckedCreateInputSchema ]),
}).strict() ;

export const CarUpsertArgsSchema: z.ZodType<Prisma.CarUpsertArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereUniqueInputSchema,
  create: z.union([ CarCreateInputSchema,CarUncheckedCreateInputSchema ]),
  update: z.union([ CarUpdateInputSchema,CarUncheckedUpdateInputSchema ]),
}).strict() ;

export const CarCreateManyArgsSchema: z.ZodType<Prisma.CarCreateManyArgs> = z.object({
  data: z.union([ CarCreateManyInputSchema,CarCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CarCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CarCreateManyAndReturnArgs> = z.object({
  data: z.union([ CarCreateManyInputSchema,CarCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CarDeleteArgsSchema: z.ZodType<Prisma.CarDeleteArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  where: CarWhereUniqueInputSchema,
}).strict() ;

export const CarUpdateArgsSchema: z.ZodType<Prisma.CarUpdateArgs> = z.object({
  select: CarSelectSchema.optional(),
  include: CarIncludeSchema.optional(),
  data: z.union([ CarUpdateInputSchema,CarUncheckedUpdateInputSchema ]),
  where: CarWhereUniqueInputSchema,
}).strict() ;

export const CarUpdateManyArgsSchema: z.ZodType<Prisma.CarUpdateManyArgs> = z.object({
  data: z.union([ CarUpdateManyMutationInputSchema,CarUncheckedUpdateManyInputSchema ]),
  where: CarWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CarUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CarUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CarUpdateManyMutationInputSchema,CarUncheckedUpdateManyInputSchema ]),
  where: CarWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CarDeleteManyArgsSchema: z.ZodType<Prisma.CarDeleteManyArgs> = z.object({
  where: CarWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceTypeCreateArgsSchema: z.ZodType<Prisma.ServiceTypeCreateArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  data: z.union([ ServiceTypeCreateInputSchema,ServiceTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const ServiceTypeUpsertArgsSchema: z.ZodType<Prisma.ServiceTypeUpsertArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereUniqueInputSchema,
  create: z.union([ ServiceTypeCreateInputSchema,ServiceTypeUncheckedCreateInputSchema ]),
  update: z.union([ ServiceTypeUpdateInputSchema,ServiceTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const ServiceTypeCreateManyArgsSchema: z.ZodType<Prisma.ServiceTypeCreateManyArgs> = z.object({
  data: z.union([ ServiceTypeCreateManyInputSchema,ServiceTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ServiceTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceTypeCreateManyInputSchema,ServiceTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ServiceTypeDeleteArgsSchema: z.ZodType<Prisma.ServiceTypeDeleteArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  where: ServiceTypeWhereUniqueInputSchema,
}).strict() ;

export const ServiceTypeUpdateArgsSchema: z.ZodType<Prisma.ServiceTypeUpdateArgs> = z.object({
  select: ServiceTypeSelectSchema.optional(),
  include: ServiceTypeIncludeSchema.optional(),
  data: z.union([ ServiceTypeUpdateInputSchema,ServiceTypeUncheckedUpdateInputSchema ]),
  where: ServiceTypeWhereUniqueInputSchema,
}).strict() ;

export const ServiceTypeUpdateManyArgsSchema: z.ZodType<Prisma.ServiceTypeUpdateManyArgs> = z.object({
  data: z.union([ ServiceTypeUpdateManyMutationInputSchema,ServiceTypeUncheckedUpdateManyInputSchema ]),
  where: ServiceTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceTypeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceTypeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceTypeUpdateManyMutationInputSchema,ServiceTypeUncheckedUpdateManyInputSchema ]),
  where: ServiceTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceTypeDeleteManyArgsSchema: z.ZodType<Prisma.ServiceTypeDeleteManyArgs> = z.object({
  where: ServiceTypeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceLogCreateArgsSchema: z.ZodType<Prisma.ServiceLogCreateArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  data: z.union([ ServiceLogCreateInputSchema,ServiceLogUncheckedCreateInputSchema ]),
}).strict() ;

export const ServiceLogUpsertArgsSchema: z.ZodType<Prisma.ServiceLogUpsertArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereUniqueInputSchema,
  create: z.union([ ServiceLogCreateInputSchema,ServiceLogUncheckedCreateInputSchema ]),
  update: z.union([ ServiceLogUpdateInputSchema,ServiceLogUncheckedUpdateInputSchema ]),
}).strict() ;

export const ServiceLogCreateManyArgsSchema: z.ZodType<Prisma.ServiceLogCreateManyArgs> = z.object({
  data: z.union([ ServiceLogCreateManyInputSchema,ServiceLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ServiceLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceLogCreateManyInputSchema,ServiceLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ServiceLogDeleteArgsSchema: z.ZodType<Prisma.ServiceLogDeleteArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  where: ServiceLogWhereUniqueInputSchema,
}).strict() ;

export const ServiceLogUpdateArgsSchema: z.ZodType<Prisma.ServiceLogUpdateArgs> = z.object({
  select: ServiceLogSelectSchema.optional(),
  include: ServiceLogIncludeSchema.optional(),
  data: z.union([ ServiceLogUpdateInputSchema,ServiceLogUncheckedUpdateInputSchema ]),
  where: ServiceLogWhereUniqueInputSchema,
}).strict() ;

export const ServiceLogUpdateManyArgsSchema: z.ZodType<Prisma.ServiceLogUpdateManyArgs> = z.object({
  data: z.union([ ServiceLogUpdateManyMutationInputSchema,ServiceLogUncheckedUpdateManyInputSchema ]),
  where: ServiceLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceLogUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ServiceLogUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ServiceLogUpdateManyMutationInputSchema,ServiceLogUncheckedUpdateManyInputSchema ]),
  where: ServiceLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceLogDeleteManyArgsSchema: z.ZodType<Prisma.ServiceLogDeleteManyArgs> = z.object({
  where: ServiceLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserAccountCreateArgsSchema: z.ZodType<Prisma.UserAccountCreateArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  data: z.union([ UserAccountCreateInputSchema,UserAccountUncheckedCreateInputSchema ]),
}).strict() ;

export const UserAccountUpsertArgsSchema: z.ZodType<Prisma.UserAccountUpsertArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereUniqueInputSchema,
  create: z.union([ UserAccountCreateInputSchema,UserAccountUncheckedCreateInputSchema ]),
  update: z.union([ UserAccountUpdateInputSchema,UserAccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserAccountCreateManyArgsSchema: z.ZodType<Prisma.UserAccountCreateManyArgs> = z.object({
  data: z.union([ UserAccountCreateManyInputSchema,UserAccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserAccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserAccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserAccountCreateManyInputSchema,UserAccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserAccountDeleteArgsSchema: z.ZodType<Prisma.UserAccountDeleteArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  where: UserAccountWhereUniqueInputSchema,
}).strict() ;

export const UserAccountUpdateArgsSchema: z.ZodType<Prisma.UserAccountUpdateArgs> = z.object({
  select: UserAccountSelectSchema.optional(),
  include: UserAccountIncludeSchema.optional(),
  data: z.union([ UserAccountUpdateInputSchema,UserAccountUncheckedUpdateInputSchema ]),
  where: UserAccountWhereUniqueInputSchema,
}).strict() ;

export const UserAccountUpdateManyArgsSchema: z.ZodType<Prisma.UserAccountUpdateManyArgs> = z.object({
  data: z.union([ UserAccountUpdateManyMutationInputSchema,UserAccountUncheckedUpdateManyInputSchema ]),
  where: UserAccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserAccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserAccountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserAccountUpdateManyMutationInputSchema,UserAccountUncheckedUpdateManyInputSchema ]),
  where: UserAccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserAccountDeleteManyArgsSchema: z.ZodType<Prisma.UserAccountDeleteManyArgs> = z.object({
  where: UserAccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserSessionCreateArgsSchema: z.ZodType<Prisma.UserSessionCreateArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  data: z.union([ UserSessionCreateInputSchema,UserSessionUncheckedCreateInputSchema ]),
}).strict() ;

export const UserSessionUpsertArgsSchema: z.ZodType<Prisma.UserSessionUpsertArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereUniqueInputSchema,
  create: z.union([ UserSessionCreateInputSchema,UserSessionUncheckedCreateInputSchema ]),
  update: z.union([ UserSessionUpdateInputSchema,UserSessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserSessionCreateManyArgsSchema: z.ZodType<Prisma.UserSessionCreateManyArgs> = z.object({
  data: z.union([ UserSessionCreateManyInputSchema,UserSessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserSessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserSessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserSessionCreateManyInputSchema,UserSessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserSessionDeleteArgsSchema: z.ZodType<Prisma.UserSessionDeleteArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  where: UserSessionWhereUniqueInputSchema,
}).strict() ;

export const UserSessionUpdateArgsSchema: z.ZodType<Prisma.UserSessionUpdateArgs> = z.object({
  select: UserSessionSelectSchema.optional(),
  include: UserSessionIncludeSchema.optional(),
  data: z.union([ UserSessionUpdateInputSchema,UserSessionUncheckedUpdateInputSchema ]),
  where: UserSessionWhereUniqueInputSchema,
}).strict() ;

export const UserSessionUpdateManyArgsSchema: z.ZodType<Prisma.UserSessionUpdateManyArgs> = z.object({
  data: z.union([ UserSessionUpdateManyMutationInputSchema,UserSessionUncheckedUpdateManyInputSchema ]),
  where: UserSessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserSessionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserSessionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserSessionUpdateManyMutationInputSchema,UserSessionUncheckedUpdateManyInputSchema ]),
  where: UserSessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserSessionDeleteManyArgsSchema: z.ZodType<Prisma.UserSessionDeleteManyArgs> = z.object({
  where: UserSessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReminderJobCreateArgsSchema: z.ZodType<Prisma.ReminderJobCreateArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  data: z.union([ ReminderJobCreateInputSchema,ReminderJobUncheckedCreateInputSchema ]),
}).strict() ;

export const ReminderJobUpsertArgsSchema: z.ZodType<Prisma.ReminderJobUpsertArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereUniqueInputSchema,
  create: z.union([ ReminderJobCreateInputSchema,ReminderJobUncheckedCreateInputSchema ]),
  update: z.union([ ReminderJobUpdateInputSchema,ReminderJobUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReminderJobCreateManyArgsSchema: z.ZodType<Prisma.ReminderJobCreateManyArgs> = z.object({
  data: z.union([ ReminderJobCreateManyInputSchema,ReminderJobCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReminderJobCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReminderJobCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReminderJobCreateManyInputSchema,ReminderJobCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReminderJobDeleteArgsSchema: z.ZodType<Prisma.ReminderJobDeleteArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  where: ReminderJobWhereUniqueInputSchema,
}).strict() ;

export const ReminderJobUpdateArgsSchema: z.ZodType<Prisma.ReminderJobUpdateArgs> = z.object({
  select: ReminderJobSelectSchema.optional(),
  include: ReminderJobIncludeSchema.optional(),
  data: z.union([ ReminderJobUpdateInputSchema,ReminderJobUncheckedUpdateInputSchema ]),
  where: ReminderJobWhereUniqueInputSchema,
}).strict() ;

export const ReminderJobUpdateManyArgsSchema: z.ZodType<Prisma.ReminderJobUpdateManyArgs> = z.object({
  data: z.union([ ReminderJobUpdateManyMutationInputSchema,ReminderJobUncheckedUpdateManyInputSchema ]),
  where: ReminderJobWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReminderJobUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ReminderJobUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ReminderJobUpdateManyMutationInputSchema,ReminderJobUncheckedUpdateManyInputSchema ]),
  where: ReminderJobWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReminderJobDeleteManyArgsSchema: z.ZodType<Prisma.ReminderJobDeleteManyArgs> = z.object({
  where: ReminderJobWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InsuranceCreateArgsSchema: z.ZodType<Prisma.InsuranceCreateArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  data: z.union([ InsuranceCreateInputSchema,InsuranceUncheckedCreateInputSchema ]),
}).strict() ;

export const InsuranceUpsertArgsSchema: z.ZodType<Prisma.InsuranceUpsertArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereUniqueInputSchema,
  create: z.union([ InsuranceCreateInputSchema,InsuranceUncheckedCreateInputSchema ]),
  update: z.union([ InsuranceUpdateInputSchema,InsuranceUncheckedUpdateInputSchema ]),
}).strict() ;

export const InsuranceCreateManyArgsSchema: z.ZodType<Prisma.InsuranceCreateManyArgs> = z.object({
  data: z.union([ InsuranceCreateManyInputSchema,InsuranceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InsuranceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.InsuranceCreateManyAndReturnArgs> = z.object({
  data: z.union([ InsuranceCreateManyInputSchema,InsuranceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InsuranceDeleteArgsSchema: z.ZodType<Prisma.InsuranceDeleteArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  where: InsuranceWhereUniqueInputSchema,
}).strict() ;

export const InsuranceUpdateArgsSchema: z.ZodType<Prisma.InsuranceUpdateArgs> = z.object({
  select: InsuranceSelectSchema.optional(),
  include: InsuranceIncludeSchema.optional(),
  data: z.union([ InsuranceUpdateInputSchema,InsuranceUncheckedUpdateInputSchema ]),
  where: InsuranceWhereUniqueInputSchema,
}).strict() ;

export const InsuranceUpdateManyArgsSchema: z.ZodType<Prisma.InsuranceUpdateManyArgs> = z.object({
  data: z.union([ InsuranceUpdateManyMutationInputSchema,InsuranceUncheckedUpdateManyInputSchema ]),
  where: InsuranceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InsuranceUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.InsuranceUpdateManyAndReturnArgs> = z.object({
  data: z.union([ InsuranceUpdateManyMutationInputSchema,InsuranceUncheckedUpdateManyInputSchema ]),
  where: InsuranceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InsuranceDeleteManyArgsSchema: z.ZodType<Prisma.InsuranceDeleteManyArgs> = z.object({
  where: InsuranceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PUCCheckCreateArgsSchema: z.ZodType<Prisma.PUCCheckCreateArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  data: z.union([ PUCCheckCreateInputSchema,PUCCheckUncheckedCreateInputSchema ]),
}).strict() ;

export const PUCCheckUpsertArgsSchema: z.ZodType<Prisma.PUCCheckUpsertArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereUniqueInputSchema,
  create: z.union([ PUCCheckCreateInputSchema,PUCCheckUncheckedCreateInputSchema ]),
  update: z.union([ PUCCheckUpdateInputSchema,PUCCheckUncheckedUpdateInputSchema ]),
}).strict() ;

export const PUCCheckCreateManyArgsSchema: z.ZodType<Prisma.PUCCheckCreateManyArgs> = z.object({
  data: z.union([ PUCCheckCreateManyInputSchema,PUCCheckCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PUCCheckCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PUCCheckCreateManyAndReturnArgs> = z.object({
  data: z.union([ PUCCheckCreateManyInputSchema,PUCCheckCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PUCCheckDeleteArgsSchema: z.ZodType<Prisma.PUCCheckDeleteArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  where: PUCCheckWhereUniqueInputSchema,
}).strict() ;

export const PUCCheckUpdateArgsSchema: z.ZodType<Prisma.PUCCheckUpdateArgs> = z.object({
  select: PUCCheckSelectSchema.optional(),
  include: PUCCheckIncludeSchema.optional(),
  data: z.union([ PUCCheckUpdateInputSchema,PUCCheckUncheckedUpdateInputSchema ]),
  where: PUCCheckWhereUniqueInputSchema,
}).strict() ;

export const PUCCheckUpdateManyArgsSchema: z.ZodType<Prisma.PUCCheckUpdateManyArgs> = z.object({
  data: z.union([ PUCCheckUpdateManyMutationInputSchema,PUCCheckUncheckedUpdateManyInputSchema ]),
  where: PUCCheckWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PUCCheckUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PUCCheckUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PUCCheckUpdateManyMutationInputSchema,PUCCheckUncheckedUpdateManyInputSchema ]),
  where: PUCCheckWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PUCCheckDeleteManyArgsSchema: z.ZodType<Prisma.PUCCheckDeleteManyArgs> = z.object({
  where: PUCCheckWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;