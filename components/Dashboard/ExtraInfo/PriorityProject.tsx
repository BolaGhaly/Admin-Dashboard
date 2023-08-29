import Image from "next/image";
import Icon from "../../../utils/dashboardUtils";
import styles from "../dashboard.module.scss";
import teamMember1 from "/assets/teamProfiles/teamMember1.webp";

const PriorityProject = () => {
  return (
    <div className={styles.priorityProject}>
      <div>
        <div>
          <Icon name="alarm" />
          <h2>Priority Project</h2>
        </div>
      </div>
      <div>
        <h3>Project Name</h3>
        <div>
          <p>Performance Optimization</p>
          <div>
            <Icon name="clock" />
            <p>In Progress</p>
          </div>
        </div>
        <span />
      </div>
      <div>
        <h3>Lead</h3>
        <div>
          <Image
            src={teamMember1}
            width={100}
            height={100}
            alt="Mia's Profile Image"
            unoptimized
          />
          <p>Mia Johnson</p>
        </div>
        <span />
      </div>
      <div>
        <h3>Deadline</h3>
        <div>
          <Icon name="calendar" />
          <p>Sep 20, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PriorityProject;
