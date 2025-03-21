import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './store';
import { useState } from 'react';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDesc }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>{task.isDone ? 'Undo' : 'Done'}</button>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;
