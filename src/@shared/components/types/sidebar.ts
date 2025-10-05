type Item = { id: string; label: string; onClick?: () => void };

export interface ESidebarProps {
  className?: string;
  onSignUp?: () => void;
  onSignIn?: () => void;
  categories?: Item[];           // danh mục chính có chevron
  onInviteFriends?: () => void;
  onHelp?: () => void;
  language?: string;             // ví dụ: "English"
  onLanguageClick?: () => void;
  open?: boolean;
onClose?: () => void;
}

// export interface ESidebarProps {
//   open: boolean;
//   onClose?: () => void;
// }