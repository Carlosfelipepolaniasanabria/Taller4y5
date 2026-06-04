import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/SideBar';
import { Content } from './components/Content';
import style from './style/App.module.css';

function App() {
  return (
    <MantineProvider>
      <div className={style.app}>
        <Header />
        <div className={style.layout}>
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
