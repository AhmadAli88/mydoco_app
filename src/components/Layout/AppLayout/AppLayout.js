import Header from './Header';
import SideBar from './Sidebar';
import { Container } from 'react-bootstrap';

const AppLayout = ({ children }) => {

  return (
    <div className="app-layout">
      <SideBar />
      <main className="main-wrapper">
        <Header/>
        <Container fluid className="content-wrapper">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default AppLayout;
