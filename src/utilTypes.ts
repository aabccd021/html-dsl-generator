export type Loose<T extends object> = Omit<Record<string, unknown>, keyof T> & T;
