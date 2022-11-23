// Interface type for navigation component
export interface NavigationBarProps {
  user?: User
  onRegister?: () => void
  onLogin?: () => void
}

// Defining Type for User Variable
export type User = string
