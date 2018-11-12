export const HOME_LIST = 'home_list';

export const home_list = (List) => {
  return {
    type: HOME_LIST,
    ...List
  }
}