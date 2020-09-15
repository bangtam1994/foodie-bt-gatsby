import styled from "./index"
import colors from "./colors"
import { mediaQueries } from "./breakpoints"

export const Line = styled.div(
  {
    width: 26,
    height: 6,
    marginRight: 12,
    marginTop: 14,
    borderRadius: 50,
    [mediaQueries.phoneOnly]: {
      marginTop: 12,
    },
  },
  ({ purple }) => ({
    backgroundColor: purple ? colors.purple : colors.yellow,
  })
)

export const ThinLine = styled.div({
  width: 100,
  height: 2,
  backgroundColor: colors.red,
})
