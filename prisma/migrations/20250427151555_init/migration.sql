-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "company_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_inscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "client_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hourly_rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tva_rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "url_ICAL" TEXT NOT NULL DEFAULT '',
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("client_id")
);

-- CreateTable
CREATE TABLE "ICAL" (
    "ical_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ICAL_pkey" PRIMARY KEY ("ical_id")
);

-- CreateTable
CREATE TABLE "Module" (
    "module_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("module_id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "bill_id" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" TIMESTAMP(3),
    "date_echeance" TIMESTAMP(3) NOT NULL,
    "tva" INTEGER,
    "status" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("bill_id")
);

-- CreateTable
CREATE TABLE "UserClient" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "UserClient_pkey" PRIMARY KEY ("id","client_id")
);

-- CreateTable
CREATE TABLE "ICALModule" (
    "ical_id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,

    CONSTRAINT "ICALModule_pkey" PRIMARY KEY ("ical_id","module_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "ICAL" ADD CONSTRAINT "ICAL_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("client_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_id_fkey" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("client_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_id_fkey" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClient" ADD CONSTRAINT "UserClient_id_fkey" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClient" ADD CONSTRAINT "UserClient_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("client_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ICALModule" ADD CONSTRAINT "ICALModule_ical_id_fkey" FOREIGN KEY ("ical_id") REFERENCES "ICAL"("ical_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ICALModule" ADD CONSTRAINT "ICALModule_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;
