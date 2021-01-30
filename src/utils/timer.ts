//存放所有计时器
export const Timer = {};

type K = keyof typeof Timer;

/**
 * 清除单个Timer
 * @param { string } name
 * @param { number } type 1 setTimeout, 2 setInterval
 * */
export const clearTimer = (name: string, type = 1) => {
  try {
    const clear = type === 1 ? clearInterval : clearTimeout;

    if (!Timer[name as K]) return;
      clear(Timer[name as K]);
      delete Timer[name as K];
  } catch (e) {

  }
};

/**
 * 清除所有Timer
 * */
export const clearAllTimer = () => {
  const timerList = Object.keys(Timer);
  if (timerList.length) {
    Object.keys(Timer).map(time => {
      clearTimer(time);
    })
  }
};