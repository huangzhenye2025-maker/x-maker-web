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
    
    // 首先测试后端是否存活
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

  // 格式化时间戳
  const formatTime = (ts) => {
    if (!ts) return 'N/A';
    const date = new Date(ts * 1000);
    return date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center px-4 font-sans">
        <div className="glass-panel w-full max-w-md p-8 rounded-2xl border border-gray-800 text-center space-y-6">
          <div className="text-4xl">🔐</div>
          <h1 className="text-2xl font-bold text-white font-display">X-Maker Pro 监控中心</h1>
          <p className="text-sm text-gray-400">请输入独家管理员暗号以解锁数据看板</p>
          
          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="请输入管理员暗号..."
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-color)] text-center transition-colors"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-3 rounded-xl font-semibold cursor-pointer text-white disabled:opacity-50"
            >
              {isLoading ? '正在校验...' : '解锁看板'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300 font-sans py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <h1 className="text-3xl font-black text-white font-display tracking-tight">
              X-Maker Pro <span className="text-[var(--accent-color)]">Dashboard</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              实时数据统计 · 商业变现与服务健康状态大屏
            </p>
          </div>
          
          {/* Status Indicators */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800">
              <span className={`w-2.5 h-2.5 rounded-full ${backendOnline ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500'}`}></span>
              <span>Render 后端: {backendOnline ? 'Online' : 'Offline'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              <span>Vercel 前端: Online</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800">
              <span className={`w-2.5 h-2.5 rounded-full ${stats?.deepseek_available ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500'}`}></span>
              <span>MongoDB 数据库: Connected</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-2 relative overflow-hidden group hover:border-[var(--accent-color)] transition-all">
            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">预估总营收</div>
            <div className="text-3xl font-black text-white font-display">${stats?.estimated_revenue || '0.00'}</div>
            <div className="text-xs text-gray-400">基于已激活用户 $9.99/位 估算</div>
            <div className="absolute right-4 bottom-4 text-3xl opacity-10">💵</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-2 relative overflow-hidden group hover:border-[var(--accent-color)] transition-all">
            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">已激活用户数</div>
            <div className="text-3xl font-black text-white font-display">{stats?.active_users || 0} 人</div>
            <div className="text-xs text-gray-400">当前在用插件的正式付费客户</div>
            <div className="absolute right-4 bottom-4 text-3xl opacity-10">👥</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-2 relative overflow-hidden group hover:border-[var(--accent-color)] transition-all">
            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">总卡密生成数</div>
            <div className="text-3xl font-black text-white font-display">{stats?.total_users || 0} 笔</div>
            <div className="text-xs text-gray-400">包含退款、激活、废弃卡密总和</div>
            <div className="absolute right-4 bottom-4 text-3xl opacity-10">🎟️</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-2 relative overflow-hidden group hover:border-[var(--accent-color)] transition-all">
            <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">DeepSeek API 余额</div>
            <div className="text-3xl font-black text-white font-display">
              {stats?.deepseek_balance || 'N/A'}
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${stats?.deepseek_available ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {stats?.deepseek_available ? 'AI 服务运行中' : '服务余额不足/欠费'}
            </div>
            <div className="absolute right-4 bottom-4 text-3xl opacity-10">🤖</div>
          </div>

        </div>

        {/* Recent Activated Licenses Table */}
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white font-display">📥 最近激活卡密记录 (最新10条)</h2>
            <button 
              onClick={() => fetchStats(secret)}
              className="text-xs px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer"
            >
              刷新数据 🔄
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-800 text-gray-500 font-semibold uppercase tracking-wider text-xs">
                  <th className="py-3 px-4">License Key / 订单号</th>
                  <th className="py-3 px-4">买家邮箱</th>
                  <th className="py-3 px-4">激活事件</th>
                  <th className="py-3 px-4">状态</th>
                  <th className="py-3 px-4">激活时间</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {stats?.recent_licenses && stats.recent_licenses.length > 0 ? (
                  stats.recent_licenses.map((license) => (
                    <tr key={license.key} className="hover:bg-gray-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-white text-xs">{license.key}</td>
                      <td className="py-3.5 px-4">{license.email || 'N/A'}</td>
                      <td className="py-3.5 px-4 text-xs text-gray-500">{license.event || 'manual'}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          license.status === 'active' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {license.status === 'active' ? 'Active (正常)' : 'Refunded (已退款)'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-gray-400">{formatTime(license.created_at)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-gray-500">
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
