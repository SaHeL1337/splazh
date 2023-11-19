import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
export const Header = () => {
  
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();
    return (
      <header className="flex justify-between items-center bg-slate-500 p-4 text-slate-100">
        <div className="flex">SplaZh, the game</div>
        <div className="flex">
        <div className="">
        {userLoaded && isSignedIn && <span>Welcome, {user.username}! <SignOutButton><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Logout</button></SignOutButton></span>}
        {userLoaded && !isSignedIn && <span> <SignInButton><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Login</button></SignInButton></span>}
      </div>
        </div>
      </header>
      
    );
  };
  