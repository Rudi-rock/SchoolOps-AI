export const initialData = {
  teachers: [
    { id: 'T-001', name: 'Ananya Sharma', initials: 'AS', department: 'Mathematics', subjects: ['Mathematics'], classes: ['8A', '8B'], workload: 78, status: 'Active', availability: 'Mon–Fri', email: 'ananya.sharma@greenwood.edu' },
    { id: 'T-002', name: 'David Chen', initials: 'DC', department: 'Science', subjects: ['Physics', 'Science'], classes: ['9A', '10A'], workload: 92, status: 'Active', availability: 'Mon–Thu', email: 'david.chen@greenwood.edu' },
    { id: 'T-003', name: 'Priya Nair', initials: 'PN', department: 'English', subjects: ['English Literature'], classes: ['8A', '9B'], workload: 64, status: 'Active', availability: 'Mon–Fri', email: 'priya.nair@greenwood.edu' },
    { id: 'T-004', name: 'Marcus Johnson', initials: 'MJ', department: 'Social Studies', subjects: ['History', 'Civics'], classes: ['7A', '8B'], workload: 71, status: 'On leave', availability: 'Tue–Fri', email: 'marcus.johnson@greenwood.edu' },
    { id: 'T-005', name: 'Sofia Martinez', initials: 'SM', department: 'Languages', subjects: ['Spanish'], classes: ['6A', '7B'], workload: 84, status: 'Active', availability: 'Mon–Fri', email: 'sofia.martinez@greenwood.edu' },
  ],
  students: [
    { id: 'S-1001', name: 'Rahul Kumar', initials: 'RK', className: '9A', attendance: 98, status: 'Present' },
    { id: 'S-1002', name: 'Maya Patel', initials: 'MP', className: '9B', attendance: 76, status: 'Absent' },
    { id: 'S-1003', name: 'Liam Wilson', initials: 'LW', className: '8A', attendance: 91, status: 'Present' },
    { id: 'S-1004', name: 'Zoe Anderson', initials: 'ZA', className: '8B', attendance: 83, status: 'Late' },
    { id: 'S-1005', name: 'Ishaan Mehta', initials: 'IM', className: '9B', attendance: 72, status: 'Absent' },
  ],
  classes: [
    { id: 'C-8A', name: '8A', grade: '8', section: 'A', students: 31, room: 'Room 204', attendance: 96 },
    { id: 'C-8B', name: '8B', grade: '8', section: 'B', students: 29, room: 'Room 201', attendance: 94 },
    { id: 'C-9A', name: '9A', grade: '9', section: 'A', students: 30, room: 'Room 305', attendance: 95 },
    { id: 'C-9B', name: '9B', grade: '9', section: 'B', students: 32, room: 'Room 307', attendance: 76 },
    { id: 'C-10A', name: '10A', grade: '10', section: 'A', students: 28, room: 'Room 401', attendance: 97 },
  ],
  rooms: [
    { id: 'R-201', name: 'Room 201', type: 'Classroom', capacity: 32, utilization: 86, status: 'In use' },
    { id: 'R-204', name: 'Room 204', type: 'Classroom', capacity: 36, utilization: 42, status: 'Underutilized' },
    { id: 'R-305', name: 'Room 305', type: 'Science Lab', capacity: 30, utilization: 91, status: 'In use' },
    { id: 'R-307', name: 'Room 307', type: 'Classroom', capacity: 36, utilization: 74, status: 'In use' },
    { id: 'R-401', name: 'Room 401', type: 'Computer Lab', capacity: 30, utilization: 68, status: 'In use' },
  ],
  documents: [
    { id: 'DOC-1042', name: 'teacher-form-ananya.jpg', type: 'Teacher form', status: 'Needs review', confidence: 94, uploaded: 'Today, 09:42', extracted: { name: 'Ananya Sharma', department: 'Mathematics', subject: 'Mathematics', classes: '8A, 8B', availability: 'Monday–Friday', unavailable: 'Friday P4', experience: '7 years' } },
    { id: 'DOC-1041', name: 'class-allocation-9b.pdf', type: 'Class allocation', status: 'Approved', confidence: 98, uploaded: 'Yesterday, 16:20', extracted: { name: 'Class 9B', department: 'Academic Office' } },
    { id: 'DOC-1040', name: 'staff-form-dchen.png', type: 'Staff form', status: 'Processing', confidence: 0, uploaded: 'Yesterday, 14:10', extracted: {} },
  ],
  alerts: [
    { id: 'A-001', severity: 'Critical', category: 'Timetable', message: 'Teacher conflict detected in Class 8A', detail: 'David Chen is assigned to two classes on Monday, Period 3.', related: 'Timetable', status: 'Open', time: '12 min ago' },
    { id: 'A-002', severity: 'Attention', category: 'Documents', message: '3 documents require verification', detail: 'Review extracted fields before adding them to the school database.', related: 'Documents', status: 'Open', time: '38 min ago' },
    { id: 'A-003', severity: 'Warning', category: 'Attendance', message: 'Attendance below 80% in Class 9B', detail: 'Class attendance fell to 76% this week.', related: 'Attendance', status: 'Open', time: '1 hr ago' },
    { id: 'A-004', severity: 'Info', category: 'Rooms', message: 'Room 204 is underutilized', detail: 'Room utilization is at 42% this week.', related: 'Rooms', status: 'Open', time: '2 hrs ago' },
  ],
  timetable: [
    { day: 'Monday', period: 1, time: '08:00–08:45', className: '8A', subject: 'Mathematics', teacher: 'Ananya Sharma', room: 'Room 204' },
    { day: 'Monday', period: 2, time: '08:50–09:35', className: '9A', subject: 'Physics', teacher: 'David Chen', room: 'Room 305' },
    { day: 'Monday', period: 3, time: '09:50–10:35', className: '8A', subject: 'Science', teacher: 'David Chen', room: 'Room 305' },
    { day: 'Monday', period: 4, time: '10:40–11:25', className: '9B', subject: 'English Literature', teacher: 'Priya Nair', room: 'Room 307' },
    { day: 'Tuesday', period: 1, time: '08:00–08:45', className: '8B', subject: 'Mathematics', teacher: 'Ananya Sharma', room: 'Room 201' },
    { day: 'Tuesday', period: 2, time: '08:50–09:35', className: '10A', subject: 'Physics', teacher: 'David Chen', room: 'Room 305' },
    { day: 'Tuesday', period: 3, time: '09:50–10:35', className: '9B', subject: 'History', teacher: 'Marcus Johnson', room: 'Room 307' },
    { day: 'Wednesday', period: 1, time: '08:00–08:45', className: '9A', subject: 'Mathematics', teacher: 'Ananya Sharma', room: 'Room 204' },
    { day: 'Wednesday', period: 2, time: '08:50–09:35', className: '8A', subject: 'English Literature', teacher: 'Priya Nair', room: 'Room 204' },
    { day: 'Thursday', period: 3, time: '09:50–10:35', className: '10A', subject: 'Computer Science', teacher: 'David Chen', room: 'Room 401' },
    { day: 'Friday', period: 2, time: '08:50–09:35', className: '8B', subject: 'English Literature', teacher: 'Priya Nair', room: 'Room 201' },
  ],
  attendanceTrend: [{ day: 'Mon', value: 94 }, { day: 'Tue', value: 96 }, { day: 'Wed', value: 93 }, { day: 'Thu', value: 95 }, { day: 'Fri', value: 94.7 }],
  classAttendance: [{ name: '8A', value: 96 }, { name: '8B', value: 94 }, { name: '9A', value: 95 }, { name: '9B', value: 76 }, { name: '10A', value: 97 }],
}

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'documents', label: 'Documents', icon: 'FileScan', badge: 3 },
  { id: 'timetable', label: 'Timetable', icon: 'CalendarDays' },
  { id: 'teachers', label: 'Teachers', icon: 'GraduationCap' },
  { id: 'students', label: 'Students', icon: 'Users' },
  { id: 'classes', label: 'Classes', icon: 'School' },
  { id: 'attendance', label: 'Attendance', icon: 'ClipboardCheck' },
  { id: 'rooms', label: 'Rooms', icon: 'Building2' },
  { id: 'alerts', label: 'Alerts', icon: 'Bell', badge: 4 },
  { id: 'assistant', label: 'Ops Assistant', icon: 'Sparkles' },
]

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
export const periods = [{ number: 1, time: '08:00–08:45' }, { number: 2, time: '08:50–09:35' }, { number: 3, time: '09:50–10:35' }, { number: 4, time: '10:40–11:25' }]
