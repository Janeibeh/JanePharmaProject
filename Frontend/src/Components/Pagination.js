import React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';



const PaginationList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center', // Center the pagination items
  alignItems: 'center',
});

const PaginationItem = styled('li')({
  margin: 0, // Adjust spacing between pagination items
  padding: '0 5px',
  border: '1px solid #ccc', // Add border to PaginationItem
  borderRadius: '4px',
});

export default function UsePagination({previous, next, current}) {
  const { items } = usePagination({
   
    count: 10,
  });

  return (
    <nav>
      <PaginationList>
        {items.map(({ page, type, selected, ...item }, index) => {
          item.disabled = false
          console.log('Type', item)
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
                onClick={current(page)}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item} onClick={type === 'previous' ? previous : next}>
                {type}
              </button>
            );
          }
          return <PaginationItem key={index}>{children}</PaginationItem>;
        })}
      </PaginationList>
    </nav>
  );
}