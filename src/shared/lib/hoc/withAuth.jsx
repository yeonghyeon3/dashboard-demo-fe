export const withAuth = (WrappedComponent, requiredRole = null) => {
  // HOC가 반환하는 새로운 컴포넌트 (인증 로직을 포함)
  return function WithAuthComponent(props) {
    // 현재 사용자의 인증 상태와 정보를 가져옴
    const { user, isLoading } = useAuth();
    // 라우팅을 위한 Next.js router 인스턴스
    const router = useRouter();

    // 인증 정보 로딩 중일 때 로딩 표시
    if (isLoading) {
      return <div>Loading...</div>;
    }

    // 사용자가 로그인하지 않은 경우 로그인 페이지로 리다이렉트
    if (!user) {
      router.push('/login');
      return null;
    }

    // 특정 역할이 필요한 경우, 사용자의 역할 확인
    if (requiredRole && user.role !== requiredRole) {
      router.push('/unauthorized');
      return null;
    }

    // 모든 인증/권한 체크를 통과하면 원래 컴포넌트 렌더링
    return <WrappedComponent {...props} />;
  };
};