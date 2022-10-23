/** */
export interface IInputNumber {
    attrs: {
        /** */
        size: string
        /** */
        step: string | number
    }
    listeners: {
        /** */
        change: {
            (val: number | string): void,
        },
        /** */
        blue?: {},
        /** */
        focust?: {},
        /** */
        pressEnter?: {
            (value: number, info: { offset: number, type: 'up' | 'down' }): void
        },
    }
}

/** */
export interface ISwitch<T = string> {
    // checked: checkedValue
    checked: T
    attrs: {
        /** */
        autofocus: boolean
        /** */
        disabled: boolean
        /** */
        loading: boolean
        /** */
        size: string
    }
    listeners: {
        /** */
        change: {
            (checked: boolean | string | number, event: Event): void
        },
        /** */
        click: {
            (checked: boolean | string | number, event: Event): void
        },
    }
}

/** */
export interface IRate<T = number>{
    value: T
    attrs: {
        /** */
        count: number
        /** */
        disabled: boolean
    }
    listeners: {
        /** */
        blur: {}
        /** */
        change: {}
        /** */
        focus?: {}
        /** */
        hoverChange?: {}        
        /** */
        keydown?: {}
    }

}


/** */
export interface IPopover{
    visible: boolean
attrs: {
  /** */
  title: string
  /** */
  content: string
  /** */
  trigger: "hover"| "focus" | "click"
}


  
}