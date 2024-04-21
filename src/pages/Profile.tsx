import { SignedIn, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
export default Profile;
