export declare class ParamDefaultTrack<T = unknown> {
  readonly #isUseDefault: boolean;

  /**
   * 设置函数默认参数并标记状态
   * @param val 默认参数值
   */
  setDefault(val: T): T;

  /**
   * 检测是否使用默认值
   */
  isDefault(): boolean;

  /**
   * 重置状态，用于下一次函数调用
   */
  reset(): void;
}

export default ParamDefaultTrack;