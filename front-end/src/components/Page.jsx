import Header from './Header';

const Page = ({children}) => {
  return (
    <div className="bg-slate-500 w-screen h-screen flex items-center justify-center text-body">
      <div className="flex flex-col items-center bg-white max-w-md w-full min-h-[50vh]">
        <Header />
        {children}
      </div>
    </div>
    
  );
};

export default Page;
