import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import postsD from './components/PostsList/posts';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');
  const [posts, setPosts] = useState(postsD);
  const firstRender = useRef(true);
 
  //hooks de temas.
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function toogleTheme()
  {
    setTheme(PrevState => PrevState=== 'dark' ? 'light' : 'dark')
  }

  //hook de posts;
  function createPost(description)
  {
    setPosts((prevState) =>[...prevState, 
      {
          id: Math.random(),
          title: `Title#0${posts.length+1}`,
          description: description,
          completed: false

      }
      ])
  }

  function completePost(postId)
  {
    setPosts((prevState) => prevState.map(
      post => (post.id === postId

      ? {...post, completed:true }
      : post
      )
  )
  );
  }

  //salvando no localstorage
  useEffect(() =>{
    if(firstRender.current){
      firstRender.current = false;
      return;
    }

    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={toogleTheme} 
              selectedTheme={theme}
              createPost={createPost}
              data={posts}
      />
    </ThemeProvider>
  );
};

export default App;
