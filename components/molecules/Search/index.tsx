import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { styled } from '@/styles/stitches.config';

const Search = () => {
  return (
    <Wrap>
      <SearchIconWrap>
        <FiSearch size="24" color="#ffffff" />
      </SearchIconWrap>
    </Wrap>
  );
};

export default Search;

const Wrap = styled('div', {
  height: 'max-content',
});

const SearchIconWrap = styled('div', {
  width: '25px',
  height: '25px',
  padding: '8px',
  borderRadius: '50%',
  backgroundColor: '#000000',
});

const Input = styled('input', {});
