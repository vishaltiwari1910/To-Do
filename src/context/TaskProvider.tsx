import React, { useState } from 'react';
import { TaskContext } from './TaskContext';
import type { UUID, SortOption } from '../types';

interface Props { children: React.ReactNode }

export function TaskProvider({ children }: Props) {
  const [selectedTaskId, setSelectedTaskId] = useState<UUID | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorPosition, setAnchorPosition] = useState<{ top:number; left:number } | null>(null);
  const [expandedTasks, setExpandedTasks] = useState<UUID[]>([]);
  const [multipleSelectedTasks, setMultipleSelectedTasks] = useState<UUID[]>([]);
  const [search, setSearch] = useState<string>('');
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<SortOption>('date');
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [moveMode, setMoveMode] = useState<boolean>(false);

  const toggleShowMore = (taskId: UUID) => {
    setExpandedTasks(prev => prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]);
  };

  const handleSelectTask = (taskId: UUID) => {
    setSelectedTaskId(taskId);
    if (!multipleSelectedTasks.includes(taskId)) {
      setMultipleSelectedTasks(prev => [...prev, taskId]);
    }
  };

  const highlightMatchingText = (text: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return (
      <>
        {text.split(regex).map((part, idx) =>
          part.toLowerCase() === search.toLowerCase() ? <mark key={idx} style={{background:'#fdf2a5'}}>{part}</mark> : part
        )}
      </>
    );
  };

  const handleDeleteTask = () => {
    setDeleteDialogOpen(false);
  };

  const handleCloseMoreMenu = () => {
    setAnchorEl(null);
    setAnchorPosition(null);
  };

  const updateCategory = (category: Partial<Record<string, any>>) => {
    console.log('update category', category);
  };

  const value = {
    selectedTaskId,
    anchorEl,
    anchorPosition,
    expandedTasks,
    multipleSelectedTasks,
    search,
    editModalOpen,
    deleteDialogOpen,
    sortOption,
    sortAnchorEl,
    moveMode,
    setSelectedTaskId,
    setAnchorEl,
    setAnchorPosition,
    setExpandedTasks,
    setMultipleSelectedTasks,
    setSearch,
    toggleShowMore,
    handleSelectTask,
    highlightMatchingText,
    setEditModalOpen,
    setDeleteDialogOpen,
    handleDeleteTask,
    handleCloseMoreMenu,
    setSortOption,
    setSortAnchorEl,
    setMoveMode,
    updateCategory
  } as const;

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
