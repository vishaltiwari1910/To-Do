import React from 'react';
import { TaskProvider } from '../context/TaskProvider';
import { TaskContext } from '../context/TaskContext';
import FilterBar from '../components/FilterBar';
import TaskCard from '../components/TaskCard';
import type { UUID } from '../types';

const sampleTasks: { id: UUID; title: string; dueDate: string; priority: 'low'|'medium'|'high' }[] = [
  { id: '1', title: 'Finish Assignment', dueDate: new Date().toISOString().slice(0,10), priority:'high' },
  { id: '2', title: 'Grocery Shopping', dueDate: new Date(Date.now()+86400000).toISOString().slice(0,10), priority:'medium' },
  { id: '3', title: 'Call friend', dueDate: new Date(Date.now()+2*86400000).toISOString().slice(0,10), priority:'low' }
];

export default function HomePage() {
  return (
    <TaskProvider>
      <div className="container">
        <h1 style={{textAlign:'center'}}>Todo App (TS)</h1>
        <TaskContext.Consumer>
          {ctx => (
            <>
              <FilterBar />
              <div style={{marginTop:12}}>
                {sampleTasks.map(t => <TaskCard key={t.id} task={t} />)}
              </div>
            </>
          )}
        </TaskContext.Consumer>
      </div>
    </TaskProvider>
  );
}
