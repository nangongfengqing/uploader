export default class Uploader {
  constructor(option = {}) {
    const defaultOption = {
      url: '',
      wrapper: document.body,
      multiple: false,
      limit: -1,
      autoUpload: true,
      accept: '*',
      headers: {},
      data: {},
      withCredentials: false,
    }
    this.setting = Object.assign(defaultOption, option)
    this._init()
  }

  _init() {}
}
