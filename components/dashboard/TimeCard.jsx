"use client";

import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

export default function TimeCard({ compact = false }) {
  const [time, setTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show placeholder during SSR
  if (!mounted || !time) {
    return (
      <div className={`${styles.card} ${compact ? styles.timeCardCompact : styles.timeCard}`}>
        {!compact && (
          <div className={styles.cardHeader}>
            <h3>Local Time</h3>
            <span className={styles.timezone}>MST</span>
          </div>
        )}
        <div className={styles.timeDisplay}>
          --:--
        </div>
        <div className={styles.dateDisplay}>
          Loading...
        </div>
      </div>
    );
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  if (compact) {
    return (
      <div className={`${styles.card} ${styles.timeCardCompact}`}>
        <div className={styles.timeDisplay}>
          {formatTime(time)}
        </div>
        <div className={styles.dateDisplay}>
          {formatDate(time)}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.timeCard}`}>
      <div className={styles.cardHeader}>
        <h3>Local Time</h3>
        <span className={styles.timezone}>MST</span>
      </div>
      <div className={styles.timeDisplay}>
        {formatTime(time)}
      </div>
      <div className={styles.dateDisplay}>
        {formatDate(time)}
      </div>
    </div>
  );
}