import { createContext } from 'react';
import type { UUID, SortOption } from '../types';

interface TaskState {
  selectedTaskId: UUID | null;
  anchorEl: null | HTMLElement;
  anchorPosition: { top: number; left: number } | null;
  expandedTasks: UUID[];
  multipleSelectedTasks: UUID[];
  search: string;
  editModalOpen: boolean;
  deleteDialogOpen: boolean;
  sortOption: SortOption;
  sortAnchorEl: null | HTMLElement;
  moveMode: boolean;
}

interface TaskActions {
  setSelectedTaskId: (v: UUID | null) => void;
  setAnchorEl: (v: null | HTMLElement) => void;
  setAnchorPosition: (v: { top: number; left: number } | null) => void;
  setExpandedTasks: (v: UUID[]) => void;
  setMultipleSelectedTasks: (v: UUID[]) => void;
  setSearch: (v: string) => void;
  toggleShowMore: (taskId: UUID) => void;
  handleSelectTask: (taskId: UUID) => void;
  highlightMatchingText: (text: string) => React.ReactNode;
  setEditModalOpen: (v: boolean) => void;
  setDeleteDialogOpen: (v: boolean) => void;
  handleDeleteTask: () => void;
  handleCloseMoreMenu: () => void;
  setSortOption: (option: SortOption) => void;
  setSortAnchorEl: (v: null | HTMLElement) => void;
  setMoveMode: (v: boolean) => void;
  updateCategory: (category: Partial<Record<string, any>>) => void;
}

export type TaskContextType = TaskState & TaskActions;

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);
