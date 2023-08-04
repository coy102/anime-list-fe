export const AUTOHIDE_DURATION_SNACKBAR = 5000

export const COVER_SIZE = {
  HEIGHT: 265,
  WIDTH: 167,
}

export const DEFAULT_ITEM_COLLECTIONS = {
  createdDate: '2023-08-03 16:00',
  id: 'default-id',
  isDefault: true,
  items: [] as any,
  name: 'Favorite Collections',
}

export const DEFAULT_COLLECTIONS = [DEFAULT_ITEM_COLLECTIONS]

export type Collections = typeof DEFAULT_ITEM_COLLECTIONS

export const CHARACTER_ONLY_PATTERN = /^[A-Za-z0-9\s]+$/
