import React from 'react';
import PriorityBadge from './PriorityBadge';

export default function TaskCard({ task }: { task: { id: string; title: string; dueDate: string; priority: 'low'|'medium'|'high' } }) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid #e5e7eb',padding:12,borderRadius:8,marginBottom:8,background:'#fff'}}>
      <div>
        <h3 style={{margin:0,fontSize:16}}>{task.title}</h3>
        <div style={{color:'#6b7280',fontSize:13}}>Due: {task.dueDate}</div>
      </div>
      <PriorityBadge level={task.priority} />
    </div>
  );
}
