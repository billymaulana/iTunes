import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    [/^f-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    [/^max-w-(\d+)$/, ([, d]) => ({ 'max-width': `${d}px` })],
    [/^bg-gradient-(\d+)$/, ([,d]) => ({ 'background-image': `linear-gradient(${d}deg, #712bda, #a45deb 100%)` })],
  ],
  shortcuts: [
    ['container-fluid', 'max-w-[100%] ml-[15px]'],
    ['row', 'flex flex-wrap'],
    ['col-auto', 'flex-[0_0_auto] w-auto'],
    ['col-1', 'flex-[0_0_auto] w-[8.3333333333%]'],
    ['col-2', 'flex-[0_0_auto] w-[16.6666666667%]'],
    ['col-3', 'flex-[0_0_auto] w-[25%]'],
    ['col-4', 'flex-[0_0_auto] w-[33.3333333333%]'],
    ['col-5', 'flex-[0_0_auto] w-[41.6666666667%]'],
    ['col-6', 'flex-[0_0_auto] w-[50%]'],
    ['col-7', 'flex-[0_0_auto] w-[58.3333333333%]'],
    ['col-8', 'flex-[0_0_auto] w-[66.6666666667%]'],
    ['col-9', 'flex-[0_0_auto] w-[75%]'],
    ['col-10', 'flex-[0_0_auto] w-[83.3333333333%]'],
    ['col-11', 'flex-[0_0_auto] w-[91.6666666667%]'],
    ['col-12', 'flex-[0_0_auto] w-[100%]'],
    ['h-stack', 'flex items-center justify-center min-h-screen'],
    ['font-logo', 'font-varela font-bold tracking-[3.5px]'],
    ['form-control', 'bg-gray-50 placeholder-gray-400 text-gray-600 shadow-none text-sm text-center outline-0 rounded-full focus:ring-gray-400 font-semibold focus:text-gray-600 block w-full p-2'],
    ['btn-primary', 'focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 font-bold'],
  ],
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        ph: () => import('@iconify-json/ph/icons.json').then(i => i.default),
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        varela: 'Varela Round',
      },
    }),
  ],
  theme: {
    colors: {
      darkPurple: '#712bda',
      lightPurple: '#a45deb',
      lightGray: '#f8fafc',
      dimgrey: '#64748b',
    },
    container: {
      center: true,
    },
    breakpoints: {
      'xs': '1px',
      'sm': '320px',
      'md': '768px',
      'lg': '996px',
      'xl': '1440px',
      '2xl': '1536px',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
