'use client'

import dynamic from 'next/dynamic'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Red', votes: 12 },
  { name: 'Blue', votes: 19 },
  { name: 'Yellow', votes: 3 },
  { name: 'Green', votes: 5 },
  { name: 'Purple', votes: 2 },
  { name: 'Orange', votes: 3 },
]

const colors = {
  Red: '#FFB4B4',
  Blue: '#B4D4FF',
  Yellow: '#FFF6B4',
  Green: '#B4FFB4',
  Purple: '#E5B4FF',
  Orange: '#FFD6B4',
}

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
      <XAxis dataKey="name" stroke="#9CA3AF" />
      <YAxis stroke="#9CA3AF" />
      <Bar
        dataKey="votes"
        radius={[4, 4, 0, 0]}
        barSize={30}
      >
        {data.map((entry, index) => (
          <Bar
            key={`cell-${index}`}
            dataKey="votes"
            fill={colors[entry.name as keyof typeof colors]}
          />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
)

export const MonthlyReportsChart = dynamic(() => Promise.resolve(Chart), {
  ssr: false
}) 