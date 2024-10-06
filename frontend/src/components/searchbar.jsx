import React from 'react'
import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;



const searchbar = () => {
  return (
    <div>searchbar</div>
  )
}

export default searchbar