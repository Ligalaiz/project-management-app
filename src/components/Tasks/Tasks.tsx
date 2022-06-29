import React, { FC } from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';
import { TaskItem } from '@components/TaskItem';
import { useAction } from '@src/hooks/useAction';
import { ITask, ITasks } from '@src/store/board/Board.types';
import * as t from './Tasks.style';

const Tasks: FC<ITasks> = ({ column }) => {
  const { reorderTasks } = useAction();

  return (
    <Reorder.Group
      as="ol"
      axis="y"
      values={column.items}
      onReorder={(items: ITask[]) => reorderTasks({ id: column.id, tasks: items })}
      css={t.taskList}
    >
      {column.items.map((task) => (
        <AnimatePresence key={task.id} initial={false}>
          <TaskItem task={task} column={column} />
        </AnimatePresence>
      ))}
    </Reorder.Group>
  );
};

export { Tasks };
