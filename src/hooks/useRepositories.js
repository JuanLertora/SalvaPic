import { useState, useEffect } from "react";
import { ACCESS_KEY } from "@env"

function useRepositories () {
    const [repositories, setRepositories] = useState(null)

    async function fetchRepositories () {
        const response = await globalThis.fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`)
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    },[])
    console.log(repositories)
    const repositoresNodes = repositories
    ? repositories.map(item => item.node)
    : {}

    return { repositories: repositoresNodes}
}

export default useRepositories