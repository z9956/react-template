/**
 * 获取类型
 * @param { unknown } value
 * */

export const getType = (value: unknown) => {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};
