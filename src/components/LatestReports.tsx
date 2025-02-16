'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const reports = [
  {
    name: 'Lian',
    lastName: 'Smith',
    phone: '622322662',
    email: 'jonsmith@mail.com',
  },
  {
    name: 'Emma',
    lastName: 'Johnson',
    phone: '622322662',
    email: 'jonsmith@mail.com',
  },
  {
    name: 'Oliver',
    lastName: 'Williams',
    phone: '622322662',
    email: 'jonsmith@mail.com',
  },
  {
    name: 'Isabella',
    lastName: 'Brown',
    phone: '622322662',
    email: 'jonsmith@mail.com',
  },
  {
    name: 'Lian',
    lastName: 'Smith',
    phone: '622322662',
    email: 'jonsmith@mail.com',
  },
]

export function LatestReports() {
  return (
    <div className="relative">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-gray-700">
            <TableHead className="font-semibold text-gray-300">NAME</TableHead>
            <TableHead className="font-semibold text-gray-300">LAST NAME</TableHead>
            <TableHead className="font-semibold text-gray-300">PHONE</TableHead>
            <TableHead className="font-semibold text-gray-300">EMAIL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report, index) => (
            <TableRow 
              key={index}
              className="hover:bg-gray-800 border-gray-700"
            >
              <TableCell className="font-medium text-gray-200">{report.name}</TableCell>
              <TableCell className="text-gray-300">{report.lastName}</TableCell>
              <TableCell className="text-gray-300">{report.phone}</TableCell>
              <TableCell className="text-gray-300">{report.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 