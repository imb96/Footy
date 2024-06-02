import { describe, expect, it } from 'vitest'
import formatDate from './formatDate'

describe('formDate', () => {
  it('Date 객체를 월.일 요일 시간 문자열로 변환하여 반환한다.', () => {
    let testDate = new Date('Sun Jun 02 2024 04:00:00 GMT+0900')
    expect(formatDate(testDate)).toBe('06.02 일 04:00')
  })
})
