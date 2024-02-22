import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import Header from '../Header';
import PostsList from '../PostsList';
import InputC from '../Input';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme, createPost, data }) {
  const theme = useTheme();

  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <InputC 
        createPost={createPost}
      />
      <PostsList 
        data={data}
      />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
