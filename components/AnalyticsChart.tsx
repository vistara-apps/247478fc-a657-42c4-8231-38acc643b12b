'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AnalyticsData } from '@/lib/types';

interface AnalyticsChartProps {
  variant?: 'bar' | 'line';
  data: AnalyticsData;
}

export function AnalyticsChart({ variant = 'bar', data }: AnalyticsChartProps) {
  const chartData = data.monthlyData.map(item => ({
    ...item,
    month: item.month.slice(0, 3), // Shorten month names
  }));

  return (
    <motion.div
      className="glass-card p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {variant === 'bar' ? 'Monthly Tips' : 'Tip Trends'}
        </h3>
        <p className="text-sm text-gray-400">
          Your tipping activity over the last 6 months
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'bar' ? (
            <BarChart data={chartData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <Bar 
                dataKey="amount" 
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(200, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(180, 100%, 50%)" />
                </linearGradient>
              </defs>
            </BarChart>
          ) : (
            <LineChart data={chartData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="hsl(200, 100%, 60%)"
                strokeWidth={3}
                dot={{ fill: 'hsl(200, 100%, 60%)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(200, 100%, 60%)', strokeWidth: 2 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white border-opacity-10">
        <div className="text-center">
          <div className="text-2xl font-bold text-neon-blue">{data.totalTips}</div>
          <div className="text-xs text-gray-400">Total Tips</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-neon-cyan">{data.totalAmount.toFixed(2)}</div>
          <div className="text-xs text-gray-400">SOL Earned</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-neon-purple">{data.supporterCount}</div>
          <div className="text-xs text-gray-400">Supporters</div>
        </div>
      </div>
    </motion.div>
  );
}
