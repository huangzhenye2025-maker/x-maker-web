"use client";

import { useState, useEffect } from 'react';
import '../globals.css';

export default function AdminDashboard() {
  const [secret, setSecret] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState(null);
  const [backendOnline, setBackendOnline] = useState(false);

  // 尝试从 URL 中直接解析暗号
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlSecret = urlParams.get('secret');
      if (urlSecret) {
        setSecret(urlSecret);
        fetchStats(urlSecret);
      }
    }
  }, []);

  const fetchStats = async (authSecret) => {
    setIsLoading(true);
    setError('');
    
    // 测试后端是否存活
    try {
      const pingRes = await fetch('https://my-twitter-backend-vlok.onrender.com/');
      if (pingRes.ok) {
        setBackendOnline(true);
      }
    } catch (e) {
      setBackendOnline(false);
    }

    try {
      const response = await fetch(`https://my-twitter-backend-vlok.onrender.com/admin/stats?secret=${authSecret}`);
      if (!response.ok) {
        throw new Error('暗号校验失败，权限不足！');
      }
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
        setIsUnlocked(true);
        // 如果是从手动输入解锁的，把暗号加到 URL 参数上方便刷新
        if (typeof window !== 'undefined') {
          const newUrl = `${window.location.pathname}?secret=${authSecret}`;
          window.history.replaceState({}, document.title, newUrl);
        }
      } else {
        throw new Error(data.error || '获取数据失败');
      }
    } catch (err) {
      setError(err.message || '网络连接错误，请检查后端运行状态。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    if (secret.trim()) {
      fetchStats(secret.trim());
    }
  };

  const formatTime = (ts) => {
    if (!ts) return 'N/A';
    const date = new Date(ts * 1000);
    return date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  };

  // 注入本页面的 CSS 样式
  const cssStyles = `
    .admin-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }
    .admin-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 24px;
      margin-bottom: 32px;
      gap: 16px;
    }
    @media (min-width: 768px) {
      .admin-header {
        flex-direction: row;
        align-items: center;
      }
    }
    .admin-title {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 900;
      color: white;
    }
    .status-indicators {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .status-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .status-dot.green {
      background-color: #22c55e;
      box-shadow: 0 0 8px #22c55e;
    }
    .status-dot.red {
      background-color: #ef4444;
      box-shadow: 0 0 8px #ef4444;
    }
    .status-dot.yellow {
      background-color: #eab308;
      box-shadow: 0 0 8px #eab308;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }
    @media (min-width: 640px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .stat-card {
      padding: 24px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .stat-card:hover {
      border-color: var(--accent-color);
      transform: translateY(-2px);
    }
    .stat-label {
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .stat-value {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 900;
      color: white;
      margin-bottom: 4px;
    }
    .stat-desc {
      font-size: 0.75rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .stat-icon {
      position: absolute;
      right: 16px;
      bottom: 16px;
      font-size: 2rem;
      opacity: 0.08;
    }
    .table-panel {
      padding: 24px;
      margin-bottom: 40px;
    }
    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .table-title {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
    }
    .refresh-btn {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--card-border);
      color: var(--text-secondary);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .refresh-btn:hover {
      border-color: var(--text-secondary);
      color: white;
    }
    .table-wrapper {
      width: 100%;
      overflow-x: auto;
    }
    .admin-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.875rem;
    }
    .admin-table th {
      padding: 12px 16px;
      color: var(--text-secondary);
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--card-border);
    }
    .admin-table td {
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.02);
      color: var(--text-primary);
    }
    .admin-table tr:hover {
      background: rgba(255, 255, 255, 0.01);
    }
    .badge {
      padding: 2px 8px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
      display: inline-block;
    }
    .badge.active {
      background: rgba(34, 197, 94, 0.1);
      color: #4ade80;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    .badge.refunded {
      background: rgba(239, 68, 68, 0.1);
      color: #f87171;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }
    .input-field {
      width: 100%;
      padding: 12px 16px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--card-border);
      color: white;
      text-align: center;
      font-size: 1rem;
      transition: border-color 0.2s ease;
      margin-bottom: 12px;
    }
    .input-field:focus {
      outline: none;
      border-color: var(--accent-color);
    }
    .form-card {
      max-width: 400px;
      width: 100%;
      padding: 32px;
      text-align: center;
      margin: 0 auto;
    }
    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  `;

  if (!isUnlocked) {
    return (
      <div className="flex-center bg-[#0b0f19]">
        <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
        <div className="glass-panel form-card">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔐</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
            X-Maker Pro 监控中心
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '24px' }}>
            请输入管理员暗号以解锁数据看板
          </p>
          
          <form onSubmit={handleUnlock}>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="请输入管理员暗号..."
              className="input-field"
            />
            {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '16px' }}>{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              {isLoading ? '正在校验...' : '解锁看板'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0b0f19', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className="admin-container">
        
        {/* Top Header */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">
              X-Maker Pro <span style={{ color: 'var(--accent-color)' }}>Dashboard</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
              实时数据统计 · 商业变现与服务健康状态大屏
            </p>
          </div>
          
          {/* Status Indicators */}
          <div className="status-indicators">
            <div className="status-badge">
              <span className={`status-dot ${backendOnline ? 'green' : 'red'}`}></span>
              <span>Render 后端: {backendOnline ? 'Online' : 'Offline'}</span>
            </div>
            <div className="status-badge">
              <span className="status-dot green"></span>
              <span>Vercel 前端: Online</span>
            </div>
            <div className="status-badge">
              <span className={`status-dot ${stats?.deepseek_available ? 'green' : 'yellow'}`}></span>
              <span>MongoDB 数据库: Connected</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          
          <div className="glass-panel stat-card">
            <div className="stat-label">预估总营收</div>
            <div className="stat-value">${stats?.estimated_revenue || '0.00'}</div>
            <div className="stat-desc">基于已激活用户 $9.99/位 估算</div>
            <div className="stat-icon">💵</div>
          </div>

          <div className="glass-panel stat-card">
            <div className="stat-label">已激活用户数</div>
            <div className="stat-value">{stats?.active_users || 0} 人</div>
            <div className="stat-desc">当前在用插件的正式付费客户</div>
            <div className="stat-icon">👥</div>
          </div>

          <div className="glass-panel stat-card">
            <div className="stat-label">总卡密生成数</div>
            <div className="stat-value">{stats?.total_users || 0} 笔</div>
            <div className="stat-desc">包含退款、激活、废弃卡密总和</div>
            <div className="stat-icon">🎟️</div>
          </div>

          <div className="glass-panel stat-card">
            <div className="stat-label">DeepSeek API 余额</div>
            <div className="stat-value">
              {stats?.deepseek_balance || 'N/A'}
            </div>
            <div className="stat-desc">
              <span className="status-dot green" style={{ width: '8px', height: '8px', boxShadow: 'none' }}></span>
              {stats?.deepseek_available ? 'AI 服务运行中' : '服务余额不足/欠费'}
            </div>
            <div className="stat-icon">🤖</div>
          </div>

        </div>

        {/* Recent Activated Licenses Table */}
        <div className="glass-panel table-panel">
          <div className="table-header">
            <h2 className="table-title">📥 最近激活卡密记录 (最新10条)</h2>
            <button 
              onClick={() => fetchStats(secret)}
              className="refresh-btn"
            >
              刷新数据 🔄
            </button>
          </div>

          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>License Key / 订单号</th>
                  <th>买家邮箱</th>
                  <th>激活事件</th>
                  <th>状态</th>
                  <th>激活时间</th>
                </tr>
              </thead>
              <tbody>
                {stats?.recent_licenses && stats.recent_licenses.length > 0 ? (
                  stats.recent_licenses.map((license) => (
                    <tr key={license.key}>
                      <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'white' }}>{license.key}</td>
                      <td>{license.email || 'N/A'}</td>
                      <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{license.event || 'manual'}</td>
                      <td>
                        <span className={`badge ${license.status === 'active' ? 'active' : 'refunded'}`}>
                          {license.status === 'active' ? 'Active (正常)' : 'Refunded (已退款)'}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{formatTime(license.created_at)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '32px', color: 'var(--text-secondary)' }}>
                      暂无激活记录
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
