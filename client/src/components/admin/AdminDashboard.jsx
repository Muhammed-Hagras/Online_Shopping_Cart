import React from 'react'

import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function AdminDashboard() {

  const {isAdmin} = useSelector((state) => state.authReducer);
  if (!isAdmin) return <NotAdmin className='d-flex  bg-danger fs-1 text-white w-50 h-50 m-auto align-items-center justify-content-center p-5 mt-5 text-center'><p>Access denied. Not an Admin!</p></NotAdmin>;

  
  return (
    <StyledDashboard>
    <SideNav>
      <h3>Quick Links</h3>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/summary"
      >
        Summary
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/products"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/orders"
      >
        Orders
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/users"
      >
        Users
      </NavLink>
    </SideNav>
    <Content>
      <Outlet />
    </Content>
  </StyledDashboard>
  )
}


const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;

`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: absolute;
  overflow-y: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }
  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 4rem 8rem;
  width: 100%;
`; 

const NotAdmin = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
`