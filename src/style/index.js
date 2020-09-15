import emotionStyled from "@emotion/styled"

/**
 * But it export a correctly typed 'styled' function so TS can give you autocomplete
 * on props.theme
 */

/**
 * @type import('@emotion/styled').CreateStyled<AppTheme>
 */
const styled = emotionStyled

export default styled
