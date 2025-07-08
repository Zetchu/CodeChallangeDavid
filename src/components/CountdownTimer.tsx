import { useEffect, useState } from 'react';

const CountdownTimer = ({ deadline }: { deadline: string }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(deadline).getTime() - new Date().getTime();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <p className=' text-gray-700 font-light tracking-wide'>
      {timeLeft.days} Day : {timeLeft.hours} Hrs : {timeLeft.minutes} Min :{' '}
      {timeLeft.seconds} Sec
    </p>
  );
};

export default CountdownTimer;
