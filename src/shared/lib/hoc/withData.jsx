export const withData = (WrappedComponent, fetchData) => {
  // HOC가 반환하는 새로운 컴포넌트 (데이터 페칭 로직을 포함)
  return function WithDataComponent(props) {
    // 데이터, 로딩 상태, 에러 상태를 관리하는 state
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 컴포넌트 마운트 시 데이터 로딩
    useEffect(() => {
      // 비동기 데이터 로딩 함수
      const loadData = async () => {
        try {
          // fetchData 함수 실행하여 데이터 가져오기
          const result = await fetchData();
          setData(result);
        } catch (err) {
          // 에러 발생 시 에러 상태 저장
          setError(err);
        } finally {
          // 성공/실패 여부와 관계없이 로딩 상태 종료
          setLoading(false);
        }
      };

      loadData();
    }, []);

    // 데이터 로딩 중일 때 로딩 표시
    if (loading) return <div>Loading...</div>;
    // 에러 발생 시 에러 메시지 표시
    if (error) return <div>Error: {error.message}</div>;

    // 데이터 로딩이 완료되면 원래 컴포넌트에 데이터 전달
    return <WrappedComponent data={data} {...props} />;
  };
};