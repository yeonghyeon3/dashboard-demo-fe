import { React } from 'react';
import { DashboardGrid } from '../widgets/dashboard/DashboardGrid';
import { CARD_SIZES } from '@/shared/ui/Card/constants';
// import styles from './Dashboard.module.css';
import styles from '@/pages/Dashboard.module.css';
import grid from '../widgets/dashboard/DashboardGrid.module.css';
import Table from '@/shared/ui/Table/Table';

// import { Card } from '../shared/ui/Card/Card';
import { Card } from '@/shared/ui/Card/Card';

const Dashboard = () => {

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: '이름' },
    { key: 'email', label: '이메일' },
    { key: 'status', label: '상태' }
  ];

  const data = [
    { id: 1, name: '홍길동', email: 'hong@example.com', status: '활성' },
    { id: 2, name: '김철수', email: 'kim@example.com', status: '대기' },
    { id: 3, name: '이영희', email: 'lee@example.com', status: '비활성' }
  ];


  return (
    <div className={styles.dashboardPage}>
      <DashboardGrid layout='Wide'>
          <Card className={grid.gridWideItem} size={CARD_SIZES.DEFAULT}>
            111
          </Card>
          <Card className={grid.gridItem} size={CARD_SIZES.DEFAULT}>
          </Card>
          <Card className={grid.gridWideItem} size={CARD_SIZES.DEFAULT}>
          </Card>


        {/* <Card className={grid.gridWideItem} size={CARD_SIZES.DEFAULT}>
          <ProjectDetail/>
        </Card> */}
      </DashboardGrid>

      <Card>
        <Table
          headers={headers}
          data={data}
          isSelectable={true}
          isStriped={true}
        />
      </Card>
    </div>
  );
};

export default Dashboard;