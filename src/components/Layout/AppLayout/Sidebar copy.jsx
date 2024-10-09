import React from 'react';
import { Nav } from 'react-bootstrap';
import IMAGES from '../../../assets/images';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar position-fixed top-0 bottom-0 start-0 border-end d-flex flex-column align-items-start justify-content-start px-4 pt-5 ${isSidebarOpen ? 'open' : ''}`}>

      <div className="logo ps-3 mb-5">
        <img width={146} src={IMAGES.LOGO} alt="" />
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
