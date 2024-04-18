interface QouteProps {
  qoute: string;
  author: string;
  QouteClass?: string;
}

function Qoute({ qoute, author,QouteClass }: QouteProps) {
  return (
    <div className={`bg-slate-300 h-screen   justify-center flex-col p-8 hidden lg:flex ${QouteClass}`}>
      <div className=" text-xl font-semibold ">{qoute}</div>
      <div className="text-lg font-semibold text-slate-500/50 px-3 ">
        {author}
      </div>
    </div>
  );
}

export default Qoute;
