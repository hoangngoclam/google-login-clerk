import { SignedOut, SignInButton } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};
export default Login;
