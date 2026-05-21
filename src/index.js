/**
 * 函数默认参数状态管理器
 * 精准区分：用户传入值 / 自动默认值
 */
export class ParamDefaultTrack {
  #isUseDefault = false

  /**
   * 声明默认值，标记为默认状态
   * @param {*} val 默认参数值
   * @returns {*}
   */
  setDefault(val) {
    this.#isUseDefault = true
    return val
  }

  /**
   * 判断当前参数是否为默认值
   * @returns {boolean} true=使用默认值 false=用户手动传入
   */
  isDefault() {
    return this.#isUseDefault
  }

  /**
   * 调用完毕重置状态，避免上下文污染
   */
  reset() {
    this.#isUseDefault = false
  }
}

// 默认导出
export default ParamDefaultTrack