//Interface type for navigation component
export interface NavBarProps {
    user?: User;
    onRegister?: () => void;
    onLogin?: () => void;
}

export type User = string;