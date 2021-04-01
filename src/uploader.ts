interface Setting {
  url: string
  wrapper: HTMLElement
  multiple: boolean
  limit: number
  autoUpload: boolean
  accept: string
  headers: object
  data: object
  withCredentials: boolean
}

/**
 * base uploader definition
 * @author liwq
 */
export default class Uploader {
  setting: Setting
  uploadFiles: File[]
  input?: HTMLInputElement
  changeHandler: Function
  /**
   * constructor
   * @param option
   */
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
    this.uploadFiles = []
    this.init()
  }

  private init() {
    // this.uploadFiles = []
    this.input = this.initInputElement(this.setting)
    this.changeHandler = (e: Event) => {
      const files = (e.target as HTMLInputElement).files
      const ret = this.callHook('choose', files)
      // if (ret !== false) {
      //   this.loadFiles(ret || files)
      // }
    }
    // this.input.addEventListener('change', this.changeHandler)
    this.setting.wrapper.appendChild(this.input)
  }

  private initInputElement(setting): HTMLInputElement {
    const el = document.createElement('input')
    Object.entries({
      type: 'file',
      accept: setting.accept,
      multiple: setting.multiple,
      hidden: true,
    }).forEach(([key, value]) => {
      el[key] = value
    })
    return el
  }

  on(evt: Event) {}
  private callHook(evt: string, files: FileList) {}

  chooseFile() {}
  loadFiles(files: FileList) {}
  removeFile(file: File) {}
  clear() {}

  upload(file: File) {}
  private post(file: File) {}
}
