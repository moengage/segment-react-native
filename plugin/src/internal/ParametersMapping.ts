/**
 * Segment SDK to MoEngage SDK pre-defined Mapped attributes
 * @since 1.0.0
 */
export const traitsMap: { [key: string]: string } = {
  anonymousId: 'USER_ATTRIBUTE_SEGMENT_ID',
  email: 'USER_ATTRIBUTE_USER_EMAIL',
  userId: 'USER_ATTRIBUTE_UNIQUE_ID',
  name: 'USER_ATTRIBUTE_USER_NAME',
  phone: 'USER_ATTRIBUTE_USER_MOBILE',
  firstName: 'USER_ATTRIBUTE_USER_FIRST_NAME',
  lastName: 'USER_ATTRIBUTE_USER_LAST_NAME',
  gender: 'USER_ATTRIBUTE_USER_GENDER',
  birthday: 'USER_ATTRIBUTE_USER_BDAY'
};

/**
 * Transform the JSON Object based on provided KeyMap 
 * Notes: This is made for flat Object. Nested Object key will not changed.
 * 
 * @param keyMap - map from which the key should transfrom 
 * @param json - Json for which key should transfrom 
 * @returns Mapped key-value
 * @since 1.0.0
 */
export const transformMap = (
  keyMap: { [key: string]: string },
  json: Record<string, unknown>
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};

  for (const key in json) {
    const newKey = keyMap[key] ?? key;
    result[newKey] = json[key];
  }

  return result;
};