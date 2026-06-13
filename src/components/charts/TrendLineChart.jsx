import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const TrendLineChart = ({ data, lines }) => {
  // Dark mode hardcoded
  const colors = {
    gridStroke: '#1E2D45',
    axisColor: '#475569',
    tooltipBg: '#1A2235',
    tooltipBorder: '#1E2D45',
    tooltipText: '#F1F5F9',
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
