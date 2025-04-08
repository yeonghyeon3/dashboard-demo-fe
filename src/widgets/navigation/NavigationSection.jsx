import { Navigation, NavigationItem} from "./ui/index";
import { NAVIGATION_CONFIG } from '../../app/config/navigation/NavigationConfig'

import { useLocation } from "react-router-dom";

const NavigationSection = () => {
  const location = useLocation();

  // 현재 경로에 따라 섹션 결정
  const getCurrentSection = (path) => {
    console.log(path)
    if (path.startsWith('/')) return 'dashboards';
    if (path.startsWith('/projects')) return 'projects';
    if (path.startsWith('/settings')) return 'settings';
    return 'dashboards'; // 기본값
  };

  const currentSection = getCurrentSection(location.pathname);

  const config = NAVIGATION_CONFIG[currentSection]
  if (!config) return null;

  // 재귀적으로 아이템 렌더링
  const renderNavigationItems = (items, depth = 0) => {
    return items.map(item => (
      <NavigationItem
        icon={item.icon}
        label={item.label}
        to={item.path}
        depth={depth}
      >
        {item.children && renderNavigationItems(item.children, depth + 1)}
      </NavigationItem>
    ));
  };

  return (
    <Navigation
      title={"대시보드"}
    >
      {renderNavigationItems(config.items)}
    </Navigation>
  )
}

export default NavigationSection;