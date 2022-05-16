import React from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';
import { TaskItem } from '@components/TaskItem';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { IColumns, ITask } from '@src/store/board/Board.types';
import * as t from './Tasks.style';

const Tasks = ({ column }: { column: IColumns }) => {
  const { tasks } = useTypedUseSelector((state) => state.board);
  const { reorderTasks } = useAction();

  const { type } = column as typeof column & {
    type: string;
  };

  return (
    <Reorder.Group
      as="ol"
      axis="y"
      values={tasks[type]}
      onReorder={(items: ITask[]) => reorderTasks({ type, tasks: items })}
      css={t.taskList}
    >
      {tasks[type] &&
        tasks[type]
          .filter((task) => task.status === column.type)
          .map((task) => (
            <AnimatePresence key={task.id} initial={false}>
              <TaskItem task={task} />
            </AnimatePresence>
          ))}
    </Reorder.Group>
  );
};

export { Tasks };
