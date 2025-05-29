

import { useEffect, useState } from 'react'
import useAuth from '../../auth/hooks/useAuth'


export const usePagination = () => {

  const { user } = useAuth()


  const [page, setPage] = useState(1)

  const [size, setSize] = useState(10)

  const [search, setSearch] = useState('');

  const [branch, setBranch] = useState('')


  useEffect(() => {

    if (!user) return
    setBranch(user?.branch)

  }, [user])


  const handlePage = (page: number) => {
    setPage(page)
  }

  const handleSize = (size: number) => {
    setSize(size)
  }

  const hadleSearch = (search: string) => {
    setSearch(search)
  }

  const hadleBranch = (branch: string) => {
    setBranch(branch)
  }

  return {
    page,
    size,
    search,
    branch,
    handlePage,
    handleSize,
    hadleSearch,
    hadleBranch

  }
}
