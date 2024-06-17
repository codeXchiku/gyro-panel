import React from "react";
import { NavLink } from "react-router-dom";
import navcss from '../assets/Nav.module.css'

const Navbar = () => {
  return (
    <>
      <nav
        className={navcss.navcontainer1}>
        <div className={navcss.navcontainer2}>

          <NavLink
            className={navcss.navchild}
            to="/"
          >
            Quick
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Actions"
          >
            Action
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Message"
          >
            Message
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/PreFlight"
          >
            PreFlight
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Gauges"
          >
            Gauges
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/DroneID"
          >
            Drone ID
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Transponder"
          >
            Transponder
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Status"
          >
            Status
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Servo"
          >
            Servo/Relay
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/AuxFunction"
          >
            Aux Function
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Scripts"
          >
            Scripts
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/Payload"
          >
            Payload Control
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/TelemetryLogs"
          >
            Telemetry Logs
          </NavLink>

          <NavLink
            className={navcss.navchild}
            to="/DataFlashLogs"
          >
            Dataflash Logs
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
