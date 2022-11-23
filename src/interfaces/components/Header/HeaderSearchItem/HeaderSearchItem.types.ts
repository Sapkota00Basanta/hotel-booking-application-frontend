/* eslint-disable @typescript-eslint/indent */
// Interface for SearchBar Component Props
export interface HeaderSearchItemProps {
    fieldType: string
}

// Interface Type Definations for Date Range State
export interface DateRangeStateValue {
    startDate?: Date
    endDate?: Date
    key?: string
}

// Exported Date Type Array Definations for Header Component
export type DateRangeStateProps = [DateRangeStateValue]

// Interface Type Defination for Total Person & Room Element State
export interface TotalPersonAndRoomProps {
    adult: number
    children: number
    room: number
}

// Interface Type Defination for Event Handler for Total Person & Room Element State
export interface TotalPersonAndRoomEventHandlerProps {
    totalPersonAndRoomKey: keyof TotalPersonAndRoomProps // Passing keyof totalPersonAndRoomprops
    totalPersonAndRoomOperator: string
}
