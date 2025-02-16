'use client'

import dynamic from 'next/dynamic'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Red', votes: 12 },
  { name: 'Blue', votes: 19 },
  { name: 'Yellow', votes: 3 },
  { name: 'Green', votes: 5 },
  { name: 'Purple', votes: 2 },
  { name: 'Orange', votes: 3 },
]

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
      <XAxis dataKey="name" stroke="#9CA3AF" />
      <YAxis stroke="#9CA3AF" />
      <Line
        type="monotone"
        dataKey="votes"
        stroke="#EAB308"
        strokeWidth={2}
        dot={{ fill: '#EAB308', r: 4 }}
      />
    </LineChart>
  </ResponsiveContainer>
)

export const ResolvedReportsChart = dynamic(() => Promise.resolve(Chart), {
  ssr: false
}) 