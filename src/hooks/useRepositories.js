import { useState, useEffect } from "react";

function useRepositories () {
    const [repositories, setRepositories] = useState(null)

    async function fetchRepositories () {
        const response = await globalThis.fetch()
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    },[])

    const repositoresNodes = repositories
    ? repositories.map(item => item.node)
    : {}

    return { repositories: repositoresNodes}
}

export default useRepositories