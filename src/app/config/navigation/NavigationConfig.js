import MenuIcon from '../../../shared/ui/icons/components/MenuIcon'
// 각 섹션별 네비게이션 설정
export const NAVIGATION_CONFIG = {
  dashboards: {
    title: "대시보드",
    items: [
      {
        label: '대시보드 홈',
        // icon: 'HomeIcon',
        path: '/',
        children: [
          {
            label: '프로젝트 현황',
            path: 'dashboards/projects/overview',
            children: [
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
              {
                label: '프로젝트 상세',
                path: 'dashboards/projects/details'
              },
            ]
            
          },
          {
            label: '프로젝트 예상',
            path: 'dashboards/projects/overview'
          }
        ]
      },
      {
        label: '통계',
        // icon: 'ChartIcon',
        path: '/dashboards/stats'
      }
    ]
  },
  
  projects: {
    items: [
      {
        label: '프로젝트 목록',
        // icon: 'ProjectIcon',
        path: '/projects'
      },
      {
        label: '작업 관리',
        // icon: 'TaskIcon',
        children: [
          {
            label: '내 작업',
            path: '/projects/tasks/my'
          },
          {
            label: '팀 작업',
            path: '/projects/tasks/team'
          }
        ]
      }
    ]
  },
  
  settings: {
    items: [
      {
        label: '기본 설정',
        icon: 'SettingsIcon',
        path: '/settings'
      },
      {
        label: '사용자 관리',
        icon: 'UsersIcon',
        path: '/settings/users'
      }
    ]
  }
};