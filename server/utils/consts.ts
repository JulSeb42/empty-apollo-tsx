/*=============================================== Consts ===============================================*/

import "dotenv/config"

export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/empty-apollo-tsx"

export const PORT = process.env.PORT || 5005
