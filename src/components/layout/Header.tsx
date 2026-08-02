import './Header.css';
import jsLogo from '../../img/js.png';
import reactLogo from '../../img/react.png';
import tsLogo from '../../img/typescript.png';
import databaseLogo from '../../img/database.png';
import npmLogo from '../../img/npm.png';
import nodeJsLogo from '../../img/node-js.png';

function Header() {
  return (
    <>
      <div className="header">
        <img src={jsLogo} alt="JavaScript" />
        <img src={tsLogo} alt="TypeScript" />
        <img src={nodeJsLogo} alt="Node.js" />
        <img src={reactLogo} alt="React" />
        <img src={databaseLogo} alt="Database" />
        <img src={npmLogo} alt="NPM" />
      </div>
    </>
  );
}

export default Header;
