-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "bill_id" TEXT NOT NULL PRIMARY KEY,
    "date_creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_update" DATETIME,
    "date_echeance" DATETIME NOT NULL,
    "tva" INTEGER,
    "status" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    CONSTRAINT "Bill_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Bill_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bill" ("bill_id", "client_id", "date_creation", "date_echeance", "date_update", "id", "status", "tva") SELECT "bill_id", "client_id", "date_creation", "date_echeance", "date_update", "id", "status", "tva" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
CREATE TABLE "new_ICAL" (
    "ical_id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "date_start" DATETIME,
    "date_end" DATETIME,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "ICAL_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ICAL" ("client_id", "date_end", "date_start", "ical_id", "url") SELECT "client_id", "date_end", "date_start", "ical_id", "url" FROM "ICAL";
DROP TABLE "ICAL";
ALTER TABLE "new_ICAL" RENAME TO "ICAL";
CREATE TABLE "new_UserClient" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    PRIMARY KEY ("id", "client_id"),
    CONSTRAINT "UserClient_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserClient_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserClient" ("client_id", "id") SELECT "client_id", "id" FROM "UserClient";
DROP TABLE "UserClient";
ALTER TABLE "new_UserClient" RENAME TO "UserClient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
