export type OmitReactFields<T> = T extends React.HTMLAttributes<infer K>
  ? Omit<
      T,
      | keyof React.DOMAttributes<K>
      | 'defaultChecked'
      | 'defaultValue'
      | 'onCancel'
      | 'onClose'
      | 'onToggle'
      | 'suppressContentEditableWarning'
      | 'suppressHydrationWarning'
    >
  : never;

export type Loose<T extends object> = Omit<Record<string, unknown>, keyof T> & T;
