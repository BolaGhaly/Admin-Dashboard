import Icon, { upcomingScheduleData } from "../../../utils/dashboardUtils";
import styles from "../dashboard.module.scss";

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingSchedule}>
      <div>
        <Icon name="schedule" />
        <h2>Upcoming Schedule</h2>
      </div>
      <div>
        {upcomingScheduleData.map((el, idx) => (
          <div key={idx}>
            <div>
              <div>
                <p>{el.date}</p>
                <p>{el.title}</p>
              </div>
              <div>
                <p>{el.time}</p>
                <p>Attendance: {el.attendance}</p>
              </div>
            </div>
            <Icon name="arrowRight" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
