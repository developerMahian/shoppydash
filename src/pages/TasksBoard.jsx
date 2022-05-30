import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const TasksBoard = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <div className="pl-2.5">
      <Header category="App" title="Tasks Board" />
      <p className="-mt-9 mb-7 text-sm opacity-60">Drag & Drop your Tasks</p>
    </div>

    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default TasksBoard;
