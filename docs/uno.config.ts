import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
