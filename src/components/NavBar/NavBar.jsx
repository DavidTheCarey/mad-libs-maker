import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

  function handleLogOut() {
      // Delegate to the users-service
      userService.logOut();
      // Update state will also cause a re-render
      setUser(null);
  }


  return (
    <nav>
      <Link to="/madlibs">View Templates</Link>
      &nbsp; &nbsp;
      <Link to="/madlibs/new">Create A Template</Link>
      &nbsp; &nbsp;
      <Link to={`/madlibs/${user._id}`}>My Creations</Link>
      &nbsp; &nbsp;
      <>Hello {user.name}</ >
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}