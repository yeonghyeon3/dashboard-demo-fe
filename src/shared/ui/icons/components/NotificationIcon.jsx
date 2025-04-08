import { BADGE_COLORS, ICON_SIZES, ICON_TYPES } from "../constants";
import { IconBase } from "../IconBase";


const NotificationIcon = ({
  count
}, props) => {
  return (
    <IconBase
      type={ICON_TYPES.BELL}
      size={ICON_SIZES.MD}
      withBadge={count > 0}
      badgeContent={count > 99 ? "99+" : count}
      badgeColor={BADGE_COLORS.DANGER}
      {...props}
    />
  )
}

export default NotificationIcon