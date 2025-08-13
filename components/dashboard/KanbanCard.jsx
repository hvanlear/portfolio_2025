"use client";

import { useState } from 'react';
import styles from './dashboard.module.css';

export default function KanbanCard() {
  const [tasks] = useState({
    todo: [
      { id: 1, title: "Create missing portfolio images", priority: "high" },
      { id: 2, title: "Clean up demo template artifacts", priority: "medium" }
    ],
    inProgress: [
      { id: 3, title: "Add character animations", priority: "high" },
      { id: 4, title: "Build dashboard component", priority: "medium" }
    ],
    done: [
      { id: 5, title: "Image asset investigation", priority: "low" },
      { id: 6, title: "Portfolio page animations", priority: "high" },
      { id: 7, title: "Masonry layout demo", priority: "low" }
    ]
  });

  const totalTasks = tasks.todo.length + tasks.inProgress.length + tasks.done.length;
  const completedTasks = tasks.done.length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className={`${styles.card} ${styles.kanbanCard}`}>
      <div className={styles.cardHeader}>
        <div className={styles.kanbanIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </div>
        <h3>Project Status</h3>
      </div>
      
      <div className={styles.progressSummary}>
        <div className={styles.progressText}>
          {completedTasks} of {totalTasks} tasks completed
        </div>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className={styles.progressPercent}>
          {progressPercent}%
        </div>
      </div>

      <div className={styles.kanbanColumns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Todo ({tasks.todo.length})</h4>
          {tasks.todo.map(task => (
            <div key={task.id} className={styles.taskCard}>
              <div 
                className={styles.priorityDot}
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              />
              <span className={styles.taskTitle}>{task.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>In Progress ({tasks.inProgress.length})</h4>
          {tasks.inProgress.map(task => (
            <div key={task.id} className={styles.taskCard}>
              <div 
                className={styles.priorityDot}
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              />
              <span className={styles.taskTitle}>{task.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Done ({tasks.done.length})</h4>
          {tasks.done.map(task => (
            <div key={task.id} className={`${styles.taskCard} ${styles.completedTask}`}>
              <div 
                className={styles.priorityDot}
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              />
              <span className={styles.taskTitle}>{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}