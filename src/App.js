import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');
  const [posts, setPosts] = useState([]);
  const firstRender = useRef(true);
  
  //
  // Hook de temas.
  //
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  // Função para alternar o tema.
  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }

  //
  // Hook de Posts
  //
  // Hook para criar um novo post.
  function createPost(description) {
    setPosts(prevPosts => [
      ...prevPosts, 
      {
        id: Math.random(),
        description: description,
        completed: false
      }
    ]);
  }

  // Hook para marcar um post como completo.
  function completePost(postId) {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === postId ? { ...post, completed: true } : post
    ));
  }

  // Hook para excluir um post.
  function deletePost(postId) {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  }

  // Salvando no localStorage
  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }, [theme]);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  // Carregando os dados salvos do localStorage ao iniciar o aplicativo
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('theme'));
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }

    firstRender.current = false;
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={toggleTheme} 
        selectedTheme={theme}
        createPost={createPost}
        completePost={completePost}
        deletePost={deletePost}
        data={posts}
      />
    </ThemeProvider>
  );
}

export default App;
