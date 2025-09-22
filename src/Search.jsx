import React, { useState } from 'react'



function Search({search, setSearch}) {
  
  return (
    <div className='search'>
      <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
    </div>
  )
}

export default Search
