import BoardHeader from "../components/Board/BoardHeader";
import BoardSidebar from "../components/Board/BoardSidebar";
import KanbanBoard from "../components/Board/KanbanBoard/KanbanBoard";

export default function Dashboard() {
  return (
    <div className="w-full h-full flex justify-start items-start ">
      <div className="w-full h-full flex justify-start items-start bg-[url(/images/boardBackGround.1.jpg)] bg-cover  ">
        <BoardSidebar />
        <div className="w-full  h-full overflow-hidden backdrop-brightness-95 backdrop-opacity-10  ">
          <BoardHeader />
          <KanbanBoard className="h-[calc(100vh-100px)]" />
        </div>
      </div>
    </div>
  );
}
