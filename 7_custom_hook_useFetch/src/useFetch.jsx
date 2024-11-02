import { useEffect, useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const controller = new AbortController()
  useEffect(() => {
    setData(undefined)
    setIsLoading(true)
    setIsError(false)

    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((val) => setData(val))
      .catch((e) => {
        if (e?.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return (
      () => {
        controller.abort()
      },
      [url]
    )
  })

  return { data, isLoading, isError }
}
