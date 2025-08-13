"use client";

import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

export default function WeatherCard({ compact = false }) {
  const [weather, setWeather] = useState({
    temp: 72,
    condition: 'Partly Cloudy',
    icon: '⛅',
    feelsLike: 75
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // TODO: Fetch real weather data
    // This is just mock data for now
  }, []);

  const getTimeBasedIcon = () => {
    if (!mounted) return '⛅'; // Default icon for SSR
    
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour > 19;
    
    if (weather.condition.includes('Clear') || weather.condition.includes('Sunny')) {
      return isNight ? '🌙' : '☀️';
    }
    return weather.icon;
  };

  if (compact) {
    return (
      <div className={`${styles.card} ${styles.weatherCardCompact}`}>
        <div className={styles.weatherIcon}>
          {getTimeBasedIcon()}
        </div>
        <div className={styles.tempDisplay}>
          {weather.temp}°
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.weatherCard}`}>
      <div className={styles.cardHeader}>
        <h3>Weather</h3>
        <span className={styles.location}>Denver, CO</span>
      </div>
      <div className={styles.weatherContent}>
        <div className={styles.weatherIcon}>
          {getTimeBasedIcon()}
        </div>
        <div className={styles.weatherInfo}>
          <div className={styles.tempDisplay}>{weather.temp}°F</div>
          <div className={styles.condition}>{weather.condition}</div>
          <div className={styles.feelsLike}>Feels like {weather.feelsLike}°</div>
        </div>
      </div>
    </div>
  );
}