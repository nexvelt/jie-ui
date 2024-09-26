import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
} from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

/**
 * Whether to enable the scroll of the dialog content.
 *
 * @default false
 */
type scrollable = boolean
type showClose = boolean

export interface NDialogProps extends DialogRootProps {
  title?: string
  description?: string
  scrollable?: scrollable
  showClose?: showClose

  // sub-components
  _dialogTitle?: NDialogTitleProps
  _dialogDescription?: NDialogDescriptionProps
  _dialogHeader?: NDialogHeaderProps
  _dialogFooter?: NDialogFooterProps
  _dialogOverlay?: NDialogOverlayProps
  _dialogContent?: NDialogContentProps
  _dialogClose?: NDialogCloseProps

  una?: NDialogUnaProps
}

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NDialogTitleProps extends DialogTitleProps, BaseExtensions {
  una?: NDialogUnaProps['dialogTitle']
}

export interface NDialogDescriptionProps extends DialogDescriptionProps, BaseExtensions {
  una?: NDialogUnaProps['dialogDescription']
}

export interface NDialogContentProps extends DialogContentProps, BaseExtensions, Pick<NDialogProps, '_dialogOverlay' | '_dialogClose'> {
  showClose?: showClose

  una?: NDialogUnaProps['dialogContent']
}

export interface NDialogOverlayProps extends BaseExtensions {
  scrollable?: scrollable
  una?: NDialogUnaProps['dialogOverlay']
}

export interface NDialogHeaderProps extends BaseExtensions {
  una?: NDialogUnaProps['dialogHeader']
}

export interface NDialogFooterProps extends BaseExtensions {
  una?: NDialogUnaProps['dialogFooter']
}

export interface NDialogCloseProps extends DialogCloseProps, NButtonProps {
}

export interface NDialogUnaProps {
  dialogTitle?: HTMLAttributes['class']
  dialogDescription?: HTMLAttributes['class']
  dialogHeader?: HTMLAttributes['class']
  dialogFooter?: HTMLAttributes['class']
  dialogOverlay?: HTMLAttributes['class']
  dialogContent?: HTMLAttributes['class']
}
