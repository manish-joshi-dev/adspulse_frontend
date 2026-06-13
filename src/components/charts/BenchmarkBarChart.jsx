import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, CartesianGrid } from 'recharts';
import { useTheme } from '../../context/ThemeContext.jsx';

export const BenchmarkBarChart = ({ data, metricKey, benchmarkValue }) => {
  const { isDark } = useTheme();

  // Dynamic colors based on theme
  const colors = {
    gridStroke: isDark ? '#1E2D45' : '#E2E8F0',
    axisColor: isDark ? '#475569' : '#94A3B8',
    tooltipBg: isDark ? '#1A2235' : '#FFFFFF',
    tooltipBorder: isDark ? '#1E2D45' : '#E2E8F0',
    tooltipText: isDark ? '#F1F5F9' : '#0F172A',
    barColor: isDark ? '#4F8EF7' : '#2563EB',
    referenceColor: isDark ? '#F87171' : '#EF4444',
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.gridStroke} />
        <XAxis dataKey="name" tick={{ fill: colors.axisColor }} />
        <YAxis tick={{ fill: colors.axisColor }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: colors.tooltipBg, 
            color: colors.tooltipText, 
            border: `1px solid ${colors.tooltipBorder}`,
            borderRadius: '8px'
          }} 
        />
        <ReferenceLine y={benchmarkValue} stroke={colors.referenceColor} strokeDasharray="3 3" />
        <Bar dataKey={metricKey} fill={colors.barColor} />
      </BarChart>
    </ResponsiveContainer>
  );
};
