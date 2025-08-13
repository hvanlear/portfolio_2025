"use client";

import { useState, useEffect } from 'react';
import GitHubCard from './GitHubCard';
import TimeCard from './TimeCard';
import WeatherCard from './WeatherCard';
import KanbanCard from './KanbanCard';
import styles from './dashboard.module.css';

export default function Dashboard({ position = "floating" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Animate in after a delay for floating, immediately for integrated
    const delay = position === "integrated" ? 0 : 1000;
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [position]);

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className={`${styles.dashboard} ${styles[position]}`}>
        <div className={styles.loadingState}>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      </div>
    );
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // For integrated position, show a more compact 4-card layout
  if (position === "integrated") {
    return (
      <div className={`${styles.dashboard} ${styles[position]} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.integratedGrid}>
          <TimeCard compact />
          <WeatherCard compact />
          <div className={styles.miniGithub}>
            <div className={styles.githubIcon}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className={styles.miniText}>
              <div className={styles.miniTitle}>RECENT PUSH</div>
              <div className={styles.miniSubtitle}>2H AGO</div>
            </div>
          </div>
          <div className={styles.miniKanban}>
            <div className={styles.kanbanIcon}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <div className={styles.miniText}>
              <div className={styles.miniTitle}>TASKS</div>
              <div className={styles.miniSubtitle}>7/10 DONE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.dashboard} ${styles[position]} ${isVisible ? styles.visible : ''}`}>
      {/* Compact Mode - Always Visible */}
      <div className={styles.compactView}>
        <TimeCard compact />
        <WeatherCard compact />
        <button 
          className={styles.expandButton}
          onClick={toggleExpanded}
          aria-label="Toggle dashboard"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
            className={`${styles.expandIcon} ${isExpanded ? styles.rotated : ''}`}
          >
            <path 
              d="M7 14l5-5 5 5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Expanded Mode - Slides Down */}
      <div className={`${styles.expandedView} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.cardGrid}>
          <GitHubCard />
          <KanbanCard />
        </div>
      </div>
    </div>
  );
}