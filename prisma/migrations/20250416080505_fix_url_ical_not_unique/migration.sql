-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ICAL" (
    "ical_id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "date_start" DATETIME,
    "date_end" DATETIME,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "ICAL_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client" ("client_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ICAL" ("client_id", "date_end", "date_start", "ical_id", "url") SELECT "client_id", "date_end", "date_start", "ical_id", "url" FROM "ICAL";
DROP TABLE "ICAL";
ALTER TABLE "new_ICAL" RENAME TO "ICAL";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
