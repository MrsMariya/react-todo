import React from 'react';
import {  useForm } from 'react-hook-form';


export const PostForm = ({ newTask }) => {
  const { register, handleSubmit, reset, formState, clearErrors } = useForm({
    shouldUnregister: true,
    defaultValues: { label: '' },
  });

  const onSubmit = (data) => {
    newTask(data.label);
    reset();
    clearErrors();
  };

  const errors = Object.values(formState.errors);
  return (
    <form className="new-task-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">New Task</label>
      <input
        id="task"
        {...register('label', {
          required: 'task cannot be blank',
          validate: {
            lessThanTwenty: (v) =>
              v.length <= 30 || 'Task cannot be longer than 30 characters.',
          },
        })}
      />
      <ul className="error-messages">
        {errors.map((error) => (
          <li key={'id'}>{error.message}</li>
        ))}
      </ul>
      <button type="submit">add</button>
    </form>
  );
}
