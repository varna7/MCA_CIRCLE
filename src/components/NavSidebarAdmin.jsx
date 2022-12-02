/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation, } from "react-router-dom";
import Icon from "awesome-react-icons";
import 'react-bootstrap'

import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import {app, auth} from "../firebase-config";

export const NavSidebarAdmin = ({logo}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

    
      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-3">
          <span className="mx-2 text-2xl font-semibold text-black">
          MCA Circle
          </span>
        </div>
        {/* <div className="settingsPP my-1 d-flex justify-content-center" >
            
        <img src={logo} alt="" />
          </div> */}

    
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/dashboard-admin",
              // Optional
              elemBefore: () => <Icon name="user" />
            },
            {
              title: "Colleges",
            //   itemId: "/college-details",
              elemBefore: () => <Icon name="coffee" />,
              subNav: [
                {
                  title: "View",
                  itemId: "/admin-colleges/view",
                  // Optional
                  elemBefore: () => <Icon name="book" />
                },
                {
                  title: "Requests",
                  itemId: "/admin-colleges/requests",
                  elemBefore: () => <Icon name="activity" />
                },
         
              ]
            },

          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Sign Out",
                itemId: "/sign-out",
                elemBefore: () => <Icon name="log-out" />
              }
            ]}
            onSelect={({  }) => {
         app.auth().signOut()
             window.localStorage.setItem("college_id","");
             window.localStorage.setItem("type","");
navigate("/")
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
