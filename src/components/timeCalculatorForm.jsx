import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TimeCalculator() {
  const [timeInput, setTimeInput] = useState("");
  const [totalTime, setTotalTime] = useState("0 hrs, 0 min");
  const [shortHours, setShortHours] = useState("0 hrs, 0 min");
  const [extraHours, setExtraHours] = useState("0 hrs, 0 min");

  const handleChange = (value) => {
    setTimeInput(value);
  };

  const calculateTotalTime = () => {
    let totalMinutes = 0;
    let dailyMinutes = [];
    var totalDays = 0
    const timeSegments = timeInput.split(/\t+/); // Split by tab to separate days
    
    timeSegments.forEach((dayTime) => {
      let dayMinutes = 0;
      const matches = dayTime.matchAll(/(\d+)\s*hrs?,?\s*(\d*)\s*min?/gi);
      for (const match of matches) {
        const hours = parseInt(match[1], 10) || 0;
        const minutes = parseInt(match[2], 10) || 0;
        dayMinutes += hours * 60 + minutes;
        totalDays+=1
      }
      dailyMinutes.push(dayMinutes);
      totalMinutes += dayMinutes;
    });
    const requiredMinutes = totalDays * 8 * 60; // 8 hours per day
    const difference = totalMinutes - requiredMinutes;
    const shortHrs = difference < 0 ? Math.floor(Math.abs(difference) / 60) : 0;
    const shortMin = difference < 0 ? Math.abs(difference) % 60 : 0;
    
    const extraHrs = difference > 0 ? Math.floor(difference / 60) : 0;
    const extraMin = difference > 0 ? difference % 60 : 0;
    setShortHours(shortHrs || shortMin ? `${shortHrs} hrs, ${shortMin} min` : "0 hrs, 0 min");
    setExtraHours(extraHrs || extraMin ? `${extraHrs} hrs, ${extraMin} min` : "0 hrs, 0 min");
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    setTotalTime(`${hours} hrs, ${minutes} min`);
  };

  return (
    <div className="container mt-4 p-4 rounded shadow-lg bg-dark">
      <h2 className="text-center text-light mb-4">Hours Calculator</h2>
      <textarea
        value={timeInput}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter times e.g. 8 hrs, 0 min"
        className="form-control mb-3"
        rows="5"
      />
      <button
        onClick={calculateTotalTime}
        className="btn btn-success w-100"
      >
        Calculate Time
      </button>
      <div className="mt-4 p-3 rounded bg-dark">
        <p className="fw-bold text-dark">Total: {totalTime}</p>
        <p className="text-danger">Short Hours: {shortHours}</p>
        <p className="text-success">Extra Hours: {extraHours}</p>
      </div>
    </div>
  );
}
