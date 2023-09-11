import React from 'react'
import BookCard from './BookItem'

export default function BookCardsArea() {
  return (
    <div className='flex flex-row gap-10 m-10'>
      <BookCard title="a" author="a" pagesRead={10} read={true} />
      <BookCard title="a" author="a" pagesRead={10} read={true} />
      <BookCard title="a" author="a" pagesRead={10} read={true} />
      <BookCard title="a" author="a" pagesRead={10} read={true} />
      <BookCard title="a" author="a" pagesRead={10} read={true} />
      
    </div>
  )
}
