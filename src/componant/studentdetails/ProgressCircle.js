import React from 'react';

function ProgressCircle({ radius, stroke, progress }) {
  // Calculate normalized radius and circumference
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;

  // Calculate stroke dash offset based on progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Function to get color based on progress
  const getColor = () => (progress >= 30 ? '#4caf50' : '#ffffff'); // Change to white for progress less than 80%

  return (
    <svg height={radius * 2} width={progress} className="progress-circle">
      {/* Background Circle */}
      <circle
        stroke="#ffffff" // Background color
        fill="transparent"
        strokeWidth={stroke * 0.85}
        r={normalizedRadius}
        cx={radius}
        cy={radius}

      />
  <circle
        stroke="#ffffff" // Background color
        fill="transparent"
        strokeWidth={stroke * 0.85}
        r={normalizedRadius * .82}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle */}
      <circle
        stroke={getColor()} // Progress color
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.35s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} // Rotate remaining part
      />
      
      {/* Optional additional circle with white color */}
      <circle
        stroke={getColor()} 
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius * .79}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference *.79}
        strokeDashoffset={strokeDashoffset *.79}
        style={{ transition: 'stroke-dashoffset 0.35s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} // Rotate remaining part
      />
      
      
      {/* Progress Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="1.5rem"
        fill="white" // Ensure the text color is white
      >
        {progress}%
      </text>
    </svg>
  );
}

export default ProgressCircle;
