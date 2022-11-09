/*=============================================== Homepage ===============================================*/

import React from "react"
import { useQuery } from "@apollo/client"

import { HELLO } from "../graphql/queries"

const Homepage = () => {
    const { data, error, loading } = useQuery(HELLO)
    const hello = data?.hello

    if (error) return <p>{error.message}</p>

    return <div>{loading ? <p>Loading...</p> : <h1>Hello {hello}</h1>}</div>
}

export default Homepage
