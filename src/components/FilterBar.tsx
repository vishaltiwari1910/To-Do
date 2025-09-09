import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function FilterBar() {
  const ctx = useContext(TaskContext);

  return (
    <div style={{display:'flex',gap:12,padding:12,marginBottom:12,background:'#ffffff',borderRadius:8}}>
      <input placeholder='Search...' value={ctx.search} onChange={(e)=>ctx.setSearch(e.target.value)} style={{padding:8}} />

      <select onChange={(e)=>ctx.setSortOption(e.target.value as any)} value={ctx.sortOption} style={{padding:8}}>
        <option value='date'>Sort: Date</option>
        <option value='priority'>Sort: Priority</option>
        <option value='title'>Sort: Title</option>
      </select>

      <select onChange={(e)=>ctx.setMoveMode(e.target.value === 'true')} value={ctx.moveMode ? 'true' : 'false'} style={{padding:8}}>
        <option value='false'>Normal</option>
        <option value='true'>Move Mode</option>
      </select>
    </div>
  );
}
