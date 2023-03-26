import "./Header.css";
import { useState, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

const Header = () => {
  const [breakType, setBreakType] = useState("");
  const [secondHalfTime, setSecondHalfTime] = useState(24);
  const [time, setTime] = useState(-1);


  const { seconds, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  //start game clock after overlay is removed from the UI
  useEffect(() => {
    setTimeout(() => {
      start();
    }, 5000);
  }, []);

  //Handles Game Clock
  useEffect(() => {
    if (time === 24 && secondHalfTime === 24) {
      // pause game clock for 3secs halftime break and changes number to "HT" text
      pause();
      setBreakType("HT");

      //starts clock for second half after 5secs halftime break
      setTimeout(() => {
        setBreakType("");
        const stopwatchOffset = new Date();

        //resets clock to 24secs
        reset(stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 24));
        setTime(23);
        setSecondHalfTime(0);
      }, 5000);
    }

    //stop game clock as clock reaches 48secs for fulltime.
    if (time === 48) {
      pause();
      setBreakType("FT");
    }

    setTime(time + 1);
  }, [seconds]);

  return (
    <>
      <div className="header">
        {/* <div className="header__timer">{breakType ? breakType : clock}</div> */}
        <div className="header__timer">{breakType ? breakType : time}</div>

        <div className="header__title">NBA Virtual</div>

        <div className="header__game-status" >Live</div>
      </div>
    </>
  );
};

export default Header;
