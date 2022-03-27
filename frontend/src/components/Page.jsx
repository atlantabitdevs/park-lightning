import Header from './Header';

const Page = ({children}) => {
  return (
    <div className="bg-slate-500 w-screen h-screen flex justify-center font-body font-light">
      <div className="flex flex-col items-center justify-center bg-white max-w-md w-full min-h-[50vh] p-8 text-center space-y-12">
        <Header />
        {children}
      </div>
    </div>
    
  );
};

export default Page;
