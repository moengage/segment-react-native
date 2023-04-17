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
  
export const transformMap: { [key: string]: (value: unknown) => unknown } = {
  event: (value: unknown) => {
    if (typeof value === 'string') {
      if (value in traitsMap) {
        return traitsMap[value];
      }
    }
    return value;
  },
};