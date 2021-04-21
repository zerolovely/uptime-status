import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2021 <Link to="https://status.lovelyzero.ga/" text="STATUS.LOVELYZERO.GA" /></p>
      </div>
    </div>
  );
}

export default Footer;
