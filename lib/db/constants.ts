export const venueCapacity = 400;

// this will eventually use environment variables
// export const getDbPath = (): string => "db";

export const getDbPath = (): string => {
  const dbPath = process.env.DB_PATH;
  if (!dbPath) {
    throw new Error("DB_PATH environment variable not set");
  }
  return dbPath;
};
