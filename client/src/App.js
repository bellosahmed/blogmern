import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { UsercontextProvider } from './pages/Usercontext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UsercontextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'login'} element={<LoginPage />} />
          <Route path={'signup'} element={<SignupPage />} />
          <Route path={'create'} element={<CreatePost />} />
          <Route path={'post/:id'} element={<PostPage />} />
          <Route path={'edit/:id'} element={<EditPost />} />
        </Route>
      </Routes>
    </UsercontextProvider>
  );
}

export default App;
