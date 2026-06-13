import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useTheme } from '../../context/ThemeContext.jsx';

export const TrendLineChart = ({ data, lines }) => {
  const { isDark } = useTheme();

  // Dynamic colors based on theme
  const colors = {
    gridStroke: isDark ? '#1E2D45' : '#E2E8F0',
    axisColor: isDark ? '#475569' : '#94A3B8',
    tooltipBg: isDark ? '#1A2235' : '#FFFFFF',
    tooltipBorder: isDark ? '#1E2D45' : '#E2E8F0',
    tooltipText: isDark ? '#F1F5F9' : '#0F172A',
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.gridStroke} />
        <XAxis dataKey="date" tick={{ fill: colors.axisColor }} />
        <YAxis tick={{ fill: colors.axisColor }} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: colors.tooltipBg, 
            color: colors.tooltipText, 
            border: `1px solid ${colors.tooltipBorder}`,
            borderRadius: '8px'
          }} 
        />
        {lines.map((line, i) => (
          <Line key={i} type="monotone" dataKey={line.key} stroke={line.color} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
