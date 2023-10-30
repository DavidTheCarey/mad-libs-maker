import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user=null, setUser}) {

  function handleLogOut() {
      // Delegate to the users-service
      userService.logOut();
      // Update state will also cause a re-render
      setUser(null);
  }


  return (
    <nav>
      {user ?
      <>
      <Link className="homeIcon" to="/madlibs/home">
        <img src="https://i.imgur.com/2J5MFrP.png"></img>
      </Link>
      <Link to="/madlibs">View Templates</Link>
      &nbsp; &nbsp;
      <Link to="/madlibs/new">Create A Template</Link>
      &nbsp; &nbsp;
      <Link to={`/madlibs/${user._id}`}>My Creations</Link>
      &nbsp; &nbsp;
      <div>Hello, {user.name}</div >
      &nbsp; &nbsp;
      <Link to="/madlibs/home" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      <>
      <Link className="homeIcon" to="/madlibs/home">
        <img src="https://i.imgur.com/2J5MFrP.png"></img>
      </Link>
      <Link to="/madlibs">View Templates</Link>
      &nbsp; &nbsp;
      <Link to={`/madlibs/guest`}>My Creations</Link>
      &nbsp; &nbsp;
      <div>Sign In To Make Templates!</div >
      &nbsp; &nbsp;
      <Link to="/madlibs/auth">Sign In/Up</Link>
      </>
      }
    </nav>
  );
}