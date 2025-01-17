import type { PluginOption } from 'vite'

type RenameOptions = {
  oldName: string
  newName: string
}

const renameHtmlPlugin = (options: RenameOptions[]): PluginOption => {
  if (options.length == 0) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const option of options) {
        const file = bundle[option.oldName]
        if (file) {
          file.fileName = option.newName
        }
      }
    },
  }
}

export default renameHtmlPlugin