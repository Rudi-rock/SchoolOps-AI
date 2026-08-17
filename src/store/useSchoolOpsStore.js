import { useCallback, useEffect, useMemo, useState } from 'react'
import { initialData } from '../data/demoData'

const STORAGE_KEY = 'schoolops-demo-data'

function loadData() {
  if (typeof window === 'undefined') return initialData
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? { ...initialData, ...JSON.parse(saved) } : initialData
  } catch {
    return initialData
  }
}

export function useSchoolOpsStore() {
  const [data, setData] = useState(loadData)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const notify = useCallback((message, tone = 'success') => {
    setToast({ message, tone, id: Date.now() })
    window.setTimeout(() => setToast(null), 3200)
  }, [])

  const navigateAlert = useCallback((alert, navigate) => {
    navigate(alert.related.toLowerCase())
  }, [])

  const approveDocument = useCallback((id, fields) => {
    setData((current) => ({
      ...current,
      documents: current.documents.map((doc) => doc.id === id ? { ...doc, status: 'Approved', confidence: 98, extracted: fields } : doc),
      alerts: current.alerts.filter((alert) => !(alert.category === 'Documents' && alert.status === 'Open')),
    }))
    notify('Document approved and added to the school database.')
  }, [notify])

  const rejectDocument = useCallback((id) => {
    setData((current) => ({ ...current, documents: current.documents.map((doc) => doc.id === id ? { ...doc, status: 'Rejected' } : doc) }))
    notify('Document rejected and moved to archive.', 'info')
  }, [notify])

  const addTeacher = useCallback((teacher) => {
    setData((current) => ({ ...current, teachers: [...current.teachers, { ...teacher, id: `T-${String(current.teachers.length + 1).padStart(3, '0')}`, initials: teacher.name.split(/\\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase(), status: teacher.status || 'Active', workload: Number(teacher.workload) || 0, subjects: teacher.subjects.split(',').map((subject) => subject.trim()).filter(Boolean), classes: [] }] }))
    notify(`${teacher.name} added to the teacher directory.`)
  }, [notify])

  const resolveAlert = useCallback((id) => {
    setData((current) => ({ ...current, alerts: current.alerts.map((alert) => alert.id === id ? { ...alert, status: 'Resolved' } : alert) }))
    notify('Alert resolved.')
  }, [notify])

  const markAlertRead = useCallback((id) => {
    setData((current) => ({ ...current, alerts: current.alerts.map((alert) => alert.id === id ? { ...alert, status: 'Read' } : alert) }))
  }, [])

  const markAllAlertsRead = useCallback(() => {
    setData((current) => ({ ...current, alerts: current.alerts.map((alert) => alert.status === 'Open' ? { ...alert, status: 'Read' } : alert) }))
    notify('All notifications marked as read.', 'info')
  }, [notify])

  const markAttendance = useCallback((studentId, status) => {
    setData((current) => ({ ...current, students: current.students.map((student) => student.id === studentId ? { ...student, status, attendance: status === 'Present' ? Math.min(100, student.attendance + 1) : status === 'Absent' ? Math.max(0, student.attendance - 1) : student.attendance } : student) }))
    notify(`Attendance marked ${status.toLowerCase()}.`, 'info')
  }, [notify])

  const simulateRfid = useCallback(() => {
    setData((current) => ({ ...current, students: current.students.map((student) => student.id === 'S-1001' ? { ...student, status: 'Present' } : student) }))
    notify('RFID-10294 detected · Rahul Kumar marked present.')
  }, [notify])

  const generateTimetable = useCallback(() => {
    setData((current) => ({ ...current, alerts: current.alerts.filter((alert) => alert.category !== 'Timetable') }))
    notify('Conflict-free timetable generated across 42 classes.')
  }, [notify])

  const resolveConflict = useCallback(() => {
    setData((current) => ({
      ...current,
      timetable: current.timetable.map((entry) => entry.className === '8A' && entry.day === 'Monday' && entry.period === 3 ? { ...entry, day: 'Wednesday', period: 4, time: '10:40–11:25', room: 'Room 204' } : entry),
      alerts: current.alerts.map((alert) => alert.category === 'Timetable' ? { ...alert, status: 'Resolved' } : alert),
    }))
    notify('Conflict resolved · Class 8A moved to Wednesday P4.')
  }, [notify])

  const stats = useMemo(() => ({ students: 1248, teachers: 86, classes: 42, rooms: 31, attendance: 94.7, openAlerts: data.alerts.filter((alert) => alert.status === 'Open').length }), [data.alerts])
  return { data, stats, toast, approveDocument, rejectDocument, resolveAlert, markAttendance, simulateRfid, generateTimetable, resolveConflict, navigateAlert }
}
