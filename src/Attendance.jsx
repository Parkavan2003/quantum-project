import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlinePauseCircleOutline } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { TiFlowMerge } from "react-icons/ti";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

const Attendance = () => {
  const users = [
    {
      username: "Aravindh Kumar",
      jobRole: "Software Developer",
      icons: <CgProfile />,
      bgcolor: "#BBE9FF",
    },
    {
      username: "Aravindh",
      jobRole: "Software Developer",
      icons: <TiFlowMerge />,
      bgcolor: "#F9F07A",
    },
    {
      username: "Aravindh Kumar",
      jobRole: "Software Developer",
      icons: <MdOutlineDocumentScanner />,
      bgcolor: "#F19ED2",
    },
    {
      username: "Aravindh",
      jobRole: "Software Developer",
      icons: <GrTechnology />,
      bgcolor: "#D8EFD3",
    },
  ];
  const timing = [
    {
      icon: <CgProfile />,
      time: "08:00 PM",
      averageTime: "Average Working Hour",
    },
    {
      icon: <MdOutlineAccessTime />,
      time: "10:30 AM",
      averageTime: "Average in Time",
    },
    {
      icon: <MdOutlinePauseCircleOutline />,
      time: "07:30 PM",
      averageTime: "Average Out Time",
    },
    {
      icon: <RxLapTimer />,
      time: "01:00",
      averageTime: "Average Break Time",
    },
  ];
  return (
    <div className="flex">
      <div className="border w-28 h-screen">sidebar</div>
      <div className="w-full mr-6">
        <div>
          <div className="mt-20 border border-slate-300 h-44 rounded-xl ml-4 p-3 shadow-[rgba(0,0,15,0.3)_2px_2px_4px_0px]">
            <p className="font-bold text-lg">Attendance</p>

            <div className="flex justify-between px-5">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="h-28 mt-2 w-72 flex justify-center items-center rounded-md"
                  style={{ backgroundColor: user.bgcolor }}
                >
                  <span className="text-4xl mr-3 bg-white p-1 rounded-full">
                    {user.icons}
                  </span>
                  <div>
                    <p className="font-bold text-sm">{user.username}</p>
                    <p className="text-sm">{user.jobRole}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mr-6">
          <div className="mt-5 border border-slate-300 rounded-xl ml-4 p-3 shadow-[rgba(0,0,15,0.3)_2px_2px_4px_0px]">
            <div className="flex justify-between px-5">
              {timing.map((data, index) => (
                <div
                  key={index}
                  className="h-36 w-72 flex flex-col text-center justify-center items-center rounded-3xl bg-blue-700 text-white"
                >
                  <span className="text-5xl mr-3">{data.icon}</span>
                  <div className="mt-4">
                    <p className="font-bold text-sm">{data.time}</p>
                    <p className="text-sm">{data.averageTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
