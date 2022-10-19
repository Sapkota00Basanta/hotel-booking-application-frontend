// Interface Type Definations for HeaderProps
export interface HeaderProps {
  text?: string
}

// Interface Type Definations for Date Range State
export interface DateRangeStateValue {
  startDate?: Date
  endDate?: Date
  key?: string
}

// Exported Date Type Array Definations for Header Component
export type DateRangeStateProps = [DateRangeStateValue]
