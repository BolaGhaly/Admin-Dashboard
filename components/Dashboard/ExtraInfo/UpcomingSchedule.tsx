import Image from "next/image";
import Icon, { upcomingScheduleData } from "../../../utils/dashboardUtils";
import styles from "../dashboard.module.scss";

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingSchedule}>
      <h2>Upcoming Schedule</h2>
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
                <p>Attendance:</p>
                <div>
                  {el.attendance.map((teamMember, idx) => (
                    <Image
                      key={idx}
                      src={teamMember}
                      width={100}
                      height={100}
                      alt=""
                      unoptimized
                    />
                  ))}
                </div>
                {el.moreAttendance > 0 ? (
                  <p>+ {el.moreAttendance} people</p>
                ) : null}
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
