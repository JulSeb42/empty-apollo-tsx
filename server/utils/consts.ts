/*=============================================== Consts ===============================================*/

import "dotenv/config"

export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/base-apollo-jwt"

export const PORT = process.env.PORT || 5005
