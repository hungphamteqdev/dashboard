export type GetExpenseResponse = {
    data: {label: string, value: string}[],
    id: string,
    type: string
} | null