export type OmitReactFields<T> = Omit<
  T,
  | keyof React.DOMAttributes<unknown>
  | 'defaultChecked'
  | 'defaultValue'
  | 'onCancel'
  | 'onClose'
  | 'onToggle'
  | 'suppressContentEditableWarning'
  | 'suppressHydrationWarning'
>;
