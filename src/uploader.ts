export default class Uploader {
  setting: object
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
    this.init()
  }

  private init() {}
}
