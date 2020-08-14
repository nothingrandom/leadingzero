/** 
 * @param num The number which will be padded by '0' or the specified character.
 * 
 * @param zero The length of the string that it will return. This can be a number or a string with a number.
 * @default zero '2'
 * 
 * @param char The character that is used to fill empty digits. 
 * @default char '0'
 * 
 * @returns A string which is padded with zeros, or the specified char.
*/
declare function leadingzero(num: number | string, zero?: number | string, char?: string): string;

export = leadingzero;