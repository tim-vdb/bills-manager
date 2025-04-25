/*
  Warnings:

  - You are about to drop the column `status` on the `Client` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "client_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hourly_rate" REAL NOT NULL DEFAULT 0,
    "tva_rate" REAL NOT NULL DEFAULT 0,
    "url_ICAL" TEXT NOT NULL DEFAULT '',
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" DATETIME
);
INSERT INTO "new_Client" ("address", "client_id", "date_creation", "date_update", "email", "hourly_rate", "name", "tva_rate", "url_ICAL") SELECT "address", "client_id", "date_creation", "date_update", "email", "hourly_rate", "name", "tva_rate", "url_ICAL" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
