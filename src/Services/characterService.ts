import { character } from "../types";
const charactersService = {
  getCharacters({
    searchText = "",
    status = "",
    gender = "",
    page = 1,
  }): Promise<{
    totalItems: number;
    totalPages: number;
    characters: character[];
  }> {
    return new Promise((resolve, reject) => {
      fetch(`https://rickandmortyapi.com/graphql`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `{
            characters(page:${page}, filter:{
                name: "${searchText}",
                status: "${status}",
                gender: "${gender}"
            }) {
                info {
                    pages
                    next
                    prev
                    count
                }
                results {
                    id,
                    name,
                    status,
                    gender,
                    image,
                }
            }
        }`,
        }),
      })
        .then((res) => res.json())
        .then(
          ({
            data: {
              characters: { info, results },
            },
          }) =>
            resolve({
              totalItems: info.count,
              totalPages: info.pages,
              characters: results,
            })
        )
        .catch((err) => reject(err.message));
    });
  },
};
export default charactersService;
