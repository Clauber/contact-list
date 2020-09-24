export const sortingIDs = ['CREATED_BY', 'FIRST_NAME'] as const;

export type SortingID = typeof sortingIDs[number];

export const sortingLabels: Record<SortingID, string> = {
  CREATED_BY: 'Created By',
  FIRST_NAME: 'First Name',
} as const;
