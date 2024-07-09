import React, { useState, useEffect } from 'react'
import Quick from '../src/pages/Quick'
import Action from '../src/pages/Actions'
import Message from '../src/pages/Message'
import PreFlight from '../src/pages/PreFlight'
import Gauges from '../src/pages/Gauges'
import DroneID from '../src/pages/DroneID'
import TransPonder from '../src/pages/TransPonder'
import Status from '../src/pages/Status'
import Servo from '../src/pages/Servo'
import AuxFunction from '../src/pages/AuxFunction'
import Scripts from '../src/pages/Scripts'
import PayLoad from '../src/pages/PayLoad'
import TelemetryLogs from '../src/pages/TelemetryLogs'
import DataFlashLogs from '../src/pages/DataFlashLogs'



const Container = ({ buttonId }) => {
    const [nav, setNav] = useState("");

    useEffect(() => {
        const handleButtonClick = (chiku) => {
            switch (chiku) {
                case 'button1':
                    setNav(
                        <Quick />
                    )
                    break;
                case 'button2':
                    setNav(
                        <Action />
                    )
                    break;
                case 'button3':
                    setNav(
                        <Message />
                    )
                    break;
                case 'button4':
                    setNav(
                        <PreFlight />
                    )
                    break;
                case 'button5':
                    setNav(
                        <Gauges />
                    )
                    break;
                case 'button6':
                    setNav(
                        <DroneID />
                    )
                    break;
                case 'button7':
                    setNav(
                        <TransPonder />
                    )
                    break;
                case 'button8':
                    setNav(
                        <Status />
                    )
                    break;
                case 'button9':
                    setNav(
                        <Servo />
                    )
                    break;
                case 'button10':
                    setNav(
                        <AuxFunction />
                    )
                    break;
                case 'button11':
                    setNav(
                        <Scripts />
                    )
                    break;
                case 'button12':
                    setNav(
                        <PayLoad />
                    )
                    break;
                case 'button13':
                    setNav(
                        <TelemetryLogs />
                    )
                    break;
                case 'button14':
                    setNav(
                        <DataFlashLogs />
                    )
                    break;

                default:
                    break;
            }

        }
        handleButtonClick(buttonId);
    }, [buttonId])


    return (
        <>

            <div>{nav}</div>

        </>




    )
}

export default Container