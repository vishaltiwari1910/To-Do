import React from 'react';

export default function PriorityBadge({ level }: { level: 'low' | 'medium' | 'high' }) {
  const styles: Record<string,string> = {
    high: 'background:#ef4444;color:#fff;padding:4px 8px;border-radius:6px;font-size:12px',
    medium: 'background:#f59e0b;color:#000;padding:4px 8px;border-radius:6px;font-size:12px',
    low: 'background:#10b981;color:#fff;padding:4px 8px;border-radius:6px;font-size:12px'
  };
  const style = styles[level] || styles.low;
  const styleObj = Object.fromEntries(style.split(';').filter(Boolean).map(s => {
    const [k,v] = s.split(':');
    const key = k.trim().replace(/-([a-z])/g, (_,c)=>c.toUpperCase());
    return [key, v.trim()];
  }));
  return <span style={styleObj}>{level.toUpperCase()}</span>;
}
