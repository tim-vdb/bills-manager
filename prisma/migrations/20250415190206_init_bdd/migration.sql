-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "company_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_inscription" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "client_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" DATETIME
);

-- CreateTable
CREATE TABLE "ICAL" (
    "ical_id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "date_start" DATETIME NOT NULL,
    "date_end" DATETIME NOT NULL,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "ICAL_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Module" (
    "module_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    CONSTRAINT "Module_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bill" (
    "bill_id" TEXT NOT NULL PRIMARY KEY,
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" DATETIME,
    "date_echeance" DATETIME NOT NULL,
    "tva" INTEGER,
    "status" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    CONSTRAINT "Bill_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bill_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserClient" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    PRIMARY KEY ("id", "client_id"),
    CONSTRAINT "UserClient_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserClient_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ICALModule" (
    "ical_id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,

    PRIMARY KEY ("ical_id", "module_id"),
    CONSTRAINT "ICALModule_ical_id_fkey" FOREIGN KEY ("ical_id") REFERENCES "ICAL" ("ical_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ICALModule_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "Module" ("module_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ICAL_url_key" ON "ICAL"("url");
