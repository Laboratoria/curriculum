test('should not change the value of the original string', () => {
  const lesson = "immutability"

  expect(lesson.toUpperCase()).toBe("IMMUTABILITY")
  expect(lesson).toBe("immutability")
})

