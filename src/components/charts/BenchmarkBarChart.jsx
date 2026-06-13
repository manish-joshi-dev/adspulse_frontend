import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, CartesianGrid } from 'recharts';

export const BenchmarkBarChart = ({ data, metricKey, benchmarkValue }) => {
  // Dark mode hardcoded
  const colors = {
    gridStroke: '#1E2D45',
    axisColor: '#475569',
    tooltipBg: '#1A2235',
    tooltipBorder: '#1E2D45',
    tooltipText: '#F1F5F9',
    barColor: '#4F8EF7',
    referenceColor: '#F87171',
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
