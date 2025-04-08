export const withAnalytics = (WrappedComponent, componentName) => {
  // HOC가 반환하는 새로운 컴포넌트 (분석 로직을 포함)
  return function WithAnalyticsComponent(props) {
    // 컴포넌트 라이프사이클 이벤트 추적
    useEffect(() => {
      // 컴포넌트 마운트 시 뷰 이벤트 로깅
      analytics.logEvent('component_view', {
        component: componentName,
        timestamp: new Date().toISOString()
      });

      // 컴포넌트 언마운트 시 실행될 클린업 함수
      return () => {
        // 컴포넌트 종료 시 이벤트 로깅
        analytics.logEvent('component_exit', {
          component: componentName,
          duration: 'time_spent_calculation'
        });
      };
    }, []);

    // 원래 컴포넌트 렌더링
    return <WrappedComponent {...props} />;
  };
};