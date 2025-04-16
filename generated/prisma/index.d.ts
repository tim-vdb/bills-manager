
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ICAL
 * 
 */
export type ICAL = $Result.DefaultSelection<Prisma.$ICALPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model UserClient
 * 
 */
export type UserClient = $Result.DefaultSelection<Prisma.$UserClientPayload>
/**
 * Model ICALModule
 * 
 */
export type ICALModule = $Result.DefaultSelection<Prisma.$ICALModulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iCAL`: Exposes CRUD operations for the **ICAL** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ICALS
    * const iCALS = await prisma.iCAL.findMany()
    * ```
    */
  get iCAL(): Prisma.ICALDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userClient`: Exposes CRUD operations for the **UserClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserClients
    * const userClients = await prisma.userClient.findMany()
    * ```
    */
  get userClient(): Prisma.UserClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iCALModule`: Exposes CRUD operations for the **ICALModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ICALModules
    * const iCALModules = await prisma.iCALModule.findMany()
    * ```
    */
  get iCALModule(): Prisma.ICALModuleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    ICAL: 'ICAL',
    Module: 'Module',
    Bill: 'Bill',
    UserClient: 'UserClient',
    ICALModule: 'ICALModule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "iCAL" | "module" | "bill" | "userClient" | "iCALModule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ICAL: {
        payload: Prisma.$ICALPayload<ExtArgs>
        fields: Prisma.ICALFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ICALFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ICALFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          findFirst: {
            args: Prisma.ICALFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ICALFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          findMany: {
            args: Prisma.ICALFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>[]
          }
          create: {
            args: Prisma.ICALCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          createMany: {
            args: Prisma.ICALCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ICALCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>[]
          }
          delete: {
            args: Prisma.ICALDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          update: {
            args: Prisma.ICALUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          deleteMany: {
            args: Prisma.ICALDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ICALUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ICALUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>[]
          }
          upsert: {
            args: Prisma.ICALUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALPayload>
          }
          aggregate: {
            args: Prisma.ICALAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateICAL>
          }
          groupBy: {
            args: Prisma.ICALGroupByArgs<ExtArgs>
            result: $Utils.Optional<ICALGroupByOutputType>[]
          }
          count: {
            args: Prisma.ICALCountArgs<ExtArgs>
            result: $Utils.Optional<ICALCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      UserClient: {
        payload: Prisma.$UserClientPayload<ExtArgs>
        fields: Prisma.UserClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          findFirst: {
            args: Prisma.UserClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          findMany: {
            args: Prisma.UserClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          create: {
            args: Prisma.UserClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          createMany: {
            args: Prisma.UserClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          delete: {
            args: Prisma.UserClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          update: {
            args: Prisma.UserClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          deleteMany: {
            args: Prisma.UserClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>[]
          }
          upsert: {
            args: Prisma.UserClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserClientPayload>
          }
          aggregate: {
            args: Prisma.UserClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserClient>
          }
          groupBy: {
            args: Prisma.UserClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserClientCountArgs<ExtArgs>
            result: $Utils.Optional<UserClientCountAggregateOutputType> | number
          }
        }
      }
      ICALModule: {
        payload: Prisma.$ICALModulePayload<ExtArgs>
        fields: Prisma.ICALModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ICALModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ICALModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          findFirst: {
            args: Prisma.ICALModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ICALModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          findMany: {
            args: Prisma.ICALModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>[]
          }
          create: {
            args: Prisma.ICALModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          createMany: {
            args: Prisma.ICALModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ICALModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>[]
          }
          delete: {
            args: Prisma.ICALModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          update: {
            args: Prisma.ICALModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          deleteMany: {
            args: Prisma.ICALModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ICALModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ICALModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>[]
          }
          upsert: {
            args: Prisma.ICALModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICALModulePayload>
          }
          aggregate: {
            args: Prisma.ICALModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateICALModule>
          }
          groupBy: {
            args: Prisma.ICALModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ICALModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ICALModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ICALModuleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    iCAL?: ICALOmit
    module?: ModuleOmit
    bill?: BillOmit
    userClient?: UserClientOmit
    iCALModule?: ICALModuleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    modules: number
    bills: number
    userClients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | UserCountOutputTypeCountModulesArgs
    bills?: boolean | UserCountOutputTypeCountBillsArgs
    userClients?: boolean | UserCountOutputTypeCountUserClientsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    ICALs: number
    bills: number
    userClients: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ICALs?: boolean | ClientCountOutputTypeCountICALsArgs
    bills?: boolean | ClientCountOutputTypeCountBillsArgs
    userClients?: boolean | ClientCountOutputTypeCountUserClientsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountICALsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICALWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUserClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
  }


  /**
   * Count Type ICALCountOutputType
   */

  export type ICALCountOutputType = {
    icalModules: number
  }

  export type ICALCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icalModules?: boolean | ICALCountOutputTypeCountIcalModulesArgs
  }

  // Custom InputTypes
  /**
   * ICALCountOutputType without action
   */
  export type ICALCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALCountOutputType
     */
    select?: ICALCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ICALCountOutputType without action
   */
  export type ICALCountOutputTypeCountIcalModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICALModuleWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    icalModules: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icalModules?: boolean | ModuleCountOutputTypeCountIcalModulesArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountIcalModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICALModuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    last_name: string | null
    first_name: string | null
    company_number: string | null
    email: string | null
    password: string | null
    date_inscription: Date | null
    date_update: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    last_name: string | null
    first_name: string | null
    company_number: string | null
    email: string | null
    password: string | null
    date_inscription: Date | null
    date_update: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    last_name: number
    first_name: number
    company_number: number
    email: number
    password: number
    date_inscription: number
    date_update: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    company_number?: true
    email?: true
    password?: true
    date_inscription?: true
    date_update?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    company_number?: true
    email?: true
    password?: true
    date_inscription?: true
    date_update?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    company_number?: true
    email?: true
    password?: true
    date_inscription?: true
    date_update?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription: Date
    date_update: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    company_number?: boolean
    email?: boolean
    password?: boolean
    date_inscription?: boolean
    date_update?: boolean
    modules?: boolean | User$modulesArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    userClients?: boolean | User$userClientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    company_number?: boolean
    email?: boolean
    password?: boolean
    date_inscription?: boolean
    date_update?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    company_number?: boolean
    email?: boolean
    password?: boolean
    date_inscription?: boolean
    date_update?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    company_number?: boolean
    email?: boolean
    password?: boolean
    date_inscription?: boolean
    date_update?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "last_name" | "first_name" | "company_number" | "email" | "password" | "date_inscription" | "date_update", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | User$modulesArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    userClients?: boolean | User$userClientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      modules: Prisma.$ModulePayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      userClients: Prisma.$UserClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      last_name: string
      first_name: string
      company_number: string
      email: string
      password: string
      date_inscription: Date
      date_update: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modules<T extends User$modulesArgs<ExtArgs> = {}>(args?: Subset<T, User$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends User$billsArgs<ExtArgs> = {}>(args?: Subset<T, User$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userClients<T extends User$userClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$userClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly company_number: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly date_inscription: FieldRef<"User", 'DateTime'>
    readonly date_update: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.modules
   */
  export type User$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * User.bills
   */
  export type User$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * User.userClients
   */
  export type User$userClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    cursor?: UserClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    hourly_rate: number | null
    tva_rate: number | null
  }

  export type ClientSumAggregateOutputType = {
    hourly_rate: number | null
    tva_rate: number | null
  }

  export type ClientMinAggregateOutputType = {
    client_id: string | null
    name: string | null
    email: string | null
    address: string | null
    status: string | null
    hourly_rate: number | null
    tva_rate: number | null
    url_ICAL: string | null
    date_creation: Date | null
    date_update: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    client_id: string | null
    name: string | null
    email: string | null
    address: string | null
    status: string | null
    hourly_rate: number | null
    tva_rate: number | null
    url_ICAL: string | null
    date_creation: Date | null
    date_update: Date | null
  }

  export type ClientCountAggregateOutputType = {
    client_id: number
    name: number
    email: number
    address: number
    status: number
    hourly_rate: number
    tva_rate: number
    url_ICAL: number
    date_creation: number
    date_update: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    hourly_rate?: true
    tva_rate?: true
  }

  export type ClientSumAggregateInputType = {
    hourly_rate?: true
    tva_rate?: true
  }

  export type ClientMinAggregateInputType = {
    client_id?: true
    name?: true
    email?: true
    address?: true
    status?: true
    hourly_rate?: true
    tva_rate?: true
    url_ICAL?: true
    date_creation?: true
    date_update?: true
  }

  export type ClientMaxAggregateInputType = {
    client_id?: true
    name?: true
    email?: true
    address?: true
    status?: true
    hourly_rate?: true
    tva_rate?: true
    url_ICAL?: true
    date_creation?: true
    date_update?: true
  }

  export type ClientCountAggregateInputType = {
    client_id?: true
    name?: true
    email?: true
    address?: true
    status?: true
    hourly_rate?: true
    tva_rate?: true
    url_ICAL?: true
    date_creation?: true
    date_update?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    client_id: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate: number
    tva_rate: number
    url_ICAL: string
    date_creation: Date
    date_update: Date | null
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    hourly_rate?: boolean
    tva_rate?: boolean
    url_ICAL?: boolean
    date_creation?: boolean
    date_update?: boolean
    ICALs?: boolean | Client$ICALsArgs<ExtArgs>
    bills?: boolean | Client$billsArgs<ExtArgs>
    userClients?: boolean | Client$userClientsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    hourly_rate?: boolean
    tva_rate?: boolean
    url_ICAL?: boolean
    date_creation?: boolean
    date_update?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    hourly_rate?: boolean
    tva_rate?: boolean
    url_ICAL?: boolean
    date_creation?: boolean
    date_update?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    client_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    status?: boolean
    hourly_rate?: boolean
    tva_rate?: boolean
    url_ICAL?: boolean
    date_creation?: boolean
    date_update?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "name" | "email" | "address" | "status" | "hourly_rate" | "tva_rate" | "url_ICAL" | "date_creation" | "date_update", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ICALs?: boolean | Client$ICALsArgs<ExtArgs>
    bills?: boolean | Client$billsArgs<ExtArgs>
    userClients?: boolean | Client$userClientsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      ICALs: Prisma.$ICALPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      userClients: Prisma.$UserClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: string
      name: string
      email: string
      address: string
      status: string
      hourly_rate: number
      tva_rate: number
      url_ICAL: string
      date_creation: Date
      date_update: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientWithClient_idOnly = await prisma.client.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.updateManyAndReturn({
     *   select: { client_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ICALs<T extends Client$ICALsArgs<ExtArgs> = {}>(args?: Subset<T, Client$ICALsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends Client$billsArgs<ExtArgs> = {}>(args?: Subset<T, Client$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userClients<T extends Client$userClientsArgs<ExtArgs> = {}>(args?: Subset<T, Client$userClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly client_id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly status: FieldRef<"Client", 'String'>
    readonly hourly_rate: FieldRef<"Client", 'Float'>
    readonly tva_rate: FieldRef<"Client", 'Float'>
    readonly url_ICAL: FieldRef<"Client", 'String'>
    readonly date_creation: FieldRef<"Client", 'DateTime'>
    readonly date_update: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.ICALs
   */
  export type Client$ICALsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    where?: ICALWhereInput
    orderBy?: ICALOrderByWithRelationInput | ICALOrderByWithRelationInput[]
    cursor?: ICALWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ICALScalarFieldEnum | ICALScalarFieldEnum[]
  }

  /**
   * Client.bills
   */
  export type Client$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Client.userClients
   */
  export type Client$userClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    cursor?: UserClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ICAL
   */

  export type AggregateICAL = {
    _count: ICALCountAggregateOutputType | null
    _min: ICALMinAggregateOutputType | null
    _max: ICALMaxAggregateOutputType | null
  }

  export type ICALMinAggregateOutputType = {
    ical_id: string | null
    url: string | null
    date_start: Date | null
    date_end: Date | null
    client_id: string | null
  }

  export type ICALMaxAggregateOutputType = {
    ical_id: string | null
    url: string | null
    date_start: Date | null
    date_end: Date | null
    client_id: string | null
  }

  export type ICALCountAggregateOutputType = {
    ical_id: number
    url: number
    date_start: number
    date_end: number
    client_id: number
    _all: number
  }


  export type ICALMinAggregateInputType = {
    ical_id?: true
    url?: true
    date_start?: true
    date_end?: true
    client_id?: true
  }

  export type ICALMaxAggregateInputType = {
    ical_id?: true
    url?: true
    date_start?: true
    date_end?: true
    client_id?: true
  }

  export type ICALCountAggregateInputType = {
    ical_id?: true
    url?: true
    date_start?: true
    date_end?: true
    client_id?: true
    _all?: true
  }

  export type ICALAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICAL to aggregate.
     */
    where?: ICALWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALS to fetch.
     */
    orderBy?: ICALOrderByWithRelationInput | ICALOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ICALWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ICALS
    **/
    _count?: true | ICALCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ICALMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ICALMaxAggregateInputType
  }

  export type GetICALAggregateType<T extends ICALAggregateArgs> = {
        [P in keyof T & keyof AggregateICAL]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateICAL[P]>
      : GetScalarType<T[P], AggregateICAL[P]>
  }




  export type ICALGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICALWhereInput
    orderBy?: ICALOrderByWithAggregationInput | ICALOrderByWithAggregationInput[]
    by: ICALScalarFieldEnum[] | ICALScalarFieldEnum
    having?: ICALScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ICALCountAggregateInputType | true
    _min?: ICALMinAggregateInputType
    _max?: ICALMaxAggregateInputType
  }

  export type ICALGroupByOutputType = {
    ical_id: string
    url: string
    date_start: Date | null
    date_end: Date | null
    client_id: string
    _count: ICALCountAggregateOutputType | null
    _min: ICALMinAggregateOutputType | null
    _max: ICALMaxAggregateOutputType | null
  }

  type GetICALGroupByPayload<T extends ICALGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ICALGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ICALGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ICALGroupByOutputType[P]>
            : GetScalarType<T[P], ICALGroupByOutputType[P]>
        }
      >
    >


  export type ICALSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    url?: boolean
    date_start?: boolean
    date_end?: boolean
    client_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    icalModules?: boolean | ICAL$icalModulesArgs<ExtArgs>
    _count?: boolean | ICALCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCAL"]>

  export type ICALSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    url?: boolean
    date_start?: boolean
    date_end?: boolean
    client_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCAL"]>

  export type ICALSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    url?: boolean
    date_start?: boolean
    date_end?: boolean
    client_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCAL"]>

  export type ICALSelectScalar = {
    ical_id?: boolean
    url?: boolean
    date_start?: boolean
    date_end?: boolean
    client_id?: boolean
  }

  export type ICALOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ical_id" | "url" | "date_start" | "date_end" | "client_id", ExtArgs["result"]["iCAL"]>
  export type ICALInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    icalModules?: boolean | ICAL$icalModulesArgs<ExtArgs>
    _count?: boolean | ICALCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ICALIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ICALIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ICALPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ICAL"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      icalModules: Prisma.$ICALModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ical_id: string
      url: string
      date_start: Date | null
      date_end: Date | null
      client_id: string
    }, ExtArgs["result"]["iCAL"]>
    composites: {}
  }

  type ICALGetPayload<S extends boolean | null | undefined | ICALDefaultArgs> = $Result.GetResult<Prisma.$ICALPayload, S>

  type ICALCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ICALFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ICALCountAggregateInputType | true
    }

  export interface ICALDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ICAL'], meta: { name: 'ICAL' } }
    /**
     * Find zero or one ICAL that matches the filter.
     * @param {ICALFindUniqueArgs} args - Arguments to find a ICAL
     * @example
     * // Get one ICAL
     * const iCAL = await prisma.iCAL.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ICALFindUniqueArgs>(args: SelectSubset<T, ICALFindUniqueArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ICAL that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ICALFindUniqueOrThrowArgs} args - Arguments to find a ICAL
     * @example
     * // Get one ICAL
     * const iCAL = await prisma.iCAL.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ICALFindUniqueOrThrowArgs>(args: SelectSubset<T, ICALFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICAL that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALFindFirstArgs} args - Arguments to find a ICAL
     * @example
     * // Get one ICAL
     * const iCAL = await prisma.iCAL.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ICALFindFirstArgs>(args?: SelectSubset<T, ICALFindFirstArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICAL that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALFindFirstOrThrowArgs} args - Arguments to find a ICAL
     * @example
     * // Get one ICAL
     * const iCAL = await prisma.iCAL.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ICALFindFirstOrThrowArgs>(args?: SelectSubset<T, ICALFindFirstOrThrowArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ICALS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ICALS
     * const iCALS = await prisma.iCAL.findMany()
     * 
     * // Get first 10 ICALS
     * const iCALS = await prisma.iCAL.findMany({ take: 10 })
     * 
     * // Only select the `ical_id`
     * const iCALWithIcal_idOnly = await prisma.iCAL.findMany({ select: { ical_id: true } })
     * 
     */
    findMany<T extends ICALFindManyArgs>(args?: SelectSubset<T, ICALFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ICAL.
     * @param {ICALCreateArgs} args - Arguments to create a ICAL.
     * @example
     * // Create one ICAL
     * const ICAL = await prisma.iCAL.create({
     *   data: {
     *     // ... data to create a ICAL
     *   }
     * })
     * 
     */
    create<T extends ICALCreateArgs>(args: SelectSubset<T, ICALCreateArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ICALS.
     * @param {ICALCreateManyArgs} args - Arguments to create many ICALS.
     * @example
     * // Create many ICALS
     * const iCAL = await prisma.iCAL.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ICALCreateManyArgs>(args?: SelectSubset<T, ICALCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ICALS and returns the data saved in the database.
     * @param {ICALCreateManyAndReturnArgs} args - Arguments to create many ICALS.
     * @example
     * // Create many ICALS
     * const iCAL = await prisma.iCAL.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ICALS and only return the `ical_id`
     * const iCALWithIcal_idOnly = await prisma.iCAL.createManyAndReturn({
     *   select: { ical_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ICALCreateManyAndReturnArgs>(args?: SelectSubset<T, ICALCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ICAL.
     * @param {ICALDeleteArgs} args - Arguments to delete one ICAL.
     * @example
     * // Delete one ICAL
     * const ICAL = await prisma.iCAL.delete({
     *   where: {
     *     // ... filter to delete one ICAL
     *   }
     * })
     * 
     */
    delete<T extends ICALDeleteArgs>(args: SelectSubset<T, ICALDeleteArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ICAL.
     * @param {ICALUpdateArgs} args - Arguments to update one ICAL.
     * @example
     * // Update one ICAL
     * const iCAL = await prisma.iCAL.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ICALUpdateArgs>(args: SelectSubset<T, ICALUpdateArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ICALS.
     * @param {ICALDeleteManyArgs} args - Arguments to filter ICALS to delete.
     * @example
     * // Delete a few ICALS
     * const { count } = await prisma.iCAL.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ICALDeleteManyArgs>(args?: SelectSubset<T, ICALDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICALS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ICALS
     * const iCAL = await prisma.iCAL.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ICALUpdateManyArgs>(args: SelectSubset<T, ICALUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICALS and returns the data updated in the database.
     * @param {ICALUpdateManyAndReturnArgs} args - Arguments to update many ICALS.
     * @example
     * // Update many ICALS
     * const iCAL = await prisma.iCAL.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ICALS and only return the `ical_id`
     * const iCALWithIcal_idOnly = await prisma.iCAL.updateManyAndReturn({
     *   select: { ical_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ICALUpdateManyAndReturnArgs>(args: SelectSubset<T, ICALUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ICAL.
     * @param {ICALUpsertArgs} args - Arguments to update or create a ICAL.
     * @example
     * // Update or create a ICAL
     * const iCAL = await prisma.iCAL.upsert({
     *   create: {
     *     // ... data to create a ICAL
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ICAL we want to update
     *   }
     * })
     */
    upsert<T extends ICALUpsertArgs>(args: SelectSubset<T, ICALUpsertArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ICALS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALCountArgs} args - Arguments to filter ICALS to count.
     * @example
     * // Count the number of ICALS
     * const count = await prisma.iCAL.count({
     *   where: {
     *     // ... the filter for the ICALS we want to count
     *   }
     * })
    **/
    count<T extends ICALCountArgs>(
      args?: Subset<T, ICALCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ICALCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ICAL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ICALAggregateArgs>(args: Subset<T, ICALAggregateArgs>): Prisma.PrismaPromise<GetICALAggregateType<T>>

    /**
     * Group by ICAL.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ICALGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ICALGroupByArgs['orderBy'] }
        : { orderBy?: ICALGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ICALGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetICALGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ICAL model
   */
  readonly fields: ICALFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ICAL.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ICALClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icalModules<T extends ICAL$icalModulesArgs<ExtArgs> = {}>(args?: Subset<T, ICAL$icalModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ICAL model
   */
  interface ICALFieldRefs {
    readonly ical_id: FieldRef<"ICAL", 'String'>
    readonly url: FieldRef<"ICAL", 'String'>
    readonly date_start: FieldRef<"ICAL", 'DateTime'>
    readonly date_end: FieldRef<"ICAL", 'DateTime'>
    readonly client_id: FieldRef<"ICAL", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ICAL findUnique
   */
  export type ICALFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter, which ICAL to fetch.
     */
    where: ICALWhereUniqueInput
  }

  /**
   * ICAL findUniqueOrThrow
   */
  export type ICALFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter, which ICAL to fetch.
     */
    where: ICALWhereUniqueInput
  }

  /**
   * ICAL findFirst
   */
  export type ICALFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter, which ICAL to fetch.
     */
    where?: ICALWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALS to fetch.
     */
    orderBy?: ICALOrderByWithRelationInput | ICALOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICALS.
     */
    cursor?: ICALWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICALS.
     */
    distinct?: ICALScalarFieldEnum | ICALScalarFieldEnum[]
  }

  /**
   * ICAL findFirstOrThrow
   */
  export type ICALFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter, which ICAL to fetch.
     */
    where?: ICALWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALS to fetch.
     */
    orderBy?: ICALOrderByWithRelationInput | ICALOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICALS.
     */
    cursor?: ICALWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICALS.
     */
    distinct?: ICALScalarFieldEnum | ICALScalarFieldEnum[]
  }

  /**
   * ICAL findMany
   */
  export type ICALFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter, which ICALS to fetch.
     */
    where?: ICALWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALS to fetch.
     */
    orderBy?: ICALOrderByWithRelationInput | ICALOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ICALS.
     */
    cursor?: ICALWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALS.
     */
    skip?: number
    distinct?: ICALScalarFieldEnum | ICALScalarFieldEnum[]
  }

  /**
   * ICAL create
   */
  export type ICALCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * The data needed to create a ICAL.
     */
    data: XOR<ICALCreateInput, ICALUncheckedCreateInput>
  }

  /**
   * ICAL createMany
   */
  export type ICALCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ICALS.
     */
    data: ICALCreateManyInput | ICALCreateManyInput[]
  }

  /**
   * ICAL createManyAndReturn
   */
  export type ICALCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * The data used to create many ICALS.
     */
    data: ICALCreateManyInput | ICALCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ICAL update
   */
  export type ICALUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * The data needed to update a ICAL.
     */
    data: XOR<ICALUpdateInput, ICALUncheckedUpdateInput>
    /**
     * Choose, which ICAL to update.
     */
    where: ICALWhereUniqueInput
  }

  /**
   * ICAL updateMany
   */
  export type ICALUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ICALS.
     */
    data: XOR<ICALUpdateManyMutationInput, ICALUncheckedUpdateManyInput>
    /**
     * Filter which ICALS to update
     */
    where?: ICALWhereInput
    /**
     * Limit how many ICALS to update.
     */
    limit?: number
  }

  /**
   * ICAL updateManyAndReturn
   */
  export type ICALUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * The data used to update ICALS.
     */
    data: XOR<ICALUpdateManyMutationInput, ICALUncheckedUpdateManyInput>
    /**
     * Filter which ICALS to update
     */
    where?: ICALWhereInput
    /**
     * Limit how many ICALS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ICAL upsert
   */
  export type ICALUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * The filter to search for the ICAL to update in case it exists.
     */
    where: ICALWhereUniqueInput
    /**
     * In case the ICAL found by the `where` argument doesn't exist, create a new ICAL with this data.
     */
    create: XOR<ICALCreateInput, ICALUncheckedCreateInput>
    /**
     * In case the ICAL was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ICALUpdateInput, ICALUncheckedUpdateInput>
  }

  /**
   * ICAL delete
   */
  export type ICALDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
    /**
     * Filter which ICAL to delete.
     */
    where: ICALWhereUniqueInput
  }

  /**
   * ICAL deleteMany
   */
  export type ICALDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICALS to delete
     */
    where?: ICALWhereInput
    /**
     * Limit how many ICALS to delete.
     */
    limit?: number
  }

  /**
   * ICAL.icalModules
   */
  export type ICAL$icalModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    where?: ICALModuleWhereInput
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    cursor?: ICALModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ICALModuleScalarFieldEnum | ICALModuleScalarFieldEnum[]
  }

  /**
   * ICAL without action
   */
  export type ICALDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICAL
     */
    select?: ICALSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICAL
     */
    omit?: ICALOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    unit_price: number | null
  }

  export type ModuleSumAggregateOutputType = {
    unit_price: number | null
  }

  export type ModuleMinAggregateOutputType = {
    module_id: string | null
    name: string | null
    unit_price: number | null
    duration: string | null
    id: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    module_id: string | null
    name: string | null
    unit_price: number | null
    duration: string | null
    id: string | null
  }

  export type ModuleCountAggregateOutputType = {
    module_id: number
    name: number
    unit_price: number
    duration: number
    id: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    unit_price?: true
  }

  export type ModuleSumAggregateInputType = {
    unit_price?: true
  }

  export type ModuleMinAggregateInputType = {
    module_id?: true
    name?: true
    unit_price?: true
    duration?: true
    id?: true
  }

  export type ModuleMaxAggregateInputType = {
    module_id?: true
    name?: true
    unit_price?: true
    duration?: true
    id?: true
  }

  export type ModuleCountAggregateInputType = {
    module_id?: true
    name?: true
    unit_price?: true
    duration?: true
    id?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    module_id: string
    name: string
    unit_price: number
    duration: string
    id: string
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    module_id?: boolean
    name?: boolean
    unit_price?: boolean
    duration?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    icalModules?: boolean | Module$icalModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    module_id?: boolean
    name?: boolean
    unit_price?: boolean
    duration?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    module_id?: boolean
    name?: boolean
    unit_price?: boolean
    duration?: boolean
    id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    module_id?: boolean
    name?: boolean
    unit_price?: boolean
    duration?: boolean
    id?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"module_id" | "name" | "unit_price" | "duration" | "id", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    icalModules?: boolean | Module$icalModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      icalModules: Prisma.$ICALModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      module_id: string
      name: string
      unit_price: number
      duration: string
      id: string
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `module_id`
     * const moduleWithModule_idOnly = await prisma.module.findMany({ select: { module_id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `module_id`
     * const moduleWithModule_idOnly = await prisma.module.createManyAndReturn({
     *   select: { module_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `module_id`
     * const moduleWithModule_idOnly = await prisma.module.updateManyAndReturn({
     *   select: { module_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icalModules<T extends Module$icalModulesArgs<ExtArgs> = {}>(args?: Subset<T, Module$icalModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly module_id: FieldRef<"Module", 'String'>
    readonly name: FieldRef<"Module", 'String'>
    readonly unit_price: FieldRef<"Module", 'Int'>
    readonly duration: FieldRef<"Module", 'String'>
    readonly id: FieldRef<"Module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.icalModules
   */
  export type Module$icalModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    where?: ICALModuleWhereInput
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    cursor?: ICALModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ICALModuleScalarFieldEnum | ICALModuleScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    tva: number | null
  }

  export type BillSumAggregateOutputType = {
    tva: number | null
  }

  export type BillMinAggregateOutputType = {
    bill_id: string | null
    date_creation: Date | null
    date_update: Date | null
    date_echeance: Date | null
    tva: number | null
    status: string | null
    client_id: string | null
    id: string | null
  }

  export type BillMaxAggregateOutputType = {
    bill_id: string | null
    date_creation: Date | null
    date_update: Date | null
    date_echeance: Date | null
    tva: number | null
    status: string | null
    client_id: string | null
    id: string | null
  }

  export type BillCountAggregateOutputType = {
    bill_id: number
    date_creation: number
    date_update: number
    date_echeance: number
    tva: number
    status: number
    client_id: number
    id: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    tva?: true
  }

  export type BillSumAggregateInputType = {
    tva?: true
  }

  export type BillMinAggregateInputType = {
    bill_id?: true
    date_creation?: true
    date_update?: true
    date_echeance?: true
    tva?: true
    status?: true
    client_id?: true
    id?: true
  }

  export type BillMaxAggregateInputType = {
    bill_id?: true
    date_creation?: true
    date_update?: true
    date_echeance?: true
    tva?: true
    status?: true
    client_id?: true
    id?: true
  }

  export type BillCountAggregateInputType = {
    bill_id?: true
    date_creation?: true
    date_update?: true
    date_echeance?: true
    tva?: true
    status?: true
    client_id?: true
    id?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    bill_id: string
    date_creation: Date
    date_update: Date | null
    date_echeance: Date
    tva: number | null
    status: string
    client_id: string
    id: string
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bill_id?: boolean
    date_creation?: boolean
    date_update?: boolean
    date_echeance?: boolean
    tva?: boolean
    status?: boolean
    client_id?: boolean
    id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bill_id?: boolean
    date_creation?: boolean
    date_update?: boolean
    date_echeance?: boolean
    tva?: boolean
    status?: boolean
    client_id?: boolean
    id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bill_id?: boolean
    date_creation?: boolean
    date_update?: boolean
    date_echeance?: boolean
    tva?: boolean
    status?: boolean
    client_id?: boolean
    id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    bill_id?: boolean
    date_creation?: boolean
    date_update?: boolean
    date_echeance?: boolean
    tva?: boolean
    status?: boolean
    client_id?: boolean
    id?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bill_id" | "date_creation" | "date_update" | "date_echeance" | "tva" | "status" | "client_id" | "id", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bill_id: string
      date_creation: Date
      date_update: Date | null
      date_echeance: Date
      tva: number | null
      status: string
      client_id: string
      id: string
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `bill_id`
     * const billWithBill_idOnly = await prisma.bill.findMany({ select: { bill_id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `bill_id`
     * const billWithBill_idOnly = await prisma.bill.createManyAndReturn({
     *   select: { bill_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `bill_id`
     * const billWithBill_idOnly = await prisma.bill.updateManyAndReturn({
     *   select: { bill_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly bill_id: FieldRef<"Bill", 'String'>
    readonly date_creation: FieldRef<"Bill", 'DateTime'>
    readonly date_update: FieldRef<"Bill", 'DateTime'>
    readonly date_echeance: FieldRef<"Bill", 'DateTime'>
    readonly tva: FieldRef<"Bill", 'Int'>
    readonly status: FieldRef<"Bill", 'String'>
    readonly client_id: FieldRef<"Bill", 'String'>
    readonly id: FieldRef<"Bill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model UserClient
   */

  export type AggregateUserClient = {
    _count: UserClientCountAggregateOutputType | null
    _min: UserClientMinAggregateOutputType | null
    _max: UserClientMaxAggregateOutputType | null
  }

  export type UserClientMinAggregateOutputType = {
    id: string | null
    client_id: string | null
  }

  export type UserClientMaxAggregateOutputType = {
    id: string | null
    client_id: string | null
  }

  export type UserClientCountAggregateOutputType = {
    id: number
    client_id: number
    _all: number
  }


  export type UserClientMinAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type UserClientMaxAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type UserClientCountAggregateInputType = {
    id?: true
    client_id?: true
    _all?: true
  }

  export type UserClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClient to aggregate.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserClients
    **/
    _count?: true | UserClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserClientMaxAggregateInputType
  }

  export type GetUserClientAggregateType<T extends UserClientAggregateArgs> = {
        [P in keyof T & keyof AggregateUserClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserClient[P]>
      : GetScalarType<T[P], AggregateUserClient[P]>
  }




  export type UserClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserClientWhereInput
    orderBy?: UserClientOrderByWithAggregationInput | UserClientOrderByWithAggregationInput[]
    by: UserClientScalarFieldEnum[] | UserClientScalarFieldEnum
    having?: UserClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserClientCountAggregateInputType | true
    _min?: UserClientMinAggregateInputType
    _max?: UserClientMaxAggregateInputType
  }

  export type UserClientGroupByOutputType = {
    id: string
    client_id: string
    _count: UserClientCountAggregateOutputType | null
    _min: UserClientMinAggregateOutputType | null
    _max: UserClientMaxAggregateOutputType | null
  }

  type GetUserClientGroupByPayload<T extends UserClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserClientGroupByOutputType[P]>
            : GetScalarType<T[P], UserClientGroupByOutputType[P]>
        }
      >
    >


  export type UserClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userClient"]>

  export type UserClientSelectScalar = {
    id?: boolean
    client_id?: boolean
  }

  export type UserClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id", ExtArgs["result"]["userClient"]>
  export type UserClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $UserClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserClient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      client_id: string
    }, ExtArgs["result"]["userClient"]>
    composites: {}
  }

  type UserClientGetPayload<S extends boolean | null | undefined | UserClientDefaultArgs> = $Result.GetResult<Prisma.$UserClientPayload, S>

  type UserClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserClientCountAggregateInputType | true
    }

  export interface UserClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserClient'], meta: { name: 'UserClient' } }
    /**
     * Find zero or one UserClient that matches the filter.
     * @param {UserClientFindUniqueArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserClientFindUniqueArgs>(args: SelectSubset<T, UserClientFindUniqueArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserClientFindUniqueOrThrowArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserClientFindUniqueOrThrowArgs>(args: SelectSubset<T, UserClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindFirstArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserClientFindFirstArgs>(args?: SelectSubset<T, UserClientFindFirstArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindFirstOrThrowArgs} args - Arguments to find a UserClient
     * @example
     * // Get one UserClient
     * const userClient = await prisma.userClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserClientFindFirstOrThrowArgs>(args?: SelectSubset<T, UserClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserClients
     * const userClients = await prisma.userClient.findMany()
     * 
     * // Get first 10 UserClients
     * const userClients = await prisma.userClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userClientWithIdOnly = await prisma.userClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserClientFindManyArgs>(args?: SelectSubset<T, UserClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserClient.
     * @param {UserClientCreateArgs} args - Arguments to create a UserClient.
     * @example
     * // Create one UserClient
     * const UserClient = await prisma.userClient.create({
     *   data: {
     *     // ... data to create a UserClient
     *   }
     * })
     * 
     */
    create<T extends UserClientCreateArgs>(args: SelectSubset<T, UserClientCreateArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserClients.
     * @param {UserClientCreateManyArgs} args - Arguments to create many UserClients.
     * @example
     * // Create many UserClients
     * const userClient = await prisma.userClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserClientCreateManyArgs>(args?: SelectSubset<T, UserClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserClients and returns the data saved in the database.
     * @param {UserClientCreateManyAndReturnArgs} args - Arguments to create many UserClients.
     * @example
     * // Create many UserClients
     * const userClient = await prisma.userClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserClients and only return the `id`
     * const userClientWithIdOnly = await prisma.userClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserClientCreateManyAndReturnArgs>(args?: SelectSubset<T, UserClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserClient.
     * @param {UserClientDeleteArgs} args - Arguments to delete one UserClient.
     * @example
     * // Delete one UserClient
     * const UserClient = await prisma.userClient.delete({
     *   where: {
     *     // ... filter to delete one UserClient
     *   }
     * })
     * 
     */
    delete<T extends UserClientDeleteArgs>(args: SelectSubset<T, UserClientDeleteArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserClient.
     * @param {UserClientUpdateArgs} args - Arguments to update one UserClient.
     * @example
     * // Update one UserClient
     * const userClient = await prisma.userClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserClientUpdateArgs>(args: SelectSubset<T, UserClientUpdateArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserClients.
     * @param {UserClientDeleteManyArgs} args - Arguments to filter UserClients to delete.
     * @example
     * // Delete a few UserClients
     * const { count } = await prisma.userClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserClientDeleteManyArgs>(args?: SelectSubset<T, UserClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserClients
     * const userClient = await prisma.userClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserClientUpdateManyArgs>(args: SelectSubset<T, UserClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserClients and returns the data updated in the database.
     * @param {UserClientUpdateManyAndReturnArgs} args - Arguments to update many UserClients.
     * @example
     * // Update many UserClients
     * const userClient = await prisma.userClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserClients and only return the `id`
     * const userClientWithIdOnly = await prisma.userClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserClientUpdateManyAndReturnArgs>(args: SelectSubset<T, UserClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserClient.
     * @param {UserClientUpsertArgs} args - Arguments to update or create a UserClient.
     * @example
     * // Update or create a UserClient
     * const userClient = await prisma.userClient.upsert({
     *   create: {
     *     // ... data to create a UserClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserClient we want to update
     *   }
     * })
     */
    upsert<T extends UserClientUpsertArgs>(args: SelectSubset<T, UserClientUpsertArgs<ExtArgs>>): Prisma__UserClientClient<$Result.GetResult<Prisma.$UserClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientCountArgs} args - Arguments to filter UserClients to count.
     * @example
     * // Count the number of UserClients
     * const count = await prisma.userClient.count({
     *   where: {
     *     // ... the filter for the UserClients we want to count
     *   }
     * })
    **/
    count<T extends UserClientCountArgs>(
      args?: Subset<T, UserClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserClientAggregateArgs>(args: Subset<T, UserClientAggregateArgs>): Prisma.PrismaPromise<GetUserClientAggregateType<T>>

    /**
     * Group by UserClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserClientGroupByArgs['orderBy'] }
        : { orderBy?: UserClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserClient model
   */
  readonly fields: UserClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserClient model
   */
  interface UserClientFieldRefs {
    readonly id: FieldRef<"UserClient", 'String'>
    readonly client_id: FieldRef<"UserClient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserClient findUnique
   */
  export type UserClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient findUniqueOrThrow
   */
  export type UserClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient findFirst
   */
  export type UserClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClients.
     */
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient findFirstOrThrow
   */
  export type UserClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClient to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserClients.
     */
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient findMany
   */
  export type UserClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter, which UserClients to fetch.
     */
    where?: UserClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserClients to fetch.
     */
    orderBy?: UserClientOrderByWithRelationInput | UserClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserClients.
     */
    cursor?: UserClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserClients.
     */
    skip?: number
    distinct?: UserClientScalarFieldEnum | UserClientScalarFieldEnum[]
  }

  /**
   * UserClient create
   */
  export type UserClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The data needed to create a UserClient.
     */
    data: XOR<UserClientCreateInput, UserClientUncheckedCreateInput>
  }

  /**
   * UserClient createMany
   */
  export type UserClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserClients.
     */
    data: UserClientCreateManyInput | UserClientCreateManyInput[]
  }

  /**
   * UserClient createManyAndReturn
   */
  export type UserClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * The data used to create many UserClients.
     */
    data: UserClientCreateManyInput | UserClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClient update
   */
  export type UserClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The data needed to update a UserClient.
     */
    data: XOR<UserClientUpdateInput, UserClientUncheckedUpdateInput>
    /**
     * Choose, which UserClient to update.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient updateMany
   */
  export type UserClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserClients.
     */
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyInput>
    /**
     * Filter which UserClients to update
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to update.
     */
    limit?: number
  }

  /**
   * UserClient updateManyAndReturn
   */
  export type UserClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * The data used to update UserClients.
     */
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyInput>
    /**
     * Filter which UserClients to update
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserClient upsert
   */
  export type UserClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * The filter to search for the UserClient to update in case it exists.
     */
    where: UserClientWhereUniqueInput
    /**
     * In case the UserClient found by the `where` argument doesn't exist, create a new UserClient with this data.
     */
    create: XOR<UserClientCreateInput, UserClientUncheckedCreateInput>
    /**
     * In case the UserClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserClientUpdateInput, UserClientUncheckedUpdateInput>
  }

  /**
   * UserClient delete
   */
  export type UserClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
    /**
     * Filter which UserClient to delete.
     */
    where: UserClientWhereUniqueInput
  }

  /**
   * UserClient deleteMany
   */
  export type UserClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserClients to delete
     */
    where?: UserClientWhereInput
    /**
     * Limit how many UserClients to delete.
     */
    limit?: number
  }

  /**
   * UserClient without action
   */
  export type UserClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserClient
     */
    select?: UserClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserClient
     */
    omit?: UserClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserClientInclude<ExtArgs> | null
  }


  /**
   * Model ICALModule
   */

  export type AggregateICALModule = {
    _count: ICALModuleCountAggregateOutputType | null
    _min: ICALModuleMinAggregateOutputType | null
    _max: ICALModuleMaxAggregateOutputType | null
  }

  export type ICALModuleMinAggregateOutputType = {
    ical_id: string | null
    module_id: string | null
  }

  export type ICALModuleMaxAggregateOutputType = {
    ical_id: string | null
    module_id: string | null
  }

  export type ICALModuleCountAggregateOutputType = {
    ical_id: number
    module_id: number
    _all: number
  }


  export type ICALModuleMinAggregateInputType = {
    ical_id?: true
    module_id?: true
  }

  export type ICALModuleMaxAggregateInputType = {
    ical_id?: true
    module_id?: true
  }

  export type ICALModuleCountAggregateInputType = {
    ical_id?: true
    module_id?: true
    _all?: true
  }

  export type ICALModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICALModule to aggregate.
     */
    where?: ICALModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALModules to fetch.
     */
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ICALModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ICALModules
    **/
    _count?: true | ICALModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ICALModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ICALModuleMaxAggregateInputType
  }

  export type GetICALModuleAggregateType<T extends ICALModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateICALModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateICALModule[P]>
      : GetScalarType<T[P], AggregateICALModule[P]>
  }




  export type ICALModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICALModuleWhereInput
    orderBy?: ICALModuleOrderByWithAggregationInput | ICALModuleOrderByWithAggregationInput[]
    by: ICALModuleScalarFieldEnum[] | ICALModuleScalarFieldEnum
    having?: ICALModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ICALModuleCountAggregateInputType | true
    _min?: ICALModuleMinAggregateInputType
    _max?: ICALModuleMaxAggregateInputType
  }

  export type ICALModuleGroupByOutputType = {
    ical_id: string
    module_id: string
    _count: ICALModuleCountAggregateOutputType | null
    _min: ICALModuleMinAggregateOutputType | null
    _max: ICALModuleMaxAggregateOutputType | null
  }

  type GetICALModuleGroupByPayload<T extends ICALModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ICALModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ICALModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ICALModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ICALModuleGroupByOutputType[P]>
        }
      >
    >


  export type ICALModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    module_id?: boolean
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCALModule"]>

  export type ICALModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    module_id?: boolean
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCALModule"]>

  export type ICALModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ical_id?: boolean
    module_id?: boolean
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCALModule"]>

  export type ICALModuleSelectScalar = {
    ical_id?: boolean
    module_id?: boolean
  }

  export type ICALModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ical_id" | "module_id", ExtArgs["result"]["iCALModule"]>
  export type ICALModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ICALModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ICALModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ical?: boolean | ICALDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ICALModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ICALModule"
    objects: {
      ical: Prisma.$ICALPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ical_id: string
      module_id: string
    }, ExtArgs["result"]["iCALModule"]>
    composites: {}
  }

  type ICALModuleGetPayload<S extends boolean | null | undefined | ICALModuleDefaultArgs> = $Result.GetResult<Prisma.$ICALModulePayload, S>

  type ICALModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ICALModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ICALModuleCountAggregateInputType | true
    }

  export interface ICALModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ICALModule'], meta: { name: 'ICALModule' } }
    /**
     * Find zero or one ICALModule that matches the filter.
     * @param {ICALModuleFindUniqueArgs} args - Arguments to find a ICALModule
     * @example
     * // Get one ICALModule
     * const iCALModule = await prisma.iCALModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ICALModuleFindUniqueArgs>(args: SelectSubset<T, ICALModuleFindUniqueArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ICALModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ICALModuleFindUniqueOrThrowArgs} args - Arguments to find a ICALModule
     * @example
     * // Get one ICALModule
     * const iCALModule = await prisma.iCALModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ICALModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ICALModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICALModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleFindFirstArgs} args - Arguments to find a ICALModule
     * @example
     * // Get one ICALModule
     * const iCALModule = await prisma.iCALModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ICALModuleFindFirstArgs>(args?: SelectSubset<T, ICALModuleFindFirstArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICALModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleFindFirstOrThrowArgs} args - Arguments to find a ICALModule
     * @example
     * // Get one ICALModule
     * const iCALModule = await prisma.iCALModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ICALModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ICALModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ICALModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ICALModules
     * const iCALModules = await prisma.iCALModule.findMany()
     * 
     * // Get first 10 ICALModules
     * const iCALModules = await prisma.iCALModule.findMany({ take: 10 })
     * 
     * // Only select the `ical_id`
     * const iCALModuleWithIcal_idOnly = await prisma.iCALModule.findMany({ select: { ical_id: true } })
     * 
     */
    findMany<T extends ICALModuleFindManyArgs>(args?: SelectSubset<T, ICALModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ICALModule.
     * @param {ICALModuleCreateArgs} args - Arguments to create a ICALModule.
     * @example
     * // Create one ICALModule
     * const ICALModule = await prisma.iCALModule.create({
     *   data: {
     *     // ... data to create a ICALModule
     *   }
     * })
     * 
     */
    create<T extends ICALModuleCreateArgs>(args: SelectSubset<T, ICALModuleCreateArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ICALModules.
     * @param {ICALModuleCreateManyArgs} args - Arguments to create many ICALModules.
     * @example
     * // Create many ICALModules
     * const iCALModule = await prisma.iCALModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ICALModuleCreateManyArgs>(args?: SelectSubset<T, ICALModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ICALModules and returns the data saved in the database.
     * @param {ICALModuleCreateManyAndReturnArgs} args - Arguments to create many ICALModules.
     * @example
     * // Create many ICALModules
     * const iCALModule = await prisma.iCALModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ICALModules and only return the `ical_id`
     * const iCALModuleWithIcal_idOnly = await prisma.iCALModule.createManyAndReturn({
     *   select: { ical_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ICALModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ICALModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ICALModule.
     * @param {ICALModuleDeleteArgs} args - Arguments to delete one ICALModule.
     * @example
     * // Delete one ICALModule
     * const ICALModule = await prisma.iCALModule.delete({
     *   where: {
     *     // ... filter to delete one ICALModule
     *   }
     * })
     * 
     */
    delete<T extends ICALModuleDeleteArgs>(args: SelectSubset<T, ICALModuleDeleteArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ICALModule.
     * @param {ICALModuleUpdateArgs} args - Arguments to update one ICALModule.
     * @example
     * // Update one ICALModule
     * const iCALModule = await prisma.iCALModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ICALModuleUpdateArgs>(args: SelectSubset<T, ICALModuleUpdateArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ICALModules.
     * @param {ICALModuleDeleteManyArgs} args - Arguments to filter ICALModules to delete.
     * @example
     * // Delete a few ICALModules
     * const { count } = await prisma.iCALModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ICALModuleDeleteManyArgs>(args?: SelectSubset<T, ICALModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICALModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ICALModules
     * const iCALModule = await prisma.iCALModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ICALModuleUpdateManyArgs>(args: SelectSubset<T, ICALModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICALModules and returns the data updated in the database.
     * @param {ICALModuleUpdateManyAndReturnArgs} args - Arguments to update many ICALModules.
     * @example
     * // Update many ICALModules
     * const iCALModule = await prisma.iCALModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ICALModules and only return the `ical_id`
     * const iCALModuleWithIcal_idOnly = await prisma.iCALModule.updateManyAndReturn({
     *   select: { ical_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ICALModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ICALModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ICALModule.
     * @param {ICALModuleUpsertArgs} args - Arguments to update or create a ICALModule.
     * @example
     * // Update or create a ICALModule
     * const iCALModule = await prisma.iCALModule.upsert({
     *   create: {
     *     // ... data to create a ICALModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ICALModule we want to update
     *   }
     * })
     */
    upsert<T extends ICALModuleUpsertArgs>(args: SelectSubset<T, ICALModuleUpsertArgs<ExtArgs>>): Prisma__ICALModuleClient<$Result.GetResult<Prisma.$ICALModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ICALModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleCountArgs} args - Arguments to filter ICALModules to count.
     * @example
     * // Count the number of ICALModules
     * const count = await prisma.iCALModule.count({
     *   where: {
     *     // ... the filter for the ICALModules we want to count
     *   }
     * })
    **/
    count<T extends ICALModuleCountArgs>(
      args?: Subset<T, ICALModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ICALModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ICALModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ICALModuleAggregateArgs>(args: Subset<T, ICALModuleAggregateArgs>): Prisma.PrismaPromise<GetICALModuleAggregateType<T>>

    /**
     * Group by ICALModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICALModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ICALModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ICALModuleGroupByArgs['orderBy'] }
        : { orderBy?: ICALModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ICALModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetICALModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ICALModule model
   */
  readonly fields: ICALModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ICALModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ICALModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ical<T extends ICALDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ICALDefaultArgs<ExtArgs>>): Prisma__ICALClient<$Result.GetResult<Prisma.$ICALPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ICALModule model
   */
  interface ICALModuleFieldRefs {
    readonly ical_id: FieldRef<"ICALModule", 'String'>
    readonly module_id: FieldRef<"ICALModule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ICALModule findUnique
   */
  export type ICALModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter, which ICALModule to fetch.
     */
    where: ICALModuleWhereUniqueInput
  }

  /**
   * ICALModule findUniqueOrThrow
   */
  export type ICALModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter, which ICALModule to fetch.
     */
    where: ICALModuleWhereUniqueInput
  }

  /**
   * ICALModule findFirst
   */
  export type ICALModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter, which ICALModule to fetch.
     */
    where?: ICALModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALModules to fetch.
     */
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICALModules.
     */
    cursor?: ICALModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICALModules.
     */
    distinct?: ICALModuleScalarFieldEnum | ICALModuleScalarFieldEnum[]
  }

  /**
   * ICALModule findFirstOrThrow
   */
  export type ICALModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter, which ICALModule to fetch.
     */
    where?: ICALModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALModules to fetch.
     */
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICALModules.
     */
    cursor?: ICALModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICALModules.
     */
    distinct?: ICALModuleScalarFieldEnum | ICALModuleScalarFieldEnum[]
  }

  /**
   * ICALModule findMany
   */
  export type ICALModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter, which ICALModules to fetch.
     */
    where?: ICALModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICALModules to fetch.
     */
    orderBy?: ICALModuleOrderByWithRelationInput | ICALModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ICALModules.
     */
    cursor?: ICALModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICALModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICALModules.
     */
    skip?: number
    distinct?: ICALModuleScalarFieldEnum | ICALModuleScalarFieldEnum[]
  }

  /**
   * ICALModule create
   */
  export type ICALModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ICALModule.
     */
    data: XOR<ICALModuleCreateInput, ICALModuleUncheckedCreateInput>
  }

  /**
   * ICALModule createMany
   */
  export type ICALModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ICALModules.
     */
    data: ICALModuleCreateManyInput | ICALModuleCreateManyInput[]
  }

  /**
   * ICALModule createManyAndReturn
   */
  export type ICALModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * The data used to create many ICALModules.
     */
    data: ICALModuleCreateManyInput | ICALModuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ICALModule update
   */
  export type ICALModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ICALModule.
     */
    data: XOR<ICALModuleUpdateInput, ICALModuleUncheckedUpdateInput>
    /**
     * Choose, which ICALModule to update.
     */
    where: ICALModuleWhereUniqueInput
  }

  /**
   * ICALModule updateMany
   */
  export type ICALModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ICALModules.
     */
    data: XOR<ICALModuleUpdateManyMutationInput, ICALModuleUncheckedUpdateManyInput>
    /**
     * Filter which ICALModules to update
     */
    where?: ICALModuleWhereInput
    /**
     * Limit how many ICALModules to update.
     */
    limit?: number
  }

  /**
   * ICALModule updateManyAndReturn
   */
  export type ICALModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * The data used to update ICALModules.
     */
    data: XOR<ICALModuleUpdateManyMutationInput, ICALModuleUncheckedUpdateManyInput>
    /**
     * Filter which ICALModules to update
     */
    where?: ICALModuleWhereInput
    /**
     * Limit how many ICALModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ICALModule upsert
   */
  export type ICALModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ICALModule to update in case it exists.
     */
    where: ICALModuleWhereUniqueInput
    /**
     * In case the ICALModule found by the `where` argument doesn't exist, create a new ICALModule with this data.
     */
    create: XOR<ICALModuleCreateInput, ICALModuleUncheckedCreateInput>
    /**
     * In case the ICALModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ICALModuleUpdateInput, ICALModuleUncheckedUpdateInput>
  }

  /**
   * ICALModule delete
   */
  export type ICALModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
    /**
     * Filter which ICALModule to delete.
     */
    where: ICALModuleWhereUniqueInput
  }

  /**
   * ICALModule deleteMany
   */
  export type ICALModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICALModules to delete
     */
    where?: ICALModuleWhereInput
    /**
     * Limit how many ICALModules to delete.
     */
    limit?: number
  }

  /**
   * ICALModule without action
   */
  export type ICALModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICALModule
     */
    select?: ICALModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICALModule
     */
    omit?: ICALModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICALModuleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    last_name: 'last_name',
    first_name: 'first_name',
    company_number: 'company_number',
    email: 'email',
    password: 'password',
    date_inscription: 'date_inscription',
    date_update: 'date_update'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    client_id: 'client_id',
    name: 'name',
    email: 'email',
    address: 'address',
    status: 'status',
    hourly_rate: 'hourly_rate',
    tva_rate: 'tva_rate',
    url_ICAL: 'url_ICAL',
    date_creation: 'date_creation',
    date_update: 'date_update'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ICALScalarFieldEnum: {
    ical_id: 'ical_id',
    url: 'url',
    date_start: 'date_start',
    date_end: 'date_end',
    client_id: 'client_id'
  };

  export type ICALScalarFieldEnum = (typeof ICALScalarFieldEnum)[keyof typeof ICALScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    module_id: 'module_id',
    name: 'name',
    unit_price: 'unit_price',
    duration: 'duration',
    id: 'id'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const BillScalarFieldEnum: {
    bill_id: 'bill_id',
    date_creation: 'date_creation',
    date_update: 'date_update',
    date_echeance: 'date_echeance',
    tva: 'tva',
    status: 'status',
    client_id: 'client_id',
    id: 'id'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const UserClientScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id'
  };

  export type UserClientScalarFieldEnum = (typeof UserClientScalarFieldEnum)[keyof typeof UserClientScalarFieldEnum]


  export const ICALModuleScalarFieldEnum: {
    ical_id: 'ical_id',
    module_id: 'module_id'
  };

  export type ICALModuleScalarFieldEnum = (typeof ICALModuleScalarFieldEnum)[keyof typeof ICALModuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    company_number?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    date_inscription?: DateTimeFilter<"User"> | Date | string
    date_update?: DateTimeFilter<"User"> | Date | string
    modules?: ModuleListRelationFilter
    bills?: BillListRelationFilter
    userClients?: UserClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    company_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_inscription?: SortOrder
    date_update?: SortOrder
    modules?: ModuleOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    userClients?: UserClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    last_name?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    company_number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    date_inscription?: DateTimeFilter<"User"> | Date | string
    date_update?: DateTimeFilter<"User"> | Date | string
    modules?: ModuleListRelationFilter
    bills?: BillListRelationFilter
    userClients?: UserClientListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    company_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_inscription?: SortOrder
    date_update?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    company_number?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    date_inscription?: DateTimeWithAggregatesFilter<"User"> | Date | string
    date_update?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    client_id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    status?: StringFilter<"Client"> | string
    hourly_rate?: FloatFilter<"Client"> | number
    tva_rate?: FloatFilter<"Client"> | number
    url_ICAL?: StringFilter<"Client"> | string
    date_creation?: DateTimeFilter<"Client"> | Date | string
    date_update?: DateTimeNullableFilter<"Client"> | Date | string | null
    ICALs?: ICALListRelationFilter
    bills?: BillListRelationFilter
    userClients?: UserClientListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
    url_ICAL?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrderInput | SortOrder
    ICALs?: ICALOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    userClients?: UserClientOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    client_id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    status?: StringFilter<"Client"> | string
    hourly_rate?: FloatFilter<"Client"> | number
    tva_rate?: FloatFilter<"Client"> | number
    url_ICAL?: StringFilter<"Client"> | string
    date_creation?: DateTimeFilter<"Client"> | Date | string
    date_update?: DateTimeNullableFilter<"Client"> | Date | string | null
    ICALs?: ICALListRelationFilter
    bills?: BillListRelationFilter
    userClients?: UserClientListRelationFilter
  }, "client_id" | "email">

  export type ClientOrderByWithAggregationInput = {
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
    url_ICAL?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    client_id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    status?: StringWithAggregatesFilter<"Client"> | string
    hourly_rate?: FloatWithAggregatesFilter<"Client"> | number
    tva_rate?: FloatWithAggregatesFilter<"Client"> | number
    url_ICAL?: StringWithAggregatesFilter<"Client"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    date_update?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type ICALWhereInput = {
    AND?: ICALWhereInput | ICALWhereInput[]
    OR?: ICALWhereInput[]
    NOT?: ICALWhereInput | ICALWhereInput[]
    ical_id?: StringFilter<"ICAL"> | string
    url?: StringFilter<"ICAL"> | string
    date_start?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    date_end?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    client_id?: StringFilter<"ICAL"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    icalModules?: ICALModuleListRelationFilter
  }

  export type ICALOrderByWithRelationInput = {
    ical_id?: SortOrder
    url?: SortOrder
    date_start?: SortOrderInput | SortOrder
    date_end?: SortOrderInput | SortOrder
    client_id?: SortOrder
    client?: ClientOrderByWithRelationInput
    icalModules?: ICALModuleOrderByRelationAggregateInput
  }

  export type ICALWhereUniqueInput = Prisma.AtLeast<{
    ical_id?: string
    AND?: ICALWhereInput | ICALWhereInput[]
    OR?: ICALWhereInput[]
    NOT?: ICALWhereInput | ICALWhereInput[]
    url?: StringFilter<"ICAL"> | string
    date_start?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    date_end?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    client_id?: StringFilter<"ICAL"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    icalModules?: ICALModuleListRelationFilter
  }, "ical_id">

  export type ICALOrderByWithAggregationInput = {
    ical_id?: SortOrder
    url?: SortOrder
    date_start?: SortOrderInput | SortOrder
    date_end?: SortOrderInput | SortOrder
    client_id?: SortOrder
    _count?: ICALCountOrderByAggregateInput
    _max?: ICALMaxOrderByAggregateInput
    _min?: ICALMinOrderByAggregateInput
  }

  export type ICALScalarWhereWithAggregatesInput = {
    AND?: ICALScalarWhereWithAggregatesInput | ICALScalarWhereWithAggregatesInput[]
    OR?: ICALScalarWhereWithAggregatesInput[]
    NOT?: ICALScalarWhereWithAggregatesInput | ICALScalarWhereWithAggregatesInput[]
    ical_id?: StringWithAggregatesFilter<"ICAL"> | string
    url?: StringWithAggregatesFilter<"ICAL"> | string
    date_start?: DateTimeNullableWithAggregatesFilter<"ICAL"> | Date | string | null
    date_end?: DateTimeNullableWithAggregatesFilter<"ICAL"> | Date | string | null
    client_id?: StringWithAggregatesFilter<"ICAL"> | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    module_id?: StringFilter<"Module"> | string
    name?: StringFilter<"Module"> | string
    unit_price?: IntFilter<"Module"> | number
    duration?: StringFilter<"Module"> | string
    id?: StringFilter<"Module"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    icalModules?: ICALModuleListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    module_id?: SortOrder
    name?: SortOrder
    unit_price?: SortOrder
    duration?: SortOrder
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    icalModules?: ICALModuleOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    module_id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    unit_price?: IntFilter<"Module"> | number
    duration?: StringFilter<"Module"> | string
    id?: StringFilter<"Module"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    icalModules?: ICALModuleListRelationFilter
  }, "module_id">

  export type ModuleOrderByWithAggregationInput = {
    module_id?: SortOrder
    name?: SortOrder
    unit_price?: SortOrder
    duration?: SortOrder
    id?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    module_id?: StringWithAggregatesFilter<"Module"> | string
    name?: StringWithAggregatesFilter<"Module"> | string
    unit_price?: IntWithAggregatesFilter<"Module"> | number
    duration?: StringWithAggregatesFilter<"Module"> | string
    id?: StringWithAggregatesFilter<"Module"> | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    bill_id?: StringFilter<"Bill"> | string
    date_creation?: DateTimeFilter<"Bill"> | Date | string
    date_update?: DateTimeNullableFilter<"Bill"> | Date | string | null
    date_echeance?: DateTimeFilter<"Bill"> | Date | string
    tva?: IntNullableFilter<"Bill"> | number | null
    status?: StringFilter<"Bill"> | string
    client_id?: StringFilter<"Bill"> | string
    id?: StringFilter<"Bill"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BillOrderByWithRelationInput = {
    bill_id?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrderInput | SortOrder
    date_echeance?: SortOrder
    tva?: SortOrderInput | SortOrder
    status?: SortOrder
    client_id?: SortOrder
    id?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    bill_id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    date_creation?: DateTimeFilter<"Bill"> | Date | string
    date_update?: DateTimeNullableFilter<"Bill"> | Date | string | null
    date_echeance?: DateTimeFilter<"Bill"> | Date | string
    tva?: IntNullableFilter<"Bill"> | number | null
    status?: StringFilter<"Bill"> | string
    client_id?: StringFilter<"Bill"> | string
    id?: StringFilter<"Bill"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "bill_id">

  export type BillOrderByWithAggregationInput = {
    bill_id?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrderInput | SortOrder
    date_echeance?: SortOrder
    tva?: SortOrderInput | SortOrder
    status?: SortOrder
    client_id?: SortOrder
    id?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    bill_id?: StringWithAggregatesFilter<"Bill"> | string
    date_creation?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    date_update?: DateTimeNullableWithAggregatesFilter<"Bill"> | Date | string | null
    date_echeance?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    tva?: IntNullableWithAggregatesFilter<"Bill"> | number | null
    status?: StringWithAggregatesFilter<"Bill"> | string
    client_id?: StringWithAggregatesFilter<"Bill"> | string
    id?: StringWithAggregatesFilter<"Bill"> | string
  }

  export type UserClientWhereInput = {
    AND?: UserClientWhereInput | UserClientWhereInput[]
    OR?: UserClientWhereInput[]
    NOT?: UserClientWhereInput | UserClientWhereInput[]
    id?: StringFilter<"UserClient"> | string
    client_id?: StringFilter<"UserClient"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type UserClientOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    user?: UserOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type UserClientWhereUniqueInput = Prisma.AtLeast<{
    id_client_id?: UserClientIdClient_idCompoundUniqueInput
    AND?: UserClientWhereInput | UserClientWhereInput[]
    OR?: UserClientWhereInput[]
    NOT?: UserClientWhereInput | UserClientWhereInput[]
    id?: StringFilter<"UserClient"> | string
    client_id?: StringFilter<"UserClient"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id_client_id">

  export type UserClientOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    _count?: UserClientCountOrderByAggregateInput
    _max?: UserClientMaxOrderByAggregateInput
    _min?: UserClientMinOrderByAggregateInput
  }

  export type UserClientScalarWhereWithAggregatesInput = {
    AND?: UserClientScalarWhereWithAggregatesInput | UserClientScalarWhereWithAggregatesInput[]
    OR?: UserClientScalarWhereWithAggregatesInput[]
    NOT?: UserClientScalarWhereWithAggregatesInput | UserClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserClient"> | string
    client_id?: StringWithAggregatesFilter<"UserClient"> | string
  }

  export type ICALModuleWhereInput = {
    AND?: ICALModuleWhereInput | ICALModuleWhereInput[]
    OR?: ICALModuleWhereInput[]
    NOT?: ICALModuleWhereInput | ICALModuleWhereInput[]
    ical_id?: StringFilter<"ICALModule"> | string
    module_id?: StringFilter<"ICALModule"> | string
    ical?: XOR<ICALScalarRelationFilter, ICALWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ICALModuleOrderByWithRelationInput = {
    ical_id?: SortOrder
    module_id?: SortOrder
    ical?: ICALOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type ICALModuleWhereUniqueInput = Prisma.AtLeast<{
    ical_id_module_id?: ICALModuleIcal_idModule_idCompoundUniqueInput
    AND?: ICALModuleWhereInput | ICALModuleWhereInput[]
    OR?: ICALModuleWhereInput[]
    NOT?: ICALModuleWhereInput | ICALModuleWhereInput[]
    ical_id?: StringFilter<"ICALModule"> | string
    module_id?: StringFilter<"ICALModule"> | string
    ical?: XOR<ICALScalarRelationFilter, ICALWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "ical_id_module_id">

  export type ICALModuleOrderByWithAggregationInput = {
    ical_id?: SortOrder
    module_id?: SortOrder
    _count?: ICALModuleCountOrderByAggregateInput
    _max?: ICALModuleMaxOrderByAggregateInput
    _min?: ICALModuleMinOrderByAggregateInput
  }

  export type ICALModuleScalarWhereWithAggregatesInput = {
    AND?: ICALModuleScalarWhereWithAggregatesInput | ICALModuleScalarWhereWithAggregatesInput[]
    OR?: ICALModuleScalarWhereWithAggregatesInput[]
    NOT?: ICALModuleScalarWhereWithAggregatesInput | ICALModuleScalarWhereWithAggregatesInput[]
    ical_id?: StringWithAggregatesFilter<"ICALModule"> | string
    module_id?: StringWithAggregatesFilter<"ICALModule"> | string
  }

  export type UserCreateInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    userClients?: UserClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    userClients?: UserClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALCreateNestedManyWithoutClientInput
    bills?: BillCreateNestedManyWithoutClientInput
    userClients?: UserClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALUncheckedCreateNestedManyWithoutClientInput
    bills?: BillUncheckedCreateNestedManyWithoutClientInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUpdateManyWithoutClientNestedInput
    bills?: BillUpdateManyWithoutClientNestedInput
    userClients?: UserClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUncheckedUpdateManyWithoutClientNestedInput
    bills?: BillUncheckedUpdateManyWithoutClientNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ICALCreateInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    client: ClientCreateNestedOneWithoutICALsInput
    icalModules?: ICALModuleCreateNestedManyWithoutIcalInput
  }

  export type ICALUncheckedCreateInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    client_id: string
    icalModules?: ICALModuleUncheckedCreateNestedManyWithoutIcalInput
  }

  export type ICALUpdateInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutICALsNestedInput
    icalModules?: ICALModuleUpdateManyWithoutIcalNestedInput
  }

  export type ICALUncheckedUpdateInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_id?: StringFieldUpdateOperationsInput | string
    icalModules?: ICALModuleUncheckedUpdateManyWithoutIcalNestedInput
  }

  export type ICALCreateManyInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    client_id: string
  }

  export type ICALUpdateManyMutationInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ICALUncheckedUpdateManyInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleCreateInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    user: UserCreateNestedOneWithoutModulesInput
    icalModules?: ICALModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    id: string
    icalModules?: ICALModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutModulesNestedInput
    icalModules?: ICALModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    icalModules?: ICALModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    id: string
  }

  export type ModuleUpdateManyMutationInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BillCreateInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client: ClientCreateNestedOneWithoutBillsInput
    user: UserCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client_id: string
    id: string
  }

  export type BillUpdateInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutBillsNestedInput
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BillCreateManyInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client_id: string
    id: string
  }

  export type BillUpdateManyMutationInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BillUncheckedUpdateManyInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientCreateInput = {
    user: UserCreateNestedOneWithoutUserClientsInput
    client: ClientCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateInput = {
    id: string
    client_id: string
  }

  export type UserClientUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientCreateManyInput = {
    id: string
    client_id: string
  }

  export type UserClientUpdateManyMutationInput = {

  }

  export type UserClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleCreateInput = {
    ical: ICALCreateNestedOneWithoutIcalModulesInput
    module: ModuleCreateNestedOneWithoutIcalModulesInput
  }

  export type ICALModuleUncheckedCreateInput = {
    ical_id: string
    module_id: string
  }

  export type ICALModuleUpdateInput = {
    ical?: ICALUpdateOneRequiredWithoutIcalModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutIcalModulesNestedInput
  }

  export type ICALModuleUncheckedUpdateInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleCreateManyInput = {
    ical_id: string
    module_id: string
  }

  export type ICALModuleUpdateManyMutationInput = {

  }

  export type ICALModuleUncheckedUpdateManyInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type UserClientListRelationFilter = {
    every?: UserClientWhereInput
    some?: UserClientWhereInput
    none?: UserClientWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    company_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_inscription?: SortOrder
    date_update?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    company_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_inscription?: SortOrder
    date_update?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    company_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_inscription?: SortOrder
    date_update?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ICALListRelationFilter = {
    every?: ICALWhereInput
    some?: ICALWhereInput
    none?: ICALWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ICALOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
    url_ICAL?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
    url_ICAL?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    status?: SortOrder
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
    url_ICAL?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    hourly_rate?: SortOrder
    tva_rate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ICALModuleListRelationFilter = {
    every?: ICALModuleWhereInput
    some?: ICALModuleWhereInput
    none?: ICALModuleWhereInput
  }

  export type ICALModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ICALCountOrderByAggregateInput = {
    ical_id?: SortOrder
    url?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    client_id?: SortOrder
  }

  export type ICALMaxOrderByAggregateInput = {
    ical_id?: SortOrder
    url?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    client_id?: SortOrder
  }

  export type ICALMinOrderByAggregateInput = {
    ical_id?: SortOrder
    url?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    client_id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModuleCountOrderByAggregateInput = {
    module_id?: SortOrder
    name?: SortOrder
    unit_price?: SortOrder
    duration?: SortOrder
    id?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    module_id?: SortOrder
    name?: SortOrder
    unit_price?: SortOrder
    duration?: SortOrder
    id?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    module_id?: SortOrder
    name?: SortOrder
    unit_price?: SortOrder
    duration?: SortOrder
    id?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BillCountOrderByAggregateInput = {
    bill_id?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
    date_echeance?: SortOrder
    tva?: SortOrder
    status?: SortOrder
    client_id?: SortOrder
    id?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    tva?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    bill_id?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
    date_echeance?: SortOrder
    tva?: SortOrder
    status?: SortOrder
    client_id?: SortOrder
    id?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    bill_id?: SortOrder
    date_creation?: SortOrder
    date_update?: SortOrder
    date_echeance?: SortOrder
    tva?: SortOrder
    status?: SortOrder
    client_id?: SortOrder
    id?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    tva?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserClientIdClient_idCompoundUniqueInput = {
    id: string
    client_id: string
  }

  export type UserClientCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type UserClientMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type UserClientMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type ICALScalarRelationFilter = {
    is?: ICALWhereInput
    isNot?: ICALWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type ICALModuleIcal_idModule_idCompoundUniqueInput = {
    ical_id: string
    module_id: string
  }

  export type ICALModuleCountOrderByAggregateInput = {
    ical_id?: SortOrder
    module_id?: SortOrder
  }

  export type ICALModuleMaxOrderByAggregateInput = {
    ical_id?: SortOrder
    module_id?: SortOrder
  }

  export type ICALModuleMinOrderByAggregateInput = {
    ical_id?: SortOrder
    module_id?: SortOrder
  }

  export type ModuleCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput> | ModuleCreateWithoutUserInput[] | ModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutUserInput | ModuleCreateOrConnectWithoutUserInput[]
    createMany?: ModuleCreateManyUserInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type UserClientCreateNestedManyWithoutUserInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput> | ModuleCreateWithoutUserInput[] | ModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutUserInput | ModuleCreateOrConnectWithoutUserInput[]
    createMany?: ModuleCreateManyUserInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type UserClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput> | ModuleCreateWithoutUserInput[] | ModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutUserInput | ModuleCreateOrConnectWithoutUserInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutUserInput | ModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleCreateManyUserInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutUserInput | ModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutUserInput | ModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type BillUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type UserClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutUserInput | UserClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutUserInput | UserClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutUserInput | UserClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput> | ModuleCreateWithoutUserInput[] | ModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutUserInput | ModuleCreateOrConnectWithoutUserInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutUserInput | ModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleCreateManyUserInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutUserInput | ModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutUserInput | ModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type UserClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput> | UserClientCreateWithoutUserInput[] | UserClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutUserInput | UserClientCreateOrConnectWithoutUserInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutUserInput | UserClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserClientCreateManyUserInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutUserInput | UserClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutUserInput | UserClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type ICALCreateNestedManyWithoutClientInput = {
    create?: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput> | ICALCreateWithoutClientInput[] | ICALUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ICALCreateOrConnectWithoutClientInput | ICALCreateOrConnectWithoutClientInput[]
    createMany?: ICALCreateManyClientInputEnvelope
    connect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutClientInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type UserClientCreateNestedManyWithoutClientInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type ICALUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput> | ICALCreateWithoutClientInput[] | ICALUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ICALCreateOrConnectWithoutClientInput | ICALCreateOrConnectWithoutClientInput[]
    createMany?: ICALCreateManyClientInputEnvelope
    connect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type UserClientUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ICALUpdateManyWithoutClientNestedInput = {
    create?: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput> | ICALCreateWithoutClientInput[] | ICALUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ICALCreateOrConnectWithoutClientInput | ICALCreateOrConnectWithoutClientInput[]
    upsert?: ICALUpsertWithWhereUniqueWithoutClientInput | ICALUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ICALCreateManyClientInputEnvelope
    set?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    disconnect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    delete?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    connect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    update?: ICALUpdateWithWhereUniqueWithoutClientInput | ICALUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ICALUpdateManyWithWhereWithoutClientInput | ICALUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ICALScalarWhereInput | ICALScalarWhereInput[]
  }

  export type BillUpdateManyWithoutClientNestedInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutClientInput | BillUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutClientInput | BillUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BillUpdateManyWithWhereWithoutClientInput | BillUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type UserClientUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutClientInput | UserClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutClientInput | UserClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutClientInput | UserClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type ICALUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput> | ICALCreateWithoutClientInput[] | ICALUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ICALCreateOrConnectWithoutClientInput | ICALCreateOrConnectWithoutClientInput[]
    upsert?: ICALUpsertWithWhereUniqueWithoutClientInput | ICALUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ICALCreateManyClientInputEnvelope
    set?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    disconnect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    delete?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    connect?: ICALWhereUniqueInput | ICALWhereUniqueInput[]
    update?: ICALUpdateWithWhereUniqueWithoutClientInput | ICALUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ICALUpdateManyWithWhereWithoutClientInput | ICALUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ICALScalarWhereInput | ICALScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutClientInput | BillUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutClientInput | BillUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BillUpdateManyWithWhereWithoutClientInput | BillUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type UserClientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput> | UserClientCreateWithoutClientInput[] | UserClientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserClientCreateOrConnectWithoutClientInput | UserClientCreateOrConnectWithoutClientInput[]
    upsert?: UserClientUpsertWithWhereUniqueWithoutClientInput | UserClientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserClientCreateManyClientInputEnvelope
    set?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    disconnect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    delete?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    connect?: UserClientWhereUniqueInput | UserClientWhereUniqueInput[]
    update?: UserClientUpdateWithWhereUniqueWithoutClientInput | UserClientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserClientUpdateManyWithWhereWithoutClientInput | UserClientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutICALsInput = {
    create?: XOR<ClientCreateWithoutICALsInput, ClientUncheckedCreateWithoutICALsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutICALsInput
    connect?: ClientWhereUniqueInput
  }

  export type ICALModuleCreateNestedManyWithoutIcalInput = {
    create?: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput> | ICALModuleCreateWithoutIcalInput[] | ICALModuleUncheckedCreateWithoutIcalInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutIcalInput | ICALModuleCreateOrConnectWithoutIcalInput[]
    createMany?: ICALModuleCreateManyIcalInputEnvelope
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
  }

  export type ICALModuleUncheckedCreateNestedManyWithoutIcalInput = {
    create?: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput> | ICALModuleCreateWithoutIcalInput[] | ICALModuleUncheckedCreateWithoutIcalInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutIcalInput | ICALModuleCreateOrConnectWithoutIcalInput[]
    createMany?: ICALModuleCreateManyIcalInputEnvelope
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutICALsNestedInput = {
    create?: XOR<ClientCreateWithoutICALsInput, ClientUncheckedCreateWithoutICALsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutICALsInput
    upsert?: ClientUpsertWithoutICALsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutICALsInput, ClientUpdateWithoutICALsInput>, ClientUncheckedUpdateWithoutICALsInput>
  }

  export type ICALModuleUpdateManyWithoutIcalNestedInput = {
    create?: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput> | ICALModuleCreateWithoutIcalInput[] | ICALModuleUncheckedCreateWithoutIcalInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutIcalInput | ICALModuleCreateOrConnectWithoutIcalInput[]
    upsert?: ICALModuleUpsertWithWhereUniqueWithoutIcalInput | ICALModuleUpsertWithWhereUniqueWithoutIcalInput[]
    createMany?: ICALModuleCreateManyIcalInputEnvelope
    set?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    disconnect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    delete?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    update?: ICALModuleUpdateWithWhereUniqueWithoutIcalInput | ICALModuleUpdateWithWhereUniqueWithoutIcalInput[]
    updateMany?: ICALModuleUpdateManyWithWhereWithoutIcalInput | ICALModuleUpdateManyWithWhereWithoutIcalInput[]
    deleteMany?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
  }

  export type ICALModuleUncheckedUpdateManyWithoutIcalNestedInput = {
    create?: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput> | ICALModuleCreateWithoutIcalInput[] | ICALModuleUncheckedCreateWithoutIcalInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutIcalInput | ICALModuleCreateOrConnectWithoutIcalInput[]
    upsert?: ICALModuleUpsertWithWhereUniqueWithoutIcalInput | ICALModuleUpsertWithWhereUniqueWithoutIcalInput[]
    createMany?: ICALModuleCreateManyIcalInputEnvelope
    set?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    disconnect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    delete?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    update?: ICALModuleUpdateWithWhereUniqueWithoutIcalInput | ICALModuleUpdateWithWhereUniqueWithoutIcalInput[]
    updateMany?: ICALModuleUpdateManyWithWhereWithoutIcalInput | ICALModuleUpdateManyWithWhereWithoutIcalInput[]
    deleteMany?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutModulesInput = {
    create?: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModulesInput
    connect?: UserWhereUniqueInput
  }

  export type ICALModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput> | ICALModuleCreateWithoutModuleInput[] | ICALModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutModuleInput | ICALModuleCreateOrConnectWithoutModuleInput[]
    createMany?: ICALModuleCreateManyModuleInputEnvelope
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
  }

  export type ICALModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput> | ICALModuleCreateWithoutModuleInput[] | ICALModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutModuleInput | ICALModuleCreateOrConnectWithoutModuleInput[]
    createMany?: ICALModuleCreateManyModuleInputEnvelope
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutModulesInput
    upsert?: UserUpsertWithoutModulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModulesInput, UserUpdateWithoutModulesInput>, UserUncheckedUpdateWithoutModulesInput>
  }

  export type ICALModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput> | ICALModuleCreateWithoutModuleInput[] | ICALModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutModuleInput | ICALModuleCreateOrConnectWithoutModuleInput[]
    upsert?: ICALModuleUpsertWithWhereUniqueWithoutModuleInput | ICALModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ICALModuleCreateManyModuleInputEnvelope
    set?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    disconnect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    delete?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    update?: ICALModuleUpdateWithWhereUniqueWithoutModuleInput | ICALModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ICALModuleUpdateManyWithWhereWithoutModuleInput | ICALModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
  }

  export type ICALModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput> | ICALModuleCreateWithoutModuleInput[] | ICALModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ICALModuleCreateOrConnectWithoutModuleInput | ICALModuleCreateOrConnectWithoutModuleInput[]
    upsert?: ICALModuleUpsertWithWhereUniqueWithoutModuleInput | ICALModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ICALModuleCreateManyModuleInputEnvelope
    set?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    disconnect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    delete?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    connect?: ICALModuleWhereUniqueInput | ICALModuleWhereUniqueInput[]
    update?: ICALModuleUpdateWithWhereUniqueWithoutModuleInput | ICALModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ICALModuleUpdateManyWithWhereWithoutModuleInput | ICALModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutBillsInput = {
    create?: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBillsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBillsInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBillsInput
    upsert?: ClientUpsertWithoutBillsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBillsInput, ClientUpdateWithoutBillsInput>, ClientUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    upsert?: UserUpsertWithoutBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillsInput, UserUpdateWithoutBillsInput>, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserCreateNestedOneWithoutUserClientsInput = {
    create?: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutUserClientsInput = {
    create?: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserClientsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserClientsNestedInput = {
    create?: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserClientsInput
    upsert?: UserUpsertWithoutUserClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserClientsInput, UserUpdateWithoutUserClientsInput>, UserUncheckedUpdateWithoutUserClientsInput>
  }

  export type ClientUpdateOneRequiredWithoutUserClientsNestedInput = {
    create?: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUserClientsInput
    upsert?: ClientUpsertWithoutUserClientsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUserClientsInput, ClientUpdateWithoutUserClientsInput>, ClientUncheckedUpdateWithoutUserClientsInput>
  }

  export type ICALCreateNestedOneWithoutIcalModulesInput = {
    create?: XOR<ICALCreateWithoutIcalModulesInput, ICALUncheckedCreateWithoutIcalModulesInput>
    connectOrCreate?: ICALCreateOrConnectWithoutIcalModulesInput
    connect?: ICALWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutIcalModulesInput = {
    create?: XOR<ModuleCreateWithoutIcalModulesInput, ModuleUncheckedCreateWithoutIcalModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutIcalModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type ICALUpdateOneRequiredWithoutIcalModulesNestedInput = {
    create?: XOR<ICALCreateWithoutIcalModulesInput, ICALUncheckedCreateWithoutIcalModulesInput>
    connectOrCreate?: ICALCreateOrConnectWithoutIcalModulesInput
    upsert?: ICALUpsertWithoutIcalModulesInput
    connect?: ICALWhereUniqueInput
    update?: XOR<XOR<ICALUpdateToOneWithWhereWithoutIcalModulesInput, ICALUpdateWithoutIcalModulesInput>, ICALUncheckedUpdateWithoutIcalModulesInput>
  }

  export type ModuleUpdateOneRequiredWithoutIcalModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutIcalModulesInput, ModuleUncheckedCreateWithoutIcalModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutIcalModulesInput
    upsert?: ModuleUpsertWithoutIcalModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutIcalModulesInput, ModuleUpdateWithoutIcalModulesInput>, ModuleUncheckedUpdateWithoutIcalModulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ModuleCreateWithoutUserInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    icalModules?: ICALModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutUserInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    icalModules?: ICALModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutUserInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput>
  }

  export type ModuleCreateManyUserInputEnvelope = {
    data: ModuleCreateManyUserInput | ModuleCreateManyUserInput[]
  }

  export type BillCreateWithoutUserInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client: ClientCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutUserInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client_id: string
  }

  export type BillCreateOrConnectWithoutUserInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillCreateManyUserInputEnvelope = {
    data: BillCreateManyUserInput | BillCreateManyUserInput[]
  }

  export type UserClientCreateWithoutUserInput = {
    client: ClientCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateWithoutUserInput = {
    client_id: string
  }

  export type UserClientCreateOrConnectWithoutUserInput = {
    where: UserClientWhereUniqueInput
    create: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput>
  }

  export type UserClientCreateManyUserInputEnvelope = {
    data: UserClientCreateManyUserInput | UserClientCreateManyUserInput[]
  }

  export type ModuleUpsertWithWhereUniqueWithoutUserInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutUserInput, ModuleUncheckedUpdateWithoutUserInput>
    create: XOR<ModuleCreateWithoutUserInput, ModuleUncheckedCreateWithoutUserInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutUserInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutUserInput, ModuleUncheckedUpdateWithoutUserInput>
  }

  export type ModuleUpdateManyWithWhereWithoutUserInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutUserInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    module_id?: StringFilter<"Module"> | string
    name?: StringFilter<"Module"> | string
    unit_price?: IntFilter<"Module"> | number
    duration?: StringFilter<"Module"> | string
    id?: StringFilter<"Module"> | string
  }

  export type BillUpsertWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillUpdateWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
  }

  export type BillUpdateManyWithWhereWithoutUserInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutUserInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    bill_id?: StringFilter<"Bill"> | string
    date_creation?: DateTimeFilter<"Bill"> | Date | string
    date_update?: DateTimeNullableFilter<"Bill"> | Date | string | null
    date_echeance?: DateTimeFilter<"Bill"> | Date | string
    tva?: IntNullableFilter<"Bill"> | number | null
    status?: StringFilter<"Bill"> | string
    client_id?: StringFilter<"Bill"> | string
    id?: StringFilter<"Bill"> | string
  }

  export type UserClientUpsertWithWhereUniqueWithoutUserInput = {
    where: UserClientWhereUniqueInput
    update: XOR<UserClientUpdateWithoutUserInput, UserClientUncheckedUpdateWithoutUserInput>
    create: XOR<UserClientCreateWithoutUserInput, UserClientUncheckedCreateWithoutUserInput>
  }

  export type UserClientUpdateWithWhereUniqueWithoutUserInput = {
    where: UserClientWhereUniqueInput
    data: XOR<UserClientUpdateWithoutUserInput, UserClientUncheckedUpdateWithoutUserInput>
  }

  export type UserClientUpdateManyWithWhereWithoutUserInput = {
    where: UserClientScalarWhereInput
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyWithoutUserInput>
  }

  export type UserClientScalarWhereInput = {
    AND?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
    OR?: UserClientScalarWhereInput[]
    NOT?: UserClientScalarWhereInput | UserClientScalarWhereInput[]
    id?: StringFilter<"UserClient"> | string
    client_id?: StringFilter<"UserClient"> | string
  }

  export type ICALCreateWithoutClientInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    icalModules?: ICALModuleCreateNestedManyWithoutIcalInput
  }

  export type ICALUncheckedCreateWithoutClientInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    icalModules?: ICALModuleUncheckedCreateNestedManyWithoutIcalInput
  }

  export type ICALCreateOrConnectWithoutClientInput = {
    where: ICALWhereUniqueInput
    create: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput>
  }

  export type ICALCreateManyClientInputEnvelope = {
    data: ICALCreateManyClientInput | ICALCreateManyClientInput[]
  }

  export type BillCreateWithoutClientInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    user: UserCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutClientInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    id: string
  }

  export type BillCreateOrConnectWithoutClientInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput>
  }

  export type BillCreateManyClientInputEnvelope = {
    data: BillCreateManyClientInput | BillCreateManyClientInput[]
  }

  export type UserClientCreateWithoutClientInput = {
    user: UserCreateNestedOneWithoutUserClientsInput
  }

  export type UserClientUncheckedCreateWithoutClientInput = {
    id: string
  }

  export type UserClientCreateOrConnectWithoutClientInput = {
    where: UserClientWhereUniqueInput
    create: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput>
  }

  export type UserClientCreateManyClientInputEnvelope = {
    data: UserClientCreateManyClientInput | UserClientCreateManyClientInput[]
  }

  export type ICALUpsertWithWhereUniqueWithoutClientInput = {
    where: ICALWhereUniqueInput
    update: XOR<ICALUpdateWithoutClientInput, ICALUncheckedUpdateWithoutClientInput>
    create: XOR<ICALCreateWithoutClientInput, ICALUncheckedCreateWithoutClientInput>
  }

  export type ICALUpdateWithWhereUniqueWithoutClientInput = {
    where: ICALWhereUniqueInput
    data: XOR<ICALUpdateWithoutClientInput, ICALUncheckedUpdateWithoutClientInput>
  }

  export type ICALUpdateManyWithWhereWithoutClientInput = {
    where: ICALScalarWhereInput
    data: XOR<ICALUpdateManyMutationInput, ICALUncheckedUpdateManyWithoutClientInput>
  }

  export type ICALScalarWhereInput = {
    AND?: ICALScalarWhereInput | ICALScalarWhereInput[]
    OR?: ICALScalarWhereInput[]
    NOT?: ICALScalarWhereInput | ICALScalarWhereInput[]
    ical_id?: StringFilter<"ICAL"> | string
    url?: StringFilter<"ICAL"> | string
    date_start?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    date_end?: DateTimeNullableFilter<"ICAL"> | Date | string | null
    client_id?: StringFilter<"ICAL"> | string
  }

  export type BillUpsertWithWhereUniqueWithoutClientInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutClientInput, BillUncheckedUpdateWithoutClientInput>
    create: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput>
  }

  export type BillUpdateWithWhereUniqueWithoutClientInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutClientInput, BillUncheckedUpdateWithoutClientInput>
  }

  export type BillUpdateManyWithWhereWithoutClientInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutClientInput>
  }

  export type UserClientUpsertWithWhereUniqueWithoutClientInput = {
    where: UserClientWhereUniqueInput
    update: XOR<UserClientUpdateWithoutClientInput, UserClientUncheckedUpdateWithoutClientInput>
    create: XOR<UserClientCreateWithoutClientInput, UserClientUncheckedCreateWithoutClientInput>
  }

  export type UserClientUpdateWithWhereUniqueWithoutClientInput = {
    where: UserClientWhereUniqueInput
    data: XOR<UserClientUpdateWithoutClientInput, UserClientUncheckedUpdateWithoutClientInput>
  }

  export type UserClientUpdateManyWithWhereWithoutClientInput = {
    where: UserClientScalarWhereInput
    data: XOR<UserClientUpdateManyMutationInput, UserClientUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutICALsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    bills?: BillCreateNestedManyWithoutClientInput
    userClients?: UserClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutICALsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    bills?: BillUncheckedCreateNestedManyWithoutClientInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutICALsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutICALsInput, ClientUncheckedCreateWithoutICALsInput>
  }

  export type ICALModuleCreateWithoutIcalInput = {
    module: ModuleCreateNestedOneWithoutIcalModulesInput
  }

  export type ICALModuleUncheckedCreateWithoutIcalInput = {
    module_id: string
  }

  export type ICALModuleCreateOrConnectWithoutIcalInput = {
    where: ICALModuleWhereUniqueInput
    create: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput>
  }

  export type ICALModuleCreateManyIcalInputEnvelope = {
    data: ICALModuleCreateManyIcalInput | ICALModuleCreateManyIcalInput[]
  }

  export type ClientUpsertWithoutICALsInput = {
    update: XOR<ClientUpdateWithoutICALsInput, ClientUncheckedUpdateWithoutICALsInput>
    create: XOR<ClientCreateWithoutICALsInput, ClientUncheckedCreateWithoutICALsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutICALsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutICALsInput, ClientUncheckedUpdateWithoutICALsInput>
  }

  export type ClientUpdateWithoutICALsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bills?: BillUpdateManyWithoutClientNestedInput
    userClients?: UserClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutICALsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bills?: BillUncheckedUpdateManyWithoutClientNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ICALModuleUpsertWithWhereUniqueWithoutIcalInput = {
    where: ICALModuleWhereUniqueInput
    update: XOR<ICALModuleUpdateWithoutIcalInput, ICALModuleUncheckedUpdateWithoutIcalInput>
    create: XOR<ICALModuleCreateWithoutIcalInput, ICALModuleUncheckedCreateWithoutIcalInput>
  }

  export type ICALModuleUpdateWithWhereUniqueWithoutIcalInput = {
    where: ICALModuleWhereUniqueInput
    data: XOR<ICALModuleUpdateWithoutIcalInput, ICALModuleUncheckedUpdateWithoutIcalInput>
  }

  export type ICALModuleUpdateManyWithWhereWithoutIcalInput = {
    where: ICALModuleScalarWhereInput
    data: XOR<ICALModuleUpdateManyMutationInput, ICALModuleUncheckedUpdateManyWithoutIcalInput>
  }

  export type ICALModuleScalarWhereInput = {
    AND?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
    OR?: ICALModuleScalarWhereInput[]
    NOT?: ICALModuleScalarWhereInput | ICALModuleScalarWhereInput[]
    ical_id?: StringFilter<"ICALModule"> | string
    module_id?: StringFilter<"ICALModule"> | string
  }

  export type UserCreateWithoutModulesInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    bills?: BillCreateNestedManyWithoutUserInput
    userClients?: UserClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModulesInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
  }

  export type ICALModuleCreateWithoutModuleInput = {
    ical: ICALCreateNestedOneWithoutIcalModulesInput
  }

  export type ICALModuleUncheckedCreateWithoutModuleInput = {
    ical_id: string
  }

  export type ICALModuleCreateOrConnectWithoutModuleInput = {
    where: ICALModuleWhereUniqueInput
    create: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput>
  }

  export type ICALModuleCreateManyModuleInputEnvelope = {
    data: ICALModuleCreateManyModuleInput | ICALModuleCreateManyModuleInput[]
  }

  export type UserUpsertWithoutModulesInput = {
    update: XOR<UserUpdateWithoutModulesInput, UserUncheckedUpdateWithoutModulesInput>
    create: XOR<UserCreateWithoutModulesInput, UserUncheckedCreateWithoutModulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModulesInput, UserUncheckedUpdateWithoutModulesInput>
  }

  export type UserUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUpdateManyWithoutUserNestedInput
    userClients?: UserClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ICALModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: ICALModuleWhereUniqueInput
    update: XOR<ICALModuleUpdateWithoutModuleInput, ICALModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<ICALModuleCreateWithoutModuleInput, ICALModuleUncheckedCreateWithoutModuleInput>
  }

  export type ICALModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: ICALModuleWhereUniqueInput
    data: XOR<ICALModuleUpdateWithoutModuleInput, ICALModuleUncheckedUpdateWithoutModuleInput>
  }

  export type ICALModuleUpdateManyWithWhereWithoutModuleInput = {
    where: ICALModuleScalarWhereInput
    data: XOR<ICALModuleUpdateManyMutationInput, ICALModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type ClientCreateWithoutBillsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALCreateNestedManyWithoutClientInput
    userClients?: UserClientCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBillsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALUncheckedCreateNestedManyWithoutClientInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutBillsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
  }

  export type UserCreateWithoutBillsInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleCreateNestedManyWithoutUserInput
    userClients?: UserClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillsInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutUserInput
    userClients?: UserClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
  }

  export type ClientUpsertWithoutBillsInput = {
    update: XOR<ClientUpdateWithoutBillsInput, ClientUncheckedUpdateWithoutBillsInput>
    create: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBillsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBillsInput, ClientUncheckedUpdateWithoutBillsInput>
  }

  export type ClientUpdateWithoutBillsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUpdateManyWithoutClientNestedInput
    userClients?: UserClientUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBillsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUncheckedUpdateManyWithoutClientNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutBillsInput = {
    update: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutUserNestedInput
    userClients?: UserClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutUserNestedInput
    userClients?: UserClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserClientsInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserClientsInput = {
    id?: string
    last_name: string
    first_name: string
    company_number: string
    email: string
    password: string
    date_inscription?: Date | string
    date_update?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
  }

  export type ClientCreateWithoutUserClientsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALCreateNestedManyWithoutClientInput
    bills?: BillCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserClientsInput = {
    client_id?: string
    name: string
    email: string
    address: string
    status: string
    hourly_rate?: number
    tva_rate?: number
    url_ICAL?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    ICALs?: ICALUncheckedCreateNestedManyWithoutClientInput
    bills?: BillUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserClientsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
  }

  export type UserUpsertWithoutUserClientsInput = {
    update: XOR<UserUpdateWithoutUserClientsInput, UserUncheckedUpdateWithoutUserClientsInput>
    create: XOR<UserCreateWithoutUserClientsInput, UserUncheckedCreateWithoutUserClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserClientsInput, UserUncheckedUpdateWithoutUserClientsInput>
  }

  export type UserUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    company_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_inscription?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientUpsertWithoutUserClientsInput = {
    update: XOR<ClientUpdateWithoutUserClientsInput, ClientUncheckedUpdateWithoutUserClientsInput>
    create: XOR<ClientCreateWithoutUserClientsInput, ClientUncheckedCreateWithoutUserClientsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUserClientsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUserClientsInput, ClientUncheckedUpdateWithoutUserClientsInput>
  }

  export type ClientUpdateWithoutUserClientsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUpdateManyWithoutClientNestedInput
    bills?: BillUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserClientsInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    tva_rate?: FloatFieldUpdateOperationsInput | number
    url_ICAL?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ICALs?: ICALUncheckedUpdateManyWithoutClientNestedInput
    bills?: BillUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ICALCreateWithoutIcalModulesInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    client: ClientCreateNestedOneWithoutICALsInput
  }

  export type ICALUncheckedCreateWithoutIcalModulesInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
    client_id: string
  }

  export type ICALCreateOrConnectWithoutIcalModulesInput = {
    where: ICALWhereUniqueInput
    create: XOR<ICALCreateWithoutIcalModulesInput, ICALUncheckedCreateWithoutIcalModulesInput>
  }

  export type ModuleCreateWithoutIcalModulesInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    user: UserCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutIcalModulesInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
    id: string
  }

  export type ModuleCreateOrConnectWithoutIcalModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutIcalModulesInput, ModuleUncheckedCreateWithoutIcalModulesInput>
  }

  export type ICALUpsertWithoutIcalModulesInput = {
    update: XOR<ICALUpdateWithoutIcalModulesInput, ICALUncheckedUpdateWithoutIcalModulesInput>
    create: XOR<ICALCreateWithoutIcalModulesInput, ICALUncheckedCreateWithoutIcalModulesInput>
    where?: ICALWhereInput
  }

  export type ICALUpdateToOneWithWhereWithoutIcalModulesInput = {
    where?: ICALWhereInput
    data: XOR<ICALUpdateWithoutIcalModulesInput, ICALUncheckedUpdateWithoutIcalModulesInput>
  }

  export type ICALUpdateWithoutIcalModulesInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutICALsNestedInput
  }

  export type ICALUncheckedUpdateWithoutIcalModulesInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUpsertWithoutIcalModulesInput = {
    update: XOR<ModuleUpdateWithoutIcalModulesInput, ModuleUncheckedUpdateWithoutIcalModulesInput>
    create: XOR<ModuleCreateWithoutIcalModulesInput, ModuleUncheckedCreateWithoutIcalModulesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutIcalModulesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutIcalModulesInput, ModuleUncheckedUpdateWithoutIcalModulesInput>
  }

  export type ModuleUpdateWithoutIcalModulesInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutIcalModulesInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleCreateManyUserInput = {
    module_id?: string
    name: string
    unit_price: number
    duration: string
  }

  export type BillCreateManyUserInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    client_id: string
  }

  export type UserClientCreateManyUserInput = {
    client_id: string
  }

  export type ModuleUpdateWithoutUserInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    icalModules?: ICALModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutUserInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    icalModules?: ICALModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutUserInput = {
    module_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type BillUpdateWithoutUserInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutUserInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type BillUncheckedUpdateManyWithoutUserInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientUpdateWithoutUserInput = {
    client?: ClientUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateWithoutUserInput = {
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientUncheckedUpdateManyWithoutUserInput = {
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALCreateManyClientInput = {
    ical_id?: string
    url: string
    date_start?: Date | string | null
    date_end?: Date | string | null
  }

  export type BillCreateManyClientInput = {
    bill_id?: string
    date_creation?: Date | string
    date_update?: Date | string | null
    date_echeance: Date | string
    tva?: number | null
    status: string
    id: string
  }

  export type UserClientCreateManyClientInput = {
    id: string
  }

  export type ICALUpdateWithoutClientInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icalModules?: ICALModuleUpdateManyWithoutIcalNestedInput
  }

  export type ICALUncheckedUpdateWithoutClientInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icalModules?: ICALModuleUncheckedUpdateManyWithoutIcalNestedInput
  }

  export type ICALUncheckedUpdateManyWithoutClientInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    date_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillUpdateWithoutClientInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutClientInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BillUncheckedUpdateManyWithoutClientInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    date_update?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_echeance?: DateTimeFieldUpdateOperationsInput | Date | string
    tva?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientUpdateWithoutClientInput = {
    user?: UserUpdateOneRequiredWithoutUserClientsNestedInput
  }

  export type UserClientUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserClientUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleCreateManyIcalInput = {
    module_id: string
  }

  export type ICALModuleUpdateWithoutIcalInput = {
    module?: ModuleUpdateOneRequiredWithoutIcalModulesNestedInput
  }

  export type ICALModuleUncheckedUpdateWithoutIcalInput = {
    module_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleUncheckedUpdateManyWithoutIcalInput = {
    module_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleCreateManyModuleInput = {
    ical_id: string
  }

  export type ICALModuleUpdateWithoutModuleInput = {
    ical?: ICALUpdateOneRequiredWithoutIcalModulesNestedInput
  }

  export type ICALModuleUncheckedUpdateWithoutModuleInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
  }

  export type ICALModuleUncheckedUpdateManyWithoutModuleInput = {
    ical_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}