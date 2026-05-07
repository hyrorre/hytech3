/**
 * 日付を「2024-05-08」のようにフォーマットします。
 * @param date フォーマットする日付
 * @returns フォーマットされた文字列、または null
 */
export function formatDate(date: Date | null | undefined): string | null {
  if (!date) return null
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
